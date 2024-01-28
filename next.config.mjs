/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.jake1.net",
      },
    ],
  },
};

export default nextConfig;
