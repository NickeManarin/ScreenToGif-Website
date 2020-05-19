<template>
  <footer class="footer">
    <div class="column is-centered">
      <div class="column has-text-centered">
        <div class="is-inline-flex">
          <ImageLoader :src="require('@/assets/logo.png')" width="34px" height="34px" alt="Screen, webcam and sketchboard recorder with an integrated editor."/>

          <p class="subtitle is-5 has-text-grey is-unselectable is-vcentered has-spacing">ScreenToGif</p>
        </div>

        <p class="subtitle is-6 has-text-grey-light is-unselectable">
          By <a class="has-text-weight-semibold" href="https://twitter.com/NickeManarin" target="_blank" rel="noopener">Nicke Manarin</a>,<br> made with<b-icon class="has-text-red" title="love" pack="unicons" icon="heart"></b-icon>from <strong class="has-text-rainbow">Brazil</strong> 🇧🇷
        </p>
      </div>
      
      <div class="column">
        <!-- Links to all pages -->
      </div>

      <div class="column">
        <!-- Share on social media -->
        <!-- Contribute on Github -->
      </div> 
    </div>

    <div class="columns is-centered">
        <div class="column is-narrow">
            <b-dropdown v-model="$i18n.locale" aria-role="list">
                <button class="button" type="button" slot="trigger">
                    <template>
                        <b-icon pack="icon" icon="localization"></b-icon>
                        <span>{{$i18n.locale}}</span>                                           
                    </template>

                    <b-icon pack="unicon" icon="uil-angle-down"></b-icon>
                </button>

                <b-dropdown-item v-for="(lang, i) in languageArray" :key="`lang${i}`" :value="lang.info.code" aria-role="listitem">
                    <div class="media">
                        <div class="media-content">
                            <h3>{{lang.info.lang}}</h3>
                        </div>
                    </div>
                </b-dropdown-item>
            </b-dropdown>
        </div>
    </div>

    <div class="content has-text-centered">
      <p>
        <strong>ScreenToGif</strong> is licensed under
        <a href="https://github.com/NickeManarin/ScreenToGif/blob/master/LICENSE.txt" target="_blank" rel="noopener">MS-PL</a>
        <br/>

        <strong>This website</strong> is licensed under
        <a href="https://github.com/NickeManarin/ScreenToGif-Website-Alpha/blob/master/LICENSE" target="_blank" rel="noopener">GPL-3.0</a>
        <br/>
        <br/>

        2013 - {{ year }}
      </p>
    </div>
  </footer>
</template>

<script>
    import ImageLoader from "@/components/ImageLoader.vue";
    import { languages } from '@/locales';

  export default {
      name: "Footer",
        components: {
            ImageLoader
        },

      data() {
            return {
                languageArray: languages
            };
      },

      computed: {
          year() {
              return new Date().getFullYear();
          }
      }
  };
</script>

<style scoped>
  .has-spacing {
    padding-left: 0.75rem;
  }

  .is-vcentered {
      display: flex;
      flex-direction: column;
      justify-content: center;
  }

  .has-text-red {
    color: red;
  }

  .has-text-rainbow {
    background-image: linear-gradient(to left, blue, rgb(112, 112, 0), green);
    background-clip: text;
    color: transparent;
  }
</style>