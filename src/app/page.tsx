"use client";

import { useState } from "react";
import NDAForm, { type NDAData } from "@/components/NDAForm";
import NDAPreview from "@/components/NDAPreview";

const today = new Date().toISOString().split("T")[0];

const DEFAULT_DATA: NDAData = {
  party1Name: "",
  party1Company: "",
  party1Address: "",
  party2Name: "",
  party2Company: "",
  party2Address: "",
  effectiveDate: today,
  confidentialityYears: "2",
  businessPurpose: "",
  governingState: "",
};

export default function Home() {
  const [data, setData] = useState<NDAData>(DEFAULT_DATA);

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen">
      <header className="no-print bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div>
          <h1 className="text-lg font-bold text-gray-900">Mutual NDA Creator</h1>
          <p className="text-xs text-gray-500">Fill in the details — the agreement updates live</p>
        </div>
        <button
          onClick={handleDownload}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors"
        >
          Download PDF
        </button>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 lg:grid lg:grid-cols-[420px_1fr] lg:gap-8">
        <aside className="no-print mb-8 lg:mb-0">
          <div className="bg-white border border-gray-200 rounded-lg p-5 sticky top-[73px]">
            <NDAForm data={data} onChange={setData} />
          </div>
        </aside>

        <section>
          <NDAPreview data={data} />
        </section>
      </main>
    </div>
  );
}
