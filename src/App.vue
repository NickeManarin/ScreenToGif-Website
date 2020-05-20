<template>
    <div id="app">
        <Navigation />
        <router-view />
        <Footer />
    </div>
</template>

<script>
    import Navigation from "./components/Navigation.vue";
    import Footer from "./components/Footer.vue";

    const customIconConfig = {
        customIconPacks: {
            unicons: {
                iconPrefix: "uil-",
                internalIcons: {
                    check: "check",
                    information: "info-circle",
                    "check-circle": "check-circle",
                    alert: "exclamation-triangle",
                    "alert-circle": "exclamation-circle",
                    "arrow-up": "arrow-up",
                    "chevron-right": "angle-right",
                    "chevron-left": "angle-left",
                    "chevron-down": "arrow-down",
                    eye: "eye",
                    "eye-off": "eye-slash",
                    "menu-down": "angle-down",
                    "menu-up": "angle-up"
                }
            },
            icon: {
                iconPrefix: "icon-",
            }
        }
    };

    export default {
        name: "app",
        components: {
            Navigation,
            Footer
        },
        created() {
            this.$buefy.config.setOptions(customIconConfig);
        }
    };
</script>

<style lang="scss">
    //Import Bulma's core
    @import "~bulma/sass/utilities/_all";
    @import "@/mixins/colors.scss";
    @import "@/mixins/customIcons.scss";

    $table-row-hover-background-color: hsl(0, 0%, 96%);

    //Setup $colors to use as bulma classes (e.g. 'is-twitter')
    $colors: (
        "white": ($white, $black),
        "black": ($black, $white),
        "light": ($light, $light-invert),
        "dark": ($dark, $dark-invert),
        "primary": ($primary, $primary-invert),
        "info": ($info, $info-invert),
        "link": ($link, $link-invert),
        "success": ($success, $success-invert),
        "warning": ($warning, $warning-invert),
        "danger": ($danger, $danger-invert),

        "twitter": ($twitter, $twitter-invert),
        "facebook": ($facebook, $facebook-invert),
        "linkedin": ($linkedin, $linkedin-invert),
        "reddit": ($reddit, $reddit-invert),
        "download": ($download, $download-inverted),
        "download-light": ($download-light, $download-light-inverted),
        "donation": ($donation, $donation-inverted),
        "donation-light": ($donation-light, $donation-light-inverted),
        "screenshots": ($screenshots, $screenshots-inverted),
        "screenshots-light": ($screenshots-light, $screenshots-light-inverted),

        "grey-71": ($grey-71, $grey-71-inverted),
        "grey-80": ($grey-80, $grey-80-inverted),
        "grey-95": ($grey-95, $grey-95-inverted),
        "grey-98": ($grey-98, $grey-98-inverted),
        "dark-15": ($dark-15, $dark-15-inverted),
    );

    // Import Bulma and Buefy styles
    @import "~bulma";
    @import "~buefy/src/scss/buefy";

    //Custom global styles.
    html {
        background-color: #fff;
    }

    #app {
        font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .table {
        background-color: $grey-99;
    }

    //Custom color styles.
    .has-text-grey-95 {
        color: $grey-95 !important;
    }

    .has-text-grey-80 {
        color: $grey-80 !important;
    }

    .has-text-grey-71 {
        color: $grey-71 !important;
    }

    .hero.is-lighter {
        background-color: $grey-98;
        color: $grey-98-inverted;
    }

    .is-white {
        background-color: $white;
    }


    //Hover and active states for is-dark-15 buttons.
    .button.is-dark-15:hover, .button.is-dark-15.is-hovered { 
        background-color: rgba(0 ,0, 0, 0.2);
    }

    .button.is-dark-15:active, .button.is-dark-15.is-active { 
        background-color: rgba(0 ,0, 0, 0.3);
    }

    //Adds animation to the navbar menu and transforms into a popover.
    @include until($desktop) {
        .navbar-menu {
            display: block;
            opacity: 0;

            position: absolute;   /* or float: left; width: 100%;*/
            left: 0;
            right: 0;

            transform: translateY(-50%) scaleY(0.1);
            transition: all 0.2s ease-in-out;
            pointer-events: none;
        }

        .navbar-menu.is-active {
            opacity: 1;
            transform: none;
            pointer-events: auto;
        }
    }
</style>