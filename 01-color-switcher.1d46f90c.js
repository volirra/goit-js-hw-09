!function(){let e;let t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]"),a=document.querySelector("body");console.log(a),t.addEventListener("click",function(){e=setInterval(()=>{a.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,t.disabled=!0,d.disabled=!1},1e3)}),d.addEventListener("click",function(){clearInterval(e),t.disabled=!1,d.disabled=!0}),d.disabled=!0}();//# sourceMappingURL=01-color-switcher.1d46f90c.js.map

//# sourceMappingURL=01-color-switcher.1d46f90c.js.map
