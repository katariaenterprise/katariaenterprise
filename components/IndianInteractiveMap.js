"use client";
import { useEffect, useRef, useState } from "react";

export default function IndianInteractiveMap({ onStateClick }) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const scriptsLoadedRef = useRef(false);
  const isInitializing = useRef(false);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !mapContainerRef.current || isInitializing.current) return;

    const loadMap = async () => {
      if (isInitializing.current) return;
      isInitializing.current = true;

      try {
        // Only load scripts once
        if (!scriptsLoadedRef.current) {
          // Load Raphael
          if (!window.Raphael) {
            await new Promise((resolve, reject) => {
              const raphaelScript = document.createElement("script");
              raphaelScript.src = "/indian-interactive-map/raphael.min.js";
              raphaelScript.onload = resolve;
              raphaelScript.onerror = reject;
              document.head.appendChild(raphaelScript);
            });
          }

          // Load paths
          if (!window.simplemaps_statemap_mapinfo) {
            await new Promise((resolve, reject) => {
              const pathsScript = document.createElement("script");
              pathsScript.src = "/indian-interactive-map/paths.js";
              pathsScript.onload = resolve;
              pathsScript.onerror = reject;
              document.head.appendChild(pathsScript);
            });
          }

          // Load settings
          if (!window.map_cfg) {
            await new Promise((resolve, reject) => {
              const settingsScript = document.createElement("script");
              settingsScript.src = "/indian-interactive-map/settings.js";
              settingsScript.onload = resolve;
              settingsScript.onerror = reject;
              document.head.appendChild(settingsScript);
            });
          }

          // Load map.js
          if (!window.FlaMap) {
            await new Promise((resolve, reject) => {
              const mapScript = document.createElement("script");
              mapScript.src = "/indian-interactive-map/map.js";
              mapScript.onload = resolve;
              mapScript.onerror = reject;
              document.head.appendChild(mapScript);
            });
          }

          // Load CSS
          if (!document.querySelector('link[href="/indian-interactive-map/map.css"]')) {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "/indian-interactive-map/map.css";
            document.head.appendChild(link);
          }

          scriptsLoadedRef.current = true;
        }

        // Wait a bit for scripts to fully initialize
        await new Promise(resolve => setTimeout(resolve, 100));

        // Initialize map only if not already initialized
        if (window.FlaMap && window.map_cfg && mapContainerRef.current && !mapInstanceRef.current) {
          // Clear any existing content in the container
          mapContainerRef.current.innerHTML = '';

          // Create new map instance
          mapInstanceRef.current = new window.FlaMap(window.map_cfg);
          
          // Draw map
          if (mapInstanceRef.current && mapInstanceRef.current.draw) {
            mapInstanceRef.current.draw(mapContainerRef.current);
            setMapReady(true);
          }

          // Add click handler
          if (onStateClick && mapInstanceRef.current && mapInstanceRef.current.on) {
            mapInstanceRef.current.on("click", (event, code) => {
              if (code) {
                onStateClick(code);
              }
            });
          }
        }
      } catch (error) {
        console.error("Error loading map:", error);
      } finally {
        isInitializing.current = false;
      }
    };

    loadMap();

    return () => {
      if (mapInstanceRef.current && mapInstanceRef.current.deleteObject) {
        try {
          mapInstanceRef.current.deleteObject();
          mapInstanceRef.current = null;
          setMapReady(false);
        } catch (e) {
          console.warn("Error during cleanup:", e);
        }
      }
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      id="map-container"
      className="w-full h-[500px] relative"
      style={{ maxWidth: "100%", margin: "0 auto" }}
    />
  );
}
