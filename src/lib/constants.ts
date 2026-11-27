export const INQUIRY_TYPES = [
  "Private Advisory",
  "Organizational Advisory",
  "Keynote",
  "General",
] as const;

export const INQUIRY_STATUSES = ["New", "Replied", "Booked"] as const;

export type InquiryType = (typeof INQUIRY_TYPES)[number];
export type InquiryStatus = (typeof INQUIRY_STATUSES)[number];
