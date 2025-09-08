/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "harlequin-leading-basilisk-182.mypinata.cloud",
        pathname: "/ipfs/**",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dqynirmlp/image/**",
      }
    ]
  },
};

export default nextConfig;
