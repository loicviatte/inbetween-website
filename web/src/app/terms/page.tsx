/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — InBetween",
  description:
    "The terms that govern your access to and use of the InBetween app and related services.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      effectiveDate="19 September 2026"
      previousVersion="17 September 2026"
    >
      <p>
        These Terms of Service ("Terms") govern your access to and use of the
        InBetween mobile application and related services (together, the
        "Service"). Please read them carefully. By creating an account or using
        the Service, you agree to these Terms.
      </p>

      <div className="legal-note">
        <p>
          <strong>Note:</strong> InBetween is in <strong>private beta</strong>.
          The Service is provided for testing and evaluation, and parts of it
          may change, break, or be removed. See section 5.
        </p>
      </div>

      <h2>1. Who we are</h2>
      <p>
        The Service is operated by <strong>InBetween Technologies Ltd</strong>
        ("InBetween", "we", "us", "our"), a private limited company registered
        in England and Wales.
      </p>
      <ul>
        <li>
          <strong>Company number:</strong> 17468968
        </li>
        <li>
          <strong>Registered office:</strong> 71–75 Shelton Street, Covent
          Garden, London, WC2H 9JQ, United Kingdom
        </li>
        <li>
          <strong>Contact:</strong> hello@useinbetween.com
        </li>
      </ul>

      <h2>2. Acceptance of these Terms</h2>
      <p>
        By creating an account, accessing, or using the Service you confirm that
        you have read, understood, and agree to be bound by these Terms and by
        our <Link href="/privacy">Privacy Policy</Link>. If you do not agree, do
        not use the Service.
      </p>
      <p>
        If you use the Service on behalf of a dance studio, organisation, or
        another person, you confirm that you are authorised to accept these Terms
        on their behalf.
      </p>

      <h2>3. Accounts, age, and parents</h2>
      <p>Accounts on the Service are held by adults.</p>
      <p>
        If you are under 18, you may not hold your own account. A parent or legal
        guardian opens an account, accepts these Terms, and adds you as a student
        profile under that account. The parent or guardian is responsible for
        that profile and exercises all rights relating to it, including data
        protection rights.
      </p>
      <p>
        Students of any age may take part in lessons recorded through the Service
        under a profile managed by their parent or guardian.
      </p>
      <p>
        If you are 16 or 17, you may ask us to convert your profile into your own
        account. We will notify your parent or guardian before doing so. Where a
        student aged 16 or 17 holds their own account, their parent or guardian
        retains visibility of focus points only, and no longer has access to
        lesson recordings, questions or answers.
      </p>
      <p>
        When a student reaches 18, their profile becomes their own account. They
        become solely responsible for it and hold all rights over their data. The
        parent or guardian's access ends at that point. We will notify both the
        student and the parent or guardian before the transfer takes place.
      </p>

      <h2>4. Your account</h2>
      <ul>
        <li>
          You are responsible for the accuracy of the information you provide and
          for keeping your login credentials secure.
        </li>
        <li>
          You are responsible for all activity that happens under your account,
          including activity relating to any student profile you manage.
        </li>
        <li>
          Notify us at hello@useinbetween.com if you believe your account has
          been accessed without your permission.
        </li>
        <li>
          You may close your account at any time. We may suspend or close
          accounts that breach these Terms (see section 13).
        </li>
      </ul>

      <h2>5. Private beta</h2>
      <p>While the Service is in private beta:</p>
      <ul>
        <li>
          It is provided "as is" and "as available", for evaluation purposes, and
          may contain bugs, errors, or incomplete features.
        </li>
        <li>
          We may add, change, suspend, or remove features at any time, and we do
          not guarantee any particular level of availability, performance, or
          uptime.
        </li>
        <li>
          We may need to reset derived data, such as summaries, knowledge bases
          or indexes, in order to fix defects or migrate systems. We will not
          delete your source content in the course of such work, subject to the
          automatic deletion of audio described in section 9A(e). Source content
          means lesson audio, transcriptions, the notes you have created, and the
          focus points saved to your account.
        </li>
        <li>
          If we decide to end the beta or discontinue the Service, we will give
          you at least 30 days' notice, and your export tools will remain
          available throughout that period.
        </li>
        <li>You should keep your own copy of anything you consider critical.</li>
        <li>
          If you give us feedback, suggestions, or ideas, you grant us a free,
          perpetual, worldwide licence to use them to improve the Service, with no
          obligation to you. This applies only to feedback you deliberately send
          us about the Service. It does not apply to Your Content, including
          anything captured in a lesson recording.
        </li>
      </ul>

      <h2>6. How the Service works</h2>
      <p>
        InBetween helps dancers and coaches capture and train "focus points" from
        lessons. Coaches may record audio of lessons and notes; that audio is
        transcribed and analysed to generate focus points and summaries.
      </p>
      <p>
        We may also build a knowledge base for a coach's account by identifying
        recurring corrections, tips, metaphors and vocabulary from their lessons,
        so that their students can ask questions about their focus points and
        receive answers grounded in their own coach's teaching. Section 9A sets
        out how that material is owned, used, exported and deleted.
      </p>
      <p>
        To do all this we use trusted third-party providers, including AI and
        transcription providers that process content on our behalf (see our{" "}
        <Link href="/privacy">Privacy Policy</Link>).
      </p>

      <h2>7. Audio recordings and coach responsibilities</h2>
      <p>
        This section applies to any user (typically a coach) who records audio
        through the Service.
      </p>
      <ul>
        <li>
          You decide who and what you record. You are responsible for ensuring
          you have a lawful basis and, where required, the consent of every
          person captured in a recording (including students and, where a
          participant is a child, their parent or guardian) before you record.
          This includes where a recording may capture references to injuries,
          pain or physical limitations.
        </li>
        <li>
          You must comply with all applicable laws relating to recording,
          privacy, and data protection.
        </li>
        <li>
          You must not record anyone who has objected to being recorded, or in
          any setting where recording is not permitted.
        </li>
        <li>
          We process and store the recordings and the resulting transcriptions as
          data controller, in order to provide the Service, and we are
          responsible for keeping them secure (see our{" "}
          <Link href="/privacy">Privacy Policy</Link>). You remain responsible,
          independently of us, for your decision to record and for having the
          consent of the people captured. We do not act as your processor and we
          are not joint controllers with you.
        </li>
        <li>
          You agree to indemnify us against any claims arising from recordings you
          make in breach of this section or of applicable law.
        </li>
      </ul>

      <h2>8. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>
          use the Service for any unlawful purpose or in breach of any applicable
          law;
        </li>
        <li>
          upload content that is illegal, infringing, defamatory, or that you do
          not have the right to share;
        </li>
        <li>
          attempt to access accounts, data, or systems that are not yours;
        </li>
        <li>
          probe, scan, reverse-engineer, disrupt, or overload the Service or its
          infrastructure;
        </li>
        <li>
          use the Service to build a competing product, or to scrape or
          bulk-export data belonging to other users. This does not restrict your
          right to export Your Content using the export tools we provide, subject
          to section 9A(d);
        </li>
        <li>
          misuse the AI features (for example, to generate unlawful content).
        </li>
      </ul>

      <h2>9. Your content and our licence to use it</h2>
      <p>
        You keep ownership of the content you provide, including your notes,
        recordings, and transcriptions ("Your Content").
      </p>
      <p>
        You grant us a worldwide, non-exclusive, royalty-free licence to host,
        store, copy, transcribe, process, and analyse Your Content solely to
        operate, provide, and secure the Service for you, including through the
        third-party processors described in our{" "}
        <Link href="/privacy">Privacy Policy</Link>. This licence ends when Your
        Content is deleted, except for copies retained in routine backups for the
        period described in the Privacy Policy.
      </p>

      <h2>9A. Coach Knowledge</h2>
      <p>
        This section applies to any user who teaches through the Service. It sets
        out what happens to your teaching material.
      </p>

      <h3>(a) Ownership</h3>
      <p>
        The teaching material you create, or that is captured from your lessons,
        is yours. This includes lesson audio, voice notes, transcriptions, focus points,
        drills, corrections, tips, metaphors, vocabulary, notes, and any
        summaries derived from them. We refer to all of it as "Coach Knowledge".
        Nothing in these Terms transfers ownership of it to us.
      </p>
      <p>
        Ownership of Coach Knowledge is separate from our role under data
        protection law. You own the material; we act as data controller for any
        personal data it contains, as described in our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
      <p>
        <strong>Knowledge base and derived analysis.</strong> To answer your
        students' questions, we may build a knowledge base for your account by
        identifying recurring corrections, tips, metaphors and vocabulary from
        your lessons. The substance of that material is yours: the corrections,
        tips and metaphors themselves, and the words you use. The analysis is
        ours: the extraction, frequency, weighting, association, classification
        and indexing that make it searchable, together with the underlying data
        structures. Your knowledge base is used only to answer questions from
        students linked to your account, and never to answer questions for
        another coach's students.
      </p>

      <h3>(b) Purpose limitation</h3>
      <p>We distinguish between your content and interaction signals.</p>
      <p>
        <strong>Your content</strong> means lesson audio, voice notes, transcriptions, focus
        points, notes, and any text derived from them. We use your content solely
        to generate and deliver focus points, summaries and answers to you and to
        the students linked to your account. We do not use it to train,
        fine-tune, benchmark or evaluate any machine learning model, whether ours
        or a third party's. We do not sell, license, publish or share it. We do
        not use it for marketing, research or product development outside your own
        account. Our AI and transcription providers process it under business
        terms that prohibit them from using your content to train or improve
        their own models. A provider may retain content briefly for abuse
        monitoring, as described in that provider's own terms, and it is not used
        for any other purpose.
      </p>
      <p>
        <strong>Interaction signals</strong> means information about how the
        Service is used, not about what you teach: whether a focus point was
        kept, edited, deleted or marked as practised, how often an item was
        opened, how long a practice session lasted, and similar usage events.
        Interaction signals never include the text of your content, or any word,
        term or description taken from a lesson.
      </p>
      <p>
        Interaction signals may also include the category of a focus point, drawn
        from a fixed list we define (for example frame, timing, footwork,
        musicality, partnering). These categories are our own classification, not
        text taken from your lessons.
      </p>
      <p>
        We use interaction signals, in aggregated and de-identified form, to
        improve how the Service selects, ranks and presents focus points, and
        these improvements benefit all coaches using the Service. This process
        learns from the <strong>form</strong> of what works, such as length,
        structure and frequency, and never from the <strong>substance</strong> of
        what you teach. No text from your content is ever included, and no output
        delivered to another coach's students is generated from your material.
      </p>
      <p>
        <strong>Debugging exception.</strong> Where you report a problem with a
        specific transcription, focus point or answer, a named member of our team
        may access that item to diagnose it, with your agreement, limited to what
        is necessary, and logged. We will tell you when this access happens.
      </p>

      <h3>(c) Isolation between coaches</h3>
      <p>
        Each coach's knowledge is held in a logically isolated space. Our systems
        retrieve and reason over one coach's knowledge at a time. No output
        delivered to a student is generated from, or informed by, another coach's
        material.
      </p>
      <p>
        Where a student trains with several coaches, each coach's focus points and
        answers remain separately attributed and are never merged into a single
        blended output.
      </p>

      <h3>(d) Export</h3>
      <p>
        You may export your Coach Knowledge at any time from your account
        settings, in a machine-readable format. Your export includes original
        audio and voice notes where still retained (see paragraph (e)),
        transcriptions, your notes, the text of your focus
        points, the corrections, tips, metaphors and vocabulary identified from
        your lessons, and the associated dates and student references.
      </p>
      <p>
        Your export does not include our proprietary structures: our taxonomy and
        category system, ranking and prioritisation scores, embeddings and
        indexes, the weightings and associations that make your knowledge base
        searchable, or the sequencing logic used to present focus points. These
        are our intellectual property and are not part of Coach Knowledge.
      </p>
      <p>
        Your export is provided for your own use and that of your students. You
        may not use it to build, train or populate a product or service that
        competes with the Service, or make it available to a third party for that
        purpose. Nothing in this paragraph limits any statutory right you have to
        receive your personal data.
      </p>
      <p>Export is free and remains available for 30 days after your account closes.</p>

      <h3>(e) Deletion</h3>
      <p>
        <strong>Deletion on request.</strong> You may delete any item, or all of
        your Coach Knowledge, at any time. On request we permanently erase it from
        production systems within 30 days and from backups within 90 days. Erasure
        covers lesson audio, voice notes, transcriptions, focus points, notes,
        your knowledge base, vector embeddings, derived summaries and cached model
        context. We will confirm completion in writing.
      </p>
      <p>
        <strong>Automatic deletion of audio.</strong> Lesson audio and voice notes
        are automatically deleted 180 days after the lesson, whether or not your
        account remains active. They are removed from production systems on that
        date and from backups within 90 days afterwards. Transcriptions, focus
        points, notes and your knowledge base are not affected by this and remain
        available until you delete them or close your account.
      </p>
      <p>
        <strong>Notice before automatic deletion.</strong> We will notify you at
        least 14 days before audio is automatically deleted, so that you can
        export it first if you want to keep it. An export made after the deletion
        date will not include that audio, but will still include the transcription
        and everything derived from it.
      </p>
      <p>
        <strong>Student copies.</strong> Focus points already delivered to a
        student remain in that student's account by default; you may ask us to
        remove those at the same time. Students hold their own rights over their
        personal data, as set out in our Privacy Policy, and those rights are
        unaffected by this paragraph.
      </p>

      <h3>(f) Survival</h3>
      <p>
        Paragraphs (a), (b) and (c) survive termination of your account and of
        these Terms.
      </p>

      <h2>10. Our intellectual property</h2>
      <p>
        The Service, including the InBetween name, logo, software, design, and
        content we provide, is owned by or licensed to InBetween Technologies Ltd and is
        protected by intellectual-property laws. This includes the taxonomy,
        classifications, rankings, weightings, embeddings, indexes, data
        structures and sequencing logic described in section 9A(d).
      </p>
      <p>
        We grant you a limited, personal, non-transferable, revocable licence to
        use the Service in accordance with these Terms. No other rights are
        granted.
      </p>

      <h2>11. Third-party services</h2>
      <p>
        The Service relies on third-party providers (for example, hosting,
        transcription, AI analysis, and notifications). Your use of the Service is
        also subject to those providers' terms where applicable. We are not
        responsible for third-party services we do not control.
      </p>
      <p>
        Where we add or replace a provider that processes lesson content, we will
        notify account holders before the change takes effect, as set out in our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>12. Fees</h2>
      <p>
        The Service is provided free of charge during the private beta. We may
        introduce paid plans in the future; if we do, we will give you notice and
        you will not be charged without your agreement.
      </p>

      <h2>13. Suspension and termination</h2>
      <p>
        You may stop using the Service and delete your account at any time. We may
        suspend or terminate your access (in whole or in part) if you breach these
        Terms, if we reasonably believe your use creates risk or legal exposure,
        or if we discontinue the Service.
      </p>
      <p>
        On termination, the rights granted to you under these Terms end, and we
        will handle your data as described in our{" "}
        <Link href="/privacy">Privacy Policy</Link>. Where we terminate your
        access other than for a serious breach of these Terms, your export tools
        will remain available for 30 days.
      </p>

      <h2>14. Disclaimers</h2>
      <p>
        To the maximum extent permitted by law, the Service is provided "as is"
        and "as available" without warranties of any kind, whether express or
        implied, including any implied warranties of satisfactory quality, fitness
        for a particular purpose, and non-infringement.
      </p>
      <p>
        We do not warrant that the Service will be uninterrupted, error-free,
        secure, or that transcriptions or AI-generated outputs will be accurate or
        complete. AI-generated focus points, summaries and answers are suggestions
        and may contain mistakes; use your own judgement. Nothing generated by the
        Service is a substitute for medical, physiotherapy or other professional
        advice.
      </p>

      <h2>15. Limitation of liability</h2>
      <p>
        Nothing in these Terms limits liability that cannot be limited by law
        (including liability for death or personal injury caused by negligence, or
        for fraud).
      </p>
      <p>Subject to that, and to the maximum extent permitted by law:</p>
      <ul>
        <li>
          we are not liable for any loss of profits, loss of data, loss of
          goodwill, or any indirect or consequential loss; and
        </li>
        <li>
          our total liability to you arising out of or in connection with the
          Service and these Terms is limited to the total amount you have paid us
          for the Service in the 12 months before the claim. As the Service is
          provided free of charge during the private beta, that amount is £0.
        </li>
      </ul>
      <p>
        The limitations in this section do not apply to our breach of section
        9A(b) or section 9A(c).
      </p>
      <p>
        If you are a consumer, you have legal rights that these Terms do not
        affect.
      </p>

      <h2>16. Indemnity</h2>
      <p>
        You agree to indemnify and hold harmless InBetween Technologies Ltd against any
        claims, damages, losses, and costs (including reasonable legal fees)
        arising from your breach of these Terms, your misuse of the Service, or
        recordings or content you provide in breach of section 7 or applicable
        law.
      </p>

      <h2>17. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. If we make material changes,
        we will take reasonable steps to notify you (for example, in the app or by
        email). Changes take effect when posted, and your continued use of the
        Service means you accept the updated Terms.
      </p>

      <h2>18. Governing law and jurisdiction</h2>
      <p>
        These Terms and any dispute arising out of or in connection with them are
        governed by the laws of <strong>England and Wales</strong>, and the courts
        of England and Wales have exclusive jurisdiction. If you are a consumer
        resident in the EU/EEA, you also benefit from the mandatory
        consumer-protection rules of your country of residence, and nothing in
        these Terms affects those rights.
      </p>

      <h2>19. Contact</h2>
      <p>
        Questions about these Terms? Email{" "}
        <strong>hello@useinbetween.com</strong>.
      </p>

      <hr className="rule" />
      <p>
        InBetween Technologies Ltd. Company number 17468968. Registered in
        England and Wales.
      </p>
    </LegalLayout>
  );
}
