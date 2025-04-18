import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Add external directories to module resolution
    config.resolve.modules.push(path.resolve(__dirname, '../mongo'));
    config.resolve.modules.push(path.resolve(__dirname, '../openAi'));

    // Add aliases for better module resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      '@mongo': path.resolve(__dirname, '../mongo'),
      '@openai': path.resolve(__dirname, '../openAi'),
    };

    // Handle node_modules in production
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }

    return config;
  },
  // Add external directories to transpilation
  transpilePackages: ['mongo', 'openAi'],
  // Ensure output is standalone
  output: 'standalone',
};

export default nextConfig;
