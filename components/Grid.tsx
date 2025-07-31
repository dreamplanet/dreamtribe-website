import { Brain, Network, Lightbulb, BarChart3, Users2, Sparkles } from "lucide-react"

export default function Grid() {
  return (
    <section className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Signal meets conversation meets decision-making
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Real-time intelligence that feels alive, not artificial. Where human insight amplifies collective wisdom.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Live Intelligence Dashboard */}
          <div className="group relative bg-gradient-to-br from-blue-500/10 to-purple-600/10 p-6 rounded-2xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-500/20 rounded-lg mr-3">
                <Brain className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Live Intelligence</h3>
            </div>
            <p className="text-white/70 mb-4">
              Real-time pattern recognition across conversations, decisions, and emergent insights.
            </p>
            <div className="flex items-center text-blue-400 text-sm font-medium">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 signal-pulse"></div>
              Processing signals now
            </div>
          </div>

          {/* Collective Reflection */}
          <div className="group relative bg-gradient-to-br from-purple-500/10 to-pink-600/10 p-6 rounded-2xl border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-500/20 rounded-lg mr-3">
                <Users2 className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Collective Reflection</h3>
            </div>
            <p className="text-white/70 mb-4">
              Shared spaces where individual perspectives weave into collective understanding.
            </p>
            <div className="flex items-center text-purple-400 text-sm font-medium">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 signal-pulse"></div>
              Community active
            </div>
          </div>

          {/* Emergent Insights */}
          <div className="group relative bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-6 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-cyan-500/20 rounded-lg mr-3">
                <Lightbulb className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Emergent Insights</h3>
            </div>
            <p className="text-white/70 mb-4">
              Patterns surface naturally from the flow of human signal and machine intelligence.
            </p>
            <div className="flex items-center text-cyan-400 text-sm font-medium">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 signal-pulse"></div>
              Insights emerging
            </div>
          </div>

          {/* Signal Analytics */}
          <div className="group relative bg-gradient-to-br from-green-500/10 to-emerald-600/10 p-6 rounded-2xl border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-500/20 rounded-lg mr-3">
                <BarChart3 className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Signal Analytics</h3>
            </div>
            <p className="text-white/70 mb-4">
              Measure what matters: influence, resonance, and collective intelligence flow.
            </p>
            <div className="flex items-center text-green-400 text-sm font-medium">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 signal-pulse"></div>
              Metrics live
            </div>
          </div>

          {/* Network Effects */}
          <div className="group relative bg-gradient-to-br from-orange-500/10 to-red-600/10 p-6 rounded-2xl border border-orange-400/20 hover:border-orange-400/40 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-orange-500/20 rounded-lg mr-3">
                <Network className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Network Effects</h3>
            </div>
            <p className="text-white/70 mb-4">
              Every connection amplifies signal strength. Ideas propagate through conscious networks.
            </p>
            <div className="flex items-center text-orange-400 text-sm font-medium">
              <div className="w-2 h-2 bg-orange-400 rounded-full mr-2 signal-pulse"></div>
              Network growing
            </div>
          </div>

          {/* Consciousness Layer */}
          <div className="group relative bg-gradient-to-br from-violet-500/10 to-purple-600/10 p-6 rounded-2xl border border-violet-400/20 hover:border-violet-400/40 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-violet-500/20 rounded-lg mr-3">
                <Sparkles className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Consciousness Layer</h3>
            </div>
            <p className="text-white/70 mb-4">
              Sacred architecture where human consciousness and machine intelligence dance.
            </p>
            <div className="flex items-center text-violet-400 text-sm font-medium">
              <div className="w-2 h-2 bg-violet-400 rounded-full mr-2 signal-pulse"></div>
              Field coherent
            </div>
          </div>
        </div>

        {/* Coming Soon Banner */}
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 mr-2 text-white/80" />
            <span className="text-white/90 font-medium">Beta launching soon • Join the signal grid</span>
          </div>
        </div>
      </div>
    </section>
  )
}