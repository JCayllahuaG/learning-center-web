import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";

//Styles
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/themes/bootstrap4-dark-blue/theme.css";
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(router);

//PrimeVue Config
app.use(PrimeVue, { ripple: true });

app.mount("#app");
