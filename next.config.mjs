import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

try {
  /** @type {import('next').NextConfig} */
  const config = {
    reactStrictMode: true,
  };

  export default withMDX(config);
} catch (error) {
  console.error("An error occurred while creating MDX configuration:", error);
  throw new Error("MDX configuration failed");
}
