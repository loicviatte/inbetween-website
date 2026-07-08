// Interactive controller for "The App" demo. Adapted from the design system's
// app-demo.js (vanilla IIFE) into a mountable init that returns a teardown, so
// it's safe under React StrictMode / HMR. Logic is 1:1 with the original;
// the only changes are: wrapped as initAppDemo(), all listeners use an
// AbortController signal, and timers/rAF are tracked and cleared on teardown.
/* eslint-disable @typescript-eslint/no-explicit-any */

export function initAppDemo(): () => void {
  const screen = document.getElementById("adScreen");
  if (!screen) return () => {};

  const ac = new AbortController();
  const signal = ac.signal;
  const opts = { signal } as AddEventListenerOptions;
  const passive = { passive: true, signal } as AddEventListenerOptions;

  const timeouts = new Set<ReturnType<typeof setTimeout>>();
  const setT = (fn: () => void, ms: number) => {
    const id = setTimeout(() => {
      timeouts.delete(id);
      fn();
    }, ms);
    timeouts.add(id);
    return id;
  };
  let cInt: ReturnType<typeof setInterval> | null = null;
  let holdRaf: number | null = null;
  let spyRaf: number | null = null;

  const $ = (id: string) => document.getElementById(id);
  const all = (sel: string, root?: ParentNode) =>
    Array.prototype.slice.call((root || document).querySelectorAll(sel)) as HTMLElement[];

  // ---------- toast ----------
  let toastT: ReturnType<typeof setTimeout> | null = null;
  function toast(txt: string) {
    const tt = $("adToastTxt");
    if (tt) tt.textContent = txt;
    const t = $("adToast");
    if (!t) return;
    t.classList.add("show");
    if (toastT) clearTimeout(toastT);
    toastT = setTimeout(() => t.classList.remove("show"), 2600);
  }

  // ---------- screen routing ----------
  const pscrs = all(".pscr", screen);
  const tabs = all(".app-tab");
  const stage = $("adStage");
  let current = "home";
  let curBeat: HTMLElement | null = null;

  function setFrags(key: string) {
    if (!stage) return;
    stage.dataset.active = key;
    all(".frag", stage).forEach((f) => {
      f.classList.toggle("show", (f.dataset as any)["for"] === key);
    });
  }
  function goTo(name: string, viaBeat?: boolean) {
    if (name !== current) {
      current = name;
      pscrs.forEach((s) => s.classList.toggle("is-on", s.dataset.pscreen === name));
      if (name === "session") startClock();
      else stopClock();
      if (name === "profile") runReady();
      else clearReady();
    }
    if (!viaBeat) {
      let match: HTMLElement | null = null;
      tabs.forEach((t) => {
        if (!match && !t.closest("[hidden]") && t.dataset.goto === name) match = t;
      });
      curBeat = match;
      tabs.forEach((t) => t.classList.toggle("is-active", t === match));
      setFrags(name);
    }
  }
  function setBeat(t: HTMLElement) {
    if (t === curBeat) return;
    curBeat = t;
    tabs.forEach((x) => x.classList.toggle("is-active", x === t));
    setFrags(t.dataset.frag || t.dataset.goto || "");
    if (t.dataset.sdopen) openSdTab(t.dataset.sdopen);
    if (t.dataset.ask) ask();
    else if (t.dataset.goto === "detail") resetDetail();
    goTo(t.dataset.goto || "", true);
  }

  // ---------- profile: readiness climbs to 100% on arrival ----------
  let readyTimers: ReturnType<typeof setTimeout>[] = [];
  function clearReady() {
    readyTimers.forEach((t) => clearTimeout(t));
    readyTimers = [];
  }
  function runReady() {
    clearReady();
    const set = (id: string, txt: string) => { const e = $(id); if (e) e.textContent = txt; };
    const ring = (id: string, p: number) => { const e = $(id); if (e) e.style.setProperty("--p", String(p)); };
    set("pfPct", "60%"); ring("pfPctRing", 60);
    set("pfHeel", "2/3"); ring("pfHeelRing", 66);
    set("pfSide", "1/2"); ring("pfSideRing", 50);
    set("pfTitle", "Almost ready for your next private.");
    set("pfMsg", "Train your focus points from the last lesson, ~14 min to go.");
    readyTimers.push(setTimeout(() => { set("pfHeel", "3/3"); ring("pfHeelRing", 100); }, 750));
    readyTimers.push(setTimeout(() => { set("pfSide", "2/2"); ring("pfSideRing", 100); }, 1250));
    readyTimers.push(setTimeout(() => {
      const t0 = performance.now();
      const step = () => {
        const p = Math.min((performance.now() - t0) / 900, 1);
        const e = 1 - Math.pow(1 - p, 3);
        const v = Math.round(60 + 40 * e);
        set("pfPct", v + "%"); ring("pfPctRing", v);
        if (p < 1) readyTimers.push(setTimeout(step, 16));
        else {
          set("pfTitle", "Ready for your next private lesson ✓");
          set("pfMsg", "Both focus points trained. See you on the floor.");
        }
      };
      step();
    }, 1750));
  }
  if (stage) all('.frag[data-for="home"]', stage).forEach((f) => f.classList.add("show"));

  // ---------- scroll-spy ----------
  const spyMq = window.matchMedia("(min-width: 981px)");
  let spyTick = false;
  let lastSpy = 0;
  function spy() {
    spyTick = false;
    const wide = spyMq.matches;
    const rail = document.querySelector(".app-tabs:not([hidden])");
    if (!rail) return;
    const beats = all(".app-tab", rail);
    if (!beats.length) return;
    if (!wide) {
      const demo = document.querySelector(".app-demo");
      if (!demo) return;
      const dr = demo.getBoundingClientRect();
      const track = dr.height - window.innerHeight;
      if (track <= 0) return;
      const progressed = Math.min(Math.max(-dr.top, 0), track);
      let idx = Math.floor((progressed / track) * beats.length);
      if (idx > beats.length - 1) idx = beats.length - 1;
      setBeat(beats[idx]);
      return;
    }
    const railRect = rail.getBoundingClientRect();
    const ref = window.innerHeight / 2;
    if (railRect.top > ref || railRect.bottom < ref) return;
    let best: HTMLElement | null = null;
    let bestD = Infinity;
    beats.forEach((t) => {
      const r = t.getBoundingClientRect();
      const d = Math.abs(r.top + r.height / 2 - ref);
      if (d < bestD) { bestD = d; best = t; }
    });
    if (best) setBeat(best);
  }
  function scheduleSpy() {
    const now = Date.now();
    if (now - lastSpy > 90) { lastSpy = now; spy(); }
    if (!spyTick) {
      spyTick = true;
      spyRaf = requestAnimationFrame(() => { spyTick = false; lastSpy = Date.now(); spy(); });
    }
  }
  window.addEventListener("scroll", scheduleSpy, passive);
  window.addEventListener("resize", scheduleSpy, passive);
  tabs.forEach((t) => {
    t.addEventListener("click", () => {
      if (!spyMq.matches) return;
      setBeat(t);
      const r = t.getBoundingClientRect();
      window.scrollTo({ top: window.scrollY + r.top + r.height / 2 - window.innerHeight / 2, behavior: "smooth" });
    }, opts);
  });
  all("[data-goto]", screen).forEach((b) => {
    b.addEventListener("click", () => goTo(b.dataset.goto || ""), opts);
  });

  // ---------- dancer / coach view toggle ----------
  const vBtns = all("[data-appview]");
  vBtns.forEach((b) => {
    b.addEventListener("click", () => {
      vBtns.forEach((x) => x.classList.toggle("on", x === b));
      const coach = b.dataset.appview === "coach";
      const ts = $("tabsStudent"); const tc = $("tabsCoach");
      if (ts) (ts as any).hidden = coach;
      if (tc) (tc as any).hidden = !coach;
      goTo(coach ? "c-dash" : "home");
    }, opts);
  });

  // ---------- Train home: solo <-> couple swap ----------
  all("[data-swap]", screen).forEach((b) => {
    b.addEventListener("click", () => {
      const mode = b.dataset.swap;
      const show = (id: string, on: boolean) => { const e = $(id); if (e) (e as any).hidden = !on; };
      show("homeSolo", mode === "solo");
      show("homeCouple", mode === "couple");
      show("readySolo", mode === "solo");
      show("readyCouple", mode === "couple");
    }, opts);
  });

  // ---------- Ask Assistant ----------
  let asked = false;
  let sentToCoach = false;
  const chatInitHTML = $("adChat") ? ($("adChat") as HTMLElement).innerHTML : "";
  function resetDetail() {
    const chat = $("adChat");
    if (!chat) return;
    const dcard = chat.closest(".dt-card");
    if (dcard) dcard.classList.remove("open");
    chat.innerHTML = chatInitHTML;
    asked = false;
    sentToCoach = false;
  }
  function ask() {
    if (asked) return;
    asked = true;
    const chat = $("adChat");
    if (!chat) return;
    const dcard = chat.closest(".dt-card");
    if (dcard) dcard.classList.add("open");
    const q = document.createElement("div");
    q.className = "bub q";
    q.textContent = "What should I do with my hip on the 3rd count?";
    chat.appendChild(q);
    const a = document.createElement("div");
    a.className = "bub a typing";
    a.textContent = "· · ·";
    chat.appendChild(a);
    setT(() => {
      a.classList.remove("typing");
      a.textContent = "I don't have that in your coach's notes, but you can send the question to your coach.";
      const act = document.createElement("div");
      act.className = "dt-actions";
      act.innerHTML =
        '<button class="dt-send" id="adToCoach" type="button">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z"></path></svg>' +
        "Send to coach</button>" +
        '<button class="dt-notnow" id="adNotNow" type="button">Not now</button>';
      chat.appendChild(act);
      const toCoach = $("adToCoach");
      if (toCoach) toCoach.addEventListener("click", () => {
        if (sentToCoach) return;
        sentToCoach = true;
        act.innerHTML = '<span class="dt-sentok">✓ Sent to David, the answer will land right here.</span>';
        toast("Question sent to your coach");
        const qc = $("adQCount"); if (qc) qc.textContent = "3";
      }, opts);
      const notNow = $("adNotNow");
      if (notNow) notNow.addEventListener("click", () => act.remove(), opts);
    }, 950);
  }
  const bind = (id: string, fn: () => void) => { const e = $(id); if (e) e.addEventListener("click", fn, opts); };
  bind("adAsk", ask);
  bind("adSend", ask);
  bind("adAskBtn", ask);
  bind("adReadMore", ask);

  // ---------- time wheel ----------
  let mins = 15;
  const wheelBtns = all("#adWheel button");
  wheelBtns.forEach((b) => {
    b.addEventListener("click", () => {
      mins = +(b.dataset.min || 15);
      wheelBtns.forEach((x) => x.classList.toggle("sel", x === b));
    }, opts);
  });

  // ---------- session countdown ----------
  let remain = 900;
  let total = 900;
  let paused = false;
  function renderClock() {
    const c = $("adClock");
    if (c) c.textContent = Math.floor(remain / 60) + ":" + ("0" + (remain % 60)).slice(-2);
    const bar = $("adBar");
    if (bar) bar.style.width = (1 - remain / total) * 100 + "%";
  }
  function startClock() {
    stopClock();
    total = mins * 60;
    remain = total;
    paused = false;
    const p = $("adPause");
    if (p) p.innerHTML = "&#10074;&#10074;&nbsp;&nbsp;Pause";
    renderClock();
    cInt = setInterval(() => {
      if (paused) return;
      remain = Math.max(0, remain - 1);
      renderClock();
      if (!remain) stopClock();
    }, 1000);
  }
  function stopClock() {
    if (cInt) { clearInterval(cInt); cInt = null; }
  }
  const pauseBtn = $("adPause");
  if (pauseBtn) pauseBtn.addEventListener("click", function (this: HTMLElement) {
    paused = !paused;
    this.innerHTML = paused ? "&#9654;&nbsp;&nbsp;Resume" : "&#10074;&#10074;&nbsp;&nbsp;Pause";
  }, opts);

  // ---------- hold to end session ----------
  const endBtn = $("adEnd");
  const fill = endBtn ? (endBtn.querySelector("i") as HTMLElement | null) : null;
  let holdStart = 0;
  function holdStep() {
    const p = Math.min((performance.now() - holdStart) / 850, 1);
    if (fill) fill.style.width = p * 100 + "%";
    if (p >= 1) { holdCancel(); endSession(); return; }
    holdRaf = requestAnimationFrame(holdStep);
  }
  function holdCancel() {
    if (holdRaf) cancelAnimationFrame(holdRaf);
    holdRaf = null;
    if (fill) fill.style.width = "0%";
  }
  if (endBtn) {
    endBtn.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      holdStart = performance.now();
      holdStep();
    }, opts);
    (["pointerup", "pointerleave", "pointercancel"] as const).forEach((ev) =>
      endBtn.addEventListener(ev, holdCancel, opts),
    );
  }

  // ---------- finishing a session updates the whole app ----------
  let trainedOnce = false;
  function endSession() {
    stopClock();
    goTo("home");
    toast("Heel Lead Recovery trained ✓");
    if (trainedOnce) return;
    trainedOnce = true;
    const set = (id: string, txt: string) => { const e = $(id); if (e) e.textContent = txt; };
    const ring = (id: string, p: number) => { const e = $(id); if (e) e.style.setProperty("--p", String(p)); };
    set("adTrainedCount", "3/3");
    set("adReadyCount", "1/2");
    set("adReadyHeel", "3/3"); ring("adReadyHeelRing", 100);
    set("pfHeel", "3/3"); ring("pfHeelRing", 100);
    set("pfPct", "80%"); ring("pfPctRing", 80);
    set("pfMsg", "Nearly there, ~6 min to go.");
  }

  // ---------- Profile: solo / couple readiness toggle ----------
  const pfBtns = all("[data-pf]", screen);
  pfBtns.forEach((b) => {
    b.addEventListener("click", () => {
      pfBtns.forEach((x) => x.classList.toggle("on", x === b));
      const solo = $("pfSolo"); const couple = $("pfCouple");
      if (solo) (solo as any).hidden = b.dataset.pf !== "solo";
      if (couple) (couple as any).hidden = b.dataset.pf !== "couple";
    }, opts);
  });

  // ---------- Profile: questions expander ----------
  const qs = $("adQs");
  if (qs) qs.addEventListener("click", function (this: HTMLElement) {
    this.classList.toggle("open");
    const body = $("adQBody");
    if (body) body.classList.toggle("open");
  }, opts);

  // ---------- Log: mini calendar ----------
  const cal = $("adCal");
  if (cal) {
    for (let d = 1; d <= 30; d++) {
      const c = document.createElement("span");
      c.textContent = String(d);
      if (d === 2) c.className = "t";
      if (d === 10) c.className = "today";
      cal.appendChild(c);
    }
  }

  // ---------- Log: class/notes toggle (visual only) ----------
  all(".lg-toggle", screen).forEach((group) => {
    const btns = all("button", group);
    btns.forEach((b) => {
      b.addEventListener("click", () => {
        btns.forEach((x) => x.classList.toggle("on", x === b));
      }, opts);
    });
  });

  // ---------- Coach: start a class solo/couple lists ----------
  const csBtns = all("[data-csseg]", screen);
  csBtns.forEach((b) => {
    b.addEventListener("click", () => {
      csBtns.forEach((x) => x.classList.toggle("on", x === b));
      const solo = $("csSolo"); const couple = $("csCouple");
      if (solo) (solo as any).hidden = b.dataset.csseg !== "solo";
      if (couple) (couple as any).hidden = b.dataset.csseg !== "couple";
    }, opts);
  });

  // ---------- Coach: briefing start ----------
  const cbStart = $("cbStart");
  if (cbStart) cbStart.addEventListener("click", () => {
    goTo("c-dash");
    toast("Class started, the Clip is listening");
  }, opts);

  // ---------- Coach: student detail tabs ----------
  const sdBtns = all("[data-sdtab]", screen);
  const sdPanes = all(".sd-pane", screen);
  function openSdTab(name: string) {
    sdBtns.forEach((x) => x.classList.toggle("on", x.dataset.sdtab === name));
    sdPanes.forEach((p) => p.classList.toggle("on", p.dataset.pane === name));
  }
  sdBtns.forEach((b) => {
    b.addEventListener("click", () => openSdTab(b.dataset.sdtab || ""), opts);
  });

  // ---------- Coach: reply to the question ----------
  let replied = false;
  function answerQuestion(how: string) {
    if (replied) return;
    replied = true;
    const act = $("sdQAct");
    if (act) act.innerHTML = '<span class="sd-sent">✓ ' + how + ", saved to Alina’s knowledge base.</span>";
    const badge = $("sdBadge");
    if (badge) badge.remove();
    toast("Answer sent to Alina");
  }
  bind("sdReply", () => answerQuestion("Replied"));
  bind("sdInClass", () => answerQuestion("Marked “answer in class”"));

  // a11y: the phone is aria-hidden — keep its inner controls out of the tab
  // order too (the left-hand beats remain the keyboard/SR-accessible controls).
  all("button, a, input", screen).forEach((el) => {
    el.tabIndex = -1;
  });

  // ---------- teardown ----------
  return () => {
    ac.abort();
    if (cInt) clearInterval(cInt);
    if (toastT) clearTimeout(toastT);
    if (holdRaf) cancelAnimationFrame(holdRaf);
    if (spyRaf) cancelAnimationFrame(spyRaf);
    readyTimers.forEach((t) => clearTimeout(t));
    timeouts.forEach((t) => clearTimeout(t));
  };
}
