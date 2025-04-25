"use client";

import ContentSection from "@/components/content-section";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import React, { useRef } from "react";

const content = (
  <div>
    <p>Effective Date: April 20</p>
    <p>2025 Last Updated: April 20, 2025</p>
    <p>
      This Privacy Policy describes how Digics, a sole proprietorship (eenmanszaak) 
      registered in the Netherlands with the Dutch Chamber of Commerce (KVK), 
      collects, uses, and discloses your information when you use the Revasi 
      reservation management system (&quot;Software&quot;).
    </p>

    <div className="my-4">
      <h2 className="text-lg font-bold">1. Information We Collect</h2>
      <p className="mb-2">
        <span className="font-bold">Personal Information</span>: When you register for and use our Software, 
        we collect information that can be used to identify you, such as your name, email address, 
        phone number, and billing information.
      </p>
      <p className="mb-2">
        <span className="font-bold">Business Information</span>: We collect information about your 
        restaurant or business, including its name, address, operating hours, seating capacity, 
        and menu details.
      </p>
      <p className="mb-2">
        <span className="font-bold">Customer Data</span>: Through your use of our Software, we may 
        process information about your customers, including their names, contact details, 
        reservation dates and times, party sizes, dining preferences, and visit history.
      </p>
      <p className="mb-2">
        <span className="font-bold">Usage Data</span>: We collect information about how you use 
        our Software, including log data, device information, IP address, browser type, 
        pages viewed, features used, and other analytics data.
      </p>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">2. How We Use Your Information</h2>
      <p className="mb-2">We use the information we collect to:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Provide, maintain, and improve our Software</li>
        <li>Process and manage reservations for your business</li>
        <li>Process your payments and manage your account</li>
        <li>Communicate with you about your account or our Software</li>
        <li>Send you marketing communications (with your consent)</li>
        <li>Analyze usage patterns to improve user experience</li>
        <li>Detect and prevent fraud and security incidents</li>
        <li>Comply with legal obligations</li>
      </ul>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">3. Data Sharing and Disclosure</h2>
      <p className="mb-2">We may share your information with:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Service providers who help us operate our business</li>
        <li>Payment processors to complete transactions</li>
        <li>Professional advisors, such as lawyers and accountants</li>
        <li>Authorities when required by law or to protect rights</li>
        <li>Business partners with your consent</li>
      </ul>
      <p className="mt-2">
        We do not sell your personal information or your customers&apos; data to third parties.
      </p>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">4. Data Retention</h2>
      <p>
        We retain your information for as long as your account is active or as needed to provide 
        you with our Software. We will also retain and use your information as necessary to comply 
        with legal obligations, resolve disputes, and enforce our agreements. After account 
        termination, we may retain certain data in anonymized form for analytical purposes.
      </p>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">5. Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to protect the security of 
        your personal information. However, no electronic transmission or storage system is 100% 
        secure, and we cannot guarantee absolute security. We will notify you of any security 
        breach as required by applicable law.
      </p>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">6. Your Rights</h2>
      <p className="mb-2">
        Under the General Data Protection Regulation (GDPR) and other applicable data protection 
        laws, you may have certain rights regarding your personal information, including:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Right to access your personal information</li>
        <li>Right to correct inaccurate or incomplete data</li>
        <li>Right to delete your personal information</li>
        <li>Right to restrict processing of your data</li>
        <li>Right to data portability</li>
        <li>Right to object to processing of your data</li>
        <li>Right to withdraw consent at any time</li>
      </ul>
      <p className="mt-2">
        To exercise these rights, please contact us at privacy@revasi.net.
      </p>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">7. International Data Transfers</h2>
      <p>
        Your information may be transferred to and processed in countries other than your country 
        of residence. These countries may have data protection laws that are different from the 
        laws of your country. When we transfer personal data outside the European Economic Area 
        (EEA), we ensure a similar degree of protection by implementing appropriate safeguards, 
        such as Standard Contractual Clauses approved by the European Commission.
      </p>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">8. Children&apos;s Privacy</h2>
      <p>
        Our Software is not intended for use by children under 16 years of age. We do not knowingly 
        collect personal information from children under 16. If you become aware that a child has 
        provided us with personal information without parental consent, please contact us, and we 
        will take steps to remove such information.
      </p>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">9. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any changes by 
        posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. You are 
        advised to review this Privacy Policy periodically for any changes.
      </p>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">10. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or our data practices, please contact us at:
      </p>
      <p className="mt-2">
        Email: privacy@revasi.net<br />
        Website: https://www.revasi.net<br />
        Address: [Your Business Address in the Netherlands]
      </p>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">11. Data Protection Authority</h2>
      <p>
        If you have concerns about our data processing activities that we have not satisfactorily 
        addressed, you have the right to lodge a complaint with the Dutch Data Protection Authority 
        (Autoriteit Persoonsgegevens) at https://autoriteitpersoonsgegevens.nl.
      </p>
    </div>
  </div>
);

const Page = () => {
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
        title="Revasi Privacy Policy"
        content={content}
      />
    </div>
  );
};

export default Page; 