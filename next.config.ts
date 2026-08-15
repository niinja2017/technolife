import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
    output: "export",

    basePath: "/technolife",

    images: {
        unoptimized: true,
    },

    trailingSlash: true,
};

export default bundleAnalyzer(nextConfig);
