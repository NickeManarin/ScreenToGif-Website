<template>
    <div class="columns is-multiline is-centered">
        <div class="column is-one-third-widescreen is-half-desktop is-half-tablet is-inline-block">
            <Tweet widget-class="twitter-card" id="1262326855119417345" :options="{ cards: 'hidden', conversation: 'none', dnt: 'true' }">Loading Tweet</Tweet>
        </div>

        <div class="column is-one-third-widescreen is-half-desktop is-half-tablet is-inline-block">
            <Tweet widget-class="twitter-card" id="1261313183597367298" :options="{ cards: 'hidden', conversation: 'none', dnt: 'true' }">Loading Tweet</Tweet>
        </div>

        <div class="column is-one-third-widescreen is-half-desktop is-half-tablet is-inline-block">
            <Tweet widget-class="twitter-card" id="1260470890950799362" :options="{ cards: 'hidden', conversation: 'none', dnt: 'true' }">Loading Tweet</Tweet>
        </div>

        <div class="column is-one-third-widescreen is-half-desktop is-half-tablet is-inline-block">
            <Tweet widget-class="twitter-card" id="1225829874453094401" :options="{ cards: 'hidden', conversation: 'none', dnt: 'true' }">Loading Tweet</Tweet>
        </div>

        <div class="column is-one-third-widescreen is-half-desktop is-half-tablet is-inline-block">
            <Tweet widget-class="twitter-card" id="1224858930901409809" :options="{ cards: 'hidden', conversation: 'none', dnt: 'true' }">Loading Tweet</Tweet>
        </div>

        <div class="column is-one-third-widescreen is-half-desktop is-half-tablet is-inline-block">
            <Tweet widget-class="twitter-card" id="1223660258264068096" :options="{ cards: 'hidden', conversation: 'none', dnt: 'true' }">Loading Tweet</Tweet>
        </div>
    </div>
</template>

<script>
    import { Tweet } from 'vue-tweet-embed';

    export default {
        components: {
            Tweet
        },
    }
</script>

<style lang="scss" scoped>

</style>