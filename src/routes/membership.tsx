import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership — Flex Fit Gym Khulna" },
      { name: "description", content: "Membership categories and benefits at Flex Fit Gym Khulna. Enquire for current pricing." },
      { property: "og:title", content: "Membership — Flex Fit Gym Khulna" },
      { property: "og:description", content: "Membership categories and benefits. Enquire for current pricing." },
    ],
  }),
  component: () => <ComingSoon page="membership" />,
});
