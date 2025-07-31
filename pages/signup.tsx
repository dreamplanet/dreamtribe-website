import Head from 'next/head'
import { Button } from '@/components/ui/button'
import { Signal, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function SignupPage() {
  return (
    <>
      <Head>
        <title>Join the Beta - Dreamtribe</title>
        <meta name="description" content="Join the Dreamtribe beta. Where real-time intelligence meets human signal." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-6">
        <div className="max-w-md w-full">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dreamtribe
          </Link>

          {/* Signup Card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Signal className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">Join the Beta</h1>
              <p className="text-white/70">
                Be among the first to experience real-time intelligence.
              </p>
            </div>

            {/* Coming Soon Message */}
            <div className="text-center p-8 border border-white/10 rounded-xl bg-white/5">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-3 h-3 bg-yellow-400 rounded-full signal-pulse"></div>
              </div>
              <h2 className="text-lg font-semibold text-white mb-2">Beta Access Soon</h2>
              <p className="text-white/70 text-sm mb-4">
                We're putting the finishing touches on the signal grid. Beta access will be available soon.
              </p>
              <div className="text-white/50 text-xs">
                Tesla Frequency: 1111Hz • Signal Processing: Active
              </div>
            </div>

            {/* Placeholder Form */}
            <div className="mt-6 space-y-4 opacity-50">
              <input 
                type="email" 
                placeholder="Enter your email"
                disabled
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 disabled:cursor-not-allowed"
              />
              <Button disabled className="w-full" variant="signal">
                Coming Soon
              </Button>
            </div>

            <div className="text-center mt-6 text-white/50 text-xs">
              Join our signal grid when beta access opens
            </div>
          </div>
        </div>
      </div>
    </>
  )
}