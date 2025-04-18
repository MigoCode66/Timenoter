import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Handle external packages in server components
    if (isServer) {
      config.externals = [...(config.externals || []), 'mongodb'];
    }

    // Add monorepo package resolution
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../mongo'),
      path.resolve(__dirname, '../openAi'),
      'node_modules',
    ];

    // Configure aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@mongo': path.resolve(__dirname, '../mongo'),
      '@openai': path.resolve(__dirname, '../openAi'),
    };

    // Handle browser polyfills
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
        crypto: false,
      };
    }

    return config;
  },
  experimental: {
    // Enable external packages in server components

  },
  transpilePackages: ['mongo', 'openAi'],
  output: 'standalone',
};

export default nextConfig;
