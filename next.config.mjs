/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "harlequin-leading-basilisk-182.mypinata.cloud",
        pathname: "/ipfs/**",
      }
    ]
  },
};

export default nextConfig;
