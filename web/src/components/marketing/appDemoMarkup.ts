// AUTO-GENERATED from Waitlist.html — "The App" section (img->/images, app-stage aria-hidden).
/* eslint-disable */
export const APP_DEMO_MARKUP = `
    <div class="container">
      <div class="app-head">
        <span class="eyebrow">The app</span>
        <h2>Open the app, know what to train.</h2>
        <div class="app-view-toggle">
          <button class="on" type="button" data-appview="student">For dancers</button>
          <button type="button" data-appview="coach">For coaches</button>
        </div>
      </div>
      <div class="app-demo">
        <div class="app-tabs" id="tabsStudent">
          <button class="app-tab is-active" type="button" data-goto="home">
            <span class="at-idx">01</span>
            <span class="at-body">
              <strong>Three focus points a week</strong>
              <span>Your coach's corrections become three weekly focus points, solo or as a couple, waiting on the Train page.</span>
            </span>
          </button>
          <button class="app-tab" type="button" data-goto="detail" data-frag="detail">
            <span class="at-idx">02</span>
            <span class="at-body">
              <strong>Your focus, in context</strong>
              <span>Open a focus point: what it is, why your coach assigned it, and how long you want to spend. 10, 15 or 20 minutes.</span>
            </span>
          </button>
          <button class="app-tab" type="button" data-goto="detail" data-frag="assistant" data-ask="1">
            <span class="at-idx">03</span>
            <span class="at-body">
              <strong>Ask the assistant</strong>
              <span>It answers from your coach's own corrections. And when it doesn't know, it sends the question straight to your coach.</span>
            </span>
          </button>
          <button class="app-tab" type="button" data-goto="session">
            <span class="at-idx">04</span>
            <span class="at-body">
              <strong>Train it. Tick it off.</strong>
              <span>Run the drill, hold to end. Every session counts towards the end of your focus point training.</span>
            </span>
          </button>
          <button class="app-tab" type="button" data-goto="profile">
            <span class="at-idx">05</span>
            <span class="at-body">
              <strong>Hit 100%, ready for your private</strong>
              <span>Every session fills your readiness. Focus points tick to done, the ring closes, and you walk in prepared.</span>
            </span>
          </button>
          <button class="app-tab" type="button" data-goto="log">
            <span class="at-idx">06</span>
            <span class="at-body">
              <strong>Every lesson, logged</strong>
              <span>Privates, group classes and training days, your whole season in one calendar.</span>
            </span>
          </button>
          <p class="app-hint">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11.5V5a1.5 1.5 0 0 1 3 0v5.5m0 0V9a1.5 1.5 0 0 1 3 0v2.5m0 0V11a1.5 1.5 0 0 1 3 0v4a6 6 0 0 1-6 6h-.8a6 6 0 0 1-4.7-2.3L4 15.6a1.6 1.6 0 0 1 2.5-2L9 16.5v-5Z"></path></svg>
            A live demo, scroll, or tap the phone: “Start Now”, ask the assistant…
          </p>
        </div>

        <div class="app-tabs" id="tabsCoach" hidden>
          <button class="app-tab is-active" type="button" data-goto="c-dash">
            <span class="at-idx">01</span>
            <span class="at-body">
              <strong>Your students at a glance</strong>
              <span>Who practiced, who went silent, who's ready, before anyone steps on the floor.</span>
            </span>
          </button>
          <button class="app-tab" type="button" data-goto="c-students">
            <span class="at-idx">02</span>
            <span class="at-body">
              <strong>Every student, tracked</strong>
              <span>Readiness sorted for you, on-track dancers on top, the ones drifting flagged in red.</span>
            </span>
          </button>
          <button class="app-tab" type="button" data-goto="c-student" data-sdopen="activity">
            <span class="at-idx">03</span>
            <span class="at-body">
              <strong>See exactly where they are</strong>
              <span>Every session, every question, each student's work since your last private, in one timeline.</span>
            </span>
          </button>
          <button class="app-tab" type="button" data-goto="c-start">
            <span class="at-idx">04</span>
            <span class="at-body">
              <strong>Start class in two taps</strong>
              <span>Solo, couple or group, your students sorted by readiness, ready to pick.</span>
            </span>
          </button>
          <button class="app-tab" type="button" data-goto="c-brief">
            <span class="at-idx">05</span>
            <span class="at-body">
              <strong>Pick up right where you left off</strong>
              <span>An AI debrief of everything since last time, what they trained, what slipped, what to check, then hit Start.</span>
            </span>
          </button>
          <button class="app-tab" type="button" data-goto="c-log">
            <span class="at-idx">06</span>
            <span class="at-body">
              <strong>Every class, logged</strong>
              <span>Privates and group classes, transcribed and filed automatically by the Clip.</span>
            </span>
          </button>
          <p class="app-hint">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11.5V5a1.5 1.5 0 0 1 3 0v5.5m0 0V9a1.5 1.5 0 0 1 3 0v2.5m0 0V11a1.5 1.5 0 0 1 3 0v4a6 6 0 0 1-6 6h-.8a6 6 0 0 1-4.7-2.3L4 15.6a1.6 1.6 0 0 1 2.5-2L9 16.5v-5Z"></path></svg>
            A live demo, tap “Start class”, then Alina: her AI debrief is ready.
          </p>
        </div>

        <div aria-hidden="true" class="app-stage" id="adStage" data-active="home">
        <div class="phone" aria-label="Interactive demo of the InBetween app">
          <div class="phone-screen" id="adScreen">
            <div class="p-notch"></div>
            <div class="p-status">
              <span>9:41</span>
              <svg viewBox="0 0 38 10" fill="currentColor"><rect x="0" y="3" width="2.4" height="7" rx="1"></rect><rect x="3.8" y="2" width="2.4" height="8" rx="1"></rect><rect x="7.6" y="0.5" width="2.4" height="9.5" rx="1"></rect><path d="M15.5 4.6a6.5 6.5 0 0 1 8.1 0l-1.3 1.6a4.4 4.4 0 0 0-5.5 0Zm2 2.6a3.4 3.4 0 0 1 4 0l-2 2.4Z"></path><rect x="27" y="1.5" width="9" height="7" rx="2.4" fill="none" stroke="currentColor" stroke-width="1"></rect><rect x="28.2" y="2.8" width="5.2" height="4.4" rx="1.2"></rect><rect x="36.6" y="3.6" width="1.4" height="2.8" rx="0.7"></rect></svg>
            </div>

            <!-- TRAIN (home) -->
            <div class="pscr scr-home is-on" data-pscreen="home">
              <div class="tr-top">
                <span class="ph-bell"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 9a6 6 0 1 0-12 0c0 6-2 7-2 7h16s-2-1-2-7"></path><path d="M10.3 20a2 2 0 0 0 3.4 0"></path></svg><i>1</i></span>
                <span class="tr-style">Latin <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 9l6 6 6-6"></path></svg></span>
                <img class="tr-ava" src="/images/avatar.png" alt="">
              </div>
              <div class="tr-week-head"><b>This week</b><span>Jun 8 – 14</span></div>
              <div class="tr-days"><span>M</span><span>T</span><span class="today">W</span><span>T</span><span>F</span><span>S</span><span>S</span></div>
              <div class="tr-legend"><span><i></i>Training</span><span><i></i>Class</span><span><i></i>Focus trained</span></div>

              <div id="homeSolo">
                <div class="tr-card solo">
                  <div class="tr-card-top">
                    <span class="tr-cat"><i></i>Solo · Focus</span>
                    <span class="tr-trained"><b id="adTrainedCount">2/3</b> trained</span>
                  </div>
                  <div class="tr-name">Heel Lead Recovery</div>
                  <p class="tr-desc">Recover the heel lead on every back step, settling weight through the standing leg first.</p>
                  <div class="tr-meta">
                    <span class="tr-dots"><i class="on"></i><i></i></span>
                    <span class="tr-swipe">Swipe ›</span>
                  </div>
                  <button class="ph-start" type="button" data-goto="detail">Start Now <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M4 12h15m0 0-6-6m6 6-6 6"></path></svg></button>
                </div>
                <button class="tr-alt couple" type="button" data-swap="couple">
                  <span class="tr-alt-av"><img src="/images/avatar.png" alt=""><i>D</i></span>
                  <span><span class="tr-alt-kind">Couple · Focus</span><span class="tr-alt-name">Shared Timing</span></span>
                  <span class="tr-swapico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M8 7l4-4 4 4M8 17l4 4 4-4"></path></svg></span>
                </button>
              </div>

              <div id="homeCouple" hidden>
                <div class="tr-card couple">
                  <div class="tr-card-top">
                    <span class="tr-cat"><i></i>Couple · Focus</span>
                    <span class="tr-trained"><b>1/3</b> trained</span>
                    <span class="tr-card-avs"><img src="/images/avatar.png" alt=""><i>D</i></span>
                  </div>
                  <div class="tr-name">Shared Timing</div>
                  <p class="tr-desc">Match your weight changes so every step lands together.</p>
                  <div class="tr-meta">
                    <span class="tr-dots"><i class="on"></i><i></i><i></i></span>
                    <span class="tr-swipe">Swipe ›</span>
                  </div>
                  <button class="ph-start" type="button" data-goto="detail">Start Now <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M4 12h15m0 0-6-6m6 6-6 6"></path></svg></button>
                </div>
                <button class="tr-alt solo" type="button" data-swap="solo">
                  <span><span class="tr-alt-kind">Solo · Focus</span><span class="tr-alt-name">Heel Lead Recovery</span></span>
                  <span class="tr-swapico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M8 7l4-4 4 4M8 17l4 4 4-4"></path></svg></span>
                </button>
              </div>

              <a class="tr-all" href="#app" onclick="return false">All focus points ›</a>

              <div class="tr-ready" id="readySolo">
                <div class="tr-ready-head"><span>Get ready · Next private</span><b>Solo <em id="adReadyCount">0/2</em></b></div>
                <div class="tr-ready-row"><span class="ring" id="adReadyHeelRing" style="--p:66"></span>Heel Lead Recovery<b id="adReadyHeel">2/3</b></div>
                <div class="tr-ready-row"><span class="ring" style="--p:50"></span>Side Lead Initiation<b>1/2</b></div>
              </div>
              <div class="tr-ready" id="readyCouple" hidden>
                <div class="tr-ready-head"><span>Get ready · Next private</span><b>Couple 0/3</b></div>
                <div class="tr-ready-row blue"><span class="ring" style="--p:33; --c:#4A6A9A; --track:rgba(46,70,112,.18)"></span>Shared Timing<b>1/3</b></div>
                <div class="tr-ready-row blue"><span class="ring" style="--p:50; --c:#4A6A9A; --track:rgba(46,70,112,.18)"></span>Connection &amp; Frame<b>1/2</b></div>
                <div class="tr-ready-row blue"><span class="ring" style="--p:50; --c:#4A6A9A; --track:rgba(46,70,112,.18)"></span>Spatial Awareness<b>1/2</b></div>
              </div>

              <div class="ph-navbar">
                <button type="button" data-goto="profile">Profile</button>
                <button class="on" type="button">Train</button>
                <button type="button" data-goto="log">Log</button>
              </div>
            </div>

            <!-- FOCUS DETAIL + ASK ASSISTANT -->
            <div class="pscr scr-detail" data-pscreen="detail">
              <div class="dt-head">
                <button class="dt-back" type="button" data-goto="home"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M15 5l-7 7 7 7"></path></svg>Train</button>
                <span class="dt-label">Main focus</span>
              </div>
              <div class="dt-card" id="adDetailCard">
                <div class="dt-card-top">
                  <span class="dt-sess">3rd Session</span>
                  <button class="ss-ask" id="adAskBtn" type="button">Ask Assistant</button>
                </div>
                <div class="dt-name">Heel Lead Recovery</div>
                <p class="dt-desc">Recover the heel lead on every back step, settling weight through the standing leg first.</p>
                <button class="dt-more" id="adReadMore" type="button">Read more ↓</button>
                <div class="dt-chat" id="adChat">
                  <div class="bub q">Why this focus point?</div>
                  <div class="bub a">From your last lesson on May 12, your coach saw your back foot landing flat instead of rolling toe, ball, heel. This drill fixes that exact landing pattern.</div>
                </div>
                <div class="dt-input">
                  <button class="dt-field" id="adAsk" type="button">Ask about focus point</button>
                  <span class="dt-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="3" width="6" height="11" rx="3"></rect><path d="M5 11a7 7 0 0 0 14 0M12 18v3"></path></svg></span>
                  <button class="dt-ico send" id="adSend" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M12 19V5m0 0-6 6m6-6 6 6"></path></svg></button>
                </div>
              </div>
              <div class="dt-drill">
                <span class="ss-pill">Drill</span>
                <p>Back walks isolating toe, ball, heel sequence, count three for each step.</p>
                <span class="ss-reps">10 reps.</span>
              </div>
              <div class="dt-time">
                <div><span class="dt-time-k">Focus training</span><b class="dt-time-v">Time</b></div>
                <div class="dt-wheel" id="adWheel">
                  <button data-min="10" type="button">10<small>min</small></button>
                  <button data-min="15" type="button" class="sel">15<small>min</small></button>
                  <button data-min="20" type="button">20<small>min</small></button>
                </div>
              </div>
              <div class="dt-bottom">
                <span class="dt-note">♪</span>
                <button class="dt-start" type="button" data-goto="session">Start session</button>
              </div>
            </div>

            <!-- SESSION -->
            <div class="pscr scr-session" data-pscreen="session">
              <div class="dt-head">
                <button class="dt-back" type="button" data-goto="home"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M15 5l-7 7 7 7"></path></svg>Train</button>
                <span class="dt-label">Main focus</span>
              </div>
              <div class="ss-card">
                <div class="dt-card-top">
                  <span class="dt-sess">3rd Session</span>
                  <button class="ss-ask" type="button" data-goto="detail">Ask Assistant</button>
                </div>
                <div class="dt-name">Heel Lead Recovery</div>
                <p class="ss-desc">Recover the heel lead on every back step, settling weight through the standing leg first.</p>
                <span class="ss-more">Read more ↓</span>
              </div>
              <div class="ss-drill">
                <span class="ss-pill">Drill</span>
                <p>Back walks isolating toe, ball, heel sequence, count three for each step.</p>
                <span class="ss-reps">10 reps.</span>
              </div>
              <div class="ss-clock">
                <div class="ss-timer" id="adClock">15:00</div>
                <div class="ss-bar"><i id="adBar"></i></div>
              </div>
              <button class="ss-pause" id="adPause" type="button">&#10074;&#10074;&nbsp;&nbsp;Pause</button>
              <button class="ss-end" id="adEnd" type="button"><i></i><span>Hold to end session</span></button>
            </div>

            <!-- PROFILE -->
            <div class="pscr scr-profile" data-pscreen="profile">
              <div class="tr-top">
                <span class="ph-bell"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 9a6 6 0 1 0-12 0c0 6-2 7-2 7h16s-2-1-2-7"></path><path d="M10.3 20a2 2 0 0 0 3.4 0"></path></svg><i>1</i></span>
                <span></span>
                <span class="pf-edit">Edit</span>
              </div>
              <div class="pf-id">
                <img class="pf-ava" src="/images/avatar.png" alt="Alina Winkston">
                <div>
                  <div class="pf-name">Alina Winkston</div>
                  <div class="pf-studio">SangriStudio Dancing</div>
                  <span class="pf-style">Latin</span>
                </div>
              </div>
              <div class="pf-tabs"><span>Links</span><span class="on">Statistics</span><span>Settings</span></div>
              <div class="pf-stats">
                <div><b>10</b><span>Classes</span></div>
                <div><b>10</b><span>Sessions</span></div>
                <div><b>6</b><span>Focus</span></div>
              </div>
              <div class="pf-streak">
                <div><span>Best streak</span><b>3 days</b></div>
                <div class="r"><span>This month</span><b>21 min</b></div>
              </div>
              <div class="pf-sec">Get ready for next private lesson</div>
              <div class="pf-toggle">
                <button class="on" type="button" data-pf="solo">Solo</button>
                <button type="button" data-pf="couple">Couple</button>
              </div>
              <div class="pf-ready solo" id="pfSolo">
                <div class="pf-ready-top">
                  <span class="pf-pct"><span class="ring" id="pfPctRing" style="--p:60; --track:rgba(255,255,255,.14)"></span><b id="pfPct">60%</b></span>
                  <span class="pf-ready-msg"><b id="pfTitle">Almost ready for your next private.</b><p id="pfMsg">Train your focus points from the last lesson, ~14 min to go.</p></span>
                </div>
                <div class="pf-fp-label">Focus points</div>
                <div class="pf-fp"><span class="ring" id="pfHeelRing" style="--p:66; --track:rgba(255,255,255,.16)"></span><span class="pf-fp-txt">Heel Lead Recovery<small>Critical focus · from last private</small></span><b id="pfHeel">2/3</b></div>
                <div class="pf-fp"><span class="ring" id="pfSideRing" style="--p:50; --track:rgba(255,255,255,.16)"></span><span class="pf-fp-txt">Side Lead Initiation<small>Important focus · from last private</small></span><b id="pfSide">1/2</b></div>
                <button class="pf-q" id="adQs" type="button"><span>Questions · <b id="adQCount">2</b></span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 9l6 6 6-6"></path></svg></button>
                <div class="pf-q-body" id="adQBody">
                  <p>“What should I do with my hip on the 3rd count?” <em>waiting for David</em></p>
                  <p>“Which count does the hip settle on?” <em>answered</em></p>
                </div>
              </div>
              <div class="pf-ready couple" id="pfCouple" hidden>
                <div class="pf-ready-top">
                  <span class="pf-pct"><span class="ring" style="--p:40; --c:#7F97BB; --track:rgba(255,255,255,.14)"></span><b>40%</b></span>
                  <span class="pf-ready-msg"><b>Getting there, train together.</b><p>Three couple focus points left from your last private.</p></span>
                </div>
                <div class="pf-fp-label">Focus points</div>
                <div class="pf-fp"><span class="ring" style="--p:33; --c:#7F97BB; --track:rgba(255,255,255,.16)"></span><span class="pf-fp-txt">Shared Timing<small>Critical focus · from last private</small></span><b>1/3</b></div>
                <div class="pf-fp"><span class="ring" style="--p:50; --c:#7F97BB; --track:rgba(255,255,255,.16)"></span><span class="pf-fp-txt">Connection &amp; Frame<small>Important focus · from last private</small></span><b>1/2</b></div>
                <div class="pf-fp"><span class="ring" style="--p:50; --c:#7F97BB; --track:rgba(255,255,255,.16)"></span><span class="pf-fp-txt">Spatial Awareness<small>Important focus · from last private</small></span><b>1/2</b></div>
              </div>
              <div class="ph-navbar">
                <button class="on" type="button">Profile</button>
                <button type="button" data-goto="home">Train</button>
                <button type="button" data-goto="log">Log</button>
              </div>
            </div>

            <!-- LOG -->
            <div class="pscr scr-log2" data-pscreen="log">
              <div class="tr-top">
                <span class="ph-bell"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 9a6 6 0 1 0-12 0c0 6-2 7-2 7h16s-2-1-2-7"></path><path d="M10.3 20a2 2 0 0 0 3.4 0"></path></svg><i>1</i></span>
                <span></span>
                <img class="tr-ava" src="/images/avatar.png" alt="">
              </div>
              <div class="lg-toggle">
                <button class="on" type="button">Class</button>
                <button type="button">Notes</button>
              </div>
              <div class="lg-month">
                <div class="lg-month-head"><span>This month</span><b>June 2026</b></div>
                <div class="lg-cal" id="adCal"></div>
                <div class="lg-legend"><span><i class="c"></i>Class</span><span><i class="t"></i>Training</span><span><i class="p"></i>Private</span></div>
                <div class="lg-mstats">
                  <div><b>0</b><span>Group</span></div>
                  <div><b>0</b><span>Private</span></div>
                  <div><b>1</b><span>Days</span></div>
                </div>
              </div>
              <div class="lg-sec">Last 30 days</div>
              <div class="lg-item">
                <div class="lg-item-top"><span>May 31 · <b>David Yates</b></span><span class="lg-tag private">Private</span></div>
                <div class="lg-item-name">Couple lesson with David Yates</div>
              </div>
              <div class="lg-item">
                <div class="lg-item-top"><span>May 14 · <b>David Yates</b></span><span class="lg-tag group">Group</span></div>
                <div class="lg-item-name">Paso Doble Dance Lesson</div>
              </div>
              <div class="lg-item">
                <div class="lg-item-top"><span>May 14 · <b>David Yates</b></span><span class="lg-tag private">Private</span></div>
                <div class="lg-item-name">The First Lemon Test</div>
              </div>
              <div class="ph-navbar">
                <button type="button" data-goto="profile">Profile</button>
                <button type="button" data-goto="home">Train</button>
                <button class="on" type="button">Log</button>
              </div>
            </div>


            <!-- COACH · DASHBOARD -->
            <div class="pscr scr-cdash" data-pscreen="c-dash">
              <div class="tr-top">
                <span class="ph-bell"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 9a6 6 0 1 0-12 0c0 6-2 7-2 7h16s-2-1-2-7"></path><path d="M10.3 20a2 2 0 0 0 3.4 0"></path></svg><i>3</i></span>
                <span></span>
                <span class="avi av-gold2" style="width:32px;height:32px;font-size:12px;justify-self:end">D</span>
              </div>
              <div class="cd-strip">
                <span class="cd-stu"><span class="cring" style="--p:60"><img src="/images/avatar.png" alt=""></span>Alina</span>
                <span class="cd-stu"><span class="cring" style="--p:80"><i class="avi av-green">E</i></span>Elena</span>
                <span class="cd-stu"><span class="cring" style="--p:50"><i class="avi av-gold2">P</i></span>Priya</span>
                <span class="cd-stu"><span class="cring" style="--p:45"><i class="avi av-blue">M</i></span>Marco</span>
                <span class="cd-stu"><span class="cring" style="--p:30"><i class="avi av-rose">S</i></span>Sofia</span>
                <span class="cd-stu"><span class="cring alert" style="--p:15"><i class="avi av-slate">L</i></span>Lucas</span>
              </div>
              <div class="cd-card">
                <div class="cd-card-head"><span>Since last class</span><em>3d ago</em></div>
                <div class="cd-main">
                  <div class="cd-ring"><span class="ring" style="--p:67; --c:#5BA876; --track:rgba(255,255,255,.14); width:62px"></span><b>4/6<small>Active</small></b></div>
                  <div class="cd-rows">
                    <div class="cd-row lit"><span>Practiced</span><b>3</b></div>
                    <div class="cd-row"><span>In progress</span><b>1</b></div>
                    <div class="cd-row dim"><span>Silent</span><b>2</b></div>
                  </div>
                </div>
                <div class="cd-avg"><span>Global avg readiness</span><b>47<small>%</small></b></div>
                <div class="cd-bar"><i></i></div>
                <button class="cd-start" type="button" data-goto="c-start"><svg viewBox="0 0 12 12" fill="currentColor" style="width:9px;height:9px"><path d="M2.5 1.2v9.6L10.5 6Z"></path></svg> Start class</button>
              </div>
              <div class="cd-sec">Most ready for next private</div>
              <div class="cd-ready">
                <div class="cd-ready-row"><span class="cring" style="--p:80"><i class="avi av-green">E</i></span><b>Elena Petrova</b><em>80<small>%</small></em><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 5l7 7-7 7"></path></svg></div>
                <button class="cd-ready-row" type="button" data-goto="c-brief"><span class="cring" style="--p:60"><img src="/images/avatar.png" alt=""></span><b>Alina Winkston</b><em>60<small>%</small></em><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 5l7 7-7 7"></path></svg></button>
              </div>
              <div class="cd-sec">Recent activity</div>
              <div class="cd-act">
                <div class="cd-act-item"><i></i><span><b>Alina</b> <em>practiced</em> “Side Lead Initiation”, 7 min</span></div>
                <div class="cd-act-item q"><i></i><span><b>Sofia</b> asked a question, waiting for your reply</span></div>
                <div class="cd-act-item log"><i></i><span><b>Elena</b> <em>logged a class</em> · Cha Cha basics</span></div>
              </div>
              <div class="ph-navbar">
                <button type="button" data-goto="c-students">Students</button>
                <button class="on" type="button">Dashboard</button>
                <button type="button" data-goto="c-log">Class</button>
              </div>
            </div>

            <!-- COACH · START A CLASS -->
            <div class="pscr scr-cstart" data-pscreen="c-start">
              <div class="cs-head">
                <button class="cs-x" type="button" data-goto="c-dash"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M5 5l14 14M19 5L5 19"></path></svg></button>
                <span>New class</span>
                <span></span>
              </div>
              <div class="cs-title">Start a class</div>
              <p class="cs-sub">Pick a student to see what they've worked on lately.</p>
              <div class="cs-seg">
                <button class="on" type="button" data-csseg="solo"><i></i>Solo</button>
                <button type="button" data-csseg="couple"><i></i>Couple</button>
              </div>
              <div class="cs-label"><span>Private with…</span><em>Sorted by readiness</em></div>
              <div id="csSolo">
                <button class="cs-row cs-row-cta" type="button" data-goto="c-brief"><span class="cring" style="--p:60"><img src="/images/avatar.png" alt=""></span><span class="cs-row-name"><b>Alina Winkston</b><span>Last private · May 12</span></span><em>60<small>%</small></em><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 5l7 7-7 7"></path></svg></button>
                <div class="cs-row"><span class="cring" style="--p:80"><i class="avi av-green">E</i></span><span class="cs-row-name"><b>Elena Petrova</b><span>Last private · May 28</span></span><em>80<small>%</small></em><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 5l7 7-7 7"></path></svg></div>
                <div class="cs-row"><span class="cring" style="--p:50"><i class="avi av-gold2">P</i></span><span class="cs-row-name"><b>Priya Sharma</b><span>Last private · May 22</span></span><em>50<small>%</small></em><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 5l7 7-7 7"></path></svg></div>
              </div>
              <div id="csCouple" hidden>
                <div class="cs-row"><span class="cs-pair"><img src="/images/avatar.png" alt=""><i class="avi av-blue">D</i></span><span class="cs-row-name"><b>Alina &amp; Daniel</b><span>Last private · May 31</span></span><em>40<small>%</small></em><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 5l7 7-7 7"></path></svg></div>
                <div class="cs-row"><span class="cs-pair"><i class="avi av-rose">S</i><i class="avi av-blue">M</i></span><span class="cs-row-name"><b>Sofia &amp; Marco</b><span>Last private · May 18</span></span><em>25<small>%</small></em><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 5l7 7-7 7"></path></svg></div>
              </div>
              <div class="cs-label"><span>Or</span><em></em></div>
              <div class="cs-group">
                <span class="cs-group-ico"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm7 .5a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2.5 19c0-3 2.9-5 6.5-5s6.5 2 6.5 5v1h-13v-1Zm14.9 1H21.5v-.8c0-2-1.2-3.5-3-4.3 2.4.2 4.5 1.7 4.5 4.1v1h-5.6Z"></path></svg></span>
                <span><b>Group class</b><span>6 students · auto-included</span></span>
              </div>
              <div class="ph-navbar">
                <button type="button" data-goto="c-students">Students</button>
                <button type="button" data-goto="c-dash">Dashboard</button>
                <button class="on" type="button">Class</button>
              </div>
            </div>

            <!-- COACH · PRE-CLASS BRIEFING -->
            <div class="pscr scr-cbrief" data-pscreen="c-brief">
              <div class="dt-head">
                <button class="dt-back" type="button" data-goto="c-start"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M15 5l-7 7 7 7"></path></svg>New class</button>
                <span class="dt-label">Briefing</span>
              </div>
              <div class="cb-card">
                <div class="cb-id">
                  <span class="cring" style="--p:60"><img src="/images/avatar.png" alt="Alina Winkston"></span>
                  <span><b>Alina Winkston</b><span><em>60%</em> ready for this lesson</span></span>
                </div>
                <div class="cb-stats">
                  <div><b>3</b><span>Sessions</span></div>
                  <div><b>2</b><span>Focus trained</span></div>
                  <div><b>1</b><span>Questions</span></div>
                </div>
                <div class="cb-foot"><b><i></i>On track</b><span>Seen 7d ago</span></div>
              </div>
              <div class="cb-ai"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"></path></svg>AI debrief</div>
              <p class="cb-ai-txt">Alina completed <b>3 solo sessions</b> and practiced 2 of 5 assigned focus points. <span class="cb-flag">“Weight Distribution”</span> has had zero practice despite being flagged.</p>
              <div class="cb-check">
                <div class="cb-check-top"><span class="cb-pill">Check during this lesson</span><b>60%</b></div>
                <p class="cb-check-sub">Carryover from Alina's last private. Validate each at the end.</p>
                <div class="cb-item crit"><i></i><span>Heel Lead Recovery</span><span class="cb-sev">Critical</span><b>2/3</b></div>
                <div class="cb-item imp"><i></i><span>Side Lead Initiation</span><span class="cb-sev">Important</span><b>1/2</b></div>
                <div class="cb-qs">Questions · 2</div>
                <div class="cb-q"><i></i><span>On the Cha cha settle, am I supposed to keep weight on the…</span><em>Open</em></div>
                <div class="cb-q inclass"><i></i><span>When I drop the hip in Rumba walks, should the knee stay sl…</span><em>In class</em></div>
              </div>
              <button class="cb-start" id="cbStart" type="button">Start</button>
            </div>

            <!-- COACH · STUDENTS -->
            <div class="pscr scr-cstudents" data-pscreen="c-students">
              <div class="tr-top">
                <span class="ph-bell"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 9a6 6 0 1 0-12 0c0 6-2 7-2 7h16s-2-1-2-7"></path><path d="M10.3 20a2 2 0 0 0 3.4 0"></path></svg><i>3</i></span>
                <span></span>
                <span class="avi av-gold2" style="width:32px;height:32px;font-size:12px;justify-self:end">D</span>
              </div>
              <div class="st-title"><b>Students</b><span>Couples</span><span class="st-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg></span></div>
              <div class="st-tabs"><span class="on">All</span><span>Last private lesson</span></div>
              <div class="st-group"><i></i>On track</div>
              <div class="st-row"><span class="cring" style="--p:80"><i class="avi av-green">E</i></span><span class="st-row-name"><b>Elena Petrova</b><span>2d ago</span></span><em>80<small>%</small></em><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 5l7 7-7 7"></path></svg></div>
              <button class="st-row" type="button" data-goto="c-student"><span class="cring" style="--p:60"><img src="/images/avatar.png" alt=""></span><span class="st-row-name"><b>Alina Winkston <span class="st-q">💬 1</span></b><span>7d ago</span></span><em>60<small>%</small></em><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 5l7 7-7 7"></path></svg></button>
              <div class="st-row"><span class="cring" style="--p:50"><i class="avi av-gold2">P</i></span><span class="st-row-name"><b>Priya Sharma</b><span>4d ago</span></span><em>50<small>%</small></em><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 5l7 7-7 7"></path></svg></div>
              <div class="st-group warn"><i></i>Needs attention</div>
              <div class="st-row"><span class="cring" style="--p:45"><i class="avi av-blue">M</i></span><span class="st-row-name"><b>Marco Rossi</b><span>12d ago</span></span><em>45<small>%</small></em><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 5l7 7-7 7"></path></svg></div>
              <div class="st-row"><span class="cring alert" style="--p:15"><i class="avi av-slate">L</i></span><span class="st-row-name"><b>Lucas Meyer</b><span>Silent · 3w ago</span></span><em>15<small>%</small></em><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 5l7 7-7 7"></path></svg></div>
              <div class="ph-navbar">
                <button class="on" type="button">Students</button>
                <button type="button" data-goto="c-dash">Dashboard</button>
                <button type="button" data-goto="c-log">Class</button>
              </div>
            </div>

            <!-- COACH · STUDENT DETAIL -->
            <div class="pscr scr-cstudent" data-pscreen="c-student">
              <div class="dt-head">
                <button class="dt-back" type="button" data-goto="c-students"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M15 5l-7 7 7 7"></path></svg>Students</button>
                <span class="dt-label">Student</span>
              </div>
              <div class="sd-card">
                <div class="cb-id">
                  <span class="cring" style="--p:60"><img src="/images/avatar.png" alt="Alina Winkston"></span>
                  <span><b>Alina Winkston</b><span>Trained <em style="color:#6FBF8A;font-style:normal;font-weight:600">3x</em> since last private lesson</span></span>
                </div>
                <div class="sd-ready"><b>60<small>%</small></b><span class="sd-ready-txt"><b>Almost ready for next private</b><span>2 focus points · ~14 min to go</span></span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 5l7 7-7 7"></path></svg></div>
              </div>
              <div class="sd-tabs">
                <button class="on" type="button" data-sdtab="info">Information</button>
                <button type="button" data-sdtab="activity">Activity</button>
                <button class="danger" type="button" data-sdtab="actions">Actions <i id="sdBadge">1</i></button>
              </div>
              <div class="sd-pane on" data-pane="info">
                <div class="sd-dark">
                  <div class="sd-dark-title">Student's readiness for next class</div>
                  <div class="sd-dark-row">
                    <span class="pf-pct"><span class="ring" style="--p:60; --track:rgba(255,255,255,.14)"></span><b>60%</b></span>
                    <div><b>Almost ready.</b><span>2 focus points · ~14 min to go</span></div>
                  </div>
                  <div class="sd-checkrow"><i>✓</i><div><b>Heel Lead Recovery</b><span>Critical focus · from last private</span></div><b>2/3</b></div>
                  <div class="sd-checkrow"><i>✓</i><div><b>Side Lead Initiation</b><span>Important focus · from last private</span></div><b>1/2</b></div>
                </div>
                <div class="sd-label">Active focus</div>
                <div class="sd-focus"><i></i><div><b>Weight Distribution</b><span>Proper foot pressure and weight placement</span></div><span class="sd-zero">0×</span></div>
                <div class="sd-focus"><i></i><div><b>Foot Landing Sequence</b><span>Toe, ball, heel, in that order</span></div><span class="sd-zero">0×</span></div>
              </div>
              <div class="sd-pane" data-pane="activity">
                <div class="sd-act-h">3 sessions · 21 min</div>
                <p class="sd-act-sub">Since last private lesson · May 12</p>
                <div class="sd-act"><span>Jun 2</span><b>Practiced “Side Lead Initiation”</b><em>7 min</em></div>
                <div class="sd-act"><span>Jun 2</span><b>Practiced “Heel Lead Recovery”</b><em>7 min</em></div>
                <div class="sd-act"><span>May 17</span><b>Question asked</b><em>“On the Cha cha settle, am I supposed to keep weight on…”</em></div>
              </div>
              <div class="sd-pane" data-pane="actions">
                <div class="sd-label">Questions to answer</div>
                <div class="sd-qcard">
                  <div class="sd-qhead"><span>💬 Question</span><em>May 17</em></div>
                  <p class="sd-qtxt">“On the Cha cha settle, am I supposed to keep weight on the ball of the foot the whole time, or does it shift to the full foot during the settle itself?”</p>
                  <div class="sd-qact" id="sdQAct">
                    <button class="sd-reply" id="sdReply" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z"></path></svg>Reply</button>
                    <button class="sd-inclass" id="sdInClass" type="button">Answer in class</button>
                  </div>
                </div>
              </div>
              <div class="ph-navbar">
                <button class="on" type="button" data-goto="c-students">Students</button>
                <button type="button" data-goto="c-dash">Dashboard</button>
                <button type="button" data-goto="c-log">Class</button>
              </div>
            </div>

            <!-- COACH · CLASS LOG -->
            <div class="pscr scr-clog" data-pscreen="c-log">
              <div class="tr-top">
                <span class="ph-bell"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 9a6 6 0 1 0-12 0c0 6-2 7-2 7h16s-2-1-2-7"></path><path d="M10.3 20a2 2 0 0 0 3.4 0"></path></svg><i>3</i></span>
                <span></span>
                <span class="avi av-gold2" style="width:32px;height:32px;font-size:12px;justify-self:end">D</span>
              </div>
              <div class="lg-toggle">
                <button class="on" type="button">Class</button>
                <button type="button">Notes</button>
              </div>
              <div class="cd-sec" style="color:var(--gold-500)">Last 30 days</div>
              <div class="cl-item">
                <div class="cl-top"><span>May 31</span><span class="lg-tag group">Group</span></div>
                <div class="cl-name">Couple lesson with David Yates</div>
              </div>
              <div class="cl-item">
                <div class="cl-top"><span>May 14</span><span class="lg-tag group">Group</span></div>
                <div class="cl-name">Paso Doble Dance Lesson</div>
                <p class="cl-desc">Group class covering arm styling and shaping across the floor.</p>
              </div>
              <div class="cl-item private">
                <div class="cl-top"><span>May 12</span><span class="lg-tag private">Private</span></div>
                <div class="cl-name">Rumba walks · heel lead</div>
                <p class="cl-desc">Back-step landing pattern; assigned Heel Lead Recovery and Side Lead Initiation.</p>
                <div class="cl-stu"><img src="/images/avatar.png" alt="">Alina Winkston</div>
              </div>
              <div class="cl-foot">
                <span class="cl-searchbar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>Search classes…</span>
                <span class="cl-new">Class <i>+</i></span>
              </div>
              <div class="ph-navbar">
                <button type="button" data-goto="c-students">Students</button>
                <button type="button" data-goto="c-dash">Dashboard</button>
                <button class="on" type="button">Class</button>
              </div>
            </div>

            <div class="ph-toast" id="adToast"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M4 12.5l5.5 5.5L20 7"></path></svg><span id="adToastTxt"></span></div>
          </div>
        </div>

          <!-- floating fragments (per active screen) -->
          <div class="frag dark frag-quote pos-tl" data-for="home"><span class="frag-k">From your last private</span><span class="frag-v"><em>“Push from the standing foot, earlier.”</em></span></div>
          <div class="frag pos-br" data-for="home"><span class="frag-row"><span class="frag-dot gold"></span><span class="frag-v">Extracted automatically by the Clip</span></span></div>
          <div class="frag pos-tr" data-for="assistant"><span class="frag-k">Assistant</span><span class="frag-v">Answers only from<br>your coach's notes</span></div>
          <div class="frag dark pos-bl" data-for="assistant"><span class="frag-row"><span class="frag-dot gold"></span><span class="frag-v">Unknown? → sent to your coach</span></span></div>
          <div class="frag pos-tr" data-for="detail"><span class="frag-k">The why</span><span class="frag-v">Context from your<br>last lesson, built in</span></div>
          <div class="frag dark pos-bl" data-for="detail"><span class="frag-row"><span class="frag-dot gold"></span><span class="frag-v">10 · 15 · 20 min, your call</span></span></div>
          <div class="frag pos-tl" data-for="session"><span class="frag-k">Focused</span><span class="frag-v">One drill. A few minutes.<br>Nothing else.</span></div>
          <div class="frag dark pos-br" data-for="session"><span class="frag-row"><span class="frag-dot"></span><span class="frag-v">Counts towards end of focus training</span></span></div>
          <div class="frag pos-tr" data-for="profile"><span class="frag-k">Readiness</span><span class="frag-row"><span class="cring" style="--p:60"><img src="/images/avatar.png" alt=""></span><span class="frag-v">100% → ready for your private</span></span></div>
          <div class="frag pos-bl" data-for="log"><span class="frag-k">Your season</span><span class="frag-v">Privates · group · training<br>all in one place</span></div>
          <div class="frag pos-tr" data-for="c-dash"><span class="frag-k">Your studio</span><span class="frag-row"><span class="frag-avs"><img src="/images/avatar.png" alt=""><i class="avi av-green">E</i><i class="avi av-gold2">P</i><i class="avi av-blue">M</i></span><span class="frag-v">6 dancers tracked</span></span></div>
          <div class="frag dark pos-bl" data-for="c-dash"><span class="frag-row"><span class="frag-dot red"></span><span class="frag-v">Lucas, silent for 3 weeks</span></span></div>
          <div class="frag pos-tl" data-for="c-start"><span class="frag-k">Sorted for you</span><span class="frag-v">Most ready first</span></div>
          <div class="frag dark pos-tr" data-for="c-brief"><span class="frag-k">AI debrief</span><span class="frag-v">30 seconds before<br>she walks in</span></div>
          <div class="frag pos-bl" data-for="c-brief"><span class="frag-row"><span class="frag-dot red"></span><span class="frag-v">“Weight Distribution”, 0× practice</span></span></div>
          <div class="frag pos-tr" data-for="c-students"><span class="frag-row"><span class="frag-dot"></span><span class="frag-v">On track · 3</span></span></div>
          <div class="frag dark pos-br" data-for="c-students"><span class="frag-row"><span class="frag-dot red"></span><span class="frag-v">Needs attention · 2</span></span></div>
          <div class="frag dark pos-tl" data-for="c-student"><span class="frag-k">Answer once</span><span class="frag-v">It joins her knowledge<br>base, for good</span></div>
          <div class="frag pos-br" data-for="c-log"><span class="frag-k">Hands-free</span><span class="frag-v">Transcribed &amp; filed<br>by the Clip</span></div>
        </div>
      </div>
    </div>
  `;
