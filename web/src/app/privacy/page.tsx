/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — InBetween",
  description:
    "How Dance United Ltd, trading as InBetween, collects and uses your personal data under the UK and EU GDPR.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      effectiveDate="17 September 2026"
      previousVersion="1 May 2026"
    >
      <p>
        This Privacy Policy explains how <strong>Dance United Ltd</strong>,
        trading as <strong>InBetween</strong> ("InBetween", "we", "us", "our"),
        collects and uses your personal data when you use the InBetween mobile
        application and related services (the "Service"). It is written to comply
        with the <strong>UK GDPR</strong> and the <strong>EU GDPR</strong>.
      </p>

      <div className="legal-note">
        <p>
          InBetween is in <strong>private beta</strong>. We process real personal
          data, including audio recordings of lessons. Please read this policy
          carefully.
        </p>
      </div>

      <h2>1. Who is responsible for your data</h2>
      <p>
        <strong>Dance United Ltd</strong> is the data controller for the
        personal data described in this policy.
      </p>
      <ul>
        <li>
          <strong>Company number:</strong> 16555204
        </li>
        <li>
          <strong>Registered office:</strong> 71–75 Shelton Street, Covent
          Garden, London, WC2H 9JQ, United Kingdom
        </li>
        <li>
          <strong>Privacy contact:</strong> hello@useinbetween.com
        </li>
      </ul>
      <p>
        Where a coach records a lesson, the coach and InBetween each act as{" "}
        <strong>independent data controllers</strong>: the coach for the
        decision to record and for obtaining the consent of the people captured,
        InBetween for the processing, storage and analysis of that recording
        within the Service. We are not joint controllers with coaches, and we do
        not act as a coach's processor.
      </p>
      <p>
        We have not appointed a Data Protection Officer (we are not required to).
        For any privacy question or request, contact us at the address above.
      </p>

      <h2>2. The data we collect</h2>
      <h3>Account and profile data you give us</h3>
      <ul>
        <li>
          Full name, email address, and password (stored only as a secure hash —
          we never see your password).
        </li>
        <li>
          Your role (student or coach), dance style, and the studio you train or
          teach at.
        </li>
        <li>
          Onboarding preferences: how many private lessons you take per month and
          how often you train solo.
        </li>
      </ul>
      <h3>Student profiles managed by a parent or guardian</h3>
      <ul>
        <li>
          Where an account holder adds a student under 18, we collect that
          student's name, date of birth, and dance details. Date of birth is
          collected so that we can apply the correct protections for that age and
          manage the transitions described in section 11.
        </li>
      </ul>
      <h3>Content you create or that is created about you in the Service</h3>
      <ul>
        <li>
          Focus points, lesson notes, takeaways, practice sessions, and
          attendance.
        </li>
        <li>
          Audio recordings of lessons and voice notes (typically recorded by
          coaches), and the transcriptions generated from them.
        </li>
        <li>
          Questions asked by students about their focus points, and the answers
          generated or given in reply.
        </li>
        <li>
          For coaches, a knowledge base built from recurring corrections, tips,
          metaphors and vocabulary identified in their lessons.
        </li>
      </ul>
      <h3>Health-related information captured in lessons</h3>
      <p>
        Lessons are conversations, and they may include references to injuries,
        pain or physical limitations. This is health data under Article 9. See
        section 3 for how we handle it.
      </p>
      <h3>Interaction signals</h3>
      <p>
        Information about how the Service is used: whether a focus point was
        kept, edited, deleted or marked as practised, how often an item was
        opened, how long a practice session lasted, the category of a focus point
        drawn from our own fixed list, and similar usage events. Interaction
        signals do not include the text of lesson content.
      </p>
      <h3>Technical and usage data</h3>
      <p>
        A push-notification token (so we can send you reminders and updates), and
        basic device and app information needed to run and secure the Service.
      </p>
      <h3>Communications</h3>
      <p>
        Messages you send us (e.g. support emails) and, if you joined our
        waitlist, the email address you provided.
      </p>

      <h2>3. How we use your data, and our lawful bases</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>What we use it for</th>
              <th>Lawful basis (UK/EU GDPR)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Create and run your account; provide the core Service (focus
                points, transcriptions, summaries, answers)
              </td>
              <td>Performance of a contract (Art. 6(1)(b))</td>
            </tr>
            <tr>
              <td>
                Transcribe and analyse lesson audio to generate focus points and
                summaries
              </td>
              <td>Performance of a contract (Art. 6(1)(b))</td>
            </tr>
            <tr>
              <td>
                Build and maintain a coach's knowledge base, used only to answer
                questions from students linked to that coach's account
              </td>
              <td>Performance of a contract (Art. 6(1)(b))</td>
            </tr>
            <tr>
              <td>
                Process references to injuries, pain or physical limitations
                captured in lesson content
              </td>
              <td>Explicit consent (Art. 9(2)(a)), alongside Art. 6(1)(b)</td>
            </tr>
            <tr>
              <td>Send you reminders and service notifications</td>
              <td>
                Performance of a contract / our legitimate interests (Art.
                6(1)(b)/(f))
              </td>
            </tr>
            <tr>
              <td>Keep the Service secure, prevent abuse, and debug it</td>
              <td>
                Our legitimate interests in running a safe, working Service (Art.
                6(1)(f))
              </td>
            </tr>
            <tr>
              <td>
                Improve how focus points are selected, ranked and presented,
                using aggregated and de-identified interaction signals about how
                the Service is used. This does not involve the content of
                lessons.
              </td>
              <td>
                Our legitimate interests in improving the Service (Art. 6(1)(f))
              </td>
            </tr>
            <tr>
              <td>Respond to your messages and requests</td>
              <td>Our legitimate interests / contract</td>
            </tr>
            <tr>
              <td>Comply with legal obligations</td>
              <td>Legal obligation (Art. 6(1)(c))</td>
            </tr>
            <tr>
              <td>Waitlist emails</td>
              <td>
                Consent (Art. 6(1)(a)), which you can withdraw at any time
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Where we rely on legitimate interests, we have considered your rights and
        freedoms; you can object at any time (see section 8).
      </p>
      <p>
        <strong>Health data.</strong> We process references to injuries, pain or
        physical limitations only as part of lesson content, on the basis of
        explicit consent. That consent is given by the account holder when the
        account is created, separately and by an unticked box, and can be
        withdrawn at any time in settings. We do not use this information for any
        other purpose, and we do not share it beyond the processors listed in
        section 6. Because we cannot separate these references from the rest of a
        conversation, withdrawing consent means that lessons will no longer be
        recorded for that person.
      </p>

      <h2>4. Audio recordings — who is responsible for what</h2>
      <p>
        Coaches use the Service to record audio of lessons and notes.
        Responsibility is shared as follows:
      </p>
      <ul>
        <li>
          <strong>The coach</strong> decides who and what to record and is
          responsible for having the consent of the people captured in a
          recording (including, for a child, their parent or guardian), as set
          out in our <Link href="/terms">Terms of Service</Link>.
        </li>
        <li>
          <strong>We (InBetween)</strong> are responsible, as data controller,
          for processing and securely storing those recordings and the resulting
          transcriptions, and for the integrity and confidentiality of that data
          once it is in the Service. Access to recordings and transcriptions is
          restricted to InBetween's systems and the relevant account(s); we do
          not sell this data and we do not use it for advertising.
        </li>
      </ul>
      <p>
        If you have been recorded and want a recording reviewed or deleted,
        contact us at <strong>hello@useinbetween.com</strong>. We will handle
        your request directly. You may also contact the coach who recorded you.
      </p>

      <h2>5. AI processing</h2>
      <p>
        To turn audio into transcriptions, focus points and answers, we share the
        relevant content with AI and transcription providers acting as our
        processors (see section 6). These providers operate under business terms
        that prohibit them from using your content to train or improve their own
        models. A provider may retain content briefly for abuse monitoring, as
        described in that provider's own terms; it is not used for any other
        purpose.
      </p>
      <p>
        We do not use lesson content to train, fine-tune, benchmark or evaluate
        any machine learning model, whether ours or a third party's.
      </p>
      <p>
        We do use aggregated and de-identified interaction signals (see section
        2) to improve how the Service selects, ranks and presents focus points.
        That process never includes the text of lesson content, and no output
        delivered to one coach's students is generated from another coach's
        material.
      </p>
      <p>
        AI-generated transcriptions, summaries and answers can contain mistakes
        and should not be treated as definitive, or as a substitute for
        professional advice.
      </p>

      <h2>6. Who we share data with (our processors)</h2>
      <p>
        We do not sell your personal data. We share it only with service
        providers who process it on our behalf, under contract, to run the
        Service:
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Provider</th>
              <th>Purpose</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Supabase</strong>
              </td>
              <td>
                Authentication, database, and file storage (account data, notes,
                recordings, transcriptions)
              </td>
              <td>EU — Ireland (eu-west-1)</td>
            </tr>
            <tr>
              <td>
                <strong>Anthropic</strong>
              </td>
              <td>
                AI analysis of notes and transcriptions to generate focus points,
                summaries and answers
              </td>
              <td>United States</td>
            </tr>
            <tr>
              <td>
                <strong>OpenAI</strong>
              </td>
              <td>Speech-to-text transcription</td>
              <td>United States</td>
            </tr>
            <tr>
              <td>
                <strong>AssemblyAI</strong>
              </td>
              <td>Speech-to-text transcription</td>
              <td>United States</td>
            </tr>
            <tr>
              <td>
                <strong>Expo (Expo / EAS)</strong>
              </td>
              <td>Delivery of push notifications</td>
              <td>United States</td>
            </tr>
            <tr>
              <td>
                <strong>Resend</strong>
              </td>
              <td>
                Transactional emails (account confirmation, password reset) and
                waitlist emails
              </td>
              <td>United States</td>
            </tr>
            <tr>
              <td>
                <strong>Vercel</strong>
              </td>
              <td>
                Website hosting, plus privacy-friendly analytics and performance
                monitoring for our website
              </td>
              <td>United States</td>
            </tr>
            <tr>
              <td>
                <strong>Apple, Google</strong>
              </td>
              <td>App distribution</td>
              <td>United States</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Where we add or replace a provider that processes lesson content
        (recordings, transcriptions, or the text derived from them), we will
        update this list and notify account holders before the change takes
        effect. Where a change is required urgently to keep the Service running
        or secure, we will make it and notify you as soon as possible afterwards.
      </p>
      <p>
        We may also disclose data if required by law, to protect our rights, or
        in connection with a corporate transaction (e.g. a merger), in which case
        we will tell you.
      </p>

      <h2>7. International transfers</h2>
      <p>
        Your account data and files are hosted in the <strong>EU (Ireland)</strong>.
        Some of our providers (notably our AI, transcription, notification, email
        and hosting providers) are based in the United States, so some data is
        transferred outside the UK/EEA.
      </p>
      <p>
        Where we make such transfers, we put appropriate safeguards in place, such
        as the UK International Data Transfer Agreement / Addendum and the EU
        Standard Contractual Clauses, or we rely on an applicable adequacy
        decision. You can ask us for more detail about these safeguards.
      </p>

      <h2>8. Your rights</h2>
      <p>Under the UK and EU GDPR you have the right to:</p>
      <ul>
        <li>access the personal data we hold about you;</li>
        <li>rectify inaccurate or incomplete data;</li>
        <li>erase your data ("right to be forgotten");</li>
        <li>
          restrict or object to certain processing (including processing based on
          legitimate interests, such as our use of interaction signals);
        </li>
        <li>data portability (receive your data in a portable format);</li>
        <li>
          withdraw consent at any time where we rely on consent (for example,
          health-related information captured in lessons, or waitlist emails);
        </li>
        <li>
          not be subject to solely automated decisions with legal or similarly
          significant effects (we do not make such decisions).
        </li>
      </ul>
      <p>
        Where a student is under 18 and takes part through a profile managed by a
        parent or guardian, the parent or guardian exercises these rights on
        their behalf. A student aged 16 or 17 who holds their own account
        exercises these rights themselves.
      </p>
      <p>
        To exercise any of these rights, email{" "}
        <strong>hello@useinbetween.com</strong>. We will respond within one
        month. You will not normally have to pay a fee.
      </p>
      <p>
        You also have the right to complain to a data protection authority. In
        the UK this is the Information Commissioner's Office (ICO) — ico.org.uk.
        In the EU/EEA you can complain to your local supervisory authority.
      </p>

      <h2>9. How long we keep your data</h2>
      <ul>
        <li>
          We keep your account and content for as long as your account is active.
        </li>
        <li>
          If you delete your account, or ask us to delete specific content, we
          permanently erase it from production systems within 30 days and from
          backups within 90 days, except where we must keep certain information
          to comply with the law.
        </li>
        <li>
          Erasure covers lesson audio, transcriptions, focus points, notes,
          knowledge bases, vector embeddings, derived summaries and cached model
          context. We will confirm completion in writing.
        </li>
        <li>
          As this is a private beta, beta data may be deleted when the beta ends.
          If we decide to end the beta, we will give at least 30 days' notice and
          export tools will remain available throughout that period.
        </li>
        <li>You can ask us to delete your data sooner at any time (section 8).</li>
      </ul>

      <h2>10. Security</h2>
      <p>
        We use appropriate technical and organisational measures to protect your
        data, including encryption in transit, access controls, logical isolation
        of each coach's knowledge, and restricting access to recordings and
        transcriptions to our systems.
      </p>
      <p>
        Where we need to access a specific item to diagnose a problem you have
        reported, we do so with your agreement, limited to what is necessary, and
        we log that access.
      </p>
      <p>
        No method of transmission or storage is completely secure, but we work to
        protect your data and will notify you and the relevant authority of a
        personal-data breach where the law requires.
      </p>

      <h2>11. Children and young people</h2>
      <p>The Service is used by dancers of all ages.</p>
      <p>
        Anyone under 18 takes part through a student profile managed by their
        parent or guardian, who holds the account, accepts our Terms, and
        exercises all data protection rights on their behalf. Children do not
        hold accounts and do not log in.
      </p>
      <p>
        A parent or guardian sees the focus points generated for their child.
        Lesson recordings are not shown in the parent's interface; a parent or
        guardian may still request a copy of a recording under their child's
        right of access (section 8).
      </p>
      <p>
        A student aged 16 or 17 may ask us to convert their profile into their
        own account. We notify their parent or guardian before doing so, and the
        parent or guardian then retains visibility of focus points only. When a
        student reaches 18, their profile becomes their own account and parental
        access ends.
      </p>
      <p>
        Coaches who record children in lessons are responsible for obtaining the
        consent of the parent or guardian (see section 4 and the Terms). If you
        believe a child's data is held without the required consent, contact us
        at <strong>hello@useinbetween.com</strong> and we will delete it.
      </p>

      <h2>12. Cookies and our website</h2>
      <p>Our app does not use advertising or tracking cookies.</p>
      <p>
        Our website (useinbetween.com), where you join the waitlist, uses only:
      </p>
      <ul>
        <li>essential cookies needed to run the site;</li>
        <li>
          <strong>Vercel Web Analytics</strong> and{" "}
          <strong>Vercel Speed Insights</strong>, which are privacy-friendly and
          cookieless: they measure traffic and page performance without tracking
          you across other sites;
        </li>
        <li>
          <strong>Resend</strong>, to manage waitlist sign-ups and emails.
        </li>
      </ul>
      <p>
        We do not use advertising or cross-site tracking cookies on our website.
      </p>

      <h2>13. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. If we make material
        changes, we will take reasonable steps to notify you (for example, in the
        app or by email). The "Effective date" at the top shows when this version
        took effect.
      </p>

      <h2>14. Contact us</h2>
      <p>
        For any question or request about your privacy, or to exercise your
        rights, email <strong>hello@useinbetween.com</strong>.
      </p>

      <hr className="rule" />
      <p>
        Dance United Ltd, trading as InBetween. Company number 16555204.
        Registered office: 71–75 Shelton Street, Covent Garden, London, WC2H 9JQ,
        United Kingdom.
      </p>
    </LegalLayout>
  );
}
