import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(Vuelidate);

import './styles/style.sass';
import './styles/media.sass';

new Vue({
    render: h => h(App),
}).$mount('#app');
