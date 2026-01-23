import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowRight, Star, Heart, Menu, X, Globe, Shield, Zap, Search, ChevronRight, Play } from 'lucide-react';
import { useState } from 'react';

const PRODUCTS = [
    { id: 1, name: "AURA_NODE X1", price: "2499", desc: "Neuro-linked acoustic processors for extreme immersive fidelity.", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800", rating: 4.9 },
    { id: 2, name: "CHRONOS_V3", price: "1850", desc: "Precision atomic synchronization in a aerospace-grade titanium shell.", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800", rating: 4.8 },
    { id: 3, name: "ORBIT_CAM 4K", price: "1250", desc: "Autonomous hovering optic array with verified edge tracking.", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=800", rating: 5.0 },
];

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('New Arrivals');

    return (
        <div className="min-h-screen bg-white">
            {/* Top Banner */}
            <div className="bg-slate-900 text-white text-[10px] py-3 text-center font-black uppercase tracking-[0.4em]">
                Exclusive Drop: Zenith Collection v.102 Live • Multi-Cloud Sync Enabled
            </div>

            {/* Navigation */}
            <nav className="h-24 px-8 border-b border-slate-100 sticky top-0 bg-white/90 backdrop-blur-xl z-[100]">
                <div className="max-w-7xl mx-auto h-full flex justify-between items-center text-slate-900">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white rotate-12 group hover:rotate-0 transition-transform cursor-pointer">
                            <ShoppingBag className="w-5 h-5" />
                        </div>
                        <span className="text-xl font-black tracking-tighter uppercase">MK_<span className="text-gold">LUXE</span></span>
                    </div>

                    <div className="hidden lg:flex items-center gap-12">
                        {['Collections', 'Atelier', 'Tech Spec', 'Vault'].map(link => (
                            <a key={link} href="#" className="text-xs font-black uppercase tracking-[0.2em] hover:text-gold transition-colors">{link}</a>
                        ))}
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="p-2 hover:bg-slate-50 rounded-full transition-all"><Search className="w-5 h-5" /></button>
                        <button className="px-8 py-3 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-gold hover:text-slate-900 transition-all active:scale-95 shadow-xl shadow-slate-900/10">
                            Explore Now
                        </button>
                    </div>
                </div>
            </nav>

            <main>
                {/* Hero Section */}
                <section className="relative h-[90vh] overflow-hidden bg-slate-50 flex items-center px-8">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
                    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-10">
                                <Zap className="w-3 h-3 text-gold fill-gold" /> Future Tech Ready
                            </span>
                            <h1 className="text-7xl md:text-[8rem] font-black leading-[0.85] tracking-tighter uppercase mb-12">
                                REDEFINE <br /> <span className="text-gold italic">CRAFT</span> <br /> PERFORMANCE.
                            </h1>
                            <p className="text-xl text-slate-500 font-medium max-w-lg mb-12 leading-relaxed">
                                Engineering luxury for the digital elite. Where high-end materials meet industry-leading performance metrics.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <button className="premium-btn flex items-center justify-center gap-3 group">
                                    Launch Vault <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                </button>
                                <button className="px-10 py-5 border-4 border-slate-900 font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-3">
                                    <Play className="w-5 h-5" /> Video tour
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative aspect-square bg-white rounded-full shadow-2xl p-20 flex items-center justify-center overflow-hidden border border-slate-100">
                                <img
                                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800"
                                    alt="Featured Product"
                                    className="w-full relative z-10 -rotate-12 hover:rotate-0 transition-transform duration-1000 scale-125"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent" />
                            </div>
                            {/* Floating Badges */}
                            <div className="absolute top-0 right-0 p-8 glass animate-bounce">
                                <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-2xl">
                                    <span className="text-xs font-black uppercase tracking-widest block mb-1">Authenticity</span>
                                    <span className="text-2xl font-black text-gold">100% VERIFIED</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Featured Products */}
                <section className="py-32 px-8 max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">ZENITH <span className="text-slate-300 italic">SELECTION</span></h2>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.4em] mt-2">Precision Products for high-stakes living</p>
                        </div>
                        <div className="flex gap-4 p-2 bg-slate-50 rounded-full border border-slate-200">
                            {['New Arrivals', 'Performance', 'Limited'].map(t => (
                                <button
                                    key={t}
                                    onClick={() => setActiveTab(t)}
                                    className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === t ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20' : 'text-slate-500 hover:bg-white'}`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {PRODUCTS.map((p, idx) => (
                            <motion.div
                                key={p.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="luxury-card group"
                            >
                                <div className="relative aspect-[4/5] bg-slate-50 p-12 flex items-center justify-center overflow-hidden">
                                    <img src={p.image} alt={p.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" />
                                    <button className="absolute top-6 right-6 p-4 bg-white/50 backdrop-blur-md rounded-full shadow-sm hover:bg-slate-900 hover:text-white transition-all hover:scale-110">
                                        <Heart className="w-5 h-5" />
                                    </button>
                                    <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                        <button className="w-full py-5 bg-slate-900 text-white font-black uppercase tracking-widest text-xs shadow-2xl flex items-center justify-center gap-3">
                                            Quick Add <ShoppingBag className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                <div className="p-8 space-y-4">
                                    <div className="flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                        <span className="flex items-center gap-1"><Star className="w-3 h-3 text-gold fill-gold" /> {p.rating} / 5</span>
                                        <span>Free Global Shipping</span>
                                    </div>
                                    <h3 className="text-2xl font-black uppercase tracking-tight group-hover:text-gold transition-colors">{p.name}</h3>
                                    <p className="text-slate-500 font-medium line-clamp-2 text-sm leading-relaxed">{p.desc}</p>
                                    <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                                        <span className="text-3xl font-black text-slate-900">${p.price}</span>
                                        <button className="text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:text-gold transition-colors">
                                            Details <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Brand Experience Section */}
                <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                    <div className="max-w-7xl mx-auto px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-20">
                        <div className="max-w-xl">
                            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-10">THE NEW LAB <br /> FOR <span className="text-gold italic underline decoration-gold">PERFECTION.</span></h2>
                            <p className="text-lg text-slate-400 font-medium mb-12">
                                Every Zenith product undergoes a 48-hour rigorous stress test against environmental, thermal, and mechanical anomalies. We don't just ship; we certify.
                            </p>
                            <div className="grid grid-cols-2 gap-10">
                                <ExperienceItem icon={<Shield />} label="2 Year Warranty" />
                                <ExperienceItem icon={<Globe />} label="Global Concierge" />
                            </div>
                        </div>
                        <div className="relative">
                            <div className="w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gold rounded-full blur-[120px] opacity-20 animate-pulse" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-[12rem] font-black italic opacity-5 leading-none select-none">ZENITH</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Luxury Footer */}
            <footer className="bg-white pt-32 pb-12 px-8 border-t-8 border-slate-900">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
                        <div className="lg:col-span-1">
                            <div className="flex items-center gap-2 mb-8">
                                <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white">
                                    <ShoppingBag className="w-4 h-4" />
                                </div>
                                <span className="text-xl font-black tracking-tighter uppercase">MK_<span className="text-gold">LUXE</span></span>
                            </div>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                Modern luxury curated for the digital frontier. Built for the bold, the visionary, and the relentless.
                            </p>
                        </div>

                        <FooterSection title="Explore" links={['Zenith Series', 'Archive v2', 'Limited Drops', 'Vault']} />
                        <FooterSection title="Atelier" links={['Engineering', 'Design Lab', 'Materials', 'Sustainability']} />
                        <FooterSection title="Support" links={['Shipping', 'Warranty', 'Concierge', 'Contact']} />
                    </div>

                    <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <p>© 2026 MK_LUXE // ZENITH • 19/30 DISPATCHED</p>
                        <div className="flex gap-10">
                            <a href="#" className="hover:text-gold transition-colors">Client Privacy</a>
                            <a href="#" className="hover:text-gold transition-colors">Ethical Protocol</a>
                            <a href="#" className="hover:text-gold transition-colors">Term of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function ExperienceItem({ icon, label }: { icon: any, label: string }) {
    return (
        <div className="flex items-center gap-4 group">
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-gold group-hover:text-slate-900 transition-all">
                {icon}
            </div>
            <span className="text-xs font-black uppercase tracking-widest">{label}</span>
        </div>
    );
}

function FooterSection({ title, links }: { title: string, links: string[] }) {
    return (
        <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-900">{title}</h4>
            <ul className="space-y-4">
                {links.map(l => (
                    <li key={l}><a href="#" className="text-xs font-bold text-slate-500 uppercase tracking-widest hover:text-gold transition-colors">{l}</a></li>
                ))}
            </ul>
        </div>
    );
}
