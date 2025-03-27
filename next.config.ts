import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},

	images: {
		formats: ['image/avif', 'image/webp'],
		remotePatterns: [
      {
        protocol: 'https',
				hostname: process.env.NEXT_PUBLIC_DIRECTUS_API_ENDPOINT!.replace('https://', ''),
			},
		],
    dangerouslyAllowSVG: true,
	},
}

export default nextConfig