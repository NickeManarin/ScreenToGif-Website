<template>
    <footer class="footer">
        <div class="container">           
            <!-- <div class="columns is-mobile is-centered">
                <div class="column has-text-centered">
                    <div class="is-inline-flex">
                        <ResponsiveImage :src="require('@/assets/logo.png')" width="34px" height="34px" alt="Screen, webcam and sketchboard recorder with an integrated editor."/>

                        <p class="subtitle is-5 has-text-grey is-unselectable is-vcentered has-spacing">ScreenToGif</p>
                    </div>

                    <p class="subtitle is-6 has-text-grey-light is-unselectable">
                        Made by <a class="has-text-weight-semibold" href="https://twitter.com/NickeManarin" target="_blank" rel="noopener">Nicke Manarin</a>,<br> with<b-icon class="has-text-red" title="love" pack="unicons" icon="heart"></b-icon>from <strong class="has-text-rainbow">Brazil</strong> 🇧🇷
                    </p>
                </div>
            </div> -->

            <div class="columns is-centered">
                <div class="column is-one-third has-text-centered">
                    <h4 class="subtitle is-size-5 has-text-grey-71 is-unselectable"><strong class="has-text-grey">Share</strong> on social media</h4>

                    <div class="buttons is-centered">
                        <b-button type="is-twitter" icon-left="twitter-alt" tag="a" target="_blank" :href="getTweetUrl()"
                                @click="$gtag.event('Share', {'event_category': 'Clicks', 'event_label': 'Tweet'})">
                            Tweet
                        </b-button>

                        <b-button type="is-facebook" icon-left="facebook-f" tag="a" target="_blank" :href="getFacebookUrl()"
                                @click="$gtag.event('Share', {'event_category': 'Clicks', 'event_label': 'Share on Facebook'})">
                            Share
                        </b-button>

                        <b-button type="is-facebook" icon-left="facebook-f" tag="a" target="_blank" href="https://www.facebook.com/ScreenToGif"
                                @click="$gtag.event('Share', {'event_category': 'Clicks', 'event_label': 'Like on Facebook'})">
                            Like
                        </b-button>
                                    
                        <b-button type="is-linkedin" icon-left="linkedin-alt" tag="a" target="_blank" :href="getLinkedInUrl()"
                                @click="$gtag.event('Share', {'event_category': 'Clicks', 'event_label': 'Share on LinkedIn'})">
                            Share
                        </b-button>

                        <b-button type="is-reddit" icon-left="reddit-alien-alt" tag="a" target="_blank" :href="getRedditUrl()"
                                @click="$gtag.event('Share', {'event_category': 'Clicks', 'event_label': 'Share on Reddit'})">
                            Share
                        </b-button>
                    </div>
                </div>

                <div class="column has-text-centered">
                    <div class="is-inline">
                        <h4 class="subtitle is-size-5 has-text-grey-71 is-unselectable">Language</h4>

                        <b-dropdown v-model="$i18n.locale" aria-role="list">
                            <button class="button" type="button" slot="trigger">
                                <template>
                                    <b-icon class="left-icon" pack="icon" icon="localization"></b-icon>
                                    <span>{{$i18n.locale}}</span>                                           
                                </template>

                                <b-icon pack="unicon" icon="uil-angle-down"></b-icon>
                            </button>

                            <b-dropdown-item v-for="(lang, i) in languageArray" :key="`lang${i}`" :value="lang.info.code" aria-role="listitem">
                                <div class="media">
                                    <div class="media-content">
                                        <h3>{{lang.info.lang}}</h3>
                                    </div>
                                </div>
                            </b-dropdown-item>
                        </b-dropdown>
                    </div>
                </div>

                <div class="column is-one-third has-text-centered">
                    <h4 class="subtitle is-size-5 has-text-grey-71 is-unselectable"><strong class="has-text-grey">Follow</strong> the project</h4>

                    <div class="buttons is-centered">
                        <b-button type="is-twitter" icon-left="twitter-alt" tag="a" target="_blank" href="https://twitter.com/NickeManarin"
                                @click="$gtag.event('Follow', {'event_category': 'Clicks', 'event_label': 'NickeManarin Twitter'})">
                            NickeManarin
                        </b-button>

                        <b-button type="is-twitter" icon-left="twitter-alt" tag="a" target="_blank" href="https://twitter.com/ScreenToGif"
                                @click="$gtag.event('Follow', {'event_category': 'Clicks', 'event_label': 'ScreenToGif Twitter'})">
                            ScreenToGif
                        </b-button>
                                    
                        <b-button type="is-dark" icon-left="github-alt" tag="a" target="_blank" href="https://github.com/NickeManarin/ScreenToGif/"
                                @click="$gtag.event('Follow', {'event_category': 'Clicks', 'event_label': 'ScreenToGif GitHub'})">
                            Watch
                        </b-button>
                    </div>
                </div>
            </div>

            <div class="columns is-mobile is-centered">
                <div class="column is-one-half is-narrow">
                    <router-link to="/" tag="a" class="navbar-item has-text-weight-semibold has-small-padding">Home</router-link>
                    <router-link to="/downloads" tag="a" class="navbar-item has-text-weight-semibold has-small-padding">Downloads</router-link>
                    <router-link to="/donation" tag="a" class="navbar-item has-text-weight-semibold has-small-padding">Donation</router-link>
                    <router-link to="/screenshots" tag="a" class="navbar-item has-text-weight-semibold has-small-padding">Screenshots</router-link>
                    <router-link to="/contact" tag="a" class="navbar-item has-text-weight-semibold has-small-padding">Contact</router-link>
                </div>

                <div class="column is-one-half is-narrow">
                    <router-link to="/share" tag="a" class="navbar-item has-text-weight-semibold has-small-padding">Share</router-link>
                    <router-link to="/how-to-use" tag="a" class="navbar-item has-text-weight-semibold has-small-padding">How to use</router-link>
                    <router-link to="/source" tag="a" class="navbar-item has-text-weight-semibold has-small-padding">Source</router-link>
                    
                    <router-link to="/privacy" tag="a" class="navbar-item has-text-weight-semibold has-small-padding">Privacy</router-link>
                    <router-link to="/vpat" tag="a" class="navbar-item has-text-weight-semibold has-small-padding">VPAT</router-link>
                </div>
            </div>

            <div class="content has-text-centered">
                <p class="subtitle is-6 has-text-grey-light is-unselectable">
                    Made by <a class="has-text-weight-semibold" href="https://twitter.com/NickeManarin" target="_blank" rel="noopener">Nicke Manarin</a>,<br> with<b-icon class="has-text-red" title="love" pack="unicons" icon="heart"></b-icon>from <strong class="has-text-rainbow">Brazil</strong> 🇧🇷
                </p>

                <p class="subtitle is-6 has-text-grey-light is-unselectable">
                    Icons by <strong class="has-text-grey"><a href="https://github.com/NickeManarin/ScreenToGif-Website-Alpha/blob/master/LICENSE" target="_blank" rel="noopener">Unicons</a></strong>
                </p>

                <p class="is-6 has-text-grey-light">
                    <strong class="has-text-grey">ScreenToGif</strong> is licensed under
                    <a href="https://github.com/NickeManarin/ScreenToGif/blob/master/LICENSE.txt" target="_blank" rel="noopener">MS-PL</a>
                    <br/>

                    <strong class="has-text-grey">This website</strong> is licensed under
                    <a href="https://github.com/NickeManarin/ScreenToGif-Website-Alpha/blob/master/LICENSE" target="_blank" rel="noopener">GPL-3.0</a>
                </p>

                <p class="subtitle is-6 has-text-grey-light is-unselectable">2013 - {{ year }}</p>
            </div>
        </div>
    </footer>
</template>

<script>
    import ResponsiveImage from "@/components/ResponsiveImage.vue";
    import { languages } from '@/locales';

    export default {
        name: "Footer",
        components: {
            ResponsiveImage
        },

        data() {
            return {
                languageArray: languages
            };
        },

        methods: {
            getTweetUrl() {
                const params = { 
                    original_referer: this.$router.currentRoute, 
                    ref_src: 'twsrc^tfw',
                    related: 'NickeManarin:Creator of ScreenToGif,ScreenToGif:The Twitter account of ScreenToGif',
                    text: this.$t('share.text'),
                    url: "https://www.screentogif.com",
                    via: "NickeManarin"
                };

                //console.log(params);
                return "https://twitter.com/intent/tweet?" + new URLSearchParams(params).toString();
            },
            getFacebookUrl() {
                const params = { 
                    app_id: '177047863631791', 
                    display: 'page',
                    quote: this.$t('share.text'),
                    link: "https://www.screentogif.com",
                    hashtag: "#ScreenToGif"
                };

                //console.log(params);
                return "https://www.facebook.com/dialog/feed?" + new URLSearchParams(params).toString();
            },
            getLinkedInUrl() {
                const params = { 
                    url: "https://www.screentogif.com"
                };

                //console.log(params);
                return "https://www.linkedin.com/sharing/share-offsite/?" + new URLSearchParams(params).toString();
            },
            getRedditUrl() {
                const params = { 
                    url: "https://www.screentogif.com",
                    title: this.$t('share.text')
                };

                //console.log(params);
                return "https://reddit.com/submit?" + new URLSearchParams(params).toString();
            },
        },

        computed: {
            year() {
                return new Date().getFullYear();
            }
        }
    };
</script>

<style scoped>
    .has-spacing {
        padding-left: 0.75rem;
    }

    .is-vcentered {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .has-text-red {
        color: red;
    }

    .has-text-rainbow {
        background-image: linear-gradient(to left, blue, rgb(167, 167, 0), green);
        background-clip: text;
        color: transparent;
    }

    .has-small-padding {
        padding: 0.25rem 0.5rem;
    }
</style>