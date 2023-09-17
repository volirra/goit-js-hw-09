!function(){let t=null,e={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};// refs.btnStop.setAttribute('disabled', true);
e.btnStop.disabled=!0,e.btnStart.addEventListener("click",function(){e.btnStart.disabled=!0,e.btnStop.disabled=!1,// refs.btnStart.setAttribute('disabled', true);
// refs.btnStop.removeAttribute('disabled');
t=setInterval(()=>{e.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`},1e3)}),e.btnStop.addEventListener("click",function(){e.btnStart.disabled=!1,e.btnStop.disabled=!0,// refs.btnStart.removeAttribute('disabled');
// refs.btnStop.setAttribute('disabled', true);
clearInterval(t)})}();//# sourceMappingURL=01-color-switcher.8ff85bcb.js.map

//# sourceMappingURL=01-color-switcher.8ff85bcb.js.map
