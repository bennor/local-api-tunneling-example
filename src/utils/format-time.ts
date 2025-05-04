export function formatTime(dateString: string): string {
  const date = new Date(dateString);

  // Format: Day, DD Month YYYY HH:MM:SS AEST/AEDT
  const formatter = new Intl.DateTimeFormat("en-AU", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "Australia/Sydney",
    timeZoneName: "short",
  });

  return formatter.format(date);
}
