"use client";

import ContentSection from "@/components/content-section";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import React, { useRef } from "react";

const content = (
  <div>
    <p>Effective Date: April 20</p>
    <p>2025 Last Updated: April 20, 2025</p>
    <p>
      This Security Policy outlines the security measures and practices implemented by Digics, 
      a sole proprietorship (eenmanszaak) registered in the Netherlands with the Dutch Chamber 
      of Commerce (KVK), to protect your data when using the Revasi reservation management 
      system (&quot;Software&quot;).
    </p>
    <p className="mt-2">
      At Revasi, we are committed to maintaining the security and confidentiality of 
      our customers&apos; data. This policy describes our security practices and the measures 
      we take to protect your information.
    </p>

    <div className="my-4">
      <h2 className="text-lg font-bold">1. Infrastructure Security</h2>
      <p className="mb-2">
        Our infrastructure is hosted on industry-leading cloud providers that maintain robust 
        physical and environmental security controls. These providers implement state-of-the-art 
        security measures to protect their facilities, including:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>24/7 physical security with surveillance systems</li>
        <li>Access control mechanisms requiring multiple authentication factors</li>
        <li>Fire detection and suppression systems</li>
        <li>Redundant power supply systems</li>
        <li>Environmental controls for temperature and humidity</li>
        <li>Regular security audits and compliance certifications</li>
      </ul>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">2. Network Security</h2>
      <p className="mb-2">
        We implement multiple layers of network security to protect our systems and your data, including:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Advanced firewalls and intrusion detection systems</li>
        <li>Regular network vulnerability scanning</li>
        <li>DDoS (Distributed Denial of Service) protection</li>
        <li>Regular security patching and updates</li>
        <li>Network traffic monitoring and logging</li>
        <li>Virtual private network (VPN) for secure remote access</li>
      </ul>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">3. Data Security</h2>
      <p className="mb-2">
        Protecting your data is our highest priority. We implement the following data security measures:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Encryption of data in transit using TLS 1.2 or higher</li>
        <li>Encryption of sensitive data at rest using AES-256</li>
        <li>Database access controls and authentication</li>
        <li>Regular data backups with secure storage</li>
        <li>Strict data retention policies</li>
        <li>Secure data deletion processes when requested</li>
      </ul>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">4. Application Security</h2>
      <p className="mb-2">
        Our Software is designed with security in mind at every stage of development. Our application security measures include:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Secure coding practices following OWASP guidelines</li>
        <li>Regular security code reviews</li>
        <li>Automated and manual security testing</li>
        <li>Protection against common web vulnerabilities (XSS, CSRF, SQL injection, etc.)</li>
        <li>Regular third-party security audits and penetration testing</li>
        <li>Software development life cycle (SDLC) with security gates</li>
      </ul>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">5. Authentication and Access Control</h2>
      <p className="mb-2">
        We implement strict authentication and access control measures, including:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Strong password policies (minimum length, complexity requirements)</li>
        <li>Multi-factor authentication (MFA) support</li>
        <li>Role-based access control (RBAC)</li>
        <li>Session timeout and automatic logout features</li>
        <li>Account lockout after failed login attempts</li>
        <li>Regular access reviews and privileged account management</li>
      </ul>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">6. Security Incident Response</h2>
      <p className="mb-2">
        Despite our best efforts, security incidents may still occur. Our incident response plan includes:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Defined incident response procedures</li>
        <li>Dedicated incident response team</li>
        <li>Regular incident response training and simulations</li>
        <li>Continuous monitoring and alerting systems</li>
        <li>Timely notification to affected customers</li>
        <li>Post-incident analysis and improvement processes</li>
      </ul>
      <p className="mt-2">
        In the event of a security breach that affects your data, we will notify you promptly in 
        accordance with applicable laws and regulations, including the General Data Protection 
        Regulation (GDPR).
      </p>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">7. Employee Security</h2>
      <p className="mb-2">
        Our security measures extend to our employees and contractors:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Background checks for all employees</li>
        <li>Security awareness training and education</li>
        <li>Confidentiality agreements</li>
        <li>Least privilege access principles</li>
        <li>Regular security policy reviews and updates</li>
        <li>Secure device management and endpoint protection</li>
      </ul>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">8. Compliance</h2>
      <p className="mb-2">
        We are committed to maintaining compliance with relevant industry standards and regulations:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>General Data Protection Regulation (GDPR)</li>
        <li>ISO 27001 principles (Information Security Management)</li>
        <li>PCI DSS (Payment Card Industry Data Security Standard) for payment processing</li>
        <li>Regular compliance assessments and audits</li>
        <li>Documentation of security policies and procedures</li>
      </ul>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">9. Vendor Management</h2>
      <p>
        We carefully select and monitor our vendors and service providers to ensure they meet our 
        security standards. Our vendor management process includes security assessments, contractual 
        security requirements, and regular review of vendor security practices.
      </p>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">10. Customer Responsibilities</h2>
      <p className="mb-2">
        While we implement robust security measures, security is a shared responsibility. We recommend 
        that our customers:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Use strong, unique passwords for your Revasi account</li>
        <li>Enable multi-factor authentication when available</li>
        <li>Keep your access credentials confidential</li>
        <li>Ensure your devices have up-to-date security patches and antivirus protection</li>
        <li>Promptly report any suspected security incidents or unauthorized access</li>
        <li>Manage user access appropriately within your organization</li>
      </ul>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">11. Security Updates</h2>
      <p>
        We continuously improve our security measures and may update this Security Policy from time 
        to time. When we make significant changes, we will notify our customers and update the 
        &quot;Last Updated&quot; date at the top of this policy.
      </p>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">12. Contact Us</h2>
      <p>
        If you have any questions about our security practices or want to report a security concern, 
        please contact us at:
      </p>
      <p className="mt-2">
        Email: security@revasi.net<br />
        Website: https://www.revasi.net<br />
        Address: [Your Business Address in the Netherlands]
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
        title="Revasi Security Policy"
        content={content}
      />
    </div>
  );
};

export default Page; 