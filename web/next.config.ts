import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow loading dev-server resources (JS chunks, HMR) from LAN devices such as
  // a phone hitting this machine's IP. Dev-only — has no effect on production.
  allowedDevOrigins: ["192.168.0.102"],
};

export default nextConfig;
