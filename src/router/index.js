import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import VueScrollTo from 'vue-scrollto';

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            title: 'ScreenToGif - Record your screen, edit and save as a gif or video',
            metaTags: [
                { name: 'description', content: 'Free screen recorder tool, which lets you record, edit and save as a gif or video.' },
                { property: 'og:description', content: 'Free screen recorder tool, which lets you record, edit and save as a gif or video.' }
            ]
        }
    },
    {
        path: "/home",
        redirect: "/"
    },

    {
        path: "/downloads",
        name: "Downloads",
        //Route level code-splitting: this generates a separate chunk (downloads.[hash].js) for this route which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "Downloads" */ "@/views/Downloads.vue"),
        meta: {
            title: 'ScreenToGif - Downloads',
            metaTags: [
                { name: 'description', content: 'Download the installer or portable versions of ScreenToGif now.' },
                { property: 'og:description', content: 'Download the installer or portable versions of ScreenToGif now.' }
            ]
        }
    },
    {
        path: "/download",
        redirect: "/downloads"
    },
    {
        path: "/releases",
        redirect: "/downloads"
    },

    {
        path: "/donation",
        name: "Donation",
        component: () => import(/* webpackChunkName: "Donation" */ "@/views/Donation.vue"),
        meta: {
            title: 'ScreenToGif - Donation',
            metaTags: [
                { name: 'description', content: 'Help ScreenToGif get better now, donating to the project.' },
                { property: 'og:description', content: 'Help ScreenToGif get better now, donating to the project.' }
            ]
        }
    },
    {
        path: "/donate",
        redirect: "/donation"
    },

    {
        path: "/screenshots",
        name: "Screenshots",
        component: () => import(/* webpackChunkName: "Screenshots" */ "@/views/Screenshots.vue"),
        meta: {
            title: 'ScreenToGif - Screenshots',
            metaTags: [
                { name: 'description', content: 'View the screenshots of ScreenToGif.' },
                { property: 'og:description', content: 'View the screenshots of ScreenToGif.' }
            ]
        }
    },
    {
        path: "/screenshot",
        redirect: "/screenshots"
    },
    {
        path: "/images",
        redirect: "/screenshots"
    },

    {
        path: "/how-to-use",
        name: "HowToUse",
        component: () => import(/* webpackChunkName: "HowToUse" */ "@/views/HowToUse.vue"),
        meta: {
            title: 'ScreenToGif - How To Use',
            metaTags: [
                { name: 'description', content: 'Learn how to use ScreenToGif.' },
                { property: 'og:description', content: 'Learn how to use ScreenToGif.' }
            ]
        }
    },
    {
        path: "/docs",
        redirect: "/how-to-use"
    },
    {
        path: "/help",
        redirect: "/how-to-use"
    },

    {
        path: "/contact",
        name: "Contact",
        component: () => import(/* webpackChunkName: "Contact" */ "@/views/Contact.vue"),
        meta: {
            title: 'ScreenToGif - Contact',
            metaTags: [
                { name: 'description', content: 'Contact the developer of ScreenToGif.' },
                { property: 'og:description', content: 'Contact the developer of ScreenToGif.' }
            ]
        }
    },
    {
        path: "/about",
        redirect: "/contact"
    },

    {
        path: "/features",
        name: "Features",
        component: () => import(/* webpackChunkName: "Features" */ "@/views/Features.vue"),
        meta: {
            title: 'ScreenToGif - Features',
            metaTags: [
                { name: 'description', content: 'Discover all ScreenToGif features.' },
                { property: 'og:description', content: 'Discover all ScreenToGif features.' }
            ]
        }
    },
    {
        path: "/discover",
        redirect: "/features"
    },

    {
        path: "/share",
        name: "Share",
        component: () => import(/* webpackChunkName: "Share" */ "@/views/Share.vue"),
        meta: {
            title: 'ScreenToGif - Share',
            metaTags: [
                { name: 'description', content: 'See what people are saying about ScreenToGif.' },
                { property: 'og:description', content: 'See what people are saying about ScreenToGif.' }
            ]
        }
    },
    {
        path: "/src",
        redirect: "/source"
    },

    {
        path: "/source",
        name: "Source",
        component: () => import(/* webpackChunkName: "Source" */ "@/views/Source.vue"),
        meta: {
            title: 'ScreenToGif - Source',
            metaTags: [
                { name: 'description', content: 'See the details of open source project, ScreenToGif.' },
                { property: 'og:description', content: 'See the details of open source project, ScreenToGif.' }
            ]
        }
    },
    {
        path: "/src",
        redirect: "/source"
    },

    {
        path: "/privacy-terms",
        name: "PrivacyAndTerms",
        component: () => import(/* webpackChunkName: "PrivacyAndTerms" */ "@/views/PrivacyAndTerms.vue"),
        meta: {
            title: 'ScreenToGif - Privacy and Terms',
            metaTags: [
                { name: 'description', content: 'See the details of open source project, ScreenToGif.' },
                { property: 'og:description', content: 'See the details of open source project, ScreenToGif.' }
            ]
        }
    },
    {
        path: "/privacy",
        redirect: "/privacy-terms"
    },
    {
        path: "/terms",
        redirect: "/privacy-terms"
    },
    {
        path: "/vpat",
        redirect: "/privacy-terms"
    },

    {
        path: "/🙀",
        name: "🙀",
        component: () => import(/* webpackChunkName: "🙀" */ "@/views/🙀.vue"),
        meta: {
            title: 'ScreenToGif - 🙀',
            metaTags: [
                { name: 'description', content: 'Why are you sharing this exact page?' },
                { property: 'og:description', content: 'Why are you sharing this exact page?' }
            ]
        }
    },

    {
        path: "/404",
        name: "404",
        component: () => import(/* webpackChunkName: "NotFound" */ "@/views/NotFound.vue"),
        meta: {
            title: 'ScreenToGif - 404',
            metaTags: [
                { name: 'description', content: 'Why are you sharing this exact page? 404' },
                { property: 'og:description', content: 'Why are you sharing this exact page? 404' }
            ]
        }
    },
    {
        path: "*", //Everything else will result in a 404 page.
        redirect: "/404"
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,

    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            this.app.$scrollTo(to.hash, 700);
            return { selector: to.hash }
        } else if (savedPosition) {
            return savedPosition;
        } else {
            //When the route changes, the page should scroll back to the top.
            this.app.$scrollTo('#app', 700);
            return { x: 0, y: 0 }
        }
    }
});

//This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
    //This goes through the matched routes from last to first, finding the closest route with a title.
    //eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

    //Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
    const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

    //If a route with a title was found, set the document (page) title to that value.
    if(nearestWithTitle) 
        document.title = nearestWithTitle.meta.title;

    //Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

    //Skip rendering meta tags if there are none.
    if(!nearestWithMeta) 
        return next();

    //Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags.map(tagDef => {
        const tag = document.createElement('meta');

        Object.keys(tagDef).forEach(key => {
            tag.setAttribute(key, tagDef[key]);
        });

        //We use this to track which meta tags we create, so we don't interfere with other ones.
        tag.setAttribute('data-vue-router-controlled', '');

        return tag;
    })
    //Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

    next();
});

router.afterEach((to, from) => {
    //If it's the same page, use the scrollBehavior (unless it's on the home page).
    if (to.hash && (to.path != from.path || to.path == "/"))
        Vue.nextTick().then(() => VueScrollTo.scrollTo(to.hash, 700));
});

export default router;