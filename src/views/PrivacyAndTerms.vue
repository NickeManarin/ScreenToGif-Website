<template>
    <div class="terms">
        <vue-headful :title="$t('privacy-terms.meta-title')" :description="$t('privacy-terms.meta-description')"/>

        <section class="hero is-light">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-size-3 has-text-centered is-unselectable">{{ $t('privacy-terms.title') }}</h1>
                    <p class="subtitle has-text-centered has-text-grey is-unselectable">{{ $t('privacy-terms.subtitle') }}</p>
                </div>
            </div>
        </section>

        <section id="privacy" class="section">
            <div class="container">
                <h3  class="title is-4 is-spaced">
                    <a class="is-anchor-link" href="#privacy">#</a>
                    <span>{{ $t('privacy-terms.privacy.title') }}</span>
                </h3>

                <div class="content has-padding-left">
                    <h5>{{ $t('privacy-terms.privacy.software.title') }}</h5>
                    <p class="has-text-identation">
                        <span>{{ $t('privacy-terms.privacy.software.phrase1') }}</span> &nbsp;
                        <span>{{ $t('privacy-terms.privacy.software.phrase2') }}</span> &nbsp;
                    </p>
                    <p class="has-text-identation">
                        <span>{{ $t('privacy-terms.privacy.software.phrase3') }}</span> &nbsp;
                        <span>{{ $t('privacy-terms.privacy.software.phrase4') }}</span> &nbsp;
                    </p>

                    <h5>{{ $t('privacy-terms.privacy.website.title') }}</h5>
                    <p class="has-text-identation">
                        <span>{{ $t('privacy-terms.privacy.website.phrase1') }}</span> &nbsp;
                        <span>{{ $t('privacy-terms.privacy.website.phrase2') }}</span> &nbsp;
                    </p>
                </div>

                <hr>

                <h3 id="terms" class="title is-4 is-spaced">
                    <a class="is-anchor-link" href="#terms">#</a>
                    <span>{{ $t('privacy-terms.terms.title') }}</span>
                </h3>

                <div class="content has-padding-left">
                    <p class="has-text-identation">
                        <span>{{ $t('privacy-terms.terms.phrase1') }}</span> &nbsp;
                        <span>
                            <a href="https://github.com/NickeManarin/ScreenToGif/blob/master/LICENSE.txt" target="_blank" rel="noopener">{{ $t('privacy-terms.terms.more') }}</a>
                        </span>
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default { }
</script>

<style lang="scss" scoped>
    .is-anchor-link {
        margin-right: 0.5rem;
    }

    .has-padding-left {
        padding-left: 1rem;
    }

    //Adds the new paragraph identation.
    .has-text-identation {
        text-indent: 1.5rem;
    }
</style>