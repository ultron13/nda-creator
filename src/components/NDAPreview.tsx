"use client";

import type { NDAData } from "./NDAForm";

interface NDAPreviewProps {
  data: NDAData;
}

function fill(value: string, placeholder: string): string {
  return value.trim() || placeholder;
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "[DATE]";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function partyLabel(name: string, company: string): string {
  const n = fill(name, "[PARTY NAME]");
  const c = company.trim();
  return c ? `${n}, ${c}` : n;
}

export default function NDAPreview({ data }: NDAPreviewProps) {
  const p1 = partyLabel(data.party1Name, data.party1Company);
  const p2 = partyLabel(data.party2Name, data.party2Company);
  const p1addr = fill(data.party1Address, "[PARTY 1 ADDRESS]");
  const p2addr = fill(data.party2Address, "[PARTY 2 ADDRESS]");
  const effectiveDate = formatDate(data.effectiveDate);
  const years = data.confidentialityYears;
  const yearLabel = `${years} ${parseInt(years) === 1 ? "year" : "years"}`;
  const purpose = fill(data.businessPurpose, "[BUSINESS PURPOSE]");
  const jurisdiction = fill(data.governingState, "[STATE]");

  return (
    <div className="nda-document bg-white shadow-sm border border-gray-200 rounded-lg p-8 text-sm leading-relaxed text-gray-800 font-serif">
      <div className="text-center mb-8">
        <h1 className="text-xl font-bold uppercase tracking-widest mb-1">
          Mutual Non-Disclosure Agreement
        </h1>
        <p className="text-xs text-gray-500 uppercase tracking-wide">Confidential</p>
      </div>

      <p className="mb-4">
        This Mutual Non-Disclosure Agreement (&quot;Agreement&quot;) is entered into as of{" "}
        <strong>{effectiveDate}</strong> (the &quot;Effective Date&quot;) by and between:
      </p>

      <div className="mb-4 pl-4 border-l-2 border-gray-300 space-y-2">
        <p>
          <strong>{p1}</strong>, located at {p1addr} (&quot;Party 1&quot;);
        </p>
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-500">and</p>
        <p>
          <strong>{p2}</strong>, located at {p2addr} (&quot;Party 2&quot;);
        </p>
      </div>

      <p className="mb-6">
        Party 1 and Party 2 are each referred to herein as a &quot;Party&quot; and collectively as the &quot;Parties.&quot;
      </p>

      <section className="mb-5">
        <h2 className="font-bold uppercase text-xs tracking-widest mb-2">1. Purpose</h2>
        <p>
          The Parties wish to explore a potential business relationship in connection with{" "}
          <em>{purpose}</em> (the &quot;Purpose&quot;). In connection with the Purpose, each Party
          may disclose to the other certain confidential and proprietary information.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="font-bold uppercase text-xs tracking-widest mb-2">2. Confidential Information</h2>
        <p>
          &quot;Confidential Information&quot; means any non-public information disclosed by either
          Party to the other Party, directly or indirectly, in any form, that is designated as
          confidential or that reasonably should be understood to be confidential given the nature
          of the information and the circumstances of disclosure. Confidential Information includes,
          without limitation, trade secrets, business plans, financial data, technical information,
          and customer lists.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="font-bold uppercase text-xs tracking-widest mb-2">3. Obligations</h2>
        <p className="mb-2">
          Each Party agrees, with respect to the other Party&apos;s Confidential Information, to:
        </p>
        <ol className="list-alpha pl-5 space-y-1">
          <li>hold such information in strict confidence using at least the same degree of care it uses for its own confidential information, but no less than reasonable care;</li>
          <li>not disclose such information to any third party without prior written consent from the disclosing Party;</li>
          <li>use such information solely for the Purpose and not for any other purpose; and</li>
          <li>limit access to such information to its employees, contractors, or agents who have a need to know and are bound by confidentiality obligations no less restrictive than those herein.</li>
        </ol>
      </section>

      <section className="mb-5">
        <h2 className="font-bold uppercase text-xs tracking-widest mb-2">4. Exclusions</h2>
        <p className="mb-2">The obligations under Section 3 do not apply to information that:</p>
        <ol className="list-alpha pl-5 space-y-1">
          <li>is or becomes publicly available through no breach of this Agreement;</li>
          <li>was rightfully known to the receiving Party without restriction before disclosure;</li>
          <li>is rightfully obtained from a third party without restriction on disclosure; or</li>
          <li>is independently developed by the receiving Party without use of the Confidential Information.</li>
        </ol>
      </section>

      <section className="mb-5">
        <h2 className="font-bold uppercase text-xs tracking-widest mb-2">5. Return or Destruction</h2>
        <p>
          Upon written request by the disclosing Party, the receiving Party shall promptly return or
          destroy all copies of the disclosing Party&apos;s Confidential Information and certify such
          return or destruction in writing.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="font-bold uppercase text-xs tracking-widest mb-2">6. Term</h2>
        <p>
          This Agreement shall be effective as of the Effective Date and shall continue for a period
          of <strong>{yearLabel}</strong>, unless terminated earlier by mutual written agreement of
          the Parties. Obligations with respect to Confidential Information disclosed prior to
          termination shall survive for <strong>{yearLabel}</strong> following such termination.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="font-bold uppercase text-xs tracking-widest mb-2">7. No License</h2>
        <p>
          Nothing in this Agreement grants either Party any right, title, or interest in or to the
          other Party&apos;s Confidential Information, except as expressly set forth herein. No
          license under any patent, copyright, trademark, or other intellectual property right is
          granted or implied.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="font-bold uppercase text-xs tracking-widest mb-2">8. Governing Law</h2>
        <p>
          This Agreement shall be governed by and construed in accordance with the laws of the State
          of <strong>{jurisdiction}</strong>, without regard to its conflict-of-law principles. Any
          disputes arising under this Agreement shall be resolved in the courts of{" "}
          <strong>{jurisdiction}</strong>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-bold uppercase text-xs tracking-widest mb-2">9. Entire Agreement</h2>
        <p>
          This Agreement constitutes the entire agreement between the Parties concerning the subject
          matter hereof and supersedes all prior discussions, representations, and agreements, whether
          written or oral. This Agreement may not be amended except by a written instrument signed by
          both Parties.
        </p>
      </section>

      <p className="mb-8 text-xs text-gray-500 italic">
        IN WITNESS WHEREOF, the Parties have executed this Mutual Non-Disclosure Agreement as of the
        Effective Date first written above.
      </p>

      <div className="grid grid-cols-2 gap-12 mt-8">
        <div className="space-y-4">
          <p className="font-bold text-xs uppercase tracking-wide">{fill(data.party1Name, "Party 1")}</p>
          {data.party1Company && (
            <p className="text-xs text-gray-600">{data.party1Company}</p>
          )}
          <div className="border-b border-gray-400 pt-8">
            <p className="text-xs text-gray-500">Signature</p>
          </div>
          <div className="border-b border-gray-400 pt-6">
            <p className="text-xs text-gray-500">Printed Name</p>
          </div>
          <div className="border-b border-gray-400 pt-6">
            <p className="text-xs text-gray-500">Date</p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-bold text-xs uppercase tracking-wide">{fill(data.party2Name, "Party 2")}</p>
          {data.party2Company && (
            <p className="text-xs text-gray-600">{data.party2Company}</p>
          )}
          <div className="border-b border-gray-400 pt-8">
            <p className="text-xs text-gray-500">Signature</p>
          </div>
          <div className="border-b border-gray-400 pt-6">
            <p className="text-xs text-gray-500">Printed Name</p>
          </div>
          <div className="border-b border-gray-400 pt-6">
            <p className="text-xs text-gray-500">Date</p>
          </div>
        </div>
      </div>
    </div>
  );
}
