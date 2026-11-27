import { COLLECTIONS, requireFirestoreDb, toIsoString } from "@/lib/firebase";
import { INQUIRY_STATUSES, INQUIRY_TYPES, type InquiryStatus, type InquiryType } from "@/lib/constants";
import type { Firestore } from "firebase-admin/firestore";

export { INQUIRY_STATUSES, INQUIRY_TYPES };

export type InquiryRecord = {
  _id: string;
  name: string;
  email: string;
  organization: string;
  inquiryType: InquiryType;
  message: string;
  status: InquiryStatus;
  createdAt: string;
};

function mapInquiry(id: string, data: FirebaseFirestore.DocumentData): InquiryRecord {
  return {
    _id: id,
    name: String(data.name || ""),
    email: String(data.email || ""),
    organization: String(data.organization || ""),
    inquiryType: (INQUIRY_TYPES as readonly string[]).includes(String(data.inquiryType))
      ? (String(data.inquiryType) as InquiryType)
      : "General",
    message: String(data.message || ""),
    status: (INQUIRY_STATUSES as readonly string[]).includes(String(data.status))
      ? (String(data.status) as InquiryStatus)
      : "New",
    createdAt: toIsoString(data.createdAt),
  };
}

export const InquiryRepo = {
  async list(statusFilter?: InquiryStatus, dbOverride?: Firestore): Promise<InquiryRecord[]> {
    const db = dbOverride ?? requireFirestoreDb();
    const snap = await db.collection(COLLECTIONS.inquiries).orderBy("createdAt", "desc").get();
    const items = snap.docs.map((d) => mapInquiry(d.id, d.data()));
    return statusFilter ? items.filter((i) => i.status === statusFilter) : items;
  },

  async create(
    input: {
      name: string;
      email: string;
      organization?: string;
      inquiryType?: InquiryType;
      message: string;
      status?: InquiryStatus;
    },
    dbOverride?: Firestore
  ): Promise<InquiryRecord> {
    const db = dbOverride ?? requireFirestoreDb();
    const ref = await db.collection(COLLECTIONS.inquiries).add({
      name: input.name,
      email: input.email.toLowerCase(),
      organization: input.organization ?? "",
      inquiryType: input.inquiryType ?? "General",
      message: input.message,
      status: input.status ?? "New",
      createdAt: new Date(),
    });
    const created = await ref.get();
    return mapInquiry(created.id, created.data()!);
  },

  async updateStatus(id: string, status: InquiryStatus): Promise<InquiryRecord | null> {
    const db = requireFirestoreDb();
    const ref = db.collection(COLLECTIONS.inquiries).doc(id);
    const snap = await ref.get();
    if (!snap.exists) return null;
    await ref.update({ status });
    const updated = await ref.get();
    return mapInquiry(updated.id, updated.data()!);
  },

  async remove(id: string): Promise<boolean> {
    const db = requireFirestoreDb();
    const ref = db.collection(COLLECTIONS.inquiries).doc(id);
    const snap = await ref.get();
    if (!snap.exists) return false;
    await ref.delete();
    return true;
  },
};
