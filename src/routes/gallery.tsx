import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Flex Fit Gym Khulna" },
      { name: "description", content: "A look inside the Flex Fit Gym Khulna concept: training spaces and atmosphere." },
      { property: "og:title", content: "Gallery — Flex Fit Gym Khulna" },
      { property: "og:description", content: "Training spaces and atmosphere at Flex Fit Gym Khulna." },
    ],
  }),
  component: () => <ComingSoon page="gallery" />,
});
