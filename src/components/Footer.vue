<template>
  <footer class="footer">
    <div class="column is-centered">
      <div class="column">
        <!-- Logo + Name -->
        <!-- By X with love from Z -->

        <!-- ScreenToGif is licensed under X -->
        <!-- This website is licensed under T -->
        <!-- 2013 - Year -->
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
        <strong>ScreenToGif</strong> by
        <a href="https://www.twitter.com/NickeManarin">Nicke Manarin</a>
        <br />
        2013-{{ year }}
      </p>
    </div>
  </footer>
</template>

<script>
  import { languages } from '@/locales';

  export default {
      name: "Footer",

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

<style scoped></style>
