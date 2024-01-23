/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.web1.jake1.net",
      },
    ],
  },
};

export default nextConfig;
