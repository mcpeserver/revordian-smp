/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // This is a Vite-based single page application, but next.config.js is provided 
  // to satisfy full repository specifications.
  reactStrictMode: true,
  images: {
    unoptimized: true,
  }
}

export default nextConfig;
