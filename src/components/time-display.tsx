import { Skeleton } from "@/components/ui/skeleton";

interface TimeDisplayProps {
  time: string | null;
  loading: boolean;
  error: string | null;
}

export function TimeDisplay({ time, loading, error }: TimeDisplayProps) {
  return (
    <div className="w-full max-w-md p-4 rounded-lg border border-black/[.08] dark:border-white/[.145]">
      <h2 className="text-lg font-semibold mb-2">Australian Time</h2>

      {loading && <Skeleton className="h-8 w-full" />}

      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && time && (
        <p className="text-2xl font-mono">{time}</p>
      )}
    </div>
  );
}
