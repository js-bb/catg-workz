/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	trailingSlash: true,
	reactStrictMode: true,
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	experimental: {
		turbo: {},
	},
	images: {
		loader: 'custom',
		loaderFile: './next-image-loader.ts',
	},
};

export default nextConfig;
