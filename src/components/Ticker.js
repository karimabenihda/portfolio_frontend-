"use client";

export default function Ticker() {
  const items = [
    "FULL STACK DEVELOPER",
    "FRONTEND DEVELOPER",
    "BACKEND DEVELOPER",
    "AI DEVELOPER",
    "DATA SCIENTIST",
  ];

  return (
    <div className="w-full h-24 bg-primary-purple overflow-hidden flex items-center border-y border-white/10 shadow-[0_0_30px_rgba(224,167,255,0.2)]">
      <div className="marquee flex gap-12 whitespace-nowrap px-12">
        {/* Duplicate items for infinite scroll effect */}
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6">
            <span className="text-black text-4xl md:text-5xl font-black italic tracking-tighter">
              {item}
            </span>
            <span className="text-black text-4xl mt-1">*</span>
          </div>
        ))}
      </div>
    </div>
  );
}
