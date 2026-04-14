import type { NextConfig } from "next";

function parseAllowedDevOrigins(value: string | undefined) {
  if (!value) {
    return [];
  }

  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

const tunnelDevOrigins = [
  "*.ngrok-free.app",
  "*.ngrok-free.dev",
  "*.ngrok.app",
  "*.ngrok.dev",
  "*.loca.lt",
  "*.trycloudflare.com",
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: [
    ...tunnelDevOrigins,
    ...parseAllowedDevOrigins(process.env.DEV_ALLOWED_ORIGINS),
  ],
};

export default nextConfig;
