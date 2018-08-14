// ==UserScript==
// @name         SE logo to main
// @namespace    https://github.com/dzaima/PPCGDark
// @version      0.1
// @description  click the StackExchange logo to go to the main page (substitute for the site header being removed)
// @author       dzaima
// @match        https://*.stackexchange.com/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    let f=()=>{
        let el = $(".network-logo")[0];
        el.outerHTML = el.outerHTML;
        el = $(".network-logo")[0];
        el.href = window.location.origin;
        el.onclick=() => window.location = window.location.origin;
    }
    f();
    setTimeout(f,1000); // i have no idea what I'm doing
    window.onload = f;
})();