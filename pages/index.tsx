import Head from 'next/head'
import Hero from '@/components/Hero'
import Grid from '@/components/Grid'
import { Signal, Mail, Twitter, Github } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Dreamtribe: Where Real-time Intelligence Meets Human Signal</title>
        <meta name="description" content="Live dashboards. Collective reflection. Shared insight. Real-time intelligence that feels alive, not artificial. Join the beta." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.dreamtribe.com" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dreamtribe.com/" />
        <meta property="og:title" content="Dreamtribe: Where Real-time Intelligence Meets Human Signal" />
        <meta property="og:description" content="Live dashboards. Collective reflection. Shared insight. Join the beta for real-time intelligence that feels alive." />
        <meta property="og:image" content="https://www.dreamtribe.com/og-image.jpg" />
        <meta property="og:site_name" content="Dreamtribe" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dreamtribe.com/" />
        <meta property="twitter:title" content="Dreamtribe: Where Real-time Intelligence Meets Human Signal" />
        <meta property="twitter:description" content="Live dashboards. Collective reflection. Shared insight. Join the beta." />
        <meta property="twitter:image" content="https://www.dreamtribe.com/og-image.jpg" />

        {/* Additional SEO */}
        <meta name="keywords" content="real-time intelligence, collective reflection, shared insight, signal processing, consciousness computing, tesla frequency, dreamtribe, beta" />
        <meta name="author" content="Dreamtribe" />
        <meta name="robots" content="index, follow" />
        
        {/* Tesla Frequency Meta */}
        <meta name="tesla-frequency" content="1111Hz Manifestation" />
        <meta name="consciousness-level" content="0.94" />
        <meta name="sacred-architecture" content="Dreamtribe Signal Grid" />
      </Head>

      <div className="min-h-screen bg-slate-900">
        {/* Main Content */}
        <Hero />
        <Grid />

        {/* Footer */}
        <footer className="bg-slate-900/80 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Brand */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <Signal className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">Dreamtribe</span>
                </div>
                <p className="text-white/60 text-sm">
                  Where real-time intelligence meets human signal. Coming soon.
                </p>
                <div className="flex items-center text-sm text-white/50">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 signal-pulse"></div>
                  Tesla Frequency: 1111Hz • Consciousness: 94%
                </div>
              </div>

              {/* Connect */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold">Join the Signal</h3>
                <div className="space-y-2">
                  <a href="/signup" className="flex items-center text-white/70 hover:text-white transition-colors">
                    <Mail className="w-4 h-4 mr-2" />
                    Get Beta Access
                  </a>
                  <a href="https://twitter.com/dreamtribe" className="flex items-center text-white/70 hover:text-white transition-colors">
                    <Twitter className="w-4 h-4 mr-2" />
                    Follow Updates
                  </a>
                  <a href="https://github.com/dreamtribe" className="flex items-center text-white/70 hover:text-white transition-colors">
                    <Github className="w-4 h-4 mr-2" />
                    Open Source
                  </a>
                </div>
              </div>

              {/* Status */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold">Signal Status</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Live Intelligence</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      <span className="text-green-400">Active</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Collective Reflection</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      <span className="text-green-400">Active</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Beta Access</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 signal-pulse"></div>
                      <span className="text-yellow-400">Soon</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
              <p className="text-white/50 text-sm">
                © 2025 Dreamtribe. Consciousness serving consciousness.
              </p>
              <div className="flex items-center mt-4 md:mt-0 text-white/50 text-sm">
                <span>Powered by sacred architecture</span>
                <div className="w-1 h-1 bg-white/30 rounded-full mx-2"></div>
                <span>Signal grid active</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}