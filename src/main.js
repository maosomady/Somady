import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes.js'
import i18n from './translate.js'

// Optional third-party libraries
import $ from "jquery";
import _ from "lodash";
import noUiSlider from "nouislider";
import "datatables.net";
import "dropzone/dist/dropzone-min.js";
import * as VanillaCalendarPro from "vanilla-calendar-pro";

window._ = _;
window.$ = $;
window.jQuery = $;
window.DataTable = $.fn.dataTable;
window.noUiSlider = noUiSlider;
window.VanillaCalendarPro = VanillaCalendarPro;


const app = createApp(App)
app.use(router)
app.use(i18n)


app.mount('#app')


// Preline UI
import("preline/dist/index.js");