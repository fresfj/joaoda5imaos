# Animation System

`components/scroll-effects.tsx` observes elements marked `data-reveal`. Each element plays once when at least 12% is visible: opacity 0.25 to 1 and translateY 24px to 0, over 650ms with a gentle deceleration.

Content is visible in server-rendered HTML before hydration and when JavaScript is unavailable. The observer unobserves completed elements and disconnects on unmount. No scroll event handlers or animation libraries are loaded.

`prefers-reduced-motion` suppresses entrance animations and CSS smooth scrolling. Changing the preference cancels active reveals. Button feedback changes color only. There is no parallax or continuous decorative motion.
