/** @type {import('next').NextConfig} */
const nextConfig = {
  // Basic configuration for Turbopack
  experimental: {
    // Package import optimizations
    optimizePackageImports: [
      '@radix-ui/react-icons', 
      'lucide-react',
      'react-icons'
    ],
  },
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
