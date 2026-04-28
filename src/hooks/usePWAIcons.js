import { useEffect } from 'react';

const svgLines = `
  <line x1="82" y1="28" x2="76" y2="118"/>
  <line x1="96" y1="28" x2="90" y2="118"/>
  <line x1="82" y1="28" x2="96" y2="28"/>
  <line x1="76" y1="118" x2="126" y2="148"/>
  <line x1="90" y1="118" x2="140" y2="148"/>
  <line x1="126" y1="148" x2="118" y2="172"/>
  <line x1="140" y1="148" x2="132" y2="172"/>
  <line x1="126" y1="148" x2="140" y2="148"/>
  <line x1="118" y1="172" x2="60" y2="185"/>
  <line x1="132" y1="172" x2="72" y2="190"/>
  <line x1="118" y1="172" x2="132" y2="172"/>
  <line x1="60" y1="185" x2="72" y2="190"/>`;

export default function usePWAIcons() {
  useEffect(() => {
    // SVG favicon
    const svgFavicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 215" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <style>line{stroke:#0d0d0d}@media(prefers-color-scheme:dark){line{stroke:#ede9e2}}</style>
      ${svgLines}</svg>`;
    const iconLink = document.createElement('link');
    iconLink.rel = 'icon';
    iconLink.type = 'image/svg+xml';
    iconLink.href = 'data:image/svg+xml,' + encodeURIComponent(svgFavicon);
    document.head.appendChild(iconLink);

    // Apple touch icon
    const svgForCanvas = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="52 18 96 180" fill="none" stroke="#0d0d0d" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">${svgLines}</svg>`;
    const img = new Image();
    const blob = new Blob([svgForCanvas], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    img.onload = () => {
      const size = 180;
      const canvas = document.createElement('canvas');
      canvas.width = size; canvas.height = size;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#f7f4ef';
      ctx.fillRect(0, 0, size, size);
      const vbW = 96, vbH = 180, pad = 0.10;
      const scale = (size * (1 - pad * 2)) / Math.max(vbW, vbH);
      const w = vbW * scale, h = vbH * scale;
      ctx.drawImage(img, (size - w) / 2, (size - h) / 2, w, h);
      URL.revokeObjectURL(url);
      const touchLink = document.createElement('link');
      touchLink.rel = 'apple-touch-icon';
      touchLink.href = canvas.toDataURL('image/png');
      document.head.appendChild(touchLink);
    };
    img.src = url;

    // Splash screen
    const splashSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="52 18 96 180" fill="none" stroke="#0d0d0d" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">${svgLines}</svg>`;
    const splashImg = new Image();
    const splashBlob = new Blob([splashSvg], { type: 'image/svg+xml' });
    const splashUrl = URL.createObjectURL(splashBlob);
    splashImg.onload = () => {
      const dpr = window.devicePixelRatio || 1;
      const sw = window.screen.width * dpr;
      const sh = window.screen.height * dpr;
      const canvas = document.createElement('canvas');
      canvas.width = sw; canvas.height = sh;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#f7f4ef';
      ctx.fillRect(0, 0, sw, sh);
      const chairH = sh * 0.18;
      const chairW = 96 * (chairH / 180);
      ctx.drawImage(splashImg, (sw - chairW) / 2, (sh - chairH) / 2, chairW, chairH);
      URL.revokeObjectURL(splashUrl);
      const splashLink = document.createElement('link');
      splashLink.rel = 'apple-touch-startup-image';
      splashLink.href = canvas.toDataURL('image/png');
      document.head.appendChild(splashLink);
    };
    splashImg.src = splashUrl;
  }, []);
}
