<template>
    <div class="image-box is-unselectable" :class="{ 'has-skeleton' : skeleton && !hideSkeleton, 'has-skeleton-animated' : animatedSkeleton }" :style="styles">
        <transition name="fade" v-if="placeholder">
            <img v-show="loadedPlaceholder" v-on:load="onLoadedPlaceholder" :src="placeholder" :style="styles" :class="{ 'blured' : blured }">
        </transition>

        <transition name="fade">
            <img v-show="loaded" v-on:load="onLoaded" :src="src" :style="styles">
        </transition>
    </div>
</template>

<script>
    export default {
        name: "ResponsiveImage",

        props: {
            width: {
                type: [String, Number],
                required: false
            },
            height:  {
                type: [String, Number],
                default: "auto",
                required: false
            },
            maxWidth: {
                type: [String, Number],
                default: "90vw",
                required: false
            },
            maxHeight:  {
                type: [String, Number],
                default: "90vh",
                required: false
            },
            src: {
                type: String,
                default: null,
                required: true
            },
            placeholder: {
                type: String,
                default: '',
                required: false
            },
            borderRadius: {
                type: [String, Number],
                default: '0px',
                required: false
            },
            blured: {
                type: Boolean,
                default: false,
                required: false
            },
            skeleton: {
                type: Boolean,
                default: false,
                required: false
            },
            animatedSkeleton: {
                type: Boolean,
                default: true,
                required: false
            }
        },

        data () {
            return {
                loaded: false,
                loadedPlaceholder: false,
                hideSkeleton: false,
            }
        },

        methods: {
            onLoaded() {
                this.loaded = true;

                if (this.skeleton && !this.hideSkeleton)
                    setTimeout(() => { this.hideSkeleton = true }, 500);
            },
            onLoadedPlaceholder () {
                this.loadedPlaceholder = true

                if (this.skeleton && !this.hideSkeleton)
                    setTimeout(() => { this.hideSkeleton = true }, 500);
            }
        },

        computed: {
            styles: function () {
                let styles = {
                    'border-radius': this.borderRadius
                };

                //Enables the responsiveness of the image.
                if (!this.loaded)
                {
                    if (this.width)
                        styles.width = this.width;

                    if (this.height)
                        styles.height = this.height;
                }

                if (this.maxWidth)
                    styles.maxWidth = this.maxWidth;

                if (this.maxHeight)
                    styles.maxHeight = this.maxHeight;

                return styles;
            },
        },
    }
</script>

<style lang="scss" scoped>
    //Transitions.
    .fade-enter-active {
        transition: opacity 700ms ease-in-out;
    }

    .fade-enter-to {
        opacity: 1;
    }

    .fade-enter {
        opacity: 0;
    }

    //Skeleton.
    .has-skeleton {
        background: linear-gradient(90deg, #dbdbdb 25%, rgba(219, 219, 219, 0.5) 50%, #dbdbdb 75%);
        background-size: 400% 100%;
    }

    .has-skeleton-animated {
        animation: skeleton-loading 1.5s infinite;
    }

    .blured {
        filter: blur(25px);
        -webkit-filter: blur(25px);
        -moz-filter: blur(25px);
        -o-filter: blur(25px);
        -ms-filter: blur(25px);
    }

    .image-box {
        display: inline-block;
        overflow: hidden;
    }

    //Animates the resize of the image.
    .image-box > img {
        transition: 250ms all ease-in-out;
    }
</style>