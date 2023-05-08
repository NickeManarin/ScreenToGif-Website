import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./locales";
import VueResource from "vue-resource";
import Buefy from "buefy";
import VueShowdown from "vue-showdown";
import VueClipboard from "vue-clipboard2";
import VueGtag from "vue-gtag";
import VueScrollTo from 'vue-scrollto';
import VueHeadful from 'vue-headful';
import Vuex from 'vuex'

import CustomColors from "./mixins/colors.scss";

Vue.use(VueResource);
Vue.use(Vuex);
Vue.use(Buefy, {
    defaultIconPack: "unicons",
});
Vue.use(VueShowdown, {
    flavor: "github",
    options: {
        headerLevelStart: 3,
        openLinksInNewWindow: true,
        requireSpaceBeforeHeadingText: true,
    }
});
Vue.use(VueClipboard);
Vue.use(CustomColors);
Vue.use(VueGtag, {
    config: { id: "G-S0NVBX2F5J" },
    enabled: process.env.NODE_ENV === 'production'
}, router);
Vue.use(VueScrollTo);
Vue.component('vue-headful', VueHeadful);

Vue.config.productionTip = false;

//console.log('Is prod?', process.env.NODE_ENV === 'production');

const store = new Vuex.Store({
    state: {
        release: {
            version: '',
            release_date: new Date(),
            download_count: 0,
            is_prerelease: false,
            active_days: 0,
            author_login: '',
            author_picture: '',
            is_picture_loaded: false,
            author_url: '',
            url: '',
            description: '',
            assets: [],
            fromFoss: false
        },
        releases: [],
        architecture: 'x64',
        totalDownloads: 0,
        totalDays: 0,
        releasesCount: 0,
        oldestDate: undefined
    },
    mutations: {
        setRelease(state, payload) {
            Object.assign(state.release, payload);
            //state.release = payload;
        },
        setReleases(state, payload) {
            Object.assign(state.releases, payload);
            //state.releases = payload;
        },
        setDownloadCount(state, payload) {
            state.totalDownloads = payload;
        },
        setDaysCount(state, payload) {
            state.totalDays = payload;
        },
        setReleaseCount(state, payload) {
            state.releasesCount = payload;
        },
        setOldestDate(state, payload) {
            state.oldestdate = payload;
        },
    },
    getters: {
        /* Improve this! */
        packageRelease: state => {
            if (state.release === {} || state.release.assets == null)
                return null;

            return state.release.assets.find(o => (o.arch === state.architecture || o.arch === 'anyCpu') && o.type === 'package');
        },
        installerRelease: state => {
            if (state.release === {} || state.release.assets == null)
                return null;

            return state.release.assets.find(o => (o.arch === state.architecture || o.arch === 'anyCpu') && o.mode !== 'light' && o.type === 'installer');
        },
        portableRelease: state => {
            if (state.release === {} || state.release.assets == null)
                return null;

            return state.release.assets.find(o => (o.arch === state.architecture || o.arch === 'anyCpu') && o.mode !== 'light' && o.type === 'portable');
        },
        installerLightRelease: state => {
            if (state.release === {} || state.release.assets == null)
                return null;

            return state.release.assets.find(o => (o.arch === state.architecture || o.arch === 'anyCpu') && o.mode === 'light' && o.type === 'installer');
        },
        portableLightRelease: state => {
            if (state.release === {} || state.release.assets == null)
                return null;

            return state.release.assets.find(o => (o.arch === state.architecture || o.arch === 'anyCpu') && o.mode === 'light' && o.type === 'portable');
        },
        
        getUrlPackage: (state, getters) => {
            let release = getters.packageRelease;
            return release ? release.url : 'https://github.com/NickeManarin/ScreenToGif/releases/latest';
        },
        getUrlPortable: (state, getters) => {
            let release = getters.portableRelease;
            return release ? release.url : 'https://github.com/NickeManarin/ScreenToGif/releases/latest';
        },
        getUrlInstaller: (state, getters) => {
            let release = getters.installerRelease;
            return release ? release.url : 'https://github.com/NickeManarin/ScreenToGif/releases/latest';
        },
        getUrlLightPortable: (state, getters) => {
            let release = getters.portableLightRelease;
            return release ? release.url : 'https://github.com/NickeManarin/ScreenToGif/releases/latest';
        },
        getUrlLightInstaller: (state, getters) => {
            let release = getters.installerLightRelease;
            return release ? release.url : 'https://github.com/NickeManarin/ScreenToGif/releases/latest';
        },
        getSizePackage: (state, getters) => {
            let release = getters.packageRelease;
            return release ? release.size : null;
        },
        getSizePortable: (state, getters) => {
            let release = getters.portableRelease;
            return release ? release.size : null;
        },
        getSizeInstaller: (state, getters) => {
            let release = getters.installerRelease;
            return release ? release.size : null;
        },
        getSizeLightPortable: (state, getters) => {
            let release = getters.portableLightRelease;
            return release ? release.size : null;
        },
        getSizeLightInstaller: (state, getters) => {
            let release = getters.installerLightRelease;
            return release ? release.size : null;
        },
        getDownloadCountPackage: (state, getters) => {
            let release = getters.packageRelease;
            return release ? release.downloadCount.toLocaleString(i18n.locale) : '...';
        },
        getDownloadCountPortable: (state, getters) => {
            let release = getters.portableRelease;
            return release ? release.downloadCount.toLocaleString(i18n.locale) : '...';
        },
        getDownloadCountInstaller: (state, getters) => {
            let release = getters.installerRelease;
            return release ? release.downloadCount.toLocaleString(i18n.locale) : '...';
        },
        getDownloadCountLightPortable: (state, getters) => {
            let release = getters.portableLightRelease;
            return release ? release.downloadCount.toLocaleString(i18n.locale) : '...';
        },
        getDownloadCountLightInstaller: (state, getters) => {
            let release = getters.installerLightRelease;
            return release ? release.downloadCount.toLocaleString(i18n.locale) : '...';
        }
    }
});

new Vue({
    router,
    i18n,
    store,
    render: (h) => h(App),
    created() {
        if (sessionStorage.redirect) {
            const redirect = sessionStorage.redirect;
            const hash = sessionStorage.hash;
            delete sessionStorage.redirect;
            delete sessionStorage.hash;

            this.$router.push(redirect + hash);
        }
    }
}).$mount("#app");
