"use client";

import { motion } from "framer-motion";

const VIDEOS = [
    { id: 1, src: "/videos/juicy_story_01.mp4", title: "CLASSIFIED // FILE_01" },
    { id: 2, src: "/videos/juicy_story_01.mp4", title: "CLASSIFIED // FILE_02" },
    { id: 3, src: "/videos/juicy_story_01.mp4", title: "CLASSIFIED // FILE_03" },
];

export default function VideoGrid() {
    return (
        <section className="py-20 bg-black px-4 font-mono relative z-10">
            <div className="max-w-6xl mx-auto border-t border-b border-gray-800 py-12">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-2xl md:text-4xl text-brand-red tracking-[0.2em] neon-text-red">
                        &gt; RECENT_ARCHIVES
                    </h2>
                    <div className="hidden md:flex items-center gap-2 text-brand-red text-xs">
                        <div className="w-2 h-2 rounded-full bg-brand-red animate-blink"></div>
                        LIVE MONITORING
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {VIDEOS.map((video, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ scale: 1.02 }}
                            className="aspect-[9/16] bg-black border border-gray-800 hover:border-brand-red transition-all relative group"
                        >
                            <div className="absolute top-0 left-0 w-full p-3 flex justify-between items-center z-10 bg-gradient-to-b from-black/80 to-transparent">
                                <span className="text-[10px] text-brand-red tracking-widest">{video.title}</span>
                                <span className="text-[10px] text-brand-red font-bold">REC</span>
                            </div>
                            
                            <video
                                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                src={video.src}
                                loop
                                muted
                                playsInline
                                onMouseOver={(e) => (e.target as HTMLVideoElement).play()}
                                onMouseOut={(e) => {
                                    const v = e.target as HTMLVideoElement;
                                    v.pause();
                                    v.currentTime = 0;
                                }}
                            ></video>
                            
                            {/* Scanline overlay */}
                            <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')]"></div>
                            
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent z-10">
                                <button className="w-full border border-brand-red bg-black/50 text-brand-red text-xs py-2 tracking-[0.2em] group-hover:bg-brand-red group-hover:text-white transition-colors">
                                    [ DECRYPT ]
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
