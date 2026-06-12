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
    <LegalLayout title="Terms of Service" effectiveDate="1 May 2026">
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
        The Service is operated by <strong>Dance United Ltd</strong>{" "}
        ("InBetween", "we", "us", "our"), a private limited company registered
        in England and Wales.
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
          <strong>Trading name:</strong> InBetween
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
        another person, you confirm that you are authorised to accept these
        Terms on their behalf.
      </p>

      <h2>3. Eligibility and age</h2>
      <p>
        You must be at least <strong>13 years old</strong> to create an account.
        If you are under the age of digital consent in your country of residence
        (which is 13 in the UK, and between 13 and 16 in the EU/EEA depending on
        the country), you may only use the Service with the consent and
        involvement of a parent or legal guardian, who accepts these Terms on
        your behalf.
      </p>
      <p>
        By using the Service you confirm that you meet these requirements.
      </p>

      <h2>4. Your account</h2>
      <ul>
        <li>
          You are responsible for the accuracy of the information you provide and
          for keeping your login credentials secure.
        </li>
        <li>
          You are responsible for all activity that happens under your account.
        </li>
        <li>
          Notify us at hello@useinbetween.com if you believe your account has
          been accessed without your permission.
        </li>
        <li>
          You may close your account at any time. We may suspend or close
          accounts that breach these Terms (see section 12).
        </li>
      </ul>

      <h2>5. Private beta</h2>
      <p>While the Service is in private beta:</p>
      <ul>
        <li>
          It is provided <strong>"as is" and "as available"</strong>, for
          evaluation purposes, and may contain bugs, errors, or incomplete
          features.
        </li>
        <li>
          We may add, change, suspend, or remove features at any time, and we do
          not guarantee any particular level of availability, performance, or
          uptime.
        </li>
        <li>
          We may <strong>delete data, reset accounts, or end the beta</strong>{" "}
          at any time. You should not rely on the Service as the sole store of
          any important information.
        </li>
        <li>
          If you give us feedback, suggestions, or ideas, you grant us a free,
          perpetual, worldwide licence to use them to improve the Service, with
          no obligation to you.
        </li>
      </ul>

      <h2>6. How the Service works</h2>
      <p>
        InBetween helps dancers and coaches capture and train "focus points"
        from lessons. Coaches may record audio of lessons and notes; that audio
        is transcribed and analysed to generate focus points and summaries. To
        do this we use trusted third-party providers, including AI providers
        that process content on our behalf (see our{" "}
        <Link href="/privacy">Privacy Policy</Link>).
      </p>

      <h2>7. Audio recordings and coach responsibilities</h2>
      <p>
        This section applies to any user (typically a coach) who records audio
        through the Service.
      </p>
      <ul>
        <li>
          <strong>You decide who and what you record.</strong> You are
          responsible for ensuring you have a lawful basis and, where required,
          the <strong>consent</strong> of every person captured in a recording
          (including students and, where a participant is a child, their parent
          or guardian) before you record.
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
          We process and store the recordings and the resulting transcriptions
          on your behalf to provide the Service, and we are responsible for
          keeping them secure (see our{" "}
          <Link href="/privacy">Privacy Policy</Link>). We do not control who you
          choose to record.
        </li>
      </ul>
      <p>
        You agree to indemnify us against any claims arising from recordings you
        make in breach of this section or of applicable law.
      </p>

      <h2>8. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>
          use the Service for any unlawful purpose or in breach of any
          applicable law;
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
          bulk-export data;
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
        store, copy, transcribe, process, and analyse Your Content{" "}
        <strong>
          solely to operate, provide, secure, and improve the Service for you
        </strong>
        , including through the third-party processors described in our Privacy
        Policy. This licence ends when Your Content is deleted, except for copies
        retained in routine backups for the period described in the Privacy
        Policy.
      </p>

      <h2>10. Our intellectual property</h2>
      <p>
        The Service, including the InBetween name, logo, software, design, and
        content we provide, is owned by or licensed to Dance United Ltd and is
        protected by intellectual-property laws. We grant you a limited,
        personal, non-transferable, revocable licence to use the Service in
        accordance with these Terms. No other rights are granted.
      </p>

      <h2>11. Third-party services</h2>
      <p>
        The Service relies on third-party providers (for example, hosting,
        transcription, AI analysis, and notifications). Your use of the Service
        is also subject to those providers' terms where applicable. We are not
        responsible for third-party services we do not control.
      </p>

      <h2>12. Price</h2>
      <p>
        The Service is provided <strong>free of charge</strong> during the
        private beta. We may introduce paid plans in the future; if we do, we
        will give you notice and you will not be charged without your agreement.
      </p>

      <h2>13. Suspension and termination</h2>
      <p>
        You may stop using the Service and delete your account at any time. We
        may suspend or terminate your access (in whole or in part) if you breach
        these Terms, if we reasonably believe your use creates risk or legal
        exposure, or if we discontinue the Service. On termination, the rights
        granted to you under these Terms end, and we will handle your data as
        described in our <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>14. Disclaimers</h2>
      <p>
        To the maximum extent permitted by law, the Service is provided{" "}
        <strong>"as is" and "as available"</strong> without warranties of any
        kind, whether express or implied, including any implied warranties of
        satisfactory quality, fitness for a particular purpose, and
        non-infringement. We do not warrant that the Service will be
        uninterrupted, error-free, secure, or that transcriptions or
        AI-generated outputs will be accurate or complete. AI-generated focus
        points and summaries are suggestions and may contain mistakes; use your
        own judgement.
      </p>

      <h2>15. Limitation of liability</h2>
      <p>
        Nothing in these Terms limits liability that cannot be limited by law
        (including liability for death or personal injury caused by negligence,
        or for fraud).
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
          provided <strong>free of charge</strong> during the private beta, that
          amount is <strong>£0</strong>.
        </li>
      </ul>
      <p>
        If you are a consumer, you have legal rights that these Terms do not
        affect.
      </p>

      <h2>16. Indemnity</h2>
      <p>
        You agree to indemnify and hold harmless Dance United Ltd against any
        claims, damages, losses, and costs (including reasonable legal fees)
        arising from your breach of these Terms, your misuse of the Service, or
        recordings or content you provide in breach of section 7 or applicable
        law.
      </p>

      <h2>17. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. If we make material
        changes, we will take reasonable steps to notify you (for example, in
        the app or by email). Changes take effect when posted, and your continued
        use of the Service means you accept the updated Terms.
      </p>

      <h2>18. Governing law and jurisdiction</h2>
      <p>
        These Terms and any dispute arising out of or in connection with them
        are governed by the laws of <strong>England and Wales</strong>, and the
        courts of England and Wales have exclusive jurisdiction. If you are a
        consumer resident in the EU/EEA, you also benefit from the mandatory
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
        Dance United Ltd, trading as InBetween. Company number 16555204.
        Registered in England and Wales.
      </p>
    </LegalLayout>
  );
}
