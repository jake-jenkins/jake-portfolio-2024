/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "portfolio-be.web1.jake1.net",
      },
    ],
  },
};

export default nextConfig;
