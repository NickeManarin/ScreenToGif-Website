<template>
    <div class="screenshots">
        <section class="hero is-light">
            <div class="hero-body">
                <div class="container">
                    <h2 class="title is-size-3 has-text-centered is-unselectable">Share</h2>
                    <p class="subtitle has-text-centered has-text-grey-lighter is-unselectable">Sharing is caring</p>
                </div>
            </div>
        </section>

        
    </div>
</template>

<script>
    import ResponsiveImage from "@/components/ResponsiveImage.vue";

    export default {
        components: {
            ResponsiveImage
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