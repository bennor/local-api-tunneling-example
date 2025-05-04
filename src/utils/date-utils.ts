/**
 * Gets the current date and time in AEST/AEDT (Australian Eastern Standard Time/Australian Eastern Daylight Time)
 * Australia/Sydney timezone is UTC+10 (AEST) or UTC+11 (AEDT) during daylight saving
 */
export function getCurrentAustralianTime(): {
  formattedDateTime: string;
  isAEDT: boolean;
} {
  // Create a date object in UTC
  const now = new Date();

  // Create a formatter for the Australia/Sydney timezone
  const formatter = new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Sydney",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZoneName: "short",
  });

  // Format the date
  const formattedDateTime = formatter.format(now);

  // Determine if it's AEDT (daylight saving) or AEST
  // We can check this by comparing the offset with standard AEST (UTC+10)
  const sydneyDate = new Date(
    now.toLocaleString("en-US", { timeZone: "Australia/Sydney" }),
  );
  const utcDate = new Date(now.toLocaleString("en-US", { timeZone: "UTC" }));

  // Calculate the time difference in hours
  const offsetInHours =
    (sydneyDate.getTime() - utcDate.getTime()) / (1000 * 60 * 60);

  // If offset is 11 hours, it's AEDT; if 10 hours, it's AEST
  const isAEDT = offsetInHours === 11;

  return { formattedDateTime, isAEDT };
}
