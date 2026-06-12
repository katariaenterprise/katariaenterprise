"use client";
import Script from "next/script";

export default function MapScripts() {
  return (
    <>
      <Script 
        src="/indian-map/raphael.min.js" 
        strategy="beforeInteractive"
      />
      <Script 
        src="/indian-map/settings.js" 
        strategy="beforeInteractive"
      />
      <Script 
        src="/indian-map/paths.js" 
        strategy="beforeInteractive"
      />
      <Script 
        src="/indian-map/map.js" 
        strategy="beforeInteractive"
      />
    </>
  );
}
