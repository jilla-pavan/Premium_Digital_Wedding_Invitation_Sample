const TEXT =
  "✦   The Sharma Family Warmly Welcomes You   ✦   Wedding Ceremony on Sunday, 115th February 2026 at 10:30 AM   ✦   Reception from 7:00 PM Onwards   ✦   Royal Grand Convention Hall, Hyderabad   ✦   Aarav weds Ananya   ✦   Two Hearts, One Journey   ✦   Love • Laughter • Forever   ✦   RSVP: +91 98765 43210   ✦";

const Segment = () => (
  <span className="font-crimson text-gold-light text-sm tracking-[0.15em] px-12 whitespace-nowrap inline-block">
    {TEXT}
  </span>
);

export default function Ticker() {
  return (
    <div className="bg-maroon border-y border-gold/60 py-2.5 overflow-hidden">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "ticker 16s linear infinite" }}
      >
        <Segment />
        <Segment />
      </div>
    </div>
  );
}
