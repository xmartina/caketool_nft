function uagbTimelineInit(){const e=document.querySelector("iframe[name='editor-canvas']");let t;var r=t=(e?e.contentDocument:document).querySelectorAll(".uagb-timeline");if(0!==r.length)for(const a of r){const _=a.querySelector(".uagb-timeline__line__inner"),s=a.querySelector(".uagb-timeline__line");var i=a.querySelectorAll(".uagb-timeline__marker"),l=a.querySelector(".uagb-timeline__field:nth-last-child(2)"),l=l||a.querySelector(".block-editor-block-list__block:last-child");const c=i[0],m=i[i.length-1];setTimeout(()=>{s.style.top=c?.offsetTop+"px"},300);var n,u,o,l=l?.offsetHeight,l=(a.classList.contains("uagb-timeline__arrow-center")?s.style.bottom=m?.offsetTop+"px":a.classList.contains("uagb-timeline__arrow-top")?(n=l-m?.offsetTop,s.style.bottom=n+"px"):a.classList.contains("uagb-timeline__arrow-bottom")&&(n=l-m?.offsetTop,s.style.bottom=n+"px"),3*i[0]?.offsetHeight),g=document?.documentElement?.clientHeight/2+l,i=document.body,l=document.documentElement,i=Math.max(i.scrollHeight,i.offsetHeight,l.clientHeight,l.scrollHeight,l.offsetHeight),l=i-m?.getBoundingClientRect()?.top,i=i-c?.getBoundingClientRect()?.top-l,l=c?.getBoundingClientRect()?.top+window?.scrollY-(window?.innerHeight-window?.innerHeight/3);l<document?.documentElement?.scrollTop&&((l=i/100*((document?.documentElement?.scrollTop-l)/i*100))<60+i&&(_.style.height=l+"px"));const d=a.querySelectorAll(".uagb-timeline__marker");let t=a.querySelectorAll(".uagb-timeline__field");0===t.length&&(t=a.querySelectorAll(".uagb-timeline__animate-border"));for(let e=0;e<d.length;e++)o=d[e].lastElementChild.getBoundingClientRect().top+window.scrollY,u=t[e].lastElementChild.getBoundingClientRect().top+window.scrollY,o=o-document.documentElement.scrollTop,u-document.documentElement.scrollTop<g?(t[e].classList.remove("out-view"),t[e].classList.add("in-view")):(t[e].classList.add("out-view"),t[e].classList.remove("in-view")),o<g?(d[e].classList.remove("uagb-timeline__out-view-icon"),d[e].classList.add("uagb-timeline__in-view-icon")):(d[e].classList.add("uagb-timeline__out-view-icon"),d[e].classList.remove("uagb-timeline__in-view-icon"))}}function UAGBTimelineClasses(l,e){e=document.querySelectorAll(e);if(0!==e.length){var n=Math.max(window.screen.width,window.innerWidth);for(const o of e){o.classList.remove("uagb-timeline__left-block","uagb-timeline__right-block","uagb-timeline__center-block");let e="",t=(n<=uagb_timeline_data.mobile_breakpoint?e="Mobile":n<=uagb_timeline_data.tablet_breakpoint&&(e="Tablet"),"left"===l["timelinAlignment"+e]?o.classList.add("uagb-timeline__left-block"):"right"===l["timelinAlignment"+e]?o.classList.add("uagb-timeline__right-block"):o.classList.add("uagb-timeline__center-block"),o.querySelectorAll(".wp-block-uagb-content-timeline-child")),i=0;for(const a of t=0===t.length?o.querySelectorAll(".uagb-timeline__field"):t){a.classList.remove("uagb-timeline__left","uagb-timeline__right");const s=a.querySelectorAll(".uagb-timeline__marker")[0],c=(s.classList.remove("uagb-timeline__left","uagb-timeline__right"),a.querySelectorAll(".uagb-timeline__events-inner-new")[0]);c.classList.remove("uagb-timeline__day-right","uagb-timeline__day-left"),"left"===l["timelinAlignment"+e]?(a.classList.add("uagb-timeline__left"),s.classList.add("uagb-timeline__left"),c.classList.add("uagb-timeline__day-left")):"right"===l["timelinAlignment"+e]?(a.classList.add("uagb-timeline__right"),s.classList.add("uagb-timeline__left"),c.classList.add("uagb-timeline__day-right")):"center"===l["timelinAlignment"+e]&&(i%2==0?(a.classList.add("uagb-timeline__right"),s.classList.add("uagb-timeline__right"),c.classList.add("uagb-timeline__day-right")):(a.classList.add("uagb-timeline__left"),s.classList.add("uagb-timeline__left"),c.classList.add("uagb-timeline__day-left"))),i++}}}}window.addEventListener("DOMContentLoaded",uagbTimelineInit),window.addEventListener("resize",uagbTimelineInit),window.addEventListener("scroll",uagbTimelineInit),document.addEventListener("UAGTimelineEditor",uagbTimelineInit);