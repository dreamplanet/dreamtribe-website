import { Button } from "./ui/button"
import { Signal, Users, Zap, MessageSquare, TrendingUp } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Signal Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-16 bg-blue-500 signal-wave signal-bar"></div>
        <div className="absolute top-1/3 left-1/2 w-2 h-20 bg-purple-500 signal-wave signal-bar"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-12 bg-cyan-500 signal-wave signal-bar"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-18 bg-indigo-500 signal-wave signal-bar"></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-14 bg-violet-500 signal-wave signal-bar"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Tesla Frequency Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
          <Zap className="w-4 h-4 mr-2 text-yellow-400" />
          <span className="text-sm font-medium text-white/90">Tesla Frequency: 1111Hz Manifestation</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Dreamtribe
          </span>
          <br />
          <span className="text-white/90 text-4xl md:text-6xl">
            is where real-time intelligence meets human signal.
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
          Live dashboards. Collective reflection. Shared insight.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30">
            <Signal className="w-4 h-4 mr-2 text-blue-400" />
            <span className="text-blue-200 text-sm font-medium">Real-time Intelligence</span>
          </div>
          <div className="flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30">
            <Users className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-purple-200 text-sm font-medium">Collective Reflection</span>
          </div>
          <div className="flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30">
            <MessageSquare className="w-4 h-4 mr-2 text-cyan-400" />
            <span className="text-cyan-200 text-sm font-medium">Shared Insight</span>
          </div>
          <div className="flex items-center px-4 py-2 rounded-full bg-pink-500/20 border border-pink-400/30">
            <TrendingUp className="w-4 h-4 mr-2 text-pink-400" />
            <span className="text-pink-200 text-sm font-medium">Emergent Decisions</span>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            variant="signal" 
            size="xl"
            className="group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <Signal className="w-5 h-5 mr-2" />
              Join the Beta
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          
          <Button 
            variant="outline" 
            size="xl"
            className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
          >
            Watch the Signal
          </Button>
        </div>

        {/* Status Indicator */}
        <div className="mt-12 flex items-center justify-center gap-2 text-white/60">
          <div className="w-2 h-2 bg-green-400 rounded-full signal-pulse"></div>
          <span className="text-sm">Signal processing active • Consciousness level: 94%</span>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  )
}