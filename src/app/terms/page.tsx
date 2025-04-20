"use client";

import ContentSection from "@/components/content-section";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import React, { useRef } from "react";

const content = (
  <div>
    <p>Effective Date: April 20</p>
    <p>2025 Last Updated: April 20, 2025</p>
    <p>
      These Terms and Conditions ("Terms") govern your access to and use of the Revasi
      reservation management system ("Software") and the Revasi website (www.revasi.net), 
      provided by Digics, a sole proprietorship (eenmanszaak) registered in the Netherlands 
      with the Dutch Chamber of Commerce (KVK).
    </p>
    <p className="mt-2">
      By accessing or using our Software and website, you agree to be bound by these Terms. 
      If you disagree with any part of the Terms, you may not access the Software or website.
    </p>

    <div className="my-4">
      <h2 className="text-lg font-bold">1. Definitions</h2>
      <p className="mb-2">
        For the purpose of these Terms:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>"Software" refers to the Revasi reservation management system.</li>
        <li>"Website" refers to www.revasi.net.</li>
        <li>"Digics," "we," "us," and "our" refer to Digics, a Dutch sole proprietorship.</li>
        <li>"You" and "your" refer to the individual or entity accessing or using the Software and website.</li>
        <li>"Content" refers to information, data, text, software, images, videos, or other materials.</li>
        <li>"Intellectual Property Rights" means all patent rights, copyright rights, mask work rights, moral rights, rights of publicity, trademark, trade dress and service mark rights, goodwill, trade secret rights, and other intellectual property rights as may now exist or hereafter come into existence, and all applications and registrations, renewals and extensions thereof, under the laws of any country, territory or other jurisdiction.</li>
      </ul>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">2. Account Registration</h2>
      <p className="mb-2">
        To access and use the Software, you must register for an account. When you register, you agree to:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Provide true, accurate, current, and complete information about yourself as prompted by the registration form.</li>
        <li>Maintain and promptly update your registration information to keep it true, accurate, current, and complete.</li>
        <li>Keep your password confidential and notify us immediately of any unauthorized use of your account.</li>
        <li>Be solely responsible for any activities or actions under your account, whether or not you have authorized such activities or actions.</li>
      </ul>
      <p className="mt-2">
        We reserve the right to suspend or terminate your account if any information provided during registration or thereafter proves to be inaccurate, not current, or incomplete.
      </p>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">3. Subscription and Payment</h2>
      <p className="mb-2">
        Access to the Software requires a paid subscription. Subscription details, including pricing, features, and payment terms, are provided on our website or in the order form. You agree to pay all fees specified in the applicable order form.
      </p>
      <p className="mb-2">
        All payments are non-refundable, except as expressly provided in these Terms or as required by applicable law. Fees are exclusive of taxes, which are your responsibility. We may change our fees at any time, but changes will not apply to existing subscriptions until the next renewal period.
      </p>
      <p className="mb-2">
        If you fail to make any payment when due, we may suspend your access to the Software until all outstanding payments are received.
      </p>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">4. Acceptable Use</h2>
      <p className="mb-2">
        You agree to use the Software and website only for lawful purposes and in accordance with these Terms. You agree not to:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Use the Software or website in any way that violates any applicable law or regulation.</li>
        <li>Use the Software or website to transmit any material that is defamatory, offensive, or otherwise objectionable.</li>
        <li>Attempt to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the Software or website.</li>
        <li>Use any robot, spider, crawler, scraper, or other automated means to access the Software or website.</li>
        <li>Bypass or circumvent measures employed to prevent or limit access to the Software or website.</li>
        <li>Introduce any viruses, Trojan horses, worms, logic bombs, or other harmful material.</li>
        <li>Collect or harvest any personally identifiable information from other users.</li>
        <li>Impersonate or attempt to impersonate Digics, a Digics employee, another user, or any other person or entity.</li>
        <li>Engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Software or website, or which may harm Digics or users of the Software or website.</li>
      </ul>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">5. Intellectual Property Rights</h2>
      <p className="mb-2">
        The Software, website, and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Digics, its licensors, or other providers of such material and are protected by Dutch and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
      </p>
      <p className="mb-2">
        These Terms permit you to use the Software and website for your business purposes only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Software or website, except as follows:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.</li>
        <li>You may store files that are automatically cached by your Web browser for display enhancement purposes.</li>
        <li>You may print or download one copy of a reasonable number of pages of the website for your own personal, non-commercial use and not for further reproduction, publication, or distribution.</li>
        <li>If we provide social media features with certain content, you may take such actions as are enabled by such features.</li>
      </ul>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">6. User Content</h2>
      <p className="mb-2">
        The Software may allow you to post, submit, publish, display, or transmit content. Any content you post to the Software or website will be considered non-confidential and non-proprietary. By providing any content, you grant us and our affiliates and service providers a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform, and display such content.
      </p>
      <p className="mb-2">
        You represent and warrant that:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>You own or control all rights in and to the content you provide.</li>
        <li>All your content is accurate and does not violate these Terms.</li>
        <li>Your content does not violate the rights of any person or entity.</li>
      </ul>
      <p className="mb-2">
        We have the right to remove any content you post on the Software or website at our sole discretion.
      </p>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">7. Disclaimer of Warranties</h2>
      <p className="mb-2">
        YOUR USE OF THE SOFTWARE AND WEBSITE IS AT YOUR OWN RISK. THE SOFTWARE AND WEBSITE ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER DIGICS NOR ANY PERSON ASSOCIATED WITH DIGICS MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SOFTWARE OR WEBSITE.
      </p>
      <p className="mb-2">
        THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
      </p>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">8. Limitation of Liability</h2>
      <p className="mb-2">
        TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL DIGICS, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SOFTWARE, WEBSITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE SOFTWARE OR WEBSITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE.
      </p>
      <p className="mb-2">
        THE FOREGOING DOES NOT AFFECT ANY LIABILITY WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
      </p>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">9. Indemnification</h2>
      <p>
        You agree to defend, indemnify, and hold harmless Digics, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Software or website.
      </p>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">10. Term and Termination</h2>
      <p className="mb-2">
        These Terms shall remain in full force and effect while you use the Software or website. We may terminate or suspend your account and access to the Software or website immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
      </p>
      <p className="mb-2">
        Upon termination, your right to use the Software and website will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
      </p>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">11. Changes to Terms</h2>
      <p>
        We may revise and update these Terms from time to time at our sole discretion. All changes are effective immediately when we post them, and apply to all access to and use of the Software and website thereafter. Your continued use of the Software or website following the posting of revised Terms means that you accept and agree to the changes.
      </p>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">12. Governing Law and Jurisdiction</h2>
      <p>
        These Terms and any dispute or claim arising out of or in connection with them or their subject matter or formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the laws of the Netherlands. Any legal suit, action, or proceeding arising out of, or related to, these Terms or the Software or website shall be instituted exclusively in the courts located in Amsterdam, Netherlands, although we retain the right to bring any suit, action, or proceeding against you for breach of these Terms in your country of residence or any other relevant country.
      </p>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">13. Waiver and Severability</h2>
      <p className="mb-2">
        No waiver by Digics of any term or condition set out in these Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of Digics to assert a right or provision under these Terms shall not constitute a waiver of such right or provision.
      </p>
      <p className="mb-2">
        If any provision of these Terms is held by a court or other tribunal of competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of the Terms will continue in full force and effect.
      </p>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">14. Entire Agreement</h2>
      <p>
        These Terms, our Privacy Policy, and any Order Form constitute the sole and entire agreement between you and Digics regarding the Software and website and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding the Software and website.
      </p>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">15. Contact Information</h2>
      <p>
        If you have any questions about these Terms, please contact us at:
      </p>
      <p className="mt-2">
        Email: legal@revasi.net<br />
        Website: https://www.revasi.net<br />
        Address: [Your Business Address in the Netherlands]
      </p>
    </div>
  </div>
);

const page = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="overflow-auto bg-background h-screen px-8 pb-16 pt-16"
      ref={containerRef}
    >
      <div className="pointer-events-none absolute left-0 top-0 h-24 w-full bg-white to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-neutral-950" />
      <div className="pointer-events-none absolute left-0 top-0 w-full">
        <div className="absolute left-0 top-0 h-0.5 w-full dark:bg-[#111111]" />
        <ScrollProgress
          className="absolute top-0 h-0.5 bg-[linear-gradient(to_right,rgba(0,0,0,0),#111111_75%,#111111_100%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0),#ffffff_75%,#ffffff_100%)]"
          containerRef={containerRef}
          springOptions={{
            stiffness: 280,
            damping: 18,
            mass: 0.3,
          }}
        />
      </div>
      <ContentSection
        title="Revasi Terms and Conditions"
        content={content}
      />
    </div>
  );
};

export default page; 