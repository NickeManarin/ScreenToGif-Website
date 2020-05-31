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
                                <ResponsiveImage :src="require('@/assets/media/contact/Profile.jpg')" maxWidth="200px" maxHeight="200px" borderRadius="100px" skeleton></ResponsiveImage>
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
                            <b-button class="is-light" @click="openEmailDialog()">
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
                            <b-button class="is-light" tag="a" href="https://discord.gg/XgEqDHX" target="_blank" rel="noopener">
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
                            <b-button class="is-light" tag="a" href="https://www.reddit.com/r/ScreenToGif" target="_blank" rel="noopener">
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
                            <b-button class="is-light" tag="a" href="https://www.facebook.com/ScreenToGif" target="_blank" rel="noopener">
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

                    <b-modal :active.sync="isEmailModalActive" trap-focus aria-role="dialog" aria-modal :width="500" scroll="keep">
                        <div class="box has-text-centered content" style="padding: 40px">
                            <h2 class="title">Here's my email</h2>
                            <p class="subtitle">Please, don't send spam :)</p>
                           
                            <br>
                            <p>By spam, I mean things unrelated to the app like services and products offerings.</p>
                            <p>I'll be happy to try to help you out with the app, as I have always.</p>
                            <br>
                            
                            <div class="has-email">
                                <code>nicke@outlook.com.br</code>
                                <b-button type="is-primary" inverted @click="copyEmail()">Copy</b-button>
                            </div>
                        </div>
                    </b-modal>
                </div>
            </div>
        </section>

        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-centered">
                        <div class="column is-narrow has-text-centered">
                            <figure class="image">
                                <ResponsiveImage :src="require('@/assets/media/contact/Horizon.jpg')" borderRadius="10px" skeleton></ResponsiveImage>
                            </figure>
                        </div>
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
            ResponsiveImage
        },

        data() {
            return {
                isEmailModalActive: false
            }
        },

        methods: {
            openEmailDialog() {
                this.isEmailModalActive = true;
            },
            copyEmail() {
                this.$gtag.event('Copy', {'event_category': 'Clicks', 'event_label': 'Email'});

                this.$copyText('nicke@outlook.com.br').then((e) => {
                    this.$buefy.toast.open({
                        duration: 5000,
                        message: `Email copied!`,
                        position: 'is-bottom',
                        type: 'is-success'
                    });
                }, (e) => {
                    console.log('It was not possible to copy the email.', e);

                    this.$buefy.toast.open({
                        duration: 5000,
                        message: `It was not possible to copy the email.`,
                        position: 'is-bottom',
                        type: 'is-danger'
                    });

                    this.$gtag.exception({'description': e, 'fatal': false});
                });
            }
        },
    };
</script>

<style lang="scss" scoped>
    @import "@/mixins/colors.scss";

    //Background of the hero panel.
    .hero.is-contact {
        background-image: linear-gradient($contact, $contact-light);
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

    //Email block and button to copy.
    .has-email {
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

    //Makes the code inside the div.has-email blend in.
    .has-email code {
        background-color: transparent;
        color: currentColor;
        font-size: 1em;
        padding: 0 0 0 0.75rem;
    }

    .has-email button {
        font-family: inherit;
        line-height: 1.5rem;
        margin: 0 0 0 1rem;
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
</style>