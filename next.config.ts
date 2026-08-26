import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/resources/library",
        destination: "/resources",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
