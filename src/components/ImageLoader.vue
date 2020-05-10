<template>
    <span class="box-image" :style="styles">
        <b-skeleton v-if="skeleton && !hideSkeleton" :width="width" :height="height" :animated="animatedSkeleton" :style="skeletonStyles"></b-skeleton>

        <transition name="fade" v-if="placeholder">
            <img v-show="loadedPlaceholder" v-on:load="onLoadedPlaceholder" :src="placeholder" :style="styles" :class="{'loaded': loaded, 'blured' : blured }">
        </transition>

        <transition name="fade">
            <img v-show="loaded" v-on:load="onLoaded" :src="src" :style="styles">
        </transition>
    </span>
</template>

<script>
    export default {
        name: "ImageLoader",

        props: {
            width: {
                type: [String, Number],
                default: 0,
                required: true
            },
            height:  {
                type: [String, Number],
                default: 0,
                required: true
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
                default: '4px',
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
                    setTimeout(() => { this.hideSkeleton = true }, 2000);
            },
            onLoadedPlaceholder () {
                this.loadedPlaceholder = true

                if (this.skeleton && !this.hideSkeleton)
                    setTimeout(() => { this.hideSkeleton = true }, 2000);
            }
        },

        computed: {
            skeletonStyles() {
                let styles = {
                    'border-radius': this.borderRadius,
                }

                return styles;
            },
            styles: function () {
                let styles = {
                    'border-radius': this.borderRadius,
                }

                if (this.width)
                    styles.width = this.width

                if (this.height)
                    styles.height = this.height

                return styles;
            },
        },
    };
</script>

<style scoped>
   .fade-enter-active {
        transition: opacity 700ms ease-in-out;
    }

    .fade-enter-to {
        opacity: 1;
    }

    .fade-enter {
        opacity: 0;
    }

    .box-image {
        display: inline-block;
        position: relative;
        overflow: hidden;
        border-radius: 4px;
        position: relative;
    }

    .box-image img {
        position: absolute;
        top: 0;
        left: 0;
        transition: 500ms all ease-in-out;
    } 

    .blured {
        filter: blur(25px);
        -webkit-filter: blur(25px);
        -moz-filter: blur(25px);
        -o-filter: blur(25px);
        -ms-filter: blur(25px);
    }

    .b-skeleton {
        height: 100%;
    }

    .b-skeleton-item {
        line-height: 2 !important;
    }
</style>