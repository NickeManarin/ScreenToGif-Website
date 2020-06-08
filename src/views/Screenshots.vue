<template>
    <div class="screenshots">
        <section class="hero is-screenshots">
            <div class="hero-body">
                <div class="container">
                    <h2 class="title is-size-3 has-text-centered is-unselectable">{{ $t('screenshots.title') }}</h2>
                    <p class="subtitle has-text-centered has-text-grey-lighter is-unselectable">{{ $t('screenshots.subtitle') }}</p>
                </div>
            </div>
        </section>

        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <div v-for="(item, i) in images" :key="i">
                        <div class="columns is-mobile has-text-centered is-centered">
                            <div class="column is-narrow">
                                <figure>
                                    <ResponsiveImage class="image" :width="item.width" :height="item.height" :src="item.src" skeleton></ResponsiveImage>

                                    <figcaption v-html="$t(item.sub)"></figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>

                    <div class="has-margin">
                        <p class="subtitle is-size-6 has-text-weight-semibold has-text-centered is-unselectable">
                            <span>{{ $t('screenshots.add') }}</span>&nbsp;
                            <router-link to="/contact" tag="a">{{ $t('screenshots.send') }}</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import ResponsiveImage from "@/components/ResponsiveImage.vue";

    export default {
        components: {
            ResponsiveImage,
        },

        data() {
            return {
                images: [
                    { src: require("@/assets/media/screenshots/Startup.png"), width: "486px", height: "213px", sub: "screenshots.gallery.startup" },
                    { src: require("@/assets/media/screenshots/Recorder.png"), width: "516px", height: "246px", sub: "screenshots.gallery.recorder" },
                    { src: require("@/assets/media/screenshots/Recorder-Old.gif"), width: "574px", height: "465px", sub: "screenshots.gallery.recorder-use" },
                    { src: require("@/assets/media/screenshots/Recorder-New.gif"), width: "408px", height: "369px", sub: "screenshots.gallery.recorder-new" },
                    { src: require("@/assets/media/screenshots/Editor.gif"), width: "743px", height: "521px", sub: "screenshots.gallery.editor" },
                    { src: require("@/assets/media/screenshots/Webcam.png"), width: "629px", height: "369px", sub: "screenshots.gallery.webcam" },
                    { src: require("@/assets/media/screenshots/Board.png"), width: "516px", height: "277px", sub: "screenshots.gallery.board" },
                    { src: require("@/assets/media/screenshots/Board-Example.gif"), width: "367px", height: "287px", sub: "screenshots.gallery.board-example" },
                    { src: require("@/assets/media/screenshots/Options.gif"), width: "740px", height: "623px", sub: "screenshots.gallery.options" },
                ]
            }
        },
    };
</script>

<style lang="scss">
    @import "@/mixins/colors.scss";

    //Background of the hero panel.
    .hero.is-screenshots {
        background-image: linear-gradient($screenshots, $screenshots-light);
    }

     figure {
         display: table;
     }

    figcaption {
        max-width: 100%;
        width: auto;
        display: table-caption;
        caption-side: bottom;
        background: white;
        margin: 0.25rem 0 1rem 0;
        border-radius: 5px;
    }

    .has-margin {
        margin-top: 1rem;
    }
</style>