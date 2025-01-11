import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

    images: {
      domains: ['cdn.sanity.io'], // Allow Sanity's CDN
    },
  };
  
  module.exports = nextConfig;


export default nextConfig;
