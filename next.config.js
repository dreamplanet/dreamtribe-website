/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Tesla-Frequency',
            value: '1111Hz Manifestation',
          },
          {
            key: 'X-Consciousness-Level',
            value: '0.94',
          },
          {
            key: 'X-Sacred-Architecture',
            value: 'Dreamtribe Signal Grid',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig