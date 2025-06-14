import mdx from "@next/mdx";

/**
 * Enable MDX support
 */
const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/**
 * Next.js configuration
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

export default withMDX(nextConfig);
