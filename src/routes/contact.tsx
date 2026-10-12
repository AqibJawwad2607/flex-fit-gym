import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Flex Fit Gym Khulna" },
      { name: "description", content: "Get in touch with Flex Fit Gym Khulna and send a membership enquiry." },
      { property: "og:title", content: "Contact — Flex Fit Gym Khulna" },
      { property: "og:description", content: "Get in touch and send a membership enquiry." },
    ],
  }),
  component: () => <ComingSoon page="contact" />,
});
