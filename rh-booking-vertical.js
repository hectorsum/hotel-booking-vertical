let momentjs = 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js';
let litepicker1 = 'https://cdn.jsdelivr.net/npm/litepicker-polyfills-ie11/dist/index.js';
let litepicker2 = 'https://cdn.jsdelivr.net/npm/litepicker/dist/litepicker.js';
let autocomplete = 'https://cdn.jsdelivr.net/npm/@tarekraafat/autocomplete.js@10.2.6/dist/autoComplete.min.js';
let autocompleteCSS = 'https://cdn.jsdelivr.net/npm/@tarekraafat/autocomplete.js@10.2.6/dist/css/autoComplete.min.css';
let fontawesome = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
let custom = 'https://cdn.jsdelivr.net/gh/hectorsum/hotel-booking-vertical@rh-v1.0.5/index.css';
document.write(`<link rel="stylesheet" href="${fontawesome}">`)
document.write(`<link rel="stylesheet" href="${autocompleteCSS}">`)
document.write(`<link rel="stylesheet" href="${custom}"/>`)
document.write(`<script src=${momentjs}></script>`)
document.write(`<script src=${litepicker1}></script>`)
document.write(`<script src=${litepicker2}></script>`)
document.write(`<script src=${autocomplete} async></script>`)