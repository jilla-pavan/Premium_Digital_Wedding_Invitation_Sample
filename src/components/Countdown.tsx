import { useState, useEffect } from "react";

const WEDDING = new Date("2026-07-03T01:48:00+05:30");

function getTimeLeft() {
  const diff = WEDDING.getTime() - Date.now();

  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  };
}

export default function Countdown() {
  const [t, setT] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => {
      setT(getTimeLeft());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: t.days },
    { label: "Hours", value: t.hours },
    { label: "Minutes", value: t.minutes },
    { label: "Seconds", value: t.seconds },
  ];

  const isWeddingTime =
    t.days === 0 && t.hours === 0 && t.minutes === 0 && t.seconds === 0;

  if (isWeddingTime) {
    return (
      <p className="font-dancing text-2xl text-gold-light mt-4 animate-glowPulse text-center">
        🎉 The auspicious moment has arrived! 🎉
      </p>
    );
  }

  return (
    <div className="mt-6">
      <p className="text-gold-muted text-xs tracking-[0.25em] uppercase mb-3 font-crimson text-center">
        Counting down to the sacred moment
      </p>

      <div className="flex gap-2 sm:gap-4 justify-center">
        {units.map(({ label, value }) => (
          <div key={label} className="text-center">
            <div className="bg-dark-deep border border-gold/40 rounded-xl px-3 py-3 min-w-[58px] sm:min-w-[70px] animate-pulseGold">
              <span className="font-playfair text-2xl sm:text-3xl text-gold-light font-bold tabular-nums block leading-none">
                {String(value).padStart(2, "0")}
              </span>
            </div>

            <span className="text-[10px] sm:text-xs text-gold-muted tracking-widest mt-1.5 block uppercase font-crimson">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
