<template>
    <div class="contact">
        <vue-headful :title="$t('contact.meta-title')" :description="$t('contact.meta-description')"/>

        <section class="hero is-contact">
            <div class="hero-body">
                <div class="container">
                    <h2 class="title is-size-3 has-text-centered is-unselectable">{{ $t('contact.title') }}</h2>
                    <p class="subtitle has-text-centered has-text-grey-lighter is-unselectable">{{ $t('contact.subtitle') }}</p>
                </div>
            </div>
        </section>

        <section class="hero is-lighter">
            <div class="hero-body">
                <div class="container">
                    <h3 class="title is-size-3 has-text-centered is-unselectable">{{ $t('contact.who.title') }}</h3>
                    <p class="subtitle has-text-centered has-text-grey-71 is-unselectable">{{ $t('contact.who.subtitle') }}</p>

                    <div class="columns is-centered">
                        <div class="column is-3 has-text-centered">
                            <figure class="image">
                                <ResponsiveImage :src="require('@/assets/media/contact/Profile.jpg')" width="200px" height="200px" maxWidth="200px" maxHeight="200px" borderRadius="100px" skeleton/>
                            </figure>
                        </div>

                        <div class="column is-8-tablet has-text-identation is-size-5-5 is-vertical-centered">
                            <p>
                                <span>{{ $t('contact.who.part1').replace('{0}', age) }}</span>&nbsp;
                                <span>{{ $t('contact.who.part2') }}</span>
                            </p>
                            <br>
                            <p>
                                <span>{{ $t('contact.who.part3') }}</span>&nbsp;
                                <span>{{ $t('contact.who.part4') }}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h3 class="title is-size-3 has-text-centered is-unselectable">{{ $t('contact.why.title') }}</h3>
                    <p class="subtitle has-text-centered has-text-grey-71 is-unselectable">{{ $t('contact.why.subtitle') }}</p>

                    <div class="columns is-centered">
                        <div class="column is-3 has-text-centered is-vertical-centered">
                            <figure class="image">
                                <ResponsiveImage :src="require('@/assets/logo.png')" width="190px" height="190px" maxWidth="190px" maxHeight="190px" skeleton/>
                            </figure>
                        </div>

                        <div class="column is-8-tablet has-text-identation is-size-5-5">
                            <p>
                                <span>{{ $t('contact.why.part1') }}</span>&nbsp;
                                <span>{{ $t('contact.why.part2') }}</span>&nbsp;
                            </p>
                            <br>
                            <p>
                                <span>{{ $t('contact.why.part3') }}</span>&nbsp;
                                <span>{{ $t('contact.why.part4') }}</span>&nbsp;
                                <span>{{ $t('contact.why.part5') }}</span>&nbsp;
                            </p>
                            <br>
                            <p>
                                <span>{{ $t('contact.why.part6') }}</span>&nbsp;
                                <span>{{ $t('contact.why.part7') }}</span>&nbsp;
                            </p>
                            <br>
                            <p>{{ $t('contact.why.part8') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="hero is-lighter">
            <div class="hero-body">
                <div class="container">
                    <h3 class="title is-size-3 has-text-centered is-unselectable">{{ $t('contact.methods.title') }}</h3>
                    <p class="subtitle has-text-centered has-text-grey-71 is-unselectable">{{ $t('contact.methods.subtitle') }}</p>

                    <div class="columns is-centered is-multiline">
                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light" tag="a" href="https://www.twitter.com/NickeManarin" target="_blank" rel="noopener"
                                @click="$gtag.event('How-to-contact', {'event_category': 'Clicks', 'event_label': 'Twitter'})">
                                <article class="media">
                                    <figure class="media-left">
                                        <b-icon class="has-text-info is-size-2" pack="unicon" icon="uil-twitter-alt"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Twitter</h5>
                                        <p class="is-size-5 has-text-grey" v-html="$t('contact.methods.twitter-info')"/>
                                    </div>
                                </article>
                            </b-button>
                        </div>

                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light" @click="openEmailDialog()">
                                <article class="media">
                                    <figure class="media-left">
                                        <b-icon class="has-text-info is-size-2" icon="envelope"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">{{ $t('contact.methods.email') }}</h5>
                                        <p class="is-size-5 has-text-grey">{{ $t('contact.methods.email-info') }}</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>

                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light" tag="a" href="https://discord.gg/XgEqDHX" target="_blank" rel="noopener"
                                @click="$gtag.event('How-to-contact', {'event_category': 'Clicks', 'event_label': 'Discord'})">
                                <article class="media">
                                    <figure class="media-left">
                                        <b-icon class="has-text-info is-size-2 has-icon-large" pack="icon" icon="discord"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Discord</h5>
                                        <p class="is-size-5 has-text-grey">{{ $t('contact.methods.discord-info') }}</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>

                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light" tag="a" href="https://www.reddit.com/r/ScreenToGif" target="_blank" rel="noopener"
                                @click="$gtag.event('How-to-contact', {'event_category': 'Clicks', 'event_label': 'Reddit'})">
                                <article class="media">
                                    <figure class="media-left">
                                        <b-icon class="has-text-info is-size-2 has-icon-large" icon="reddit-alien-alt"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Reddit</h5>
                                        <p class="is-size-5 has-text-grey" v-html="$t('contact.methods.reddit-info')"/>
                                    </div>
                                </article>
                            </b-button>
                        </div>

                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light" tag="a" href="https://www.facebook.com/ScreenToGif" target="_blank" rel="noopener"
                                @click="$gtag.event('How-to-contact', {'event_category': 'Clicks', 'event_label': 'Facebook'})">
                                <article class="media">
                                    <figure class="media-left">
                                        <b-icon class="has-text-info is-size-2 has-icon-large" icon="facebook-f"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Facebook</h5>
                                        <p class="is-size-5 has-text-grey">{{ $t('contact.methods.facebook-info') }}</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>

                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light" tag="a" href="https://www.linkedin.com/company/screentogif" target="_blank" rel="noopener"
                                @click="$gtag.event('How-to-contact', {'event_category': 'Clicks', 'event_label': 'LinkedIn'})">
                                <article class="media">
                                    <figure class="media-left">
                                        <b-icon class="has-text-info is-size-2 has-icon-large" icon="linkedin-alt"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">LinkedIn</h5>
                                        <p class="is-size-5 has-text-grey">{{ $t('contact.methods.linkedin-info') }}</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>
                    </div>

                    <b-modal :active.sync="isEmailModalActive" trap-focus aria-role="dialog" aria-modal :width="500" scroll="keep"
                        @close="$gtag.event('How-to-contact', {'event_category': 'Clicks', 'event_label': 'Email hide'})">
                        <div class="box has-text-centered content" style="padding: 40px">
                            <h2 class="title">{{ $t('contact.methods.reveal.title') }}</h2>
                            <p class="subtitle">{{ $t('contact.methods.reveal.subtitle') }}</p>
                           
                            <br>
                            <p v-html="$t('contact.methods.reveal.spam')"/>
                            <p v-html="$t('contact.methods.reveal.help')"/>
                            <br>
                            
                            <div class="has-email">
                                <code>nicke@outlook.com.br</code>
                                <b-button type="is-primary" inverted @click="copyEmail()">{{ $t('home.copy') }}</b-button>
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
                                <ResponsiveImage :src="require('@/assets/media/contact/Horizon.jpg')" width="600px" height="338px" borderRadius="10px" skeleton/>
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

        computed: {
            age() {
                var now = new Date();
                var then = new Date(1993, 9, 1);

                var year = now.getFullYear() - then.getFullYear();
                var month = now.getMonth() - then.getMonth();

                if (month < 0)
                    year--;

                return year;
            }
        },

        methods: {
            openEmailDialog() {
                this.isEmailModalActive = true;
                this.$gtag.event('How-to-contact', {'event_category': 'Clicks', 'event_label': 'Email show'});
            },
            copyEmail() {
                this.$gtag.event('Copy', {'event_category': 'Clicks', 'event_label': 'Email'});

                this.$copyText('nicke@outlook.com.br').then((e) => {
                    this.$buefy.toast.open({
                        duration: 5000,
                        message: this.$t('contact.methods.reveal.copied'),
                        position: 'is-bottom',
                        type: 'is-success'
                    });
                }, (e) => {
                    console.log('It was not possible to copy the email.', e);

                    this.$buefy.toast.open({
                        duration: 5000,
                        message: this.$t('contact.methods.reveal.copied-error'),
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

    //Adds the new paragraph identation.
    .has-text-identation {
        text-indent: 2rem;
    }

    .is-vertical-centered {
        align-self: center;
        align-content: center;
    }

    .is-size-5-5 {
        font-size: 1.20rem;
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