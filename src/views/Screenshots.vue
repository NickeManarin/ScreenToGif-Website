<template>
    <div class="screenshots">
        <section class="hero is-screenshots">
            <div class="hero-body">
                <div class="container">
                    <h2 class="title is-size-3 has-text-centered is-unselectable">Screenshots and examples</h2>
                    <p class="subtitle has-text-centered has-text-grey-lighter is-unselectable">Checkout what you can do with ScreenToGif</p>
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

                                    <figcaption>{{ $t(item.sub) }}</figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>

                    <div class="has-margin">
                        <p class="subtitle is-size-6 has-text-weight-semibold has-text-centered is-unselectable">
                            <span>Would you like to add your gif to this page? </span>
                            <router-link to="/contact" tag="a">Send me a message :)</router-link>
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
                    { src: "./media/Editor.gif", width: "769px", height: "650px", sub: "gallery.editor" },
                    { src: "./media/Recorder.png", width: "516px", height: "246px", sub: "gallery.editor" },
                    { src: "./media/Editor-Empty.png", width: "769px", height: "518px", sub: "gallery.editor" },
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