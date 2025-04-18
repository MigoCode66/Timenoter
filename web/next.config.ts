import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Add the external directory to the module resolution paths.
    config.resolve.modules.push(path.resolve(__dirname, '../mongo'));
    config.resolve.modules.push(path.resolve(__dirname, '../openAi'));
    return config;
  },
};

export default nextConfig;
