"use client";

import { useEffect } from "react";

declare global {
    interface Window {
        ym?: (id: number, type: string, goal: string) => void;
        fbq?: any;
        gtag?: any;
    }
}

const ClientTracker = () => {
    useEffect(() => {
        // --- UTM Logic ---
        const params = new URLSearchParams(window.location.search);
        const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
        let utmData: any = {};
        let hasUTM = false;

        utmKeys.forEach(key => {
            const value = params.get(key);
            if (value) {
                const cleanKey = key.replace('utm_', '');
                utmData[cleanKey] = value;
                hasUTM = true;
            }
        });

        if (hasUTM) {
            localStorage.setItem('utm_data', JSON.stringify(utmData));
        }

        // --- 60s User Activity Tracker ---
        const activityOptions = { timer: 10, target: 6 };
        let hasActivitySinceLastCheck = false;
        let targetReachedCount = 0;
        let activitySended = false;

        const recordActivity = () => { hasActivitySinceLastCheck = true; };
        ['scroll', 'click', 'dblclick', 'mousemove', 'keydown', 'keyup'].forEach(event => {
            document.addEventListener(event, recordActivity, { passive: true });
        });

        const interval = setInterval(() => {
            if (hasActivitySinceLastCheck) {
                hasActivitySinceLastCheck = false;
                targetReachedCount++;
                if (!activitySended && targetReachedCount >= activityOptions.target) {
                    if (window.ym) window.ym(92936100, 'reachGoal', 'TargetLoad');
                    if (window.fbq) window.fbq('track', 'Search');
                    if (window.gtag) window.gtag('event', 'conversion', { 'send_to': 'AW-11100467416/Gw1xCO2Eg5UYENjhjq0p' });
                    activitySended = true;
                }
            }
        }, activityOptions.timer * 1000);

        return () => {
            clearInterval(interval);
            ['scroll', 'click', 'dblclick', 'mousemove', 'keydown', 'keyup'].forEach(event => {
                document.removeEventListener(event, recordActivity);
            });
        };
    }, []);

    return null;
};

export default ClientTracker;
