<template>
    <b-carousel v-model="selected" icon-size="is-medium" :autoplay="false" :indicator-inside="false" :overlay="gallery">
        <b-carousel-item v-for="(item, i) in images" :key="i">
            <div class="columns is-mobile is-centered">
                <div class="column is-narrow">
                    <figure>
                        <a @click="switchGallery(true)" class="image auto-size">
                            <img class="auto-size" :src="item.src">
                        </a>

                        <figcaption>{{ $t(item.sub) }}</figcaption>
                    </figure>
                </div>
            </div>
        </b-carousel-item>
        
        <span v-if="gallery" @click="switchGallery(false)" class="modal-close is-large"/>

        <!-- <template v-if="gallery" slot="indicators" slot-scope="props">
            <figure class="al image max-height" :draggable="false">
                <img class="auto-size" :draggable="false" :src="images[props.i]" :title="props.i">
            </figure>
        </template> -->
    </b-carousel>
</template>

<script>
    export default {
        mounted() {
            window.addEventListener('keyup', () => this.keyUp(event));
        },
        data() {
            return {
                gallery: false,
                selected: 0,
                images: [
                    { src: "./screenshots/Editor.gif", sub: "gallery.editor" },
                    { src: "./screenshots/Recorder.png", sub: "gallery.editor" },
                    { src: "./screenshots/Editor-Empty.png", sub: "gallery.editor" },
                ]
            }
        },
        methods: {
            switchGallery(value) {
                this.gallery = value;

                if (value)
                    return document.documentElement.classList.add('is-clipped');
                
                return document.documentElement.classList.remove('is-clipped');
            },
            keyUp(event) {
                switch (event.keyCode){
                    case 39: //Next. 
                        if (this.selected == this.images.length - 1)
                            this.selected = 0;
                        else
                            this.selected++;
                    break;

                    case 37: //Previous.
                        if (this.selected == 0)
                            this.selected = this.images.length - 1;
                        else
                            this.selected--;
                    break;

                    case 27: //Escape.
                        this.switchGallery(false);
                    break;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    //When the image is selected in the previewer list.
    .is-active .al img {
        border: 1px solid #fff;
        filter: grayscale(0%);
    }

    //When the image is not selected in the previewer list.
    .al img {
        border: 1px solid transparent;
        filter: grayscale(100%);
    }

    //Makes the images to grow and shrink.
    .auto-size {
        max-width: 82vw;
        max-height: 82vh;
        height: auto !important;
        width: auto !important; 
    }

    //Size of the side arrows.
    .icon {
        font-size: 14pt;
    }

    figure {
        display: table;
        width: auto;
        height: auto;
        max-width: 90vw;
        max-height: 100vh;
    }

    figcaption {
        max-width: 100%;
        display: table-caption;
        caption-side: bottom;
        background: white;
    }
</style>