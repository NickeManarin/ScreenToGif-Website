<template>
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
</template>

<script>
    import { languages } from '@/locales';

    export default {
        name: "LanguageSelector",

        data() {
            return {
                languageArray: languages
            };
        },
    }
</script>

<style lang="scss" scoped>

</style>