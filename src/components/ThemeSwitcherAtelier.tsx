"use client";

import React, { useState, useEffect } from "react";

const themes = [
    { name: "Burgundy", color: "#811331" },
    { name: "Sage", color: "#5D6D5E" },
    { name: "Ochre", color: "#A67C52" },
];

const ThemeSwitcherAtelier = () => {
    const [currentTheme, setCurrentTheme] = useState(themes[0]);
    const [isVisible, setIsVisible] = useState(true);

    const updateTheme = (theme: typeof themes[0]) => {
        document.documentElement.style.setProperty("--accent", theme.color);
        setCurrentTheme(theme);
    };

    // Auto-hide after some time or keep it "floating"
    // The user asked for "propadayushchiy" (disappearing) - 
    // I will make it minimize to a small icon when not hovered or after some time.

    return (
        <div
            className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 ease-in-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
                }`}
        >
            <div className="bg-atelier-bg/80 backdrop-blur-md border border-atelier-border p-4 shadow-2xl flex flex-col gap-4">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-display text-atelier-muted">Accent Theme</span>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="text-atelier-muted hover:text-atelier-text transition-colors"
                    >
                        <span className="material-icons-round text-sm">close</span>
                    </button>
                </div>

                <div className="flex gap-4">
                    {themes.map((theme) => (
                        <button
                            key={theme.name}
                            onClick={() => updateTheme(theme)}
                            className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${currentTheme.name === theme.name ? "border-atelier-text ring-2 ring-offset-2 ring-atelier-accent/20" : "border-transparent"
                                }`}
                            style={{ backgroundColor: theme.color }}
                            title={theme.name}
                        />
                    ))}
                </div>

                <p className="text-[9px] text-atelier-muted font-chinese text-center mt-2 italic">
                    {currentTheme.name} Mode Active
                </p>
            </div>

            {/* Re-show button when hidden */}
            {!isVisible && (
                <button
                    onClick={() => setIsVisible(true)}
                    className="fixed bottom-8 right-8 w-10 h-10 bg-atelier-bg border border-atelier-border shadow-lg flex items-center justify-center hover:bg-atelier-border transition-colors pointer-events-auto"
                >
                    <span className="material-icons-round text-atelier-muted">palette</span>
                </button>
            )}
        </div>
    );
};

export default ThemeSwitcherAtelier;
