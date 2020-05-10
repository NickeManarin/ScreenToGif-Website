<template>
    <b-navbar class="is-spaced has-shadow" :class="navigationColor()" wrapper-class="container is-widescreen">
    <template slot="brand">
        <b-navbar-item class="has-icon-spaced" tag="router-link" to="/" :active="$route.path === '/'">
            <img class="is-unselectable" src="../assets/logo.png" alt="Screen, webcam and sketchboard recorder with an integrated editor."/>
        </b-navbar-item>
    </template>

    <template slot="start">
        <b-navbar-item tag="router-link" to="/downloads" :active="$route.path === '/downloads'">
            <b-icon pack="unicon" icon="uil-download-alt" class="is-hidden-touch"></b-icon>
            <p class="is-unselectable">Downloads</p>
        </b-navbar-item>

        <b-navbar-item tag="router-link" to="/donation" :active="$route.path === '/donation'">
            <b-icon pack="unicon" icon="uil-heart" class="is-hidden-touch"></b-icon>
            <p class="is-unselectable">Donate</p>
        </b-navbar-item>

        <b-navbar-item tag="router-link" to="/screenshots" :active="$route.path === '/screenshots'">
            <b-icon pack="unicon" icon="uil-scenery" class="is-hidden-touch"></b-icon>
            <p class="is-unselectable">Screenshots</p>
        </b-navbar-item>

        <b-navbar-item tag="router-link" to="/contact" :active="$route.path === '/contact'">
            <b-icon pack="unicon" icon="uil-envelope-alt" class="is-hidden-touch"></b-icon>
            <p class="is-unselectable">Contact</p>
        </b-navbar-item>

        <b-navbar-dropdown label="Info">
            <b-navbar-item tag="router-link" to="/docs" :active="$route.path === '/docs'">
                <b-icon pack="unicon" icon="uil-books" class="is-hidden-touch"></b-icon>
                <p class="is-unselectable">Documentation</p>
            </b-navbar-item>

            <b-navbar-item tag="router-link" to="/source" :active="$route.path === '/source'">
                <b-icon pack="unicon" icon="uil-github-alt" class="is-hidden-touch"></b-icon>
                <p class="is-unselectable">Source</p>
            </b-navbar-item>
        </b-navbar-dropdown>
    </template>

    <template slot="end">
        <b-navbar-item tag="div" class="is-hidden-touch">
        <div class="buttons">
            <b-tooltip label="Downloads the latest release" size="is-small" :type="tooltipBackground()" position="is-bottom" animated multilined>
            <b-button class="button" :class="buttonColor()" :loading="isLoading" @click="download">
                <strong>Download</strong>
            </b-button>
            </b-tooltip>
        </div>
        </b-navbar-item>

        <b-modal :active.sync="isModalActive" trap-focus aria-role="dialog" aria-modal :width="640" scroll="keep">
            <div class="box">
                <article class="media">
                    <figure class="media-left">
                        <p class="image is-64x64">
                            <!-- <img :src="$release.author_picture" alt="Author avatar"> -->
                            <ImageLoader :src="$release.author_picture + '&s=128'" alt="Author avatar" width="64px" height="64px" skeleton :animatedSkeleton="false"/>
                        </p>
                    </figure>

                    <div class="media-content">
                        <nav class="level is-marginless">
                            <div class="level-left">
                                <a class="level-item" :href="$release.url">
                                    <span class="is-size-4 has-text-weight-semibold is-marginless">ScreenToGif {{ $release.version }}</span>  
                                </a>
                                <p class="level-item is-vcentered">
                                    <small>by <a :href="$release.author_url">@{{ $release.author_login }}</a></small>  
                                </p>
                            </div>

                            <div class="level-right">
                                <p class="level-item">
                                    <small>{{ $release.date_time_since }}</small>
                                </p>
                            </div>
                        </nav>

                        <div class="content has-side-padding" v-if="!isEmpty($release)">
                            <VueShowdown :markdown="$release.description" tag="span"></VueShowdown>                                                
                        </div>

                        <hr>

                        <nav class="level is-marginless is-paddingless">
                        <div class="level-left"></div>

                        <div class="level-right">
                            <div v-if="$release.download_count_inst > 0" class="level-item has-text-centered">
                                <div>
                                    <b-button type="is-info" size="is-medium" icon-left="compact-disc"
                                            tag="a" :href="$release.download_link_inst">
                                        Installer
                                    </b-button>

                                    <p class="is-size-7 is-unselectable has-arrow-cursor">{{ isEmpty($release) ? 0 : $release.download_count_inst.toLocaleString() }} downloads</p>
                                    <p class="is-size-7 is-unselectable has-arrow-cursor">{{ $release.size_inst }}</p>
                                </div>
                            </div>

                            <div class="level-item has-text-centered has-side-margin">
                                <div>
                                    <b-button type="is-info" size="is-medium" icon-size="is-medium" icon-left="archive-alt"
                                            tag="a" :href="$release.download_link_port">
                                        Portable
                                    </b-button>

                                    <p class="is-size-7 is-unselectable has-arrow-cursor">{{ isEmpty($release) ? 0 : $release.download_count_port.toLocaleString() }} downloads</p>
                                    <p class="is-size-7 is-unselectable has-arrow-cursor">{{ $release.size_port }}</p>
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
    import ImageLoader from "@/components/ImageLoader.vue";
    import helpers from "../mixins/helpers";
    import downloader from "../mixins/download";

    export default {
        name: "Navigation",
        props: {
            isMain: Boolean
        },
        components: {
            ImageLoader
        },
        mixins: [helpers, downloader],

        data() {
            return {
                isLoading: false,
                aux: {},
                trials: 0,
                trialsFoss: 0,
                isModalActive: false
            };
        },

        methods: {
            navigationColor() {
                switch (this.$route.path) {
                    case "/":
                        return "is-primary";
                    case "/downloads":
                        return "is-download";
                    case "/donation":
                        return "is-donation";
                    default:
                        return "is-light";
                }
            },
            buttonColor() {
                switch (this.$route.path) {
                    case "/":
                        return this.isLoading
                            ? "is-light"
                            : "is-primary is-inverted";
                    case "/downloads":
                        return this.isLoading
                            ? "is-light"
                            : "is-download is-inverted";
                    case "/donation":
                        return this.isLoading
                            ? "is-light"
                            : "is-donation is-inverted";
                    default:
                        return "is-primary";
                }
            },
            tooltipBackground() {
                switch (this.$route.path) {
                    case "/":
                    case "/downloads":
                    case "/donation":
                        return "is-light";
                    default:
                        return "is-info";
                }
            },
            download() {
                try {
                    this.isLoading = true;

                    //If the release details were not downloaded yet, it must be downloaded.
                    if (this.isEmpty(this.$release) || this.$release.fromFoss) {
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

                            window.open("https://www.fosshub.com/ScreenToGif.html", "_blank", "noopener");
                            this.isLoading = false;
                        }

                        return;
                    }

                    this.promptDownload();
                } catch (e) {
                    console.log("It was not possible to get the latest release.", e);
                    this.displayError();
                }

                this.isLoading = false;
            },
            promptDownload() {
                this.isModalActive = true;
            }
        }
    };
</script>

<style lang="scss" scoped>
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

    hr {
        margin: 1rem 0;
    }

    //Adds the left-side border to the box.
    .box {
        border-color: #155591;
        border-radius: 4px;
        border-style: solid;
        border-width: 0 0 0 4px;
    }
</style>