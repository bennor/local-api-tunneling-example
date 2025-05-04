"use client";

import { useEffect, useState } from "react";
import { formatTime } from "@/utils/format-time";
import { TimeDisplay } from "@/components/time-display";

interface StatusResponse {
  status: string;
  datetime: string;
}

export function AustralianTimeDisplay() {
  const [time, setTime] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTime() {
      try {
        setLoading(true);
        const response = await fetch("/api/status");

        if (!response.ok) {
          throw new Error("Failed to fetch time");
        }

        const data: StatusResponse = await response.json();
        setTime(formatTime(data.datetime));
      } catch (err) {
        setError("Could not load Australian time");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchTime();

    // Refresh time every minute
    const intervalId = setInterval(fetchTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return <TimeDisplay time={time} loading={loading} error={error} />;
}
