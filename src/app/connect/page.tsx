import type { Metadata } from "next";
import { ConnectView } from "@/components/views/general-views";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Hi, I’m Dr. Zrinka. Executive Advisor, Writer, Speaker — explore The Hat and the Hill, Executive Advisory, The Journal, Events, Keynotes, and LinkedIn.",
};

export default function ConnectPage() {
  return <ConnectView />;
}
