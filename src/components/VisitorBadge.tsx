"use client";

import { useEffect, useRef, useState } from "react";
import { Eye } from "lucide-react";

export default function VisitorBadge() {
  const [count, setCount] = useState<number | null>(null);
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current) return;
    tracked.current = true;

    // Increment counter + trigger email on first mount
    fetch("/api/visitors", { method: "POST" })
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => {
        // Fallback: just read current count
        fetch("/api/visitors")
          .then((res) => res.json())
          .then((data) => setCount(data.count))
          .catch(() => setCount(null));
      });
  }, []);

  return (
    <div
      className="
        fixed top-[64px] right-0 z-40
        flex items-center gap-2
        bg-white dark:bg-gray-900
        border border-r-0 border-gray-200 dark:border-gray-700
        shadow-md
        pl-3 pr-4 py-[6px]
        rounded-l-full
        text-sm font-medium
        text-gray-700 dark:text-gray-200
        select-none
        translate-x-0
      "
      title="Total portfolio visits"
    >
      {/* Live pulsing dot */}
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
      </span>

      {/* Eye icon */}
      <Eye size={14} className="text-primary shrink-0" />

      {/* Count */}
      <span className="tabular-nums leading-none">
        {count === null ? (
          <span className="inline-block w-8 h-3 rounded bg-gray-200 dark:bg-gray-700 animate-pulse" />
        ) : (
          count.toLocaleString()
        )}
      </span>

      <span className="text-xs text-gray-400 dark:text-gray-500 leading-none">
        visits
      </span>
    </div>
  );
}
