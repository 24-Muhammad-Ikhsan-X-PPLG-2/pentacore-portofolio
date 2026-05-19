import type { Metadata } from "next";
import Link from "next/link";
import appName from "@/lib/appName";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: `${appName} - Privacy Policy`,
  description:
    "Privacy Policy for Pentacore Labs describing how we collect, use, and protect your information.",
};

const PrivacyPolicyPage = () => {
  return (
    <main className="min-h-screen bg-[#050915] text-white">
      <Navbar currentPage="privacy" />
      <div className="pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-4xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_rgba(2,66,255,0.08)] backdrop-blur-xl">
            <div className="mb-10">
              <p className="text-sm uppercase tracking-[0.3em] text-[#6c7ae0]">
                Privacy Policy
              </p>
              <h1 className="mt-4 text-4xl font-black sm:text-5xl">
                Privacy Policy
              </h1>
              <p className="mt-3 text-gray-300">Last updated: May 19, 2026</p>
            </div>

            <div className="space-y-10 text-gray-200">
              <section className="space-y-4">
                <p>
                  This Privacy Policy describes Our policies and procedures on
                  the collection, use and disclosure of Your information when
                  You use the Service and tells You about Your privacy rights
                  and how the law protects You.
                </p>
                <p>
                  We use Your Personal Data to provide and improve the Service.
                  By using the Service, You agree to the collection and use of
                  information in accordance with this Privacy Policy. This
                  Privacy Policy has been created with the help of the Privacy
                  Policy Generator.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  Interpretation and Definitions
                </h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Interpretation
                    </h3>
                    <p>
                      The words whose initial letters are capitalized have
                      meanings defined under the following conditions. The
                      following definitions shall have the same meaning
                      regardless of whether they appear in singular or in
                      plural.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Definitions
                    </h3>
                    <p>For the purposes of this Privacy Policy:</p>
                    <ul className="list-disc space-y-2 pl-6 text-gray-300">
                      <li>
                        <span className="font-semibold">Account</span> means a
                        unique account created for You to access our Service or
                        parts of our Service.
                      </li>
                      <li>
                        <span className="font-semibold">Affiliate</span> means
                        an entity that controls, is controlled by, or is under
                        common control with a party, where "control" means
                        ownership of 50% or more of the shares, equity interest
                        or other securities entitled to vote for election of
                        directors or other managing authority.
                      </li>
                      <li>
                        <span className="font-semibold">Company</span> (referred
                        to as either "the Company", "We", "Us" or "Our" in this
                        Privacy Policy) refers to Pentacore, Jl. Pd. Salak
                        No.109, Pd. Benda, Kec. Pamulang, Kota Tangerang
                        Selatan, Banten 15416, Indonesia.
                      </li>
                      <li>
                        <span className="font-semibold">Cookies</span> are small
                        files that are placed on Your computer, mobile device or
                        any other device by a website, containing the details of
                        Your browsing history on that website among its many
                        uses.
                      </li>
                      <li>
                        <span className="font-semibold">Country</span> refers
                        to: Indonesia.
                      </li>
                      <li>
                        <span className="font-semibold">Device</span> means any
                        device that can access the Service such as a computer, a
                        cell phone or a digital tablet.
                      </li>
                      <li>
                        <span className="font-semibold">Personal Data</span> (or
                        "Personal Information") is any information that relates
                        to an identified or identifiable individual.
                      </li>
                      <li>
                        We use "Personal Data" and "Personal Information"
                        interchangeably unless a law uses a specific term.
                      </li>
                      <li>
                        <span className="font-semibold">Service</span> refers to
                        the Website.
                      </li>
                      <li>
                        <span className="font-semibold">Service Provider</span>{" "}
                        means any natural or legal person who processes the data
                        on behalf of the Company. It refers to third-party
                        companies or individuals employed by the Company to
                        facilitate the Service, to provide the Service on behalf
                        of the Company, to perform services related to the
                        Service or to assist the Company in analyzing how the
                        Service is used.
                      </li>
                      <li>
                        <span className="font-semibold">Usage Data</span> refers
                        to data collected automatically, either generated by the
                        use of the Service or from the Service infrastructure
                        itself (for example, the duration of a page visit).
                      </li>
                      <li>
                        <span className="font-semibold">Website</span> refers to
                        Pentacore Labs, accessible from
                        https://www.pentacorelabs.biz.id.
                      </li>
                      <li>
                        <span className="font-semibold">You</span> means the
                        individual accessing or using the Service, or the
                        company, or other legal entity on behalf of which such
                        individual is accessing or using the Service, as
                        applicable.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  Collecting and Using Your Personal Data
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Types of Data Collected
                    </h3>
                    <p className="font-semibold text-white">Personal Data</p>
                    <p>
                      While using Our Service, We may ask You to provide Us with
                      certain personally identifiable information that can be
                      used to contact or identify You. Personally identifiable
                      information may include, but is not limited to:
                    </p>
                    <ul className="list-disc space-y-2 pl-6 text-gray-300">
                      <li>Email address</li>
                      <li>First name and last name</li>
                      <li>Usage Data</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Usage Data
                    </h3>
                    <p>
                      Usage Data is collected automatically when using the
                      Service.
                    </p>
                    <p>
                      Usage Data may include information such as Your Device's
                      Internet Protocol address (e.g. IP address), browser type,
                      browser version, the pages of our Service that You visit,
                      the time and date of Your visit, the time spent on those
                      pages, unique device identifiers and other diagnostic
                      data.
                    </p>
                    <p>
                      When You access the Service by or through a mobile device,
                      We may collect certain information automatically,
                      including, but not limited to, the type of mobile device
                      You use, Your mobile device's unique ID, the IP address of
                      Your mobile device, Your mobile operating system, the type
                      of mobile Internet browser You use, unique device
                      identifiers and other diagnostic data.
                    </p>
                    <p>
                      We may also collect information that Your browser sends
                      whenever You visit Our Service or when You access the
                      Service by or through a mobile device.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  Tracking Technologies and Cookies
                </h2>
                <p>
                  We use Cookies and similar tracking technologies to track the
                  activity on Our Service and store certain information.
                  Tracking technologies We use include beacons, tags, and
                  scripts to collect and track information and to improve and
                  analyze Our Service. The technologies We use may include:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-300">
                  <li>
                    <span className="font-semibold">
                      Cookies or Browser Cookies.
                    </span>{" "}
                    A cookie is a small file placed on Your Device. You can
                    instruct Your browser to refuse all Cookies or to indicate
                    when a Cookie is being sent. However, if You do not accept
                    Cookies, You may not be able to use some parts of our
                    Service.
                  </li>
                  <li>
                    <span className="font-semibold">Web Beacons.</span> Certain
                    sections of our Service and our emails may contain small
                    electronic files known as web beacons (also referred to as
                    clear gifs, pixel tags, and single-pixel gifs) that permit
                    the Company, for example, to count users who have visited
                    those pages or opened an email and for other related website
                    statistics (for example, recording the popularity of a
                    certain section and verifying system and server integrity).
                  </li>
                </ul>
                <p>
                  Cookies can be "Persistent" or "Session" Cookies. Persistent
                  Cookies remain on Your personal computer or mobile device when
                  You go offline, while Session Cookies are deleted as soon as
                  You close Your web browser.
                </p>
                <p>
                  Where required by law, we use non-essential cookies (such as
                  analytics, advertising, and remarketing cookies) only with
                  Your consent. You can withdraw or change Your consent at any
                  time using Our cookie preferences tool (if available) or
                  through Your browser/device settings. Withdrawing consent does
                  not affect the lawfulness of processing based on consent
                  before its withdrawal.
                </p>
                <div className="rounded-3xl bg-[#0f172a] p-6 text-gray-200">
                  <h3 className="text-xl font-semibold text-white">
                    We use both Session and Persistent Cookies for the purposes
                    set out below:
                  </h3>
                  <ul className="list-disc space-y-4 pl-6 pt-4">
                    <li>
                      <span className="font-semibold">
                        Necessary / Essential Cookies
                      </span>
                      <div className="pl-4 text-gray-300">
                        <p>Type: Session Cookies</p>
                        <p>Administered by: Us</p>
                        <p>
                          Purpose: These Cookies are essential to provide You
                          with services available through the Website and to
                          enable You to use some of its features. They help to
                          authenticate users and prevent fraudulent use of user
                          accounts. Without these Cookies, the services that You
                          have asked for cannot be provided, and We only use
                          these Cookies to provide You with those services.
                        </p>
                      </div>
                    </li>
                    <li>
                      <span className="font-semibold">
                        Cookies Policy / Notice Acceptance Cookies
                      </span>
                      <div className="pl-4 text-gray-300">
                        <p>Type: Persistent Cookies</p>
                        <p>Administered by: Us</p>
                        <p>
                          Purpose: These Cookies identify if users have accepted
                          the use of cookies on the Website.
                        </p>
                      </div>
                    </li>
                    <li>
                      <span className="font-semibold">
                        Functionality Cookies
                      </span>
                      <div className="pl-4 text-gray-300">
                        <p>Type: Persistent Cookies</p>
                        <p>Administered by: Us</p>
                        <p>
                          Purpose: These Cookies allow Us to remember choices
                          You make when You use the Website, such as remembering
                          your login details or language preference. The purpose
                          of these Cookies is to provide You with a more
                          personal experience and to avoid You having to
                          re-enter your preferences every time You use the
                          Website.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <p>
                  For more information about the cookies we use and your choices
                  regarding cookies, please visit our Cookies Policy or the
                  Cookies section of Our Privacy Policy.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  Use of Your Personal Data
                </h2>
                <p>
                  The Company may use Personal Data for the following purposes:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-300">
                  <li>
                    To provide and maintain our Service, including to monitor
                    the usage of our Service.
                  </li>
                  <li>
                    To manage Your Account: to manage Your registration as a
                    user of the Service. The Personal Data You provide can give
                    You access to different functionalities of the Service that
                    are available to You as a registered user.
                  </li>
                  <li>
                    For the performance of a contract: the development,
                    compliance and undertaking of the purchase contract for the
                    products, items or services You have purchased or of any
                    other contract with Us through the Service.
                  </li>
                  <li>
                    To contact You: To contact You by email, telephone calls,
                    SMS, or other equivalent forms of electronic communication,
                    such as a mobile application's push notifications regarding
                    updates or informative communications related to the
                    functionalities, products or contracted services, including
                    the security updates, when necessary or reasonable for their
                    implementation.
                  </li>
                  <li>
                    To provide You with news, special offers, and general
                    information about other goods, services and events which We
                    offer that are similar to those that you have already
                    purchased or inquired about unless You have opted not to
                    receive such information.
                  </li>
                  <li>
                    To manage Your requests: To attend and manage Your requests
                    to Us.
                  </li>
                  <li>
                    For business transfers: We may use Your Personal Data to
                    evaluate or conduct a merger, divestiture, restructuring,
                    reorganization, dissolution, or other sale or transfer of
                    some or all of Our assets, whether as a going concern or as
                    part of bankruptcy, liquidation, or similar proceeding, in
                    which Personal Data held by Us about our Service users is
                    among the assets transferred.
                  </li>
                  <li>
                    For other purposes: We may use Your information for other
                    purposes, such as data analysis, identifying usage trends,
                    determining the effectiveness of our promotional campaigns
                    and to evaluate and improve our Service, products, services,
                    marketing and your experience.
                  </li>
                </ul>
                <p>
                  We may share Your Personal Data in the following situations:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-300">
                  <li>
                    With Service Providers: We may share Your Personal Data with
                    Service Providers to monitor and analyze the use of our
                    Service, to contact You.
                  </li>
                  <li>
                    For business transfers: We may share or transfer Your
                    Personal Data in connection with, or during negotiations of,
                    any merger, sale of Company assets, financing, or
                    acquisition of all or a portion of Our business to another
                    company.
                  </li>
                  <li>
                    With Affiliates: We may share Your Personal Data with Our
                    affiliates, in which case we will require those affiliates
                    to honor this Privacy Policy. Affiliates include Our parent
                    company and any other subsidiaries, joint venture partners
                    or other companies that We control or that are under common
                    control with Us.
                  </li>
                  <li>
                    With business partners: We may share Your Personal Data with
                    Our business partners to offer You certain products,
                    services or promotions.
                  </li>
                  <li>
                    With other users: If Our Service offers public areas, when
                    You share Personal Data or otherwise interact in the public
                    areas with other users, such information may be viewed by
                    all users and may be publicly distributed outside.
                  </li>
                  <li>
                    With Your consent: We may disclose Your Personal Data for
                    any other purpose with Your consent.
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  Retention of Your Personal Data
                </h2>
                <p>
                  The Company will retain Your Personal Data only for as long as
                  is necessary for the purposes set out in this Privacy Policy.
                  We will retain and use Your Personal Data to the extent
                  necessary to comply with our legal obligations (for example,
                  if We are required to retain Your data to comply with
                  applicable laws), resolve disputes, and enforce our legal
                  agreements and policies.
                </p>
                <p>
                  Where possible, We apply shorter retention periods and/or
                  reduce identifiability by deleting, aggregating, or
                  anonymizing data. Unless otherwise stated, the retention
                  periods below are maximum periods ("up to") and We may delete
                  or anonymize data sooner when it is no longer needed for the
                  relevant purpose. We apply different retention periods to
                  different categories of Personal Data based on the purpose of
                  processing and legal obligations:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-300">
                  <li>
                    <span className="font-semibold">Account Information</span>
                    <div className="pl-4 text-gray-300">
                      User Accounts: retained for the duration of your account
                      relationship plus up to 24 months after account closure to
                      handle any post-termination issues or resolve disputes.
                    </div>
                  </li>
                  <li>
                    <span className="font-semibold">Customer Support Data</span>
                    <div className="pl-4 text-gray-300">
                      Support tickets and correspondence: up to 24 months from
                      the date of ticket closure to resolve follow-up inquiries,
                      track service quality, and defend against potential legal
                      claims. Chat transcripts: up to 24 months for quality
                      assurance and staff training purposes.
                    </div>
                  </li>
                  <li>
                    <span className="font-semibold">Usage Data</span>
                    <div className="pl-4 text-gray-300">
                      Website analytics data (cookies, IP addresses, device
                      identifiers): up to 24 months from the date of collection,
                      which allows us to analyze trends while respecting privacy
                      principles. Server logs (IP addresses, access times): up
                      to 24 months for security monitoring and troubleshooting
                      purposes.
                    </div>
                  </li>
                </ul>
                <p>
                  Usage Data is retained in accordance with the retention
                  periods described above, and may be retained longer only where
                  necessary for security, fraud prevention, or legal compliance.
                </p>
                <p>
                  We may retain Personal Data beyond the periods stated above
                  for different reasons:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-300">
                  <li>
                    Legal obligation: We are required by law to retain specific
                    data (e.g., financial records for tax authorities).
                  </li>
                  <li>
                    Legal claims: Data is necessary to establish, exercise, or
                    defend legal claims.
                  </li>
                  <li>
                    Your explicit request: You ask Us to retain specific
                    information.
                  </li>
                  <li>
                    Technical limitations: Data exists in backup systems that
                    are scheduled for routine deletion.
                  </li>
                </ul>
                <p>
                  You may request information about how long We will retain Your
                  Personal Data by contacting Us.
                </p>
                <p>
                  When retention periods expire, We securely delete or anonymize
                  Personal Data according to the following procedures:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-300">
                  <li>
                    Deletion: Personal Data is removed from Our systems and no
                    longer actively processed.
                  </li>
                  <li>
                    Backup retention: Residual copies may remain in encrypted
                    backups for a limited period consistent with our backup
                    retention schedule and are not restored except where
                    necessary for security, disaster recovery, or legal
                    compliance.
                  </li>
                  <li>
                    Anonymization: In some cases, We convert Personal Data into
                    anonymous statistical data that cannot be linked back to
                    You. This anonymized data may be retained indefinitely for
                    research and analytics.
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  Transfer of Your Personal Data
                </h2>
                <p>
                  Your information, including Personal Data, is processed at the
                  Company's operating offices and in any other places where the
                  parties involved in the processing are located. It means that
                  this information may be transferred to — and maintained on —
                  computers located outside of Your state, province, country or
                  other governmental jurisdiction where the data protection laws
                  may differ from those from Your jurisdiction.
                </p>
                <p>
                  Where required by applicable law, We will ensure that
                  international transfers of Your Personal Data are subject to
                  appropriate safeguards and supplementary measures where
                  appropriate. The Company will take all steps reasonably
                  necessary to ensure that Your data is treated securely and in
                  accordance with this Privacy Policy and no transfer of Your
                  Personal Data will take place to an organization or a country
                  unless there are adequate controls in place including the
                  security of Your data and other personal information.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  Delete Your Personal Data
                </h2>
                <p>
                  You have the right to delete or request that We assist in
                  deleting the Personal Data that We have collected about You.
                </p>
                <p>
                  Our Service may give You the ability to delete certain
                  information about You from within the Service.
                </p>
                <p>
                  You may update, amend, or delete Your information at any time
                  by signing in to Your Account, if you have one, and visiting
                  the account settings section that allows you to manage Your
                  personal information. You may also contact Us to request
                  access to, correct, or delete any Personal Data that You have
                  provided to Us.
                </p>
                <p>
                  Please note, however, that We may need to retain certain
                  information when we have a legal obligation or lawful basis to
                  do so.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  Disclosure of Your Personal Data
                </h2>
                <p>Business Transactions</p>
                <p>
                  If the Company is involved in a merger, acquisition or asset
                  sale, Your Personal Data may be transferred. We will provide
                  notice before Your Personal Data is transferred and becomes
                  subject to a different Privacy Policy.
                </p>
                <p>Law enforcement</p>
                <p>
                  Under certain circumstances, the Company may be required to
                  disclose Your Personal Data if required to do so by law or in
                  response to valid requests by public authorities (e.g. a court
                  or a government agency).
                </p>
                <p>Other legal requirements</p>
                <p>
                  The Company may disclose Your Personal Data in the good faith
                  belief that such action is necessary to:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-300">
                  <li>Comply with a legal obligation</li>
                  <li>
                    Protect and defend the rights or property of the Company
                  </li>
                  <li>
                    Prevent or investigate possible wrongdoing in connection
                    with the Service
                  </li>
                  <li>
                    Protect the personal safety of Users of the Service or the
                    public
                  </li>
                  <li>Protect against legal liability</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  Security of Your Personal Data
                </h2>
                <p>
                  The security of Your Personal Data is important to Us, but
                  remember that no method of transmission over the Internet, or
                  method of electronic storage is 100% secure. While We strive
                  to use commercially reasonable means to protect Your Personal
                  Data, We cannot guarantee its absolute security.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  Children's Privacy
                </h2>
                <p>
                  Our Service does not address anyone under the age of 16. We do
                  not knowingly collect personally identifiable information from
                  anyone under the age of 16. If You are a parent or guardian
                  and You are aware that Your child has provided Us with
                  Personal Data, please contact Us. If We become aware that We
                  have collected Personal Data from anyone under the age of 16
                  without verification of parental consent, We take steps to
                  remove that information from Our servers.
                </p>
                <p>
                  If We need to rely on consent as a legal basis for processing
                  Your information and Your country requires consent from a
                  parent, We may require Your parent's consent before We collect
                  and use that information.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  Links to Other Websites
                </h2>
                <p>
                  Our Service may contain links to other websites that are not
                  operated by Us. If You click on a third party link, You will
                  be directed to that third party's site. We strongly advise You
                  to review the Privacy Policy of every site You visit.
                </p>
                <p>
                  We have no control over and assume no responsibility for the
                  content, privacy policies or practices of any third party
                  sites or services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  Changes to this Privacy Policy
                </h2>
                <p>
                  We may update Our Privacy Policy from time to time. We will
                  notify You of any changes by posting the new Privacy Policy on
                  this page.
                </p>
                <p>
                  We will let You know via email and/or a prominent notice on
                  Our Service, prior to the change becoming effective and update
                  the "Last updated" date at the top of this Privacy Policy.
                </p>
                <p>
                  You are advised to review this Privacy Policy periodically for
                  any changes. Changes to this Privacy Policy are effective when
                  they are posted on this page.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy, You can
                  contact us:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-300">
                  <li>
                    By email:{" "}
                    <a
                      href="mailto:pentacorelabs@gmail.com"
                      className="text-[#7aa4ff] hover:underline"
                    >
                      pentacorelabs@gmail.com
                    </a>
                  </li>
                  <li>
                    By visiting this page on our website:{" "}
                    <Link
                      href="/contact"
                      className="text-[#7aa4ff] hover:underline"
                    >
                      https://www.pentacorelabs.biz.id/contact
                    </Link>
                  </li>
                  <li>
                    By phone:{" "}
                    <a
                      href="tel:+6281944250587"
                      className="text-[#7aa4ff] hover:underline"
                    >
                      +62 819-4425-0587
                    </a>
                  </li>
                  <li>
                    By mail: Jl. Pd. Salak No.109, Pd. Benda, Kec. Pamulang,
                    Kota Tangerang Selatan, Banten 15416, Indonesia
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default PrivacyPolicyPage;
