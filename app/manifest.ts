import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest { return { name: "Techpsyco", short_name: "Techpsyco", description: "Software products and intelligent digital systems.", start_url: "/", display: "standalone", background_color: "#050805", theme_color: "#63f542", icons: [{ src: "/brand-logo.png", sizes: "408x612", type: "image/png" }] }; }
