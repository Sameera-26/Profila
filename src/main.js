/* eslint-disable vue/multi-word-component-names */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import "./assets/main.css";
import { Tabs, Tab } from "vue3-tabs-component";
import vueCountryRegionSelect from 'vue3-country-region-select';
import VueTelInput from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'
import { DatePicker } from 'vue-drumroll-datetime-picker'
import 'vue-drumroll-datetime-picker/dist/style.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowLeft , faCaretUp} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faArrowLeft, faCaretUp)

const app = createApp(App);
app.component("tabs", Tabs);
app.component("tab", Tab);

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VueTelInput);
app.use(vueCountryRegionSelect);
app.component('DatePicker', DatePicker)
app.use(router);
app.mount("#app");
