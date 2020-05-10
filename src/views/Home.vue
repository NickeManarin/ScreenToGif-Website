<template>
    <div class="home">
        <section class="hero is-primary is-bold is-relative">
            <div class="hero-background"></div>

            <div class="hero-body">
                <div class="container has-text-centered">
                    <figure class="is-inline-block image is-144x144">
                        <ImageLoader :src="require('@/assets/logo.png')" width="144px" height="144px" alt="Screen, webcam and sketchboard recorder with an integrated editor."/>
                    </figure>

                    <transition name="slide-down">
                        <h1 v-if="showElements" class="title is-size-1 is-spaced">ScreenToGif</h1>
                    </transition>
                    <transition name="slide-up-200ms">
                        <h2 v-if="showElements" class="subtitle">
                            <strong>Screen</strong>, <strong>webcam</strong> and <strong>sketchboard</strong> recorder with an integrated <strong>editor</strong>.
                        </h2>
                    </transition>
                </div>
            </div>

            <div class="hero-foot">
                <div class="section has-smaller-padding">
                    <div class="container">
                        <div class="column is-12 has-text-centered">
                            <transition name="slow-in-300ms">
                                <div v-if="showElements">
                                    <p v-if="!isLoading" class="is-unselectable">
                                        Version {{$release.version}}
                                    </p>

                                    <b-skeleton v-if="isLoading" width="65px" height="1em"></b-skeleton>
                                </div>
                            </transition>
                        </div>

                        <div class="columns is-centered is-vcentered is-multiline is-mobile">
                            <div class="column is-narrow has-text-centered">
                                <b-tooltip label="Downloads the installer version (.msi), which contains the main executable and optional addons." type="is-light" position="is-top" animated multilined>
                                    <transition name="slow-in-400ms">
                                        <b-button v-if="showElements" :type="isLoading ? 'is-light' : 'is-primary'" size="is-large" icon-left="compact-disc" 
                                                  :loading="isLoading" :inverted="!isLoading" tag="a" :target="!isEmpty($release) ? '_self' : '_blank'" width="100%"
                                                  :href="!isEmpty($release) ? $release.download_link_inst : 'https://github.com/NickeManarin/ScreenToGif/releases/latest'">
                                            Installer
                                        </b-button>
                                    </transition>
                                </b-tooltip>

                                <transition name="slow-in-400ms">
                                    <div v-if="showElements">
                                        <p v-if="!isLoading && !isEmpty($release)" class="is-unselectable">
                                            <small>{{ !isEmpty($release) ? $release.size_inst : "..." }}</small>
                                            •
                                            <small>{{ !isEmpty($release) ? $release.download_count_inst.toLocaleString() : "..." }} downloads</small> 
                                        </p>

                                        <b-skeleton v-if="isLoading" height="20px" width="180px" animated></b-skeleton>
                                    </div>
                                </transition>
                            </div>

                            <div class="column is-12-mobile is-1-tablet has-text-centered">
                                <transition name="slow-in-500ms">
                                    <p v-if="showElements" class="has-text-light is-unselectable">or</p>
                                </transition>
                            </div>

                            <div class="column is-narrow has-text-centered">
                                <b-tooltip label="Downloads the portable version, which contains only the main executable. Addons needs to be dowloaded in Options > Extras." type="is-light" position="is-top" animated multilined>
                                    <transition name="slow-in-600ms">
                                        <b-button v-if="showElements" :type="isLoading ? 'is-light' : 'is-primary'" size="is-large" icon-left="archive-alt" 
                                                  :loading="isLoading" :inverted="!isLoading" tag="a" :target="!isEmpty($release) ? '_self' : '_blank'" width="100%"
                                                  :href="!isEmpty($release) ? $release.download_link_port : 'https://github.com/NickeManarin/ScreenToGif/releases/latest'">
                                            Portable
                                        </b-button>
                                    </transition>
                                </b-tooltip>
                                
                                <transition name="slow-in-600ms">
                                    <div v-if="showElements">
                                        <p v-if="!isLoading && !isEmpty($release)" class="is-unselectable">
                                            <small>{{ !isEmpty($release) ? $release.size_port : "..." }}</small>
                                            •
                                            <small>{{ !isEmpty($release) ? $release.download_count_port.toLocaleString() : "..." }} downloads</small>
                                        </p>

                                        <b-skeleton v-if="showElements && isLoading" height="20px" width="180px" animated></b-skeleton>
                                    </div>
                                </transition>
                            </div>
                        </div>

                        <transition name="slow-in-700ms">
                            <b-collapse v-if="showElements" class="has-text-light has-text-centered" :open="false" position="is-top" animation="slide" aria-id="expander">
                                <a slot="trigger" slot-scope="props" aria-controls="expander" class="has-text-light is-unselectable">
                                    <b-icon pack="unicon" :icon="!props.open ? 'uil-angle-down' : 'uil-angle-up'"></b-icon>

                                    {{ !props.open ? 'More download options' : 'Fewer download options' }}
                                </a>

                                <div class="columns is-vcentered is-centered is-multiline is-mobile has-top-margin">
                                    <div class="column is-narrow has-text-centered">
                                        <pre class="choco">
                                            <code><span class="is-unselectable">></span> choco install screentogif</code>
                                            <b-button type="is-primary" inverted @click="copyChoco()">Copy</b-button>
                                        </pre>
                                    </div>

                                    <div class="column is-12-mobile is-12-tablet is-1-desktop has-text-centered">
                                        <p class="has-text-light is-unselectable">or</p>
                                    </div>

                                    <div class="column is-narrow has-text-centered">
                                        <b-button type="is-primary" size="is-large" icon-left="shopping-bag" inverted
                                                tag="a" target="_blank" width="100%" href="https://www.microsoft.com/p/screentogif/9n3sqk8pds8g">
                                            Microsoft Store
                                        </b-button>
                                    </div>
                                </div>
                            </b-collapse>
                        </transition>
                    </div>
                </div>
            </div>
        </section>

        <section class="hero why-use is-unselectable">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-centered is-multiline is-mobile">
                        <div class="column is-half-mobile has-text-centered">
                            <p class="title is-4 has-text-weight-semibold">Free</p>
                            <p class="subtitle is-6 has-text-grey-light">Open Source on <strong class="has-text-grey">Github</strong></p>

                            <b-icon class="has-text-success" pack="unicon" icon="uil-github-alt"></b-icon>
                        </div>

                        <div class="column is-half-mobile has-text-centered">
                            <p class="title is-4 has-text-weight-semibold">Compact</p>
                            <p class="subtitle is-6 has-text-grey-light">As little as <strong class="has-text-grey">3.0 MiB</strong></p>

                            <b-icon class="has-text-warning" pack="unicon" icon="uil-box"></b-icon>
                        </div>

                        <div class="column is-half-mobile has-text-centered">
                            <p class="title is-4 has-text-weight-semibold">Powerful</p>
                            <p class="subtitle is-6 has-text-grey-light">Record, edit and <strong class="has-text-grey">export it!</strong></p>

                            <b-icon class="has-text-danger" pack="unicon" icon="uil-dashboard"></b-icon>
                        </div>

                        <div class="column is-half-mobile has-text-centered">
                            <p class="title is-4 has-text-weight-semibold">Customizable</p>
                            <p class="subtitle is-6 has-text-grey-light">Use it <strong class="has-text-grey">the way you like</strong></p>

                            <b-icon class="has-text-info" pack="unicon" icon="uil-setting"></b-icon>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="hero">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <!-- <b-carousel v-model="carouselIndex" :animated="'slide'" :has-drag="true" :autoplay="true" :pause-hover="true" :pause-info="false"
                                :interval="5000" :repeat="true" :icon-size="'is-large'">
                        <b-carousel-item v-for="(carousel, i) in images" :key="i">             
                            <a @click="expandImage(i)" class="image is-16by9">
                                <img :src="displayImage(i)">
                            </a>
                        </b-carousel-item>
                    </b-carousel> -->

                </div>
            </div>
        </section>

        <section class="hero is-light">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h4 class="title is-size-4 is-unselectable">Special thanks</h4>
                    <p class="subtitle is-size-5 is-unselectable">Here are some of supporters of this project</p>

                    <div class="columns is-centered">
                        <b-button class="column is-one-third is-light" tag="a" href="https://www.bluepointgames.com?from=ScreenToGif" target="_blank" style="height: 100%">
                            <figure class="image">
                                <imageLoader :src="require('@/assets/Bluepoint.png')" width="150px" height="44px"></imageLoader>
                            </figure>

                            <p>Bluepoint Games</p>
                        </b-button>
                    </div>

                    <div class="columns is-centered is-multiline is-mobile">
                        <b-button class="column is-half-mobile is-light" tag="a" href="https://www.jetbrains.com/resharper/?from=ScreenToGif" target="_blank" style="height: 100%">
                            <figure class="image">
                                <imageLoader :src="require('@/assets/Jetbrains.svg')" width="44px" height="44px"></imageLoader>
                            </figure>

                            <p>Jetbrains</p>
                        </b-button>

                        <b-button class="column is-half-mobile is-light" tag="a" href="https://www.linkedin.com/in/eirikbirkeland" target="_blank" style="height: 100%">
                            <figure class="image">
                                <b-icon class="has-text-info" pack="unicon" icon="uil-user" style="width: 44px; height: 44px; font-size: 39pt"></b-icon>
                            </figure>

                            <p>Eirik</p>
                        </b-button>

                        <b-button class="column is-half-mobile is-light" tag="a" href="https://loam.net" target="_blank" style="height: 100%">
                            <figure class="image">
                                <imageLoader :src="require('@/assets/Loam.png')" width="44px" height="44px"></imageLoader>
                            </figure>

                            <p>Loam</p>
                        </b-button>

                        <b-button class="column is-half-mobile is-light" tag="a" href="https://www.webhostingsecretrevealed.net" target="_blank" style="height: 100%">
                            <b-tooltip label="Web Hosting Secret Revealed">
                                <figure class="image">
                                    <imageLoader :src="require('@/assets/Whsr.png')" width="44px" height="44px"></imageLoader>
                                </figure>
                            </b-tooltip>

                            <p>WHSR</p>
                        </b-button>

                        <b-button class="column is-half-mobile is-light" tag="a" href="http://elmah.io" target="_blank" style="height: 100%">
                            <figure class="image">
                                <imageLoader :src="require('@/assets/Elmah.png')" width="60px" height="44px"></imageLoader>
                            </figure>

                            <p>Elmah</p>
                        </b-button>
                    </div>
                </div>
            </div>
        </section>

        <section class="hero">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h4 class="title is-size-4 is-unselectable">Media</h4>
                    <p class="subtitle is-size-5 is-unselectable">Screenshots and gifs</p>

                    <!-- <b-carousel v-model="carouselIndex" :animated="'slide'" :has-drag="true" :autoplay="true" :pause-hover="true" :pause-info="false"
                                :interval="5000" :repeat="true" :icon-size="'is-large'">
                        <b-carousel-item v-for="(carousel, i) in images" :key="i">             
                            <a @click="expandImage(i)" class="image is-16by9">
                                <img :src="displayImage(i)">
                            </a>
                        </b-carousel-item>
                    </b-carousel> -->
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    //@ is an alias to /src
    import helpers from "@/mixins/helpers";
    import downloader from "@/mixins/download";
    import ImageLoader from "@/components/ImageLoader.vue";

    export default {
        name: "Home",
        mixins: [helpers, downloader],
        components: {
            ImageLoader
        },

        data() {
            return {
                showElements: false,
                isLoading: true,
                trials: 0,
                trialsFoss: 0
            };
        },

        created() {
            this.download();
        },
        
        mounted () {
            this.showElements = true;
        },

        methods: {
            download() {
                try {
                    this.isLoading = true;

                    //If the release details were not downloaded yet, it must be downloaded.
                    if (this.isEmpty(this.$release) || this.$release.fromFoss) {

                        if (this.trials < 2) {
                            this.trials++;
                            this.downloadDetails(() => { this.download(); });
                        }
                        else if (this.trialsFoss < 2) {
                            this.trialsFoss++;
                            this.downloadDetailsFallback(() => { this.download(); });
                        }
                        else {
                            throw new Error("It was not possible to download the release details.");
                            this.isLoading = false;
                        }

                        return;
                    }
                } catch (e) {
                    this.$buefy.toast.open({
                        duration: 10000,
                        message: "It was not possible to lookup the latest release details.",
                        position: "is-bottom",
                        type: "is-danger"
                    });
                }

                this.isLoading = false;
            },
            copyChoco() {
                this.$copyText('choco install screentogif').then((e) => {
                    this.$buefy.toast.open({
                        duration: 5000,
                        message: `Text copied!`,
                        position: 'is-bottom',
                        type: 'is-success'
                    });
                }, (e) => {
                    console.log('It was not possible to copy the chocolatey command.', e);

                    this.$buefy.toast.open({
                        duration: 5000,
                        message: `It was not possible to copy the text.`,
                        position: 'is-bottom',
                        type: 'is-danger'
                    });
                });
            }
        }
    };
</script>

<style lang="scss" scoped>
    //Keyframes used in the animations bellow.
    @keyframes disappear {
        0% { opacity: 1; }
        100% { opacity: 0; }
    }

    @keyframes slideDown {
        0% { opacity: 0; transform: translateY(-1rem); }
        100% { opacity: 1; transform: translateY(0); }
    }

    @keyframes slideUp {
        from { opacity: 0; transform: translateY(1rem); }
        to { opacity: 1; transform: translateY(0); }
    }

    @keyframes slowIn {
        0% { opacity: 0; transform: scale(.9); }
        100% { opacity: 1; transform: scale(1) }
    }

    //Animation: Slide down • 0s
    .slide-down-enter-active {
      animation: slideDown .4s ease-out;
    }

    .slide-down-enter, .slide-down-leave-to { 
        opacity: 0;
        transform: translateY(-1rem);
    }

    .slide-down-leave, .slide-down-enter-to { 
        opacity: 1;
        transform: translateY(0);
    }

    //Animation: Slide up • 0.2s
    .slide-up-200ms-enter-active {
      animation: disappear 0s forwards, slideUp .4s ease-out .2s; //name, duration, timing-function, delay, iteration-count, direction, fill-mode.
    }

    .slide-up-200ms-enter, .slide-up-200ms-leave-to { 
        opacity: 0;
        transform: translateY(1rem);
    }

    .slide-up-200ms-leave, .slide-up-200ms-enter-to { 
        opacity: 1;
        transform: translateY(0);
    }

    //Animation: Slow in • 0.3s, 0.4s, 0.5s, 0.6s, 0.7s
    .slow-in-300ms-enter-active {
      animation: disappear 0s forwards, slowIn .4s ease-out .3s;
    }

    .slow-in-400ms-enter-active {
      animation: disappear 0s forwards, slowIn .4s ease-out .4s;
    }

    .slow-in-500ms-enter-active {
      animation: disappear 0s forwards, slowIn .4s ease-out .5s;
    }

    .slow-in-600ms-enter-active {
      animation: disappear 0s forwards, slowIn .4s ease-out .6s;
    }

    .slow-in-700ms-enter-active {
      animation: disappear 0s forwards, slowIn .4s ease-out .7s;
    }

    .slow-in-300ms-enter, .slow-in-300ms-leave-to,
    .slow-in-400ms-enter, .slow-in-400ms-leave-to,
    .slow-in-500ms-enter, .slow-in-500ms-leave-to,
    .slow-in-600ms-enter, .slow-in-600ms-leave-to,
    .slow-in-700ms-enter, .slow-in-700ms-leave-to { 
        opacity: 0;
        transform: scale(.9);
    }

    .slow-in-300ms-leave, .slow-in-300ms-enter-to, 
    .slow-in-400ms-leave, .slow-in-400ms-enter-to, 
    .slow-in-500ms-leave, .slow-in-500ms-enter-to, 
    .slow-in-600ms-leave, .slow-in-600ms-enter-to, 
    .slow-in-700ms-leave, .slow-in-700ms-enter-to { 
        opacity: 1;
        transform: scale(1);
    }


    //Background of the hero panel.
    section.hero.is-primary {
        //background-image: url('../assets/BackgroundHome.svg'), linear-gradient(#5cadd5, #54dec4);
        background-image: linear-gradient(#5cadd5, #54dec4);
    }

    // .hero-background {
    //     background-image: url('../assets/BackgroundHome.svg');
    //     background-repeat: no-repeat;
    //     background-position: bottom center;

    //     position: absolute;
    //     height: 100%;
    //     top: 0;
    //     right: 0;
    //     bottom: 0;
    //     left: 0;
    // }

    //Logo of the app.
    .image.is-144x144 {
        height: 144px;
        width: 144px;
    }

    //Chocolatey code and button to copy.
    .choco {
        display: inline-flex;
        font-size: 1.1em;
        color: white;
        background: #5cadd5;
        padding: calc(0.75rem - 1px); 
        line-height: 1.5rem;
        border-radius: 4px;
        align-items: center;
    }

    .choco button {
        font-family: inherit;
        line-height: 1.5rem;
        margin: 0 0 0 1rem;
    }

    //
    div .has-smaller-padding {
        padding-top: 1.5rem;
    }

    div .has-top-margin {
        margin-top: 1rem;
    }

    //Increase the size of the icons for the 'Why use ScreenToGif' section. 
    .why-use .icon {
        font-size: 34pt;
    }

    //Increases the border radius.
    .column {
        border-radius: 10px;
    }
</style>