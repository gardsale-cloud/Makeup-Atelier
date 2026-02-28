"use client";

import React, { useState, useEffect } from "react";

const themes = [
    { id: "default", name: "Atelier Sand", color: "#CBB7A6", text: "Sand" },
    { id: "mono-depth", name: "Monochrome", color: "#3C3530", text: "Mono" },
    { id: "burgundy", name: "Classic", color: "#811331", text: "Burgundy" },
    { id: "ochre-warm", name: "Ochre", color: "#A67C52", text: "Ochre" },
    { id: "editorial-contrast", name: "Editorial", color: "#3F3732", text: "Editorial Contrast", span: true },
];

const ThemeSwitcherAtelier = () => {
    const [currentTheme, setCurrentTheme] = useState(themes[0]);
    const [isPanelVisible, setIsPanelVisible] = useState(false);

    const setTheme = (theme: typeof themes[0]) => {
        if (theme.id === 'default') {
            document.documentElement.removeAttribute('data-theme');
        } else {
            document.documentElement.setAttribute('data-theme', theme.id);
        }
        setCurrentTheme(theme);
    };

    return (
        <div id="theme-switcher-container" className="fixed bottom-8 right-8 z-[100] transition-all duration-500 ease-in-out">
            {/* Theme Panel */}
            <div
                id="theme-panel"
                className={`bg-[#F6F4F1]/80 backdrop-blur-md border border-[#EDEBE7] p-5 shadow-2xl flex flex-col gap-5 min-w-[200px] transition-all duration-300 ${isPanelVisible ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none absolute bottom-0 right-0"}`}
            >
                <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-display font-medium text-atelier-muted">Editorial Themes</span>
                    <button onClick={() => setIsPanelVisible(false)} className="text-atelier-muted hover:text-atelier-text transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {themes.map((theme) => (
                        <button
                            key={theme.id}
                            onClick={() => setTheme(theme)}
                            className={`h-10 rounded-none transition-opacity hover:opacity-80 flex items-center justify-center group relative ${theme.span ? "col-span-2" : ""} ${currentTheme.id === theme.id ? "ring-2 ring-atelier-text" : ""}`}
                            style={{ backgroundColor: theme.color }}
                            title={theme.name}
                        >
                            <span className={`text-[8px] uppercase tracking-tighter text-center leading-none transition-opacity duration-300 ${currentTheme.id === theme.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"} ${theme.id === 'default' ? "text-[#3A332E]" : "text-white"}`}>
                                {theme.text}
                            </span>
                        </button>
                    ))}
                </div>

                <p id="theme-status" className="text-[9px] text-atelier-muted text-center mt-1 italic tracking-widest uppercase">
                    {currentTheme.name} Mode Active
                </p>
            </div>

            {/* Toggle Button */}
            {!isPanelVisible && (
                <button
                    id="theme-toggle-btn"
                    onClick={() => setIsPanelVisible(true)}
                    className="w-10 h-10 bg-[#F6F4F1] border border-[#EDEBE7] shadow-lg flex items-center justify-center hover:bg-[#EDEBE7] transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
                </button>
            )}
        </div>
    );
};

export default ThemeSwitcherAtelier;
