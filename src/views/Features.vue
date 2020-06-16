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

        <section class="section">
            <div class="container">
                <h4 id="recorders" class="title is-4 is-spaced">
                    <a class="is-anchor-link" href="#recorders">#</a>
                    <span>{{ $t('features.recorders.title') }}</span>
                </h4>

                <div class="content">
                    <ul>
                        <li v-html="$t('features.recorders.text1')"/>
                    </ul>
                </div>

                <div class="has-padding-left">
                    <h5 id="screen" class="title is-5 is-spaced">
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

                <div class="has-padding-left">
                    <h5 id="webcam" class="title is-5 is-spaced">
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

                <div class="has-padding-left">
                    <h5 id="sketchboard" class="title is-5 is-spaced">
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

        <section class="section">
            <div class="container">
                <h3 id="editor" class="title is-4 is-spaced">
                    <a class="is-anchor-link" href="#editor">#</a>
                    <span>Editor</span>
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
                            <li><b>File</b></li>
                            <ul>
                                <li>Start a new recording or open a media (videos or images) or project file.</li>
                                <li>Insert a new recording or media file (videos or images) into an existing project.</li>
                                <li>Open recent projects.</li>
                                <li>Export your project to:</li>
                                <ul>
                                    <li>Gif</li>
                                    <li>Apng</li>
                                    <li>Video</li>
                                    <li>Image</li>
                                    <li>PSD</li>
                                    <li>ScreenToGif project</li>
                                </ul>
                            </ul>

                            <li><b>Basic controls</b></li>
                            <ul>
                                <li>Undo, redo or reset your edits.</li>
                                <li>Copy, cut and paste frames.</li>
                                <li>Select multiple frames or browse to a specific frame.</li>
                                <li>Preview the playback of the animation.</li>
                            </ul>

                            <li><b>Frame manipulation</b></li>
                            <ul>
                                <li>Delete selected frames.</li>
                                <li>Remove duplicates.</li>
                                <li>Reduce framerate.</li>
                                <li>Delete all previous or all next frames.</li>
                                <li>Reverse, apply yoyo (forwards and backwards) or move frames around.</li>
                                <li>Alter the delay of the frames (override, increase/decrease or scale).</li>
                                <li>Add title frames.</li>
                                <li>Add transitions (fade or slide effects).</li>
                            </ul>

                            <li><b>Image manipulation</b></li>
                            <ul>
                                <li>Resize, crop or flip/rotate.</li>
                                <li>Add overlays:</li>
                                <ul>
                                    <li>Captions/text.</li>
                                    <li>Drawings or shapes.</li>
                                    <li>Key strokes or mouse clicks.</li>
                                    <li>Borders, shadows and obfuscation (pixelate).</li>
                                    <li>Watermarks (pick your own image).</li>
                                    <li>Cinemagraph (select parts of the animation to stay static or move).</li>
                                </ul>
                            </ul>
                        </ul>
                    </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <h3 id="options" class="title is-4 is-spaced">
                    <a class="is-anchor-link" href="#options">#</a>
                    <span>Options</span>
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
                            <li><b>Application</b></li>
                            <ul>
                                <li>Select how the app starts.</li>
                                <li>Choose among 4 color themes (light to very dark).</li>
                                <li>Alter the system tray icon behavior (clicks to open parts of the app).</li>
                                <li>Decide wether the app should update itself automatically (translation updates too can be toggled).</li>
                            </ul>

                            <li><b>Recorder</b></li>
                            <ul>
                                <li>Select if you want the older or newer UI for the screen recorder.</li>
                                <li>Choose which capture mode to use (BitBlt, DirectX, with memory cache or not).</li>
                                <li>Enable snapshot mode (manual capture).</li>
                                <li>Enable cursor following (the recorder will follow your cursor during the recording).</li>
                            </ul>

                            <li><b>Editor</b></li>
                            <ul>
                                <li>Select the previewer style (color and size of the ackgrund grid).</li>
                                <li>Enable the auto-sizing of the editor window based on the content size and vice-versa.</li>
                                <li>Options to enable confirmation dialogs before important actions.</li>
                                <li>Option to limit the undo/redo stack.</li>
                            </ul>

                            <li><b>Tasks</b></li>
                            <ul>
                                <li>You can create tasks to apply effects to your recording, so that you don't need to manually apply them every time.</li>
                            </ul>
                            
                            <li><b>Shortcuts</b></li>
                            <ul>
                                <li>Set keyboard shortcuts to open the recorders and editor.</li>
                                <li>You can also set shortcuts to control your recordings (record, pause, stop, etc.).</li>
                            </ul>

                            <li><b>Language</b></li>
                            <ul>
                                <li>Select among 24 languages.</li>
                                <li>The app will automatically select a language, based on your current OS settings.</li>
                            </ul>

                            <li><b>Storage</b></li>
                            <ul>
                                <li>Control how the app store its data.</li>
                                <li>Recover used space, by deleting old projects.</li>
                            </ul>

                            <li><b>Extras</b></li>
                            <ul>
                                <li>Download plugins for the app.</li>
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
        },

        mounted() {
            console.log('Hash:', location.hash);
            console.log('Route:', this.$route);

            //if (location.hash)
            //    this.$nextTick().then(() => this.$scrollTo(location.hash, 700));
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