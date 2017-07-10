import Vue from 'vue'
import App from './app.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

new Vue({

    // We want to target the div with an id of 'events'
    el: 'app',

    components: { app: App }
});