<template>
    <div class="features">
        <section class="hero is-light">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-size-3 has-text-centered is-unselectable">{{ $t('features.title') }}</h1>
                    <p class="subtitle has-text-centered has-text-grey is-unselectable">{{ $t('features.subtitle') }}</p>
                </div>
            </div>
        </section>

        <section id="recorders" class="section">
            <div class="container">
                <h4 class="title is-4 is-spaced">
                    <a class="is-anchor-link" href="#recorders">#</a>
                    <span>{{ $t('features.recorders.title') }}</span>
                </h4>

                <div class="content">
                    <ul>
                        <li v-html="$t('features.recorders.text1')"/>
                    </ul>
                </div>

                <div id="screen" class="has-padding-left">
                    <h5 class="title is-5 is-spaced">
                        <a class="is-anchor-link" href="#screen">#</a>
                        <span>{{ $t('features.recorders.screen.title') }}</span>
                    </h5>

                    <div class="columns is-mobile is-multiline has-text-centered is-centered">
                        <div class="column is-narrow">
                            <figure>
                                <ResponsiveImage class="image" width="516px" height="246px" :src="require('@/assets/media/screenshots/Recorder.png')" skeleton/>

                                <figcaption v-html="$t('screenshots.gallery.recorder')"></figcaption>
                            </figure>
                        </div>

                        <div class="column is-narrow">
                            <figure>
                                <ResponsiveImage class="image" width="516px" height="246px" :src="require('@/assets/media/screenshots/New-Recorder.png')" skeleton/>

                                <figcaption v-html="$t('screenshots.gallery.recorder-new')"></figcaption>
                            </figure>
                        </div>
                    </div>

                    <div class="content">
                        <ul>
                            <li v-html="$t('features.recorders.screen.text1')"/>
                            <li v-html="$t('features.recorders.screen.text2')"/>
                            
                            <li><b>{{ $t('features.recorders.screen.older.title') }}</b></li>
                            <ul>
                                <li v-html="$t('features.recorders.screen.older.text1')"/>
                                <li v-html="$t('features.recorders.screen.older.text2')"/>
                                <li v-html="$t('features.recorders.screen.older.text3')"/>
                            </ul>

                            <li>
                                <b>{{ $t('features.recorders.screen.newer.title') }}</b>
                                &nbsp;
                                <span class="tag is-info">
                                    Beta
                                </span>
                            </li>
                            <ul>
                                <li v-html="$t('features.recorders.screen.newer.text1')"></li>
                            </ul>
                        </ul>
                    </div>
                </div>

                <hr>

                <div id="webcam" class="has-padding-left">
                    <h5 class="title is-5 is-spaced">
                        <a class="is-anchor-link" href="#webcam">#</a>
                        <span>{{ $t('features.recorders.webcam.title') }}</span>
                    </h5>

                    <div class="columns is-mobile is-multiline has-text-centered is-centered">
                        <div class="column is-narrow">
                            <figure>
                                <ResponsiveImage class="image" width="516px" height="246px" :src="require('@/assets/media/screenshots/Webcam.png')" skeleton/>

                                <figcaption v-html="$t('screenshots.gallery.webcam')"></figcaption>
                            </figure>
                        </div>
                    </div>

                    <div class="content">
                        <ul>
                            <li v-html="$t('features.recorders.webcam.text1')"/>
                            <li v-html="$t('features.recorders.webcam.text2')"/>
                            <li v-html="$t('features.recorders.webcam.text3')"/>
                        </ul>
                    </div>
                </div>

                <hr>

                <div id="sketchboard" class="has-padding-left">
                    <h5 class="title is-5 is-spaced">
                        <a class="is-anchor-link" href="#sketchboard">#</a>
                        <span>{{ $t('features.recorders.sketchboard.title') }}</span>
                    </h5>

                    <div class="columns is-mobile is-multiline has-text-centered is-centered">
                        <div class="column is-narrow">
                            <figure>
                                <ResponsiveImage class="image" width="516px" height="246px" :src="require('@/assets/media/screenshots/Board.png')" skeleton/>

                                <figcaption v-html="$t('screenshots.gallery.board')"></figcaption>
                            </figure>
                        </div>
                    </div>

                    <div class="content">
                        <ul>
                            <li v-html="$t('features.recorders.sketchboard.text1')"/>
                            <li v-html="$t('features.recorders.sketchboard.text2')"/>
                            <li v-html="$t('features.recorders.sketchboard.text3')"/>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section id="editor" class="section">
            <div class="container">
                <h3 class="title is-4 is-spaced">
                    <a class="is-anchor-link" href="#editor">#</a>
                    <span>{{ $t('features.editor.title') }}</span>
                </h3>

                <div class="columns is-mobile is-multiline has-text-centered is-centered">
                    <div class="column is-narrow">
                        <figure>
                            <ResponsiveImage class="image" width="743px" height="521px" :src="require('@/assets/media/screenshots/Editor.gif')" skeleton/>

                            <figcaption v-html="$t('screenshots.gallery.editor')"></figcaption>
                        </figure>
                    </div>
                </div>

                <div class="content">
                    <ul>
                        <li><b>{{ $t('features.editor.file.title') }}</b></li>
                        <ul>
                            <li v-html="$t('features.editor.file.text1')"/>
                            <li v-html="$t('features.editor.file.text2')"/>
                            <li v-html="$t('features.editor.file.text3')"/>
                            <li v-html="$t('features.editor.file.text4')"/>
                            <ul>
                                <li>Gif</li>
                                <li>Apng</li>
                                <li>{{ $t('features.editor.file.video') }}</li>
                                <li>{{ $t('features.editor.file.image') }}</li>
                                <li>PSD</li>
                                <li>{{ $t('features.editor.file.project') }}</li>
                            </ul>
                        </ul>

                        <li><b>{{ $t('features.editor.basic.title') }}</b></li>
                        <ul>
                            <li v-html="$t('features.editor.basic.text1')"/>
                            <li v-html="$t('features.editor.basic.text2')"/>
                            <li v-html="$t('features.editor.basic.text3')"/>
                            <li v-html="$t('features.editor.basic.text4')"/>
                        </ul>

                        <li><b>{{ $t('features.editor.frame.title') }}</b></li>
                        <ul>
                            <li v-html="$t('features.editor.frame.text1')"/>
                            <li v-html="$t('features.editor.frame.text2')"/>
                            <li v-html="$t('features.editor.frame.text3')"/>
                            <li v-html="$t('features.editor.frame.text4')"/>
                            <li v-html="$t('features.editor.frame.text5')"/>
                            <li v-html="$t('features.editor.frame.text6')"/>
                            <li v-html="$t('features.editor.frame.text7')"/>
                            <li v-html="$t('features.editor.frame.text8')"/>
                        </ul>

                        <li><b>{{ $t('features.editor.image.title') }}</b></li>
                        <ul>
                            <li v-html="$t('features.editor.image.text1')"/>
                            <li v-html="$t('features.editor.image.text2')"/>
                            <ul>
                                <li v-html="$t('features.editor.image.text3')"/>
                                <li v-html="$t('features.editor.image.text4')"/>
                                <li v-html="$t('features.editor.image.text5')"/>
                                <li v-html="$t('features.editor.image.text6')"/>
                                <li v-html="$t('features.editor.image.text7')"/>
                                <li v-html="$t('features.editor.image.text8')"/>
                            </ul>
                        </ul>
                    </ul>
                </div>
            </div>
        </section>

        <section id="options" class="section">
            <div class="container">
                <h3 class="title is-4 is-spaced">
                    <a class="is-anchor-link" href="#options">#</a>
                    <span>{{ $t('features.options.title') }}</span>
                </h3>

                <div class="columns is-mobile is-multiline has-text-centered is-centered">
                    <div class="column is-narrow">
                        <figure>
                            <ResponsiveImage class="image" width="740px" height="623px" :src="require('@/assets/media/screenshots/Options.gif')" skeleton/>

                            <figcaption v-html="$t('screenshots.gallery.options')"></figcaption>
                        </figure>
                    </div>
                </div>

                <div class="content">
                    <ul>
                        <li><b>{{ $t('features.options.app.title') }}</b></li>
                        <ul>
                            <li v-html="$t('features.options.app.text1')"/>
                            <li v-html="$t('features.options.app.text2')"/>
                            <li v-html="$t('features.options.app.text3')"/>
                            <li v-html="$t('features.options.app.text4')"/>
                        </ul>

                        <li><b>{{ $t('features.options.recorder.title') }}</b></li>
                        <ul>
                            <li v-html="$t('features.options.recorder.text1')"/>
                            <li v-html="$t('features.options.recorder.text2')"/>
                            <li v-html="$t('features.options.recorder.text3')"/>
                            <li v-html="$t('features.options.recorder.text4')"/>
                        </ul>

                        <li><b>{{ $t('features.options.editor.title') }}</b></li>
                        <ul>
                            <li v-html="$t('features.options.editor.text1')"/>
                            <li v-html="$t('features.options.editor.text2')"/>
                            <li v-html="$t('features.options.editor.text3')"/>
                            <li v-html="$t('features.options.editor.text4')"/>
                        </ul>

                        <li><b>{{ $t('features.options.tasks.title') }}</b></li>
                        <ul>
                            <li v-html="$t('features.options.tasks.text1')"/>
                        </ul>
                        
                        <li><b>{{ $t('features.options.shortcuts.title') }}</b></li>
                        <ul>
                            <li v-html="$t('features.options.shortcuts.text1')"/>
                            <li v-html="$t('features.options.shortcuts.text2')"/>
                        </ul>

                        <li><b>{{ $t('features.options.language.title') }}</b></li>
                        <ul>
                            <li v-html="$t('features.options.language.text1').replace('{0}', '24')"/>
                            <li v-html="$t('features.options.shortcuts.text2')"/>
                        </ul>

                        <li><b>{{ $t('features.options.storage.title') }}</b></li>
                        <ul>
                            <li v-html="$t('features.options.storage.text1')"/>
                            <li v-html="$t('features.options.storage.text2')"/>
                        </ul>

                        <li><b>{{ $t('features.options.extras.title') }}</b></li>
                        <ul>
                            <li v-html="$t('features.options.extras.text1')"/>
                        </ul>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import ResponsiveImage from "@/components/ResponsiveImage.vue";

    export default {
        components: {
            ResponsiveImage
        }
    };
</script>

<style lang="scss" scoped>
    .is-anchor-link {
        margin-right: 0.5rem;
    }

    figure {
        display: table;
    }

    figcaption {
        max-width: 100%;
        width: auto;
        display: table-caption;
        caption-side: bottom;
        background: white;
        margin: 0.25rem 0 1rem 0;
        border-radius: 5px;
    }

    .has-padding-left {
        padding-left: 1rem;
    }
</style>