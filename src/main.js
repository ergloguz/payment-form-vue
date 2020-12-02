import Vue from 'vue';
import App from './App.vue';
import "./styles/app.css";

/* packages */
import Vuelidate from 'vuelidate';
import VueSweetalert2 from 'vue-sweetalert2';
import {BootstrapVue} from 'bootstrap-vue';

/* css files */
import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueSweetalert2);
Vue.use(BootstrapVue)
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')
