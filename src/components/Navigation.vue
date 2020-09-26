<template>
    <b-navbar ref="navbar" class="is-spaced has-shadow" :class="navigationColor()" wrapper-class="container is-widescreen">
        <template slot="brand">
            <b-navbar-item tag="router-link" to="/" :active="$route.path === '/'">
                <ResponsiveImage :src="require('@/assets/logo.png')" maxWidth="1.75rem" maxHeight="1.75rem"/>
                
                <transition name="slide-left">
                    <p v-if="$route.path !== '/'" class="subtitle is-5 is-unselectable has-spacing no-wrap" :class="textColor()">ScreenToGif</p>
                </transition>
            </b-navbar-item>
        </template>

        <template slot="start">
            <b-navbar-item class="is-flex" tag="router-link" to="/downloads" :active="$route.path === '/downloads'">
                <b-icon icon="download-alt"/>
                <p class="is-unselectable">{{ $t('navigation.downloads') }}</p>
            </b-navbar-item>

            <b-navbar-item class="is-flex" tag="router-link" to="/donation" :active="$route.path === '/donation'">
                <b-icon icon="heart"/>
                <p class="is-unselectable">{{ $t('navigation.donate') }}</p>
            </b-navbar-item>

            <b-navbar-item class="is-flex" tag="router-link" to="/screenshots" :active="$route.path === '/screenshots'">
                <b-icon icon="scenery"/>
                <p class="is-unselectable">{{ $t('navigation.screenshots') }}</p>
            </b-navbar-item>

            <b-navbar-item class="is-flex" v-if="!collapseContact" tag="router-link" to="/contact" :active="$route.path === '/contact'">
                <b-icon icon="envelope-alt"/>
                <p class="is-unselectable">{{ $t('navigation.contact') }}</p>
            </b-navbar-item>


            <!-- Hidden on desktop and up -->
            <b-navbar-item class="is-hidden-desktop is-flex" tag="router-link" to="/features" :active="$route.path === '/features'">
                <b-icon icon="bolt"/>
                <p class="is-unselectable">{{ $t('navigation.features') }}</p>
            </b-navbar-item>

            <b-navbar-item class="is-hidden-desktop is-flex" tag="router-link" to="/how-to-use" :active="$route.path === '/how-to-use'">
                <b-icon icon="books"/>
                <p class="is-unselectable">{{ $t('navigation.how-to-use') }}</p>
            </b-navbar-item>

            <b-navbar-item class="is-hidden-desktop is-flex" tag="router-link" to="/share" :active="$route.path === '/share'">
                <b-icon icon="share"/>
                <p class="is-unselectable">{{ $t('navigation.share') }}</p>
            </b-navbar-item>

            <b-navbar-item class="is-hidden-desktop is-flex" tag="router-link" to="/source" :active="$route.path === '/source'">
                <b-icon icon="github-alt"/>
                <p class="is-unselectable">{{ $t('navigation.source') }}</p>
            </b-navbar-item>

            <b-navbar-item class="is-hidden-desktop is-flex" tag="router-link" to="/privacy-terms" :active="$route.path === '/privacy-terms'">
                <b-icon icon="file-shield-alt"/>
                <p class="is-unselectable">{{ $t('navigation.privacy-terms') }}</p>
            </b-navbar-item>


            <!-- Hidden on touch -->
            <b-navbar-dropdown class="is-hidden-touch" :label="$t('navigation.more')">
                <b-navbar-item v-show="collapseContact" tag="router-link" to="/contact" :active="$route.path === '/contact'">
                    <b-icon icon="envelope-alt"/>
                    <p class="is-unselectable">{{ $t('navigation.contact') }}</p>
                </b-navbar-item>

                <b-navbar-item tag="router-link" to="/features" :active="$route.path === '/features'">
                    <b-icon icon="bolt"/>
                    <p class="is-unselectable">{{ $t('navigation.features') }}</p>
                </b-navbar-item>

                <b-navbar-item tag="router-link" to="/how-to-use" :active="$route.path === '/how-to-use'">
                    <b-icon icon="books"/>
                    <p class="is-unselectable">{{ $t('navigation.how-to-use') }}</p>
                </b-navbar-item>

                <b-navbar-item tag="router-link" to="/share" :active="$route.path === '/share'">
                    <b-icon icon="share"/>
                    <p class="is-unselectable">{{ $t('navigation.share') }}</p>
                </b-navbar-item>

                <b-navbar-item tag="router-link" to="/source" :active="$route.path === '/source'">
                    <b-icon icon="github-alt"/>
                    <p class="is-unselectable">{{ $t('navigation.source') }}</p>
                </b-navbar-item>

                <b-navbar-item tag="router-link" to="/privacy-terms" :active="$route.path === '/privacy-terms'">
                    <b-icon icon="file-shield-alt"/>
                    <p class="is-unselectable">{{ $t('navigation.privacy-terms') }}</p>
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div" class="has-dropdown is-hidden-touch">
                <b-dropdown v-model="$i18n.locale" aria-role="list" position="is-bottom-left"
                    @change="$gtag.event('Language', {'event_category': 'Clicks', 'event_label': 'Switch language: ' + $i18n.locale})">
                    <button class="button" :class="navigationColor()" type="button" slot="trigger">
                        <template>
                            <b-icon class="left-icon" pack="icon" icon="localization"/>
                            <span class="has">{{$i18n.locale}}</span>                                           
                        </template>

                        <b-icon pack="unicon" icon="uil-angle-down"/>
                    </button>

                    <b-dropdown-item v-for="(lang, i) in languageArray" :key="`lang${i}`" :value="lang.info.code" aria-role="listitem">
                        <div class="media">
                            <div class="media-content">
                                <h3>{{lang.info.lang}} <span v-if="lang.info.code !== 'en'">• {{lang.info['lang-english']}}</span></h3>
                            </div>
                        </div>
                    </b-dropdown-item>
                </b-dropdown>
            </b-navbar-item>

            <b-navbar-item tag="div" class="is-hidden-touch">
                <div class="buttons">
                    <b-tooltip :label="$t('navigation.download.info')" size="is-small" :type="tooltipBackground()" position="is-bottom" animated multilined>
                        <b-button class="button" :class="buttonColor()" :loading="isLoading" @click="download">
                            <strong>{{ $t('navigation.download.download') }}</strong>
                        </b-button>
                    </b-tooltip>
                </div>
            </b-navbar-item>

            <b-modal :active.sync="isModalActive" trap-focus aria-role="dialog" aria-modal :width="720" scroll="keep"
                @close="$gtag.event('Close modal', {'event_category': 'Clicks', 'event_label': 'Download'});">
                <div class="box">
                    <article class="media">
                        <figure class="media-left">
                            <p class="image is-64x64">
                                <ResponsiveImage :src="$store.release.author_picture + '&s=128'" width="64px" height="64px" maxWidth="64px" maxHeight="64px" borderRadius="4px" skeleton/>
                            </p>
                        </figure>

                        <div class="media-content">
                            <nav class="level is-marginless">
                                <div class="level-left">
                                    <a class="level-item" :href="$store.release.url" target="_blank" rel="noopener" 
                                        @click="$gtag.event('Release links', {'event_category': 'Clicks', 'event_label': 'Release'})">
                                        <span class="is-size-4 has-text-weight-semibold is-marginless">ScreenToGif {{ $store.release.version }}</span>  
                                    </a>

                                    <p class="level-item is-vcentered">
                                        <small v-html="$t('navigation.download.by').replace('{0}', '<a href={0} target=_blank rel=noopener>@{1}</a>')
                                            .replace('{0}', $store.release.author_url).replace('{1}', $store.release.author_login)"
                                            @click="$gtag.event('Release links', {event_category: 'Clicks', event_label: 'Author'})"/>
                                    </p>
                                </div>

                                <div class="level-right">
                                    <p class="level-item">
                                        <small>{{ isEmpty($store.release) ? "" : since($store.release.release_date_obj, new Date()) }}</small>
                                    </p>
                                </div>
                            </nav>

                            <div class="content has-side-padding" v-if="!isEmpty($store.release)">
                                <VueShowdown :markdown="$store.release.description" tag="span"/>
                            </div>

                            <hr>

                            <nav class="level is-marginless is-paddingless">
                            <div class="level-left"></div>

                            <div class="level-right">
                                <div v-if="$store.release.download_count_inst > 0" class="level-item has-text-centered">
                                    <div>
                                        <b-button type="is-info" size="is-medium" icon-left="compact-disc" tag="a" :href="$store.release.download_link_inst" rel="noopener"
                                            @click="$gtag.event('Download-Modal', {'event_category': 'Clicks', 'event_label': 'Installer'})">
                                            {{ $t('home.installer') }}
                                        </b-button>

                                        <p class="is-size-7 is-unselectable has-arrow-cursor">{{ isEmpty($store.release) ? 0 : $t('home.downloads').replace('{0}', $store.release.download_count_inst.toLocaleString($i18n.locale)) }}</p>
                                        <p class="is-size-7 is-unselectable has-arrow-cursor">{{ $store.release.size_inst }}</p>
                                    </div>
                                </div>

                                <div class="level-item has-text-centered has-side-margin">
                                    <div>
                                        <b-button type="is-info" size="is-medium" icon-left="archive-alt" tag="a" :href="$store.release.download_link_port" rel="noopener"
                                            @click="$gtag.event('Download-Modal', {'event_category': 'Clicks', 'event_label': 'Portable'})">
                                            {{ $t('home.portable') }}
                                        </b-button>

                                        <p class="is-size-7 is-unselectable has-arrow-cursor">{{ isEmpty($store.release) ? 0 : $t('home.downloads').replace('{0}', $store.release.download_count_port.toLocaleString($i18n.locale)) }}</p>
                                        <p class="is-size-7 is-unselectable has-arrow-cursor">{{ $store.release.size_port }}</p>
                                    </div>
                                </div>
                            </div>
                            </nav>
                        </div>
                    </article>
                </div>
            </b-modal>
        </template>
    </b-navbar>
</template>

<script>
    import ResponsiveImage from "@/components/ResponsiveImage.vue";
    import helpers from "../mixins/helpers";
    import downloader from "../mixins/download";
    import { languages } from '@/locales';

    export default {
        name: "Navigation",
        components: {
            ResponsiveImage
        },
        mixins: [helpers, downloader],

        data() {
            return {
                isLoading: false,
                aux: {},
                trials: 0,
                trialsFoss: 0,
                isModalActive: false,
                languageArray: languages,

                collapseContact: false,
                showAfter: undefined,
            };
        },

        mounted() {
            window.addEventListener('resize', this.handleWindowResize);

            this.handleWindowResize();
        },

        beforeDestroy() {
            window.removeEventListener('resize', this.handleWindowResize)
        },
  
        methods: {
            navigationColor() {
                switch (this.trimRight(this.$route.path, '/')) {
                    case "":
                        return "is-home";
                    case "/downloads":
                        return "is-download";
                    case "/donation":
                        return "is-donation";
                    case "/screenshots":
                        return "is-screenshots";
                    case "/contact":
                        return "is-contact";
                    default:
                        return "is-light";
                }
            },
            textColor(){
                switch (this.trimRight(this.$route.path, '/')) {
                    case "":
                    case "/downloads":
                    case "/donation":
                    case "/screenshots":
                    case "/contact":
                        return "has-text-light";
                    default:
                        return "has-text-dark";
                }
            },
            buttonColor() {
                switch (this.trimRight(this.$route.path, '/')) {
                    case "":
                        return this.isLoading ? "is-light" : "is-home is-inverted";
                    case "/downloads":
                        return this.isLoading ? "is-light" : "is-download is-inverted";
                    case "/donation":
                        return this.isLoading ? "is-light" : "is-donation is-inverted";
                    case "/screenshots":
                        return this.isLoading ? "is-light" : "is-screenshots is-inverted";                    
                    case "/contact":
                        return this.isLoading ? "is-light" : "is-contact is-inverted";
                    default:
                        return "is-link";
                }
            },
            tooltipBackground() {
                switch (this.trimRight(this.$route.path, '/')) {
                    case "":
                    case "/downloads":
                    case "/donation":
                    case "/screenshots":
                    case "/contact":
                        return "is-light";
                    default:
                        return "is-info";
                }
            },
            download() {
                try {
                    this.isLoading = true;

                    //If the release details were not downloaded yet, it must be downloaded.
                    if (this.isEmpty(this.$store.release) || this.$store.release.fromFoss) {
                        if (this.trials < 3) {
                            this.trials++;
                            this.downloadDetails(() => { this.download(); });
                        } else if (this.trialsFoss < 3) {
                            this.trialsFoss++;
                            this.downloadDetailsFallback(() => { this.download(); });
                        } else {
                            this.displayError();
                            this.trials = 0;
                            this.trialsFoss = 0;

                            this.$gtag.exception({'description': 'Fallbacking to FossHub.', 'fatal': false});
                            window.open("https://www.fosshub.com/ScreenToGif.html", "_blank", "noopener");
                            this.isLoading = false;
                        }

                        return;
                    }

                    this.$gtag.event('Open modal', {'event_category': 'Clicks', 'event_label': 'Download'});
                    this.promptDownload();
                } catch (e) {
                    console.log("It was not possible to get the latest release.", e);
                    this.$gtag.exception({'description': e, 'fatal': false});
                    this.displayError();
                }

                this.isLoading = false;
            },
            promptDownload() {
                this.isModalActive = true;
            },

            handleWindowResize() {
                if (document.documentElement.clientWidth < 1024) {
                    this.expandContact = true;
                    return;
                }

                //TODO:
                //Execute this method when: Navigating to route, changing localization.

                //Calculates the size of the children of the navbar.
                var navWidth = this.$refs.navbar.$children.reduce((total, item) => total + (item.$el.clientWidth ? item.$el.clientWidth : 0), 0);
                var viewWidth = window.innerWidth; //document.documentElement.clientWidth

                //Get the size of the elements by a hack:
                var biggestOffset = 0;
                var sizeOfMostRight = 0;
                this.$refs.navbar.$children.forEach(element => {
                     if (element.$el.offsetLeft > biggestOffset) {
                        biggestOffset = element.$el.offsetLeft
                        sizeOfMostRight = element.$el.clientWidth;
                    }
                });

                //Getting the offset of the element to the right + it's size and some margin will give me the size of the navbar.
                navWidth = biggestOffset + sizeOfMostRight + 50;

                // console.log(this.$refs.navbar);

                // this.$refs.navbar.$children.forEach(element => {
                //      console.log(element);
                // });

                //console.log("Navbar: " + navWidth);
                //console.log("Window: " + viewWidth);

                //If the navbar is bigger than the viewport, collapse the 'Contact' menu item.
                if (navWidth > viewWidth) {
                    this.collapseContact = true;
                    this.showAfter = navWidth;
                    return;
                }

                //If the viewport width is larger than the navbar last size, un-collpse the menu item.
                if (this.showAfter === undefined || this.showAfter < viewWidth)
                {
                    var check = this.collapseContact;
                    this.collapseContact = false;

                    if (check)
                        this.handleWindowResize();
                }
            }
        },
    };
</script>

<style lang="scss" scoped>
    @keyframes slideLeftIn {
        0% { opacity: 0; transform: translateX(-1rem); max-width: 0px; }
        100% { opacity: 1; transform: translateX(0); max-width: 120px; }
    }

    @keyframes slideLeftOut {
        0% { opacity: 1; transform: translateX(0); max-width: 120px; }
        100% { opacity: 0; transform: translateX(-1rem); max-width: 0px; }
    }

    //Animation: Slide left
    .slide-left-enter-active {
      animation: slideLeftIn .2s ease-out;
    }

    .slide-left-leave-active {
      animation: slideLeftOut .2s ease-in;
    }

    .slide-left-enter, .slide-left-leave-to { 
        opacity: 0;
        max-width: 0px;
        transform: translateX(-1rem);
    }

    .slide-left-leave, .slide-left-enter-to { 
        opacity: 1;
        max-width: 120px;
        transform: translateX(0);
    }


    //Adds a spacing to the name of the app next to the logo.
    .has-spacing {
        padding-left: 0.75rem;
    }

    //Prevents the name of the app from wraping during the animation.
    .no-wrap {
        white-space: nowrap;
    }

    //Adds space to the right of the icon, so it's not too close to the text.
    .icon {
        padding: 0 10px 0 0; //Top, Right, Bottom, Left.
    }

    //Adds a space to the right of the navbar items.
    .navbar-item {
        margin: 0 5px 0 0; //Top, Right, Bottom, Left.
    }

    //Reduces the shadow of the navbar to 1px.
    .navbar.has-shadow {
        box-shadow: 0px 1px 0px hsla(0, 0%, 100%, 0.2);
    }


    .has-side-padding {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    .level {
        padding-bottom: 1.5rem;
    }

    .has-side-margin {
        margin-left: 1.5rem;
    }

    .has-arrow-cursor {
        cursor: default;
    }

    .navbar-end .dropdown {
        margin: 5px 0px 5px 10px;
    }

    //Adds the left-side border to the box.
    .box {
        border-color: #155591;
        border-radius: 4px;
        border-style: solid;
        border-width: 0 0 0 4px;
    }

    //Just makes the separation line more spaced.
    hr {
        margin: 1rem 0;
    }
</style>

<style lang="scss">
    //Ads a bit or margin to the language selector.
    .dropdown-trigger > .button > .left-icon {
        margin-left: 1px !important;
    }

    //Fix for edge, in which the dropdown was not being displayed properly.
    .navbar-item.is-active .navbar-dropdown {
        opacity: 1 !important;
        pointer-events: auto !important;
        transform: translateY(0) !important;
    }
</style>