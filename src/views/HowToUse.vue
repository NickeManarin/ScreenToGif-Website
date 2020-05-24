<template>
    <div class="screenshots">
        <section class="hero is-light">
            <div class="hero-body">
                <div class="container">
                    <h2 class="title is-size-3 has-text-centered is-unselectable">Documentation</h2>
                    <p class="subtitle has-text-centered has-text-grey-lighter is-unselectable">Learn how to use ScreenToGif</p>
                </div>
            </div>
        </section>

        
    </div>
</template>

<script>
    import ImageLoader from "@/components/ImageLoader.vue";

    export default {
        components: {
            ImageLoader
        },
    };
</script>

<style lang="scss">
    @import "@/mixins/colors.scss";

    //Background of the hero panel.
    // .hero.is-screenshots {
    //     background-image: linear-gradient($screenshots, $screenshots-light);
    // }

</style>