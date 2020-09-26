<template>
    <div class="home">
        <vue-headful :title="$t('home.meta-title')" :description="$t('home.meta-description')"/>

        <section class="hero is-primary is-bold is-relative">
            <div class="hero-background"></div>

            <div class="hero-body">
                <div class="container has-text-centered">
                    <figure class="is-inline-block image is-144x144">
                        <ResponsiveImage :src="require('@/assets/logo.png')" maxWidth="144px" maxHeight="144px" alt="Screen, webcam and sketchboard recorder with an integrated editor."/>
                    </figure>

                    <transition name="slide-down">
                        <h1 v-if="showElements" class="title is-size-1 is-spaced">ScreenToGif</h1>
                    </transition>
                    <transition name="slide-up-200ms">
                        <h2 v-if="showElements" class="subtitle" v-html="$t('home.subtitle')"/>
                    </transition>
                </div>
            </div>

            <div class="hero-foot">
                <div class="section has-smaller-padding">
                    <div class="container">
                        <div class="column is-12 has-text-centered">
                            <transition name="slow-in-300ms">
                                <div v-if="showElements">
                                    <p v-if="!isLoading" class="is-unselectable">
                                        {{ !isEmpty($store.release) ? $t('home.version').replace('{0}', $store.release.version) : '...' }}
                                    </p>

                                    <b-skeleton v-if="isLoading" width="65px" height="1em"></b-skeleton>
                                </div>
                            </transition>
                        </div>

                        <div class="columns is-centered is-vcentered is-multiline is-mobile">
                            <div class="column is-narrow has-text-centered">
                                <b-tooltip :label="$t('home.installer-info')" type="is-light" position="is-top" animated multilined>
                                    <transition name="slow-in-400ms">
                                        <b-button ref="installerButton" v-if="showElements" :type="isLoading ? 'is-light' : 'is-primary'" size="is-large" icon-left="compact-disc" 
                                                  :loading="isLoading" :inverted="!isLoading" tag="a" :target="!isEmpty($store.release) ? '_self' : '_blank'" rel="noopener"
                                                  class="has-text-expanded" :style="{ 'min-width': getMinWidthInstaller() }"
                                                  :href="!isEmpty($store.release) ? $store.release.download_link_inst : 'https://github.com/NickeManarin/ScreenToGif/releases/latest'"
                                                  @click="$gtag.event('Download-Home', {'event_category': 'Clicks', 'event_label': 'Installer'})">
                                            {{ $t('home.installer') }}
                                        </b-button>
                                    </transition>
                                </b-tooltip>

                                <transition name="slow-in-400ms">
                                    <div v-if="showElements">
                                        <p v-if="!isLoading && !isEmpty($store.release)" class="is-unselectable">
                                            <small>{{ !isEmpty($store.release) ? $store.release.size_inst : "..." }}</small>
                                            •
                                            <small>{{ !isEmpty($store.release) ? $t('home.downloads').replace('{0}', $store.release.download_count_inst.toLocaleString($i18n.locale)) : "..." }}</small> 
                                        </p>

                                        <b-skeleton v-if="isLoading" height="20px" width="180px" animated></b-skeleton>
                                    </div>
                                </transition>
                            </div>

                            <div class="column is-12-mobile is-1-tablet has-text-centered">
                                <transition name="slow-in-500ms">
                                    <p v-if="showElements" class="has-text-light is-unselectable">{{ $t('home.or') }}</p>
                                </transition>
                            </div>

                            <div class="column is-narrow has-text-centered">
                                <b-tooltip :label="$t('home.portable-info')" type="is-light" position="is-top" animated multilined>
                                    <transition name="slow-in-600ms">
                                        <b-button ref="portableButton" v-if="showElements" :type="isLoading ? 'is-light' : 'is-primary'" size="is-large" icon-left="archive-alt" 
                                                  :loading="isLoading" :inverted="!isLoading" tag="a" :target="!isEmpty($store.release) ? '_self' : '_blank'"  rel="noopener"
                                                  class="has-text-expanded" :style="{ 'min-width': getMinWidthPortable() }"
                                                  :href="!isEmpty($store.release) ? $store.release.download_link_port : 'https://github.com/NickeManarin/ScreenToGif/releases/latest'"
                                                  @click="$gtag.event('Download-Home', {'event_category': 'Clicks', 'event_label': 'Portable'})">
                                            {{ $t('home.portable') }}
                                        </b-button>
                                    </transition>
                                </b-tooltip>
                                
                                <transition name="slow-in-600ms">
                                    <div v-if="showElements">
                                        <p v-if="!isLoading && !isEmpty($store.release)" class="is-unselectable">
                                            <small>{{ !isEmpty($store.release) ? $store.release.size_port : "..." }}</small>
                                            •
                                            <small>{{ !isEmpty($store.release) ? $t('home.downloads').replace('{0}', $store.release.download_count_port.toLocaleString($i18n.locale)) : "..." }}</small>
                                        </p>

                                        <b-skeleton v-if="showElements && isLoading" height="20px" width="180px" animated></b-skeleton>
                                    </div>
                                </transition>
                            </div>
                        </div>

                        <transition name="slow-in-700ms">
                            <b-collapse v-if="showElements" class="has-text-light has-text-centered" :open.sync="isExpanderOpen" position="is-top" animation="slide" aria-id="expander"
                                @open="$gtag.event('More downloads', {'event_category': 'Clicks', 'event_label': 'Open'})"
                                @close="$gtag.event('More downloads', {'event_category': 'Clicks', 'event_label': 'Close'})">
                                <a slot="trigger" slot-scope="props" aria-controls="expander" class="has-text-light is-unselectable">
                                    <b-icon pack="unicon" :icon="!props.open ? 'uil-angle-down' : 'uil-angle-up'"></b-icon>

                                    {{ !props.open ? $t('home.more-releases') : $t('home.fewer-releases') }}
                                </a>

                                <div class="columns is-vcentered is-centered is-mobile is-multiline has-top-margin">
                                    <div class="column is-narrow has-text-centered">
                                        <b-button class="has-text-expanded" type="is-primary" size="is-large" icon-left="shopping-bag" inverted style="width: 231px;"
                                            tag="a" target="_blank" width="100%" href="https://www.microsoft.com/p/screentogif/9n3sqk8pds8g" rel="noopener"
                                            @click="$gtag.event('Download', {'event_category': 'Clicks', 'event_label': 'Microsoft Store'})">
                                            Microsoft Store
                                        </b-button>
                                    </div>

                                    <div class="column is-12-mobile is-1-tablet has-text-centered">
                                        <p class="has-text-light is-unselectable">{{ $t('home.or') }}</p>
                                    </div>

                                    <div class="column is-narrow has-text-centered">
                                        <b-button class="has-text-expanded" type="is-primary" size="is-large" icon-left="circle" inverted style="width: 231px;"
                                            tag="a" target="_blank" width="100%" href="https://www.fosshub.com/ScreenToGif.html" rel="noopener"
                                            @click="$gtag.event('Download', {'event_category': 'Clicks', 'event_label': 'FossHub'})">
                                            FossHub
                                        </b-button>
                                    </div>
                                </div>

                                <div class="columns is-vcentered is-centered is-multiline is-mobile has-top-margin">
                                    <div class="column is-narrow has-text-centered">
                                        <div class="choco">
                                            <code><span class="is-unselectable">></span> choco install screentogif </code>
                                            <b-button type="is-primary" inverted @click="copyChoco()">{{ $t('home.copy') }}</b-button>
                                        </div>
                                    </div>

                                    <div class="column is-12-mobile is-12-tablet is-1-desktop has-text-centered">
                                        <p class="has-text-light is-unselectable">{{ $t('home.or') }}</p>
                                    </div>

                                    <div class="column is-narrow has-text-centered">
                                        <div class="choco">
                                            <code><span class="is-unselectable">></span> winget install screentogif</code>
                                            <b-button type="is-primary" inverted @click="copyWinget()">{{ $t('home.copy') }}</b-button>
                                        </div>
                                    </div>
                                </div>
                            </b-collapse>
                        </transition>
                    </div>
                </div>
            </div>
        </section>

        <section class="hero is-lighter why-use is-unselectable">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="columns is-centered is-multiline is-mobile">
                        <div class="column is-half-mobile has-text-centered">
                            <p class="title is-4 has-text-weight-semibold">{{ $t('home.why.free') }}</p>
                            <p class="subtitle is-6 has-text-grey-light" v-html="$t('home.why.free-info').replace('<b>', '<b class=has-text-grey>')"></p>

                            <b-icon class="has-text-success is-size-2" pack="unicon" icon="uil-github-alt"></b-icon>
                        </div>

                        <div class="column is-half-mobile has-text-centered">
                            <p class="title is-4 has-text-weight-semibold">{{ $t('home.why.compact') }}</p>
                            <p class="subtitle is-6 has-text-grey-light" v-html="$t('home.why.compact-info').replace('<b>', '<b class=has-text-grey>').replace('{0}', !isEmpty($store.release) ? $store.release.size_inst : '3.1 MiB')"></p>

                            <b-icon class="has-text-warning is-size-2" pack="unicon" icon="uil-box"></b-icon>
                        </div>

                        <div class="column is-half-mobile has-text-centered">
                            <p class="title is-4 has-text-weight-semibold">{{ $t('home.why.powerful') }}</p>
                            <p class="subtitle is-6 has-text-grey-light" v-html="$t('home.why.powerful-info').replace('<b>', '<b class=has-text-grey>')"></p>

                            <b-icon class="has-text-danger is-size-2" pack="unicon" icon="uil-dashboard"></b-icon>
                        </div>

                        <div class="column is-half-mobile has-text-centered">
                            <p class="title is-4 has-text-weight-semibold">{{ $t('home.why.customizable') }}</p>
                            <p class="subtitle is-6 has-text-grey-light" v-html="$t('home.why.customizable-info').replace('<b>', '<b class=has-text-grey>')"></p>

                            <b-icon class="has-text-info is-size-2" pack="unicon" icon="uil-setting"></b-icon>
                        </div>
                    </div>

                    <b-button tag="router-link" to="/features" type="is-link" class="has-top-margin is-medium">{{ $t('home.why.features') }}</b-button>
                </div>
            </div>
        </section>

        <section id="media" class="hero">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h4 class="title is-size-3 is-unselectable">{{ $t('home.media.title') }}</h4>
                    <p class="subtitle is-size-5 has-text-grey-light is-unselectable">{{ $t('home.media.subtitle') }}</p>

                    <Gallery></Gallery>
 
                    <b-button tag="router-link" to="/screenshots" type="is-link" class="has-top-margin is-medium">{{ $t('home.media.more') }}</b-button>
                </div>
            </div>
        </section>

        <section id="thanks" class="hero is-lighter">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h4 class="title is-size-3 is-unselectable">{{ $t('home.supporters.title') }}</h4>
                    <p class="subtitle is-size-5 has-text-grey-light is-unselectable">{{ $t('home.supporters.subtitle') }}</p>

                    <div class="columns is-centered">
                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light padded" tag="a" href="https://www.fosshub.com?from=ScreenToGif" target="_blank" rel="noopener"
                                @click="$gtag.event('Open support links', {'event_category': 'Clicks', 'event_label': 'FossHub'})">
                                <figure class="image">
                                    <ResponsiveImage :src="require('@/assets/media/home/Fosshub.svg')" width="150px" height="42.92px" maxWidth="150px" maxHeight="42.92px" :isFixed="true"/>
                                </figure>

                                <p class="is-size-6 has-text-grey has-text-weight-semibold">FossHub</p>
                            </b-button>
                        </div>

                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light padded" tag="a" href="https://www.bluepointgames.com?from=ScreenToGif" target="_blank" rel="noopener"
                                @click="$gtag.event('Open support links', {'event_category': 'Clicks', 'event_label': 'BluePointGames'})">
                                <figure class="image">
                                    <ResponsiveImage :src="require('@/assets/media/home/Bluepoint.png')" width="150px" height="44px" maxWidth="150px" maxHeight="44px"/>
                                </figure>

                                <p class="is-size-6 has-text-grey has-text-weight-semibold">Bluepoint Games</p>
                            </b-button>
                        </div>
                    </div>

                    <div class="columns is-centered is-multiline is-mobile">
                        <div class="column is-half-mobile">
                            <b-button class="is-light padded" tag="a" href="https://www.jetbrains.com/resharper/?from=ScreenToGif" target="_blank" rel="noopener"
                                @click="$gtag.event('Open support links', {'event_category': 'Clicks', 'event_label': 'Resharper'})">
                                <figure class="image">
                                    <ResponsiveImage :src="require('@/assets/media/home/Jetbrains.svg')" width="44px" height="44px" maxWidth="44px" maxHeight="44px" :isFixed="true"/>
                                </figure>

                                <p class="is-size-6 has-text-grey">Jetbrains</p>
                            </b-button>
                        </div>

                        <div class="column is-half-mobile">
                            <b-button class="is-light padded" tag="a" href="https://www.linkedin.com/in/eirikbirkeland" target="_blank" rel="noopener"
                                @click="$gtag.event('Open support links', {'event_category': 'Clicks', 'event_label': 'Eirik'})">
                                <figure class="image">
                                    <b-icon class="has-text-info" pack="unicon" icon="uil-user" style="width: 44px; height: 44px; font-size: 39pt"/>
                                </figure>

                                <p class="is-size-6 has-text-grey">Eirik</p>
                            </b-button>
                        </div>

                        <div class="column is-half-mobile">
                            <b-button class="is-light padded" tag="a" href="https://twitter.com/noderaider" target="_blank" rel="noopener"
                                @click="$gtag.event('Open support links', {'event_category': 'Clicks', 'event_label': 'Noderaider'})">
                                <figure class="image">
                                    <ResponsiveImage :src="require('@/assets/media/home/Noderaider.jpg')" width="44px" height="44px" maxWidth="44px" maxHeight="44px" borderRadius="100px"/>
                                </figure>

                                <p class="is-size-6 has-text-grey">Noderaider</p>
                            </b-button>
                        </div>

                        <div class="column is-half-mobile">
                            <b-button class="is-light padded" tag="a" href="https://loam.net?from=ScreenToGif" target="_blank" rel="noopener"
                                @click="$gtag.event('Open support links', {'event_category': 'Clicks', 'event_label': 'Loam'})">
                                <figure class="image">
                                    <ResponsiveImage :src="require('@/assets/media/home/Loam.png')" width="44px" height="44px" maxWidth="44px" maxHeight="44px"/>
                                </figure>

                                <p class="is-size-6 has-text-grey">Loam</p>
                            </b-button>
                        </div>

                        <div class="column is-half-mobile">
                            <b-button class="is-light padded" tag="a" href="https://www.webhostingsecretrevealed.net?from=ScreenToGif" target="_blank" rel="noopener"
                                @click="$gtag.event('Open support links', {'event_category': 'Clicks', 'event_label': 'Whsr'})">
                                <figure class="image">
                                    <ResponsiveImage :src="require('@/assets/media/home/Whsr.png')" width="44px" height="44px" maxWidth="44px" maxHeight="44px"/>
                                </figure>

                                <p class="is-size-6 has-text-grey">WHSR</p>
                            </b-button>
                        </div>

                        <div class="column is-half-mobile">
                            <b-button class="is-light padded" tag="a" href="https://elmah.io?from=ScreenToGif" target="_blank" rel="noopener"
                                @click="$gtag.event('Open support links', {'event_category': 'Clicks', 'event_label': 'Elmah'})">
                                <figure class="image">
                                    <ResponsiveImage :src="require('@/assets/media/home/Elmah.png')" width="60px" height="44px" maxWidth="60px" maxHeight="44px"/>
                                </figure>

                                <p class="is-size-6 has-text-grey">Elmah</p>
                            </b-button>
                        </div>
                    </div>

                    <b-button tag="router-link" to="/donation" type="is-link" class="has-top-margin is-medium">{{ $t('home.supporters.become') }}</b-button>
                </div>
            </div>
        </section>

        <section id="usage" class="hero">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h4 class="title is-size-3 is-unselectable">{{ $t('home.usage.title') }}</h4>
                    <p class="subtitle is-size-5 has-text-grey-light is-unselectable">{{ $t('home.usage.subtitle') }}</p>

                    <div class="columns is-centered is-multiline is-mobile">
                        <div class="column is-half-mobile has-text-centered">
                            <p class="title is-4 has-text-weight-semibold is-unselectable">{{ $t('home.usage.capture') }}</p>
                            <p class="subtitle is-6 has-text-grey-light is-unselectable" v-html="$t('home.usage.capture-info').replace(/<b>/g, '<b class=has-text-grey>')"></p>

                            <b-icon class="is-size-2 has-text-info" pack="unicon" icon="uil-capture"/>
                        </div>

                        <div class="column is-half-mobile has-text-centered">
                            <p class="title is-4 has-text-weight-semibold is-unselectable">{{ $t('home.usage.edit') }}</p>
                            <p class="subtitle is-6 has-text-grey-light is-unselectable" v-html="$t('home.usage.edit-info').replace(/<b>/g, '<b class=has-text-grey>')"></p>

                            <b-icon class="is-size-2 has-text-info" pack="unicon" icon="uil-image-edit"/>
                        </div>

                        <div class="column is-half-mobile has-text-centered">
                            <p class="title is-4 has-text-weight-semibold is-unselectable">{{ $t('home.usage.export') }}</p>
                            <p class="subtitle is-6 has-text-grey-light is-unselectable" v-html="$t('home.usage.export-info').replace(/<b>/g, '<b class=has-text-grey>')"></p>

                            <b-icon class="is-size-2 has-text-info" pack="unicon" icon="uil-film"/>
                        </div>

                        <div class="column is-half-mobile has-text-centered">
                            <p class="title is-4 has-text-weight-semibold is-unselectable">{{ $t('home.usage.share') }}</p>
                            <p class="subtitle is-6 has-text-grey-light is-unselectable" v-html="$t('home.usage.share-info').replace(/<b>/g, '<b class=has-text-grey>')"></p>

                            <b-icon class="is-size-2 has-text-info" pack="unicon" icon="uil-share"/>
                        </div>
                    </div>
 
                    <b-button tag="router-link" to="/how-to-use" type="is-link" class="has-top-margin is-medium">{{ $t('home.usage.learn') }}</b-button>
                </div>
            </div>
        </section>

        <section id="share" class="hero is-primary">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h4 class="title is-size-3 is-unselectable">{{ $t('home.share.title') }}</h4>
                    <p class="subtitle is-size-5 is-unselectable">{{ $t('home.share.subtitle') }}</p>

                    <TweetList/>

                    <b-button tag="router-link" to="/share" type="is-link" class="has-top-margin is-medium">{{ $t('home.share.share') }}</b-button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    //@ is an alias to /src
    import helpers from "@/mixins/helpers";
    import downloader from "@/mixins/download";
    import ResponsiveImage from "@/components/ResponsiveImage.vue";
    import Gallery from "@/components/Gallery.vue";
    import TweetList from "@/components/TweetList.vue";

    export default {
        name: "Home",
        mixins: [helpers, downloader],
        components: {
            ResponsiveImage,
            Gallery,
            TweetList
        },

        data() {
            return {
                showElements: false,
                isLoading: true,
                trials: 0,
                trialsFoss: 0,
                isExpanderOpen: false,
            };
        },

        created() {
            this.download();
        },
        
        mounted () {
            this.showElements = true;
        },

        methods: {
            getMinWidthInstaller() {
                var size = this.$refs.portableButton !== undefined ? (this.$refs.portableButton.$el.clientWidth + 2) + "px" : 0;

                this.$nextTick().then(() => {
                    this.$refs.installerButton.$el.style.minWidth = 0 + "px";

                    this.$nextTick().then(() => {
                        this.$refs.installerButton.$el.style.minWidth = (this.$refs.portableButton.$el.clientWidth + 2) + "px";
                    });
                });

                return size;
            },
            getMinWidthPortable() {
                var size = this.$refs.installerButton !== undefined ? (this.$refs.installerButton.$el.clientWidth + 2) + "px" : 0;

                this.$nextTick().then(() => {
                    this.$refs.portableButton.$el.style.minWidth = 0 + "px";

                    this.$nextTick().then(() => {
                        this.$refs.portableButton.$el.style.minWidth = (this.$refs.installerButton.$el.clientWidth + 2) + "px";
                    });
                });

                return size;
            },

            download() {
                try {
                    this.isLoading = true;

                    //If the release details were not downloaded yet, it must be downloaded.
                    if (this.isEmpty(this.$store.release) || this.$store.release.fromFoss) {

                        if (this.trials < 2) {
                            this.trials++;
                            this.downloadDetails(() => { this.download(); });
                        }
                        else if (this.trialsFoss < 2) {
                            this.trialsFoss++;
                            this.downloadDetailsFallback(() => { this.download(); });
                        }
                        else {
                            this.isLoading = false;
                            throw new Error("It was not possible to download the release details.");
                        }

                        return;
                    }
                } catch (e) {
                    this.$buefy.toast.open({
                        duration: 10000,
                        message: "It was not possible to lookup the latest release details.",
                        position: "is-bottom",
                        type: "is-danger"
                    });

                    this.$gtag.exception({'description': e, 'fatal': false});
                }

                this.isLoading = false;
            },
            copyChoco() {
                this.$gtag.event('Copy', {'event_category': 'Clicks', 'event_label': 'Chocolatey'});

                this.$copyText('choco install screentogif').then((e) => {
                    this.$buefy.toast.open({
                        duration: 5000,
                        message: this.$t('home.copied'),
                        position: 'is-bottom',
                        type: 'is-success'
                    });
                }, (e) => {
                    console.log('It was not possible to copy the chocolatey command.', e);

                    this.$buefy.toast.open({
                        duration: 5000,
                        message:  this.$t('home.not-copied'),
                        position: 'is-bottom',
                        type: 'is-danger'
                    });

                    this.$gtag.exception({'description': e, 'fatal': false});
                });
            },
            copyWinget() {
                this.$gtag.event('Copy', {'event_category': 'Clicks', 'event_label': 'Winget'});

                this.$copyText('winget install screentogif').then((e) => {
                    this.$buefy.toast.open({
                        duration: 5000,
                        message: this.$t('home.copied'),
                        position: 'is-bottom',
                        type: 'is-success'
                    });
                }, (e) => {
                    console.log('It was not possible to copy the winget command.', e);

                    this.$buefy.toast.open({
                        duration: 5000,
                        message: this.$t('home.not-copied'),
                        position: 'is-bottom',
                        type: 'is-danger'
                    });

                    this.$gtag.exception({'description': e, 'fatal': false});
                });
            }
        }
    };
</script>

<style lang="scss" scoped>
    //Keyframes used in the animations bellow.
    @keyframes disappear {
        0% { opacity: 1; }
        100% { opacity: 0; }
    }

    @keyframes slideDown {
        0% { opacity: 0; transform: translateY(-1rem); }
        100% { opacity: 1; transform: translateY(0); }
    }

    @keyframes slideUp {
        from { opacity: 0; transform: translateY(1rem); }
        to { opacity: 1; transform: translateY(0); }
    }

    @keyframes slowIn {
        0% { opacity: 0; transform: scale(.9); }
        100% { opacity: 1; transform: scale(1) }
    }

    //Animation: Slide down • 0s
    .slide-down-enter-active {
      animation: slideDown .4s ease-out;
    }

    .slide-down-enter, .slide-down-leave-to { 
        opacity: 0;
        transform: translateY(-1rem);
    }

    .slide-down-leave, .slide-down-enter-to { 
        opacity: 1;
        transform: translateY(0);
    }

    //Animation: Slide up • 0.2s
    .slide-up-200ms-enter-active {
      animation: disappear 0s forwards, slideUp .4s ease-out .2s; //name, duration, timing-function, delay, iteration-count, direction, fill-mode.
    }

    .slide-up-200ms-enter, .slide-up-200ms-leave-to { 
        opacity: 0;
        transform: translateY(1rem);
    }

    .slide-up-200ms-leave, .slide-up-200ms-enter-to { 
        opacity: 1;
        transform: translateY(0);
    }

    //Animation: Slow in • 0.3s, 0.4s, 0.5s, 0.6s, 0.7s
    .slow-in-300ms-enter-active {
      animation: disappear 0s forwards, slowIn .4s ease-out .3s;
    }

    .slow-in-400ms-enter-active {
      animation: disappear 0s forwards, slowIn .4s ease-out .4s;
    }

    .slow-in-500ms-enter-active {
      animation: disappear 0s forwards, slowIn .4s ease-out .5s;
    }

    .slow-in-600ms-enter-active {
      animation: disappear 0s forwards, slowIn .4s ease-out .6s;
    }

    .slow-in-700ms-enter-active {
      animation: disappear 0s forwards, slowIn .4s ease-out .7s;
    }

    .slow-in-300ms-enter, .slow-in-300ms-leave-to,
    .slow-in-400ms-enter, .slow-in-400ms-leave-to,
    .slow-in-500ms-enter, .slow-in-500ms-leave-to,
    .slow-in-600ms-enter, .slow-in-600ms-leave-to,
    .slow-in-700ms-enter, .slow-in-700ms-leave-to { 
        opacity: 0;
        transform: scale(.9);
    }

    .slow-in-300ms-leave, .slow-in-300ms-enter-to, 
    .slow-in-400ms-leave, .slow-in-400ms-enter-to, 
    .slow-in-500ms-leave, .slow-in-500ms-enter-to, 
    .slow-in-600ms-leave, .slow-in-600ms-enter-to, 
    .slow-in-700ms-leave, .slow-in-700ms-enter-to { 
        opacity: 1;
        transform: scale(1);
    }

    @import "@/mixins/colors.scss";

    //Background of the hero panel.
    section.hero.is-primary {
        //background-image: url('../assets/BackgroundHome.svg'), linear-gradient($home, $home-light);
        background-image: linear-gradient($home, $home-light);
    }

    // .hero-background {
    //     background-image: url('../assets/BackgroundHome.svg');
    //     background-repeat: no-repeat;
    //     background-position: bottom center;

    //     position: absolute;
    //     height: 100%;
    //     top: 0;
    //     right: 0;
    //     bottom: 0;
    //     left: 0;
    // }

    //Logo of the app.
    .image.is-144x144 {
        height: 144px;
        width: 144px;
    }

    //Chocolatey code and button to copy.
    .choco {
        display: inline-flex;
        font-size: 1.1em;
        color: white;
        background: #5cadd5;
        padding: calc(0.75rem - 1px); 
        line-height: 1.5rem;
        border-radius: 4px;
        align-items: center;
        -webkit-overflow-scrolling: touch;
        overflow-x: auto;
        white-space: pre;
        word-wrap: normal;
    }

    //Makes the code inside the div.choco blend in.
    .choco code {
        background-color: transparent;
        color: currentColor;
        font-size: 1em;
        padding: 0;
    }

    .choco button {
        font-family: inherit;
        line-height: 1.5rem;
        margin: 0 0 0 1rem;
    }

    div .has-smaller-padding {
        padding-top: 1.5rem;
    }

    div .has-top-margin {
        margin-top: 1rem;
    }

    //Fills up the space.
    .column {
        height: 100%;
        padding: 0.75rem 0.5rem;
    }

    //Makes the buttons inside the columns more rounded and expanded.
    .column .button {
        white-space: normal;
        border-radius: 5px;
        width: 100%;
        height: 100%;
    }

    .column .padded {
        padding: 0.75rem;
    }

    //Makes the figure captions resize to the image.
    // .has-captions {
    //     display: table;
    // }

    // figcaption {
    //     max-width: 100%;
    //     width: auto;
    //     display: table-caption;
    //     caption-side: bottom;
    //     background: white;
    //     margin: 0.25rem 0 1rem 0;
    //     border-radius: 5px;
    // }
</style>

<style lang="scss">
    //Makes the text of the button to ocupy all the space left.
    .has-text-expanded > span:not(icon) {
        width: 100%;
    }
</style>