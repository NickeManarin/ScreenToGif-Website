<template>
    <div class="contact">
        <section class="hero is-contact">
            <div class="hero-body">
                <div class="container">
                    <h2 class="title is-size-3 has-text-centered is-unselectable">Here's how to contact me</h2>
                    <p class="subtitle has-text-centered has-text-grey-lighter is-unselectable">Also a bit of details about me</p>
                </div>
            </div>
        </section>

        <section class="hero is-lighter">
            <div class="hero-body">
                <div class="container">
                    <h3 class="title is-size-3 has-text-centered is-unselectable">Who am I?</h3>
                    <p class="subtitle has-text-centered has-text-grey-71 is-unselectable">The creator of ScreenToGif</p>

                    <div class="columns is-centered">
                        <div class="column is-narrow has-text-centered">
                            <figure class="image">
                                <ImageLoader :src="require('@/assets/Profile.jpg')" width="200px" height="200px" borderRadius="100px" skeleton></ImageLoader>
                            </figure>
                        </div>

                        <div class="column is-narrow has-text-centered is-vcentered">
                            <p>Hi, I'm Nicke Manarin.</p>
                            <p>I'm a 26 years old Brazillian</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h3 class="title is-size-3 has-text-centered is-unselectable">Methods of contact</h3>
                    <p class="subtitle has-text-centered has-text-grey-71 is-unselectable">Usually I answer more quickly via Twitter and Discord</p>

                    <div class="columns is-centered is-multiline">
                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light" tag="a" href="https://www.twitter.com/NickeManarin" target="_blank" rel="noopener">
                                <article class="media">
                                    <figure class="media-left">
                                        <b-icon class="has-text-info is-size-2" pack="unicon" icon="uil-twitter-alt"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Twittter</h5>
                                        <p class="is-size-5 has-text-grey">Follow me @NickeManarin</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>

                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light">
                                <article class="media">
                                    <figure class="media-left">
                                        <b-icon class="has-text-info is-size-2" pack="unicon" icon="uil-envelope"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Email</h5>
                                        <p class="is-size-5 has-text-grey">Click here to reveal</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>

                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light">
                                <article class="media">
                                    <figure class="media-left">
                                        <b-icon class="has-text-info is-size-2 has-icon-large" pack="icon" icon="discord"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Discord</h5>
                                        <p class="is-size-5 has-text-grey">Join the channel</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>

                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light">
                                <article class="media">
                                    <figure class="media-left">
                                        <b-icon class="has-text-info is-size-2 has-icon-large" pack="unicon" icon="uil-reddit-alien-alt"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Reddit</h5>
                                        <p class="is-size-5 has-text-grey">Join the sub r/ScreenToGif</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>

                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light">
                                <article class="media">
                                    <figure class="media-left">
                                        <b-icon class="has-text-info is-size-2 has-icon-large" pack="unicon" icon="uil-facebook-f"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Facebook</h5>
                                        <p class="is-size-5 has-text-grey">Like the Facebook page</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-centered">
                        <div class="column is-narrow has-text-centered">
                            <figure class="image is-responsive">
                                <ImageLoader :src="require('@/assets/Horizon.jpg')" borderRadius="10px" skeleton></ImageLoader>
                            </figure>
                        </div>
                    </div>  
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

<style lang="scss" scoped>
    @import "@/mixins/colors.scss";

    //Background of the hero panel.
    .hero.is-contact {
        background-image: linear-gradient($download, $download-light);
    }
    
    //Fills up the space.
    .column {
        height: 100%;
        padding: 0.75rem 0.5rem;
    }

    .column .button {
        white-space: normal;
        border-radius: 5px;
        padding: 0.75rem;
        width: 100%;
        height: 100%;
    }

    //Reduces the margin of the icon of media element.
    figure.media-left{
        margin-right: 0.5rem;
    }

    //Removes the negative margin of the button.
    article span.icon {
        margin-left: 0px !important;
        margin-right: 0px !important;
    }
</style>

<style lang="scss">
    //Increase the size of the custom icon.
    .has-icon-large .icon {
        mask-size: 3.5rem;
    }

    //Makes inner element of the buttons ocupy the whole space.
    button > span, a > span {
        width: 100%;
    }

    .box-image {
        height: auto;
        width: 100%;
        max-width: 80vw !important;
        max-height: 80vh !important;
    }

    .box-image > img {
        height: auto;
        width: 100%;
        max-width: 80vw !important;
        max-height: 80vh !important;
    }
</style>