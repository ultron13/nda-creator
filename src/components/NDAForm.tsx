"use client";

export interface NDAData {
  party1Name: string;
  party1Company: string;
  party1Address: string;
  party2Name: string;
  party2Company: string;
  party2Address: string;
  effectiveDate: string;
  confidentialityYears: string;
  businessPurpose: string;
  governingState: string;
}

interface NDAFormProps {
  data: NDAData;
  onChange: (data: NDAData) => void;
}

const FIELD_CLASSES =
  "w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition";

const LABEL_CLASSES = "block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide";

export default function NDAForm({ data, onChange }: NDAFormProps) {
  const set = (key: keyof NDAData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    onChange({ ...data, [key]: e.target.value });

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <section>
        <h2 className="text-base font-bold text-gray-800 mb-3 pb-1 border-b border-gray-200">
          Party 1
        </h2>
        <div className="space-y-3">
          <div>
            <label className={LABEL_CLASSES}>Full Name *</label>
            <input
              type="text"
              value={data.party1Name}
              onChange={set("party1Name")}
              placeholder="Jane Smith"
              className={FIELD_CLASSES}
            />
          </div>
          <div>
            <label className={LABEL_CLASSES}>Company / Organization</label>
            <input
              type="text"
              value={data.party1Company}
              onChange={set("party1Company")}
              placeholder="Acme Corp"
              className={FIELD_CLASSES}
            />
          </div>
          <div>
            <label className={LABEL_CLASSES}>Address *</label>
            <input
              type="text"
              value={data.party1Address}
              onChange={set("party1Address")}
              placeholder="123 Main St, City, State 00000"
              className={FIELD_CLASSES}
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-base font-bold text-gray-800 mb-3 pb-1 border-b border-gray-200">
          Party 2
        </h2>
        <div className="space-y-3">
          <div>
            <label className={LABEL_CLASSES}>Full Name *</label>
            <input
              type="text"
              value={data.party2Name}
              onChange={set("party2Name")}
              placeholder="John Doe"
              className={FIELD_CLASSES}
            />
          </div>
          <div>
            <label className={LABEL_CLASSES}>Company / Organization</label>
            <input
              type="text"
              value={data.party2Company}
              onChange={set("party2Company")}
              placeholder="Beta Inc"
              className={FIELD_CLASSES}
            />
          </div>
          <div>
            <label className={LABEL_CLASSES}>Address *</label>
            <input
              type="text"
              value={data.party2Address}
              onChange={set("party2Address")}
              placeholder="456 Elm Ave, City, State 00000"
              className={FIELD_CLASSES}
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-base font-bold text-gray-800 mb-3 pb-1 border-b border-gray-200">
          Agreement Terms
        </h2>
        <div className="space-y-3">
          <div>
            <label className={LABEL_CLASSES}>Effective Date *</label>
            <input
              type="date"
              value={data.effectiveDate}
              onChange={set("effectiveDate")}
              className={FIELD_CLASSES}
            />
          </div>
          <div>
            <label className={LABEL_CLASSES}>Confidentiality Period *</label>
            <select
              value={data.confidentialityYears}
              onChange={set("confidentialityYears")}
              className={FIELD_CLASSES}
            >
              <option value="1">1 year</option>
              <option value="2">2 years</option>
              <option value="3">3 years</option>
              <option value="5">5 years</option>
            </select>
          </div>
          <div>
            <label className={LABEL_CLASSES}>Business Purpose *</label>
            <textarea
              value={data.businessPurpose}
              onChange={set("businessPurpose")}
              rows={3}
              placeholder="Exploring a potential business partnership for software development services"
              className={`${FIELD_CLASSES} resize-none`}
            />
          </div>
          <div>
            <label className={LABEL_CLASSES}>Governing State / Jurisdiction *</label>
            <input
              type="text"
              value={data.governingState}
              onChange={set("governingState")}
              placeholder="California"
              className={FIELD_CLASSES}
            />
          </div>
        </div>
      </section>
    </form>
  );
}
