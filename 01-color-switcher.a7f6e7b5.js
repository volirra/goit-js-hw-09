!function(){let e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),o=document.querySelector("body");console.log(o),e.addEventListener("click",function(){let l=setInterval(()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,d=!0,console.log("I am ON"),d&&(e.disabled=!0,t.disabled=!1),t.addEventListener("click",function(){clearInterval(l),d=!1,e.disabled=!1,t.disabled=!0})},1e3)});let d=!1;t.disabled=!0}();//# sourceMappingURL=01-color-switcher.a7f6e7b5.js.map

//# sourceMappingURL=01-color-switcher.a7f6e7b5.js.map
