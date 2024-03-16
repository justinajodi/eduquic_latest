/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["utfs.io", "files.edgestore.dev"],
    remotePatterns: [
      
      { protocol: "https", hostname: "i.pinimg.com", pathname: "**" },
      { protocol: "https", hostname: "utfs.io", pathname: "**" },
      { protocol: "https", hostname: "files.edgestore.dev", pathname: "**" },
      { protocol: "https", hostname: "aceternity.com", pathname: "**" },
    ],
  },
  trailingSlash: false,
};

module.exports = nextConfig;
