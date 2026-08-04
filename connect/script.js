document.querySelectorAll("a").forEach(link=>{

link.addEventListener("mouseenter",()=>{

navigator.vibrate?.(20);

});

});
