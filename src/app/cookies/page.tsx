"use client";

import ContentSection from "@/components/content-section";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import React, { useRef } from "react";

const content = (
  <div>
    <p>Effective Date: April 20</p>
    <p>2025 Last Updated: April 20, 2025</p>
    <p>
      This Cookie Policy explains how Digics, a sole proprietorship (eenmanszaak) 
      registered in the Netherlands with the Dutch Chamber of Commerce (KVK), 
      uses cookies and similar technologies when you visit our website (www.revasi.net) 
      or use the Revasi reservation management system ("Software").
    </p>

    <div className="my-4">
      <h2 className="text-lg font-bold">1. What Are Cookies</h2>
      <p>
        Cookies are small text files that are stored on your computer or mobile device 
        when you visit a website. They allow the website to recognize your device and 
        remember if you have been to the website before. Cookies are a very common web 
        technology; most websites use cookies and have done so for years. Cookies are 
        widely used to make websites work more efficiently and provide valuable information 
        to website owners.
      </p>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">2. Types of Cookies We Use</h2>
      <p className="mb-2">We use different types of cookies for various reasons:</p>
      
      <p className="font-bold mb-1">Essential Cookies</p>
      <p className="mb-2">
        These cookies are necessary for the website and Software to function properly. 
        They enable basic functions like page navigation, secure areas access, and 
        remembering your preferences. The website cannot function properly without these cookies.
      </p>
      
      <p className="font-bold mb-1">Performance Cookies</p>
      <p className="mb-2">
        These cookies help us understand how visitors interact with our website and Software 
        by collecting information anonymously. We use this data to improve how our website and 
        Software works.
      </p>
      
      <p className="font-bold mb-1">Functionality Cookies</p>
      <p className="mb-2">
        These cookies allow the website and Software to remember choices you make and provide 
        enhanced, personalized features. They may also be used to provide services you have requested.
      </p>
      
      <p className="font-bold mb-1">Targeting/Advertising Cookies</p>
      <p className="mb-2">
        These cookies are used to deliver advertisements more relevant to you and your interests. 
        They are also used to limit the number of times you see an advertisement and help measure 
        the effectiveness of advertising campaigns.
      </p>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">3. Specific Cookies We Use</h2>
      <p className="mb-2">The following table provides more information about the individual cookies we use and the purposes for which we use them:</p>
      
      <table className="w-full border-collapse mb-4">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="border p-2 text-left">Cookie Name</th>
            <th className="border p-2 text-left">Type</th>
            <th className="border p-2 text-left">Purpose</th>
            <th className="border p-2 text-left">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">session_id</td>
            <td className="border p-2">Essential</td>
            <td className="border p-2">Maintains user session state</td>
            <td className="border p-2">Session</td>
          </tr>
          <tr>
            <td className="border p-2">auth_token</td>
            <td className="border p-2">Essential</td>
            <td className="border p-2">Authentication tracking</td>
            <td className="border p-2">30 days</td>
          </tr>
          <tr>
            <td className="border p-2">_ga</td>
            <td className="border p-2">Performance</td>
            <td className="border p-2">Google Analytics - Distinguishes users</td>
            <td className="border p-2">2 years</td>
          </tr>
          <tr>
            <td className="border p-2">_gid</td>
            <td className="border p-2">Performance</td>
            <td className="border p-2">Google Analytics - Distinguishes users</td>
            <td className="border p-2">24 hours</td>
          </tr>
          <tr>
            <td className="border p-2">pref_lang</td>
            <td className="border p-2">Functionality</td>
            <td className="border p-2">Remembers user language preference</td>
            <td className="border p-2">1 year</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">4. Third-Party Cookies</h2>
      <p>
        Some cookies are placed by third parties on our website and Software. These third parties 
        may include analytics providers (like Google Analytics), who help us understand how you use 
        our website and Software, or advertising partners, who may use cookies to show you relevant 
        advertisements on other websites. These third-party cookies are governed by the respective 
        third party's privacy policy, not this Cookie Policy.
      </p>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">5. Managing Cookies</h2>
      <p className="mb-2">
        Most web browsers allow you to manage your cookie preferences. You can set your browser to 
        refuse cookies, or to alert you when cookies are being sent. The methods for doing so vary 
        from browser to browser, and from version to version. However, blocking some or all cookies 
        may affect the functionality of our website and Software.
      </p>
      <p className="mb-2">
        You can generally find out how to manage cookies in your browser settings by:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Clicking on the "Help" option in your browser menu</li>
        <li>Searching your browser provider's website</li>
        <li>Visiting www.aboutcookies.org or www.allaboutcookies.org for more information</li>
      </ul>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">6. Your Consent</h2>
      <p>
        By using our website and Software, you consent to the use of cookies as described in this 
        Cookie Policy. When you first visit our website, a banner will inform you about our use of 
        cookies and give you the option to accept or decline non-essential cookies. You can change 
        your cookie preferences at any time by adjusting your browser settings.
      </p>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">7. Changes to This Cookie Policy</h2>
      <p>
        We may update this Cookie Policy from time to time to reflect changes in technology, 
        regulation, or our business practices. Any changes will become effective when we post the 
        revised Cookie Policy. We will notify you of any material changes by posting a notice on our 
        website or through other appropriate communication channels.
      </p>
    </div>

    <div className="my-4">
      <h2 className="text-lg font-bold">8. Contact Us</h2>
      <p>
        If you have any questions about our use of cookies, please contact us at:
      </p>
      <p className="mt-2">
        Email: privacy@revasi.net<br />
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
        title="Revasi Cookie Policy"
        content={content}
      />
    </div>
  );
};

export default page; 