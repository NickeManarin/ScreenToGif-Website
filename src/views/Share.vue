<template>
    <div class="share">
        <vue-headful :title="$t('share.meta-title')" :description="$t('share.meta-description')"/>

        <section class="hero is-light">
            <div class="hero-body">
                <div class="container">
                    <h2 class="title is-size-3 has-text-centered is-unselectable">{{ $t('share.title') }}</h2>
                    <p class="subtitle has-text-centered has-text-grey is-unselectable">{{ $t('share.subtitle') }}</p>
                </div>
            </div>
        </section>

        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-multiline has-text-centered">
                        <div class="column is-12">
                            <p>
                                <span>{{ $t('share.like') }}</span>&nbsp;
                                <span><b>{{ $t('share.mention') }}</b></span>&nbsp;
                            </p>
                        </div>

                        <div class="column is-12">
                            <b-button type="is-twitter" icon-left="twitter-alt" tag="a" target="_blank" :href="getTweetUrl()">
                                {{ $t('share.tweet') }}
                            </b-button>
                        </div>
                    </div>

                    <TweetList :showAll="true"/>

                    <p class="has-text-centered">
                        <router-link to="/contact" tag="a">{{ $t('share.disclaimer') }}</router-link>
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import TweetList from "@/components/TweetList.vue";

    export default {
        components: {
            TweetList
        },

        methods: {
            getTweetUrl() {
                const params = { 
                    original_referer: this.$router.currentRoute, 
                    ref_src: 'twsrc^tfw',
                    related: 'NickeManarin:Creator of ScreenToGif,ScreenToGif:The Twitter account of ScreenToGif',
                    text: this.$t('share.text'),
                    url: "https://www.screentogif.com",
                    via: "NickeManarin + @ScreenToGif"
                };

                //console.log(params);
                return "https://twitter.com/intent/tweet?" + new URLSearchParams(params).toString();
            }
        }
    };
</script>

<style lang="scss">
    //@import "@/mixins/colors.scss";

    //Background of the hero panel.
    // .hero.is-share {
    //     background-image: linear-gradient($share, $share-light);
    // }
</style>