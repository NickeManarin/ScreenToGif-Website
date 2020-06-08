<template>
    <footer class="footer">
        <div class="container">           
            <div class="columns is-centered">
                <div class="column is-one-third has-text-centered">
                    <h4 class="subtitle is-size-5 has-text-grey-71 is-unselectable" v-html="$t('footer.share.title').replace('<b>', '<b class=has-text-grey>')"></h4>

                    <div class="buttons is-centered">
                        <b-button type="is-twitter" icon-left="twitter-alt" tag="a" target="_blank" :href="getTweetUrl()"
                                @click="$gtag.event('Share', {'event_category': 'Clicks', 'event_label': 'Tweet'})">
                            {{ $t('footer.share.tweet') }}
                        </b-button>

                        <b-button type="is-facebook" icon-left="facebook-f" tag="a" target="_blank" :href="getFacebookUrl()"
                                @click="$gtag.event('Share', {'event_category': 'Clicks', 'event_label': 'Share on Facebook'})">
                            {{ $t('footer.share.share') }}
                        </b-button>

                        <b-button type="is-facebook" icon-left="facebook-f" tag="a" target="_blank" href="https://www.facebook.com/ScreenToGif"
                                @click="$gtag.event('Share', {'event_category': 'Clicks', 'event_label': 'Like on Facebook'})">
                            {{ $t('footer.share.like') }}
                        </b-button>
                                    
                        <b-button type="is-linkedin" icon-left="linkedin-alt" tag="a" target="_blank" :href="getLinkedInUrl()"
                                @click="$gtag.event('Share', {'event_category': 'Clicks', 'event_label': 'Share on LinkedIn'})">
                            {{ $t('footer.share.share') }}
                        </b-button>

                        <b-button type="is-reddit" icon-left="reddit-alien-alt" tag="a" target="_blank" :href="getRedditUrl()"
                                @click="$gtag.event('Share', {'event_category': 'Clicks', 'event_label': 'Share on Reddit'})">
                            {{ $t('footer.share.share') }}
                        </b-button>
                    </div>
                </div>

                <div class="column has-text-centered">
                    <div class="is-inline">
                        <h4 class="subtitle is-size-5 has-text-grey-71 is-unselectable">{{ $t('footer.language') }}</h4>

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
                    <h4 class="subtitle is-size-5 has-text-grey-71 is-unselectable" v-html="$t('footer.follow').replace('<b>', '<b class=has-text-grey>')"></h4>

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
                            {{ $t('footer.watch') }}
                        </b-button>
                    </div>
                </div>
            </div>

            <div class="columns is-mobile is-centered">
                <div class="column is-one-half is-narrow">
                    <router-link to="/" tag="a" class="navbar-item has-text-weight-semibold has-small-padding">{{ $t('navigation.home') }}</router-link>
                    <router-link to="/downloads" tag="a" class="navbar-item has-text-weight-semibold has-small-padding">{{ $t('navigation.downloads') }}</router-link>
                    <router-link to="/donation" tag="a" class="navbar-item has-text-weight-semibold has-small-padding">{{ $t('navigation.donate') }}</router-link>
                    <router-link to="/screenshots" tag="a" class="navbar-item has-text-weight-semibold has-small-padding">{{ $t('navigation.screenshots') }}</router-link>
                    <router-link to="/contact" tag="a" class="navbar-item has-text-weight-semibold has-small-padding">{{ $t('navigation.contact') }}</router-link>
                </div>

                <div class="column is-one-half is-narrow">
                    <router-link to="/features" tag="a" class="navbar-item has-text-weight-semibold has-small-padding">{{ $t('navigation.features') }}</router-link>
                    <router-link to="/share" tag="a" class="navbar-item has-text-weight-semibold has-small-padding">{{ $t('navigation.share') }}</router-link>
                    <router-link to="/how-to-use" tag="a" class="navbar-item has-text-weight-semibold has-small-padding">{{ $t('navigation.how-to-use') }}</router-link>
                    <router-link to="/source" tag="a" class="navbar-item has-text-weight-semibold has-small-padding">{{ $t('navigation.source') }}</router-link>
                    
                    <router-link to="/privacy" tag="a" class="navbar-item has-text-weight-semibold has-small-padding">{{ $t('navigation.privacy-terms') }}</router-link>
                    <!-- <router-link to="/🙀" tag="a" class="navbar-item has-text-weight-semibold has-small-padding">🙀</router-link> -->
                </div>
            </div>

            <div class="content has-text-centered">
                <p class="subtitle is-6 has-text-grey-light is-unselectable" 
                    v-html="$t('footer.made-by').replace('{0}', '<a class=has-text-weight-semibold href=https://twitter.com/NickeManarin target=_blank rel=noopener>Nicke Manarin</a>')
                    .replace('<b>', '<b class=has-text-rainbow>')">
                </p>

                <p class="subtitle is-6 has-text-grey-light is-unselectable" v-html="$t('footer.icons-by')
                    .replace('{0}', '<b class=has-text-grey><a href=https://iconscout.com/unicons target=_blank rel=noopener>Unicons</a></b>')">
                </p>

                <p class="is-6 has-text-grey-light">
                    <span v-html="$t('footer.license-app').replace('<b>', '<b class=has-text-grey>')
                        .replace('{0}', '<b><a href=https://github.com/NickeManarin/ScreenToGif/blob/master/LICENSE.txt target=_blank rel=noopener>MS-PL</a></b>')">
                    </span>

                    <br/>

                    <span v-html="$t('footer.license-web').replace('<b>', '<b class=has-text-grey>')
                        .replace('{0}', '<b><a href=https://github.com/NickeManarin/ScreenToGif-Website-Alpha/blob/master/LICENSE.txt target=_blank rel=noopener>GPL-3.0</a></b>')">
                    </span>
                </p>

                <p class="subtitle is-6 has-text-grey-light is-unselectable">2013 — {{ year }}</p>
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

    .has-small-padding {
        padding: 0.25rem 0.5rem;
    }
</style>

<style lang="scss">
    .has-text-rainbow {
        background-image: linear-gradient(to left, blue, rgb(167, 167, 0), green);
        background-clip: text;
        color: transparent;
    }
</style>