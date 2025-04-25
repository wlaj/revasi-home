"use client";

import ContentSection from "@/components/content-section";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import React, { useRef } from "react";

const content = (
  <div>
    <p>Effective Date: April 20</p>
    <p>2025 Last Updated: April 20, 2025</p>
    <p>
      This Software License Agreement (&quot;Agreement&quot;) governs the use of the
      Revasi reservations management system (&quot;Software&quot;) provided by Digics, a
      sole proprietorship (eenmanszaak) registered in the Netherlands with the
      Dutch Chamber of Commerce (KVK). By accessing or using the Software, you
      (&quot;Customer&quot;) agree to be bound by the terms of this Agreement.
    </p>
    <div className="my-4">
      <h2 className="text-lg font-bold">1. License Grant</h2>
      <p>
        <span className="font-bold">Software</span> means the Revasi
        reservations management system, including all associated documentation,
        updates, and support services.
      </p>
      <p>
        Subject to the terms of this Agreement, Digics grants to the Customer a
        non-exclusive, non-transferable, limited right to access and use the
        Software for internal business purposes only. The Customer may permit its
        employees and authorized contractors to use the Software solely for the
        Customer&apos;s benefit, provided that the Customer shall be responsible for
        all acts and omissions of such users.
      </p>
    </div>
    <div className="my-4">
      <h2 className="text-lg font-bold">2. Restrictions</h2>
      <p>
        The Customer shall not: Modify, adapt, translate, or create derivative
        works of the Software. Reverse engineer, decompile, disassemble, or
        attempt to discover the source code of the Software. Rent, lease, sell,
        sublicense, or otherwise transfer rights to the Software. Use the
        Software for any purpose other than its intended use in managing
        restaurant reservations.
      </p>
    </div>
    <div className="my-4">
      <h2 className="text-lg font-bold">3. Intellectual Property</h2>
      <p>
        All intellectual property rights in the Software, including but not
        limited to copyrights, trademarks, and trade secrets, are owned by
        Digics. The Customer acknowledges that no ownership rights are
        transferred under this Agreement.
      </p>
    </div>
    <div className="my-4">
      <h2 className="text-lg font-bold">4. Data and Privacy</h2>
      <p>
        The Customer retains all rights to the data entered into the Software by
        the Customer or its authorized users. Digics will not access, use, or
        disclose this data except as necessary to provide the Software services
        or as required by law. Digics will maintain appropriate technical and
        organizational measures to protect the Customer&apos;s data against
        unauthorized access or disclosure.
      </p>
      <p>
        Digics will process personal data in accordance with its Privacy Policy
        and applicable data protection laws including the General Data Protection
        Regulation (GDPR) in the European Union.
      </p>
    </div>
    <div className="my-4">
      <h2 className="text-lg font-bold">5. Subscription and Payment</h2>
      <p>
        The Customer shall pay the subscription fees as set forth in the order
        form or as otherwise agreed between the parties. Fees are based on
        subscriptions purchased and not actual usage. Unless otherwise specified,
        fees are invoiced annually in advance and due within thirty (30) days of
        the invoice date. All fees are non-refundable, except as expressly
        provided in this Agreement.
      </p>
      <p>
        Digics reserves the right to suspend access to the Software if any fees
        remain unpaid thirty (30) days after the due date. All prices are
        exclusive of applicable taxes, which the Customer is responsible for
        paying.
      </p>
    </div>
    <div className="my-4">
      <h2 className="text-lg font-bold">6. Term and Termination</h2>
      <p>
        This Agreement commences on the date the Customer first accesses the
        Software and continues until terminated. The initial subscription term is
        specified in the order form and will automatically renew for successive
        terms of the same length unless either party gives notice of
        non-renewal at least thirty (30) days before the end of the
        then-current term.
      </p>
      <p>
        Either party may terminate this Agreement if the other party materially
        breaches this Agreement and fails to cure such breach within thirty (30)
        days after written notice. Upon termination, the Customer shall cease all
        use of the Software and Digics will make the Customer&apos;s data available
        for download for a period of thirty (30) days.
      </p>
    </div>
    <div className="my-4">
      <h2 className="text-lg font-bold">7. Warranties and Disclaimers</h2>
      <p>
        Digics warrants that the Software will perform materially in accordance
        with the documentation provided. If the Software does not conform to this
        warranty, Digics will make commercially reasonable efforts to correct the
        non-conformity.
      </p>
      <p>
        EXCEPT AS EXPRESSLY PROVIDED HEREIN, THE SOFTWARE IS PROVIDED &quot;AS IS&quot;
        WITHOUT WARRANTY OF ANY KIND. DIGICS DISCLAIMS ALL OTHER WARRANTIES,
        EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION THE IMPLIED WARRANTIES
        OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
        NON-INFRINGEMENT.
      </p>
    </div>
    <div className="my-4">
      <h2 className="text-lg font-bold">8. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL DIGICS BE
        LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
        DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY
        OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE
        LOSSES.
      </p>
      <p>
        DIGICS&apos; TOTAL LIABILITY ARISING OUT OF OR RELATED TO THIS AGREEMENT
        SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY THE CUSTOMER IN THE TWELVE
        MONTHS PRECEDING THE EVENT GIVING RISE TO THE LIABILITY.
      </p>
    </div>
    <div className="my-4">
      <h2 className="text-lg font-bold">9. Support and Maintenance</h2>
      <p>
        Digics will provide technical support and maintenance services for the
        Software as specified in the service level agreement. Support includes
        assistance with Software functionality, troubleshooting, and bug fixes.
        Maintenance includes updates and enhancements to the Software made
        generally available to customers.
      </p>
    </div>
    <div className="my-4">
      <h2 className="text-lg font-bold">10. Governing Law</h2>
      <p>
        This Agreement is governed by the laws of the Netherlands without regard
        to its conflict of law provisions. Any disputes arising under or in
        connection with this Agreement shall be subject to the exclusive
        jurisdiction of the courts in Amsterdam, the Netherlands.
      </p>
    </div>
    <div className="my-4">
      <h2 className="text-lg font-bold">11. General Provisions</h2>
      <p>
        This Agreement constitutes the entire agreement between the parties
        concerning the subject matter hereof and supersedes all prior and
        contemporaneous agreements and communications. This Agreement may not be
        modified except by a written document signed by both parties.
      </p>
      <p>
        If any provision of this Agreement is held to be unenforceable, such
        provision shall be reformed only to the extent necessary to make it
        enforceable, and the remaining provisions shall remain in full force and
        effect.
      </p>
      <p>
        For questions about this Agreement, please contact us at
        support@revasi.net or visit our website at https://www.revasi.net.
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
        title="Revasi Software License Agreement"
        content={content}
      />
    </div>
  );
};

export default Page;
