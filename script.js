
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const topSec = document.getElementById('topSec')

prefersDark ? document.body.classList.add('dark')  :document.body.classList.add('light')  
prefersDark?topSec.classList.add('dark'):topSec.classList.add('light')


console.log(topSec);
 