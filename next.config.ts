import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repo = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : '';
const isUserPage = repo.toLowerCase().endsWith('.github.io');
const basePath = isGithubActions && !isUserPage && repo ? `/${repo}` : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    '192.168.112.1',
    '192.168.112.1:3000',
    'localhost:3000',
    '127.0.0.1:3000',
  ],
};

export default nextConfig;
