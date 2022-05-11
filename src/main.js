import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";

//Styles
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/themes/bootstrap4-dark-blue/theme.css";
import "primeicons/primeicons.css";

import Dialog from "primevue/dialog";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import InputText from "primevue/inputtext";
import Sidebar from "primevue/sidebar";
import Row from "primevue/row";
import Toast from "primevue/toast";
import Dropdown from "primevue/dropdown";
import Card from "primevue/card";
import Tag from "primevue/tag";
import ToastService from "primevue/toastservice";

const app = createApp(App);

app.use(router);

//PrimeVue Config
app.use(PrimeVue, { ripple: true });

app.use(ToastService);

app.component("pv-data-table", DataTable);
app.component("pv-column", Column);
app.component("pv-button", Button);
app.component("pv-toolbar", Toolbar);
app.component("pv-input-text", InputText);
app.component("pv-sidebar", Sidebar);
app.component("pv-row", Row);
app.component("pv-dialog", Dialog);
app.component("pv-toast", Toast);
app.component("pv-dropdown", Dropdown);
app.component("pv-tag", Tag);
app.component("pv-card", Card);

app.mount("#app");
