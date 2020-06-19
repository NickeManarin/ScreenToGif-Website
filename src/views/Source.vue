<template>
    <div class="source">
        <vue-headful :title="$t('source.meta-title')" :description="$t('source.meta-description')"/>

        <section class="hero is-light">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-size-3 has-text-centered is-unselectable">{{ $t('source.title') }}</h1>
                    <p class="subtitle has-text-centered has-text-grey is-unselectable">{{ $t('source.subtitle') }}</p>
                </div>
            </div>
        </section>

        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-centered is-multiline">
                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light" tag="a" href="https://github.com/NickeManarin/ScreenToGif" target="_blank" rel="noopener"
                                @click="$gtag.event('Source', {'event_category': 'Clicks', 'event_label': 'ScreenToGif'})">
                                <article class="media">
                                    <figure class="media-left">
                                        <b-icon class="has-text-info is-size-2" icon="window"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">ScreenToGif</h5>
                                        <p class="is-size-5 has-text-grey" v-html="$t('source.links.app-info')"/>
                                    </div>
                                </article>
                            </b-button>
                        </div>

                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light" tag="a" href="https://github.com/NickeManarin/ScreenToGif-Website" target="_blank" rel="noopener"
                                @click="$gtag.event('Source', {'event_category': 'Clicks', 'event_label': 'Website'})">
                                <article class="media">
                                    <figure class="media-left">
                                        <b-icon class="has-text-info is-size-2" icon="globe"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">{{ $t('source.links.website') }}</h5>
                                        <p class="is-size-5 has-text-grey">{{ $t('source.links.website-info') }}</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default { };
</script>

<style lang="scss" scoped>
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