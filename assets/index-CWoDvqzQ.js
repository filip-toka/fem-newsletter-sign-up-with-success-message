(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const i=document.querySelector(".form-newsletter"),l=document.querySelector("dialog");if(i&&l){const t=i.querySelector(".form-newsletter__input"),o=i.querySelector(".form-error");let n=document.querySelector(".dialog-modal__subscriber-email");const s=l.querySelector(".dialog-close");i.addEventListener("submit",e=>{if(!t&&!o&&!n&&!s)return e.preventDefault(),!1;if(a(t.value))return o.textContent="Enter your email",t.classList.add("error"),e.preventDefault(),!1;if(!u(t.value))return o.textContent="Valid email required",t.classList.add("error"),e.preventDefault(),!1;n.textContent=t.value,l.showModal(),s.addEventListener("click",()=>{l.close(),t.value=n.textContent=o.textContent="",t.classList.contains("error")&&t.classList.remove("error")}),e.preventDefault()})}function a(t){return t==null||t==""}function u(t){return/^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/.test(t)}