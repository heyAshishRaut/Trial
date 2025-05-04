// App.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css"; // Tailwind CSS should be configured here

const sections = [
    { id: 1, color: "#ff6b6b", content: "YouTube Channel" },
    { id: 2, color: "#6bc1ff", content: "X Profile" },
    { id: 3, color: "#a0e060", content: "Favorite Book" },
    { id: 4, color: "#f7b731", content: "Creator Toolkit" },
];

export default function App() {
    const [current, setCurrent] = useState(0);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const scrollY = e.currentTarget.scrollTop;
        const sectionHeight = window.innerHeight;
        const index = Math.round(scrollY / sectionHeight);
        setCurrent(index);
    };

    return (
        <AnimatePresence>
            <motion.div
                className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory"
                onScroll={handleScroll}
                initial={false}
                animate={{ backgroundColor: sections[current].color }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                {sections.map((section, index) => (
                    <div
                        key={section.id}
                        className="h-screen w-full flex items-center justify-center snap-center text-white text-3xl font-bold"
                    >
                        {section.content}
                    </div>
                ))}
            </motion.div>
        </AnimatePresence>
    );
}
