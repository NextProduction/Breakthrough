import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Breakthrough - Open Source Habit Tracker",
    short_name: "Breakthrough",
    description:
      "An open-source, science-backed habit tracker to help you quit undesirable habits and build a healthier lifestyle",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4f46e5",
    orientation: "portrait",
    icons: [
      {
        src: "/breakthrough.svg",
        sizes: "192x192",
        type: "image/svg",
        purpose: "maskable",
      },
      {
        src: "/breakthrough.svg",
        sizes: "512x512",
        type: "image/svg",
        purpose: "any",
      },
    ],
    categories: ["health", "lifestyle", "productivity", "utilities"],
    screenshots: [
      {
        src: "/breakthrough.svg",
        sizes: "1280x720",
        type: "image/svg",
        form_factor: "wide",
      },
      {
        src: "/breakthrough.svg",
        sizes: "750x1334",
        type: "image/svg",
        form_factor: "narrow",
      },
    ],
  }
}
