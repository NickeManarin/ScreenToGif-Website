<template>
    <div class="notfound">
        <section class="hero is-light">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-size-3 has-text-centered is-unselectable">{{ $t('not-found.title') }}</h1>
                    <p class="subtitle has-text-centered is-unselectable">
                        <router-link to="/" tag="a">{{ $t('not-found.subtitle') }}</router-link>
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {};
</script>

<style scoped>
</style>