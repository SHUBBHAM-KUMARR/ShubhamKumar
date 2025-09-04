// theme toggle

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

prefersDark ? document.body.classList.add('dark'):document.body.classList.add('light')


