import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // !! WARN !!
    // This allows production builds to finish even if there are type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // This allows production builds to finish even if there are lint errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;