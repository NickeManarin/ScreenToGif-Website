<template>
    <div class="donation">
        <section class="hero is-donation">
            <div class="hero-body">
                <div class="container">
                    <h2 class="title is-size-3 has-text-centered is-unselectable">{{ $t('donation.title') }}</h2>
                    <p class="subtitle has-text-centered has-text-grey-lighter is-unselectable">{{ $t('donation.subtitle') }}</p>
                </div>
            </div>
        </section>

        <section class="hero is-lighter">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h2 class="title is-size-3 is-unselectable">{{ $t('donation.why.title') }}</h2>
                    <p class="subtitle is-unselectable has-text-grey-71">{{ $t('donation.why.subtitle') }}</p>

                    <div class="columns is-centered is-multiline is-mobile">
                        <div class="column is-half-mobile has-text-centered">
                            <p class="title is-4 has-text-weight-semibold is-unselectable">{{ $t('donation.why.free') }}</p>
                            <p class="subtitle is-6 has-text-grey-light is-unselectable" v-html="$t('donation.why.free-info').replace('<b>', '<b class=has-text-grey>')"></p>

                            <b-icon class="is-size-2 has-text-info" pack="unicon" icon="uil-github-alt"></b-icon>
                        </div>

                        <div class="column is-half-mobile has-text-centered">
                            <p class="title is-4 has-text-weight-semibold is-unselectable">{{ $t('donation.why.no-ads') }}</p>
                            <p class="subtitle is-6 has-text-grey-light is-unselectable" v-html="$t('donation.why.no-ads-info').replace('<b>', '<b class=has-text-grey>')"></p>

                            <b-icon class="is-size-2 has-text-info" pack="unicon" icon="uil-image-slash"></b-icon>
                        </div>

                        <div class="column is-half-mobile has-text-centered">
                            <p class="title is-4 has-text-weight-semibold is-unselectable">{{ $t('donation.why.committed') }}</p>
                            <p class="subtitle is-6 has-text-grey-light is-unselectable" v-html="$t('donation.why.committed-info').replace('<b>', '<b class=has-text-grey>')"></p>

                            <b-icon class="is-size-2 has-text-info" pack="unicon" icon="uil-laptop"></b-icon>
                        </div>

                        <div class="column is-half-mobile has-text-centered">
                            <p class="title is-4 has-text-weight-semibold is-unselectable">{{ $t('donation.why.for-you') }}</p>
                            <p class="subtitle is-6 has-text-grey-light is-unselectable" v-html="$t('donation.why.for-you-info').replace('<b>', '<b class=has-text-grey>')"></p>

                            <b-icon class="is-size-2 has-text-info" pack="unicon" icon="uil-chat-bubble-user"></b-icon>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h2 class="title is-size-3 has-text-centered is-unselectable">{{ $t('donation.how-help.title') }}</h2>
                    <p class="subtitle has-text-centered has-text-grey-71 is-unselectable">{{ $t('donation.how-help.subtitle') }}</p>

                    <div class="columns is-centered is-multiline">
                        <div class="column is-half-tablet is-one-quarter-desktop">
                            <b-button class="is-light" tag="a" href="https://github.com/NickeManarin/ScreenToGif/issues" target="_blank" rel="noopener">
                                <article class="media">
                                    <figure class="media-left">
                                        <b-icon class="has-text-info is-size-2" pack="unicon" icon="uil-feedback"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">{{ $t('donation.how-help.feedback') }}</h5>
                                        <p class="is-size-5 has-text-grey">{{ $t('donation.how-help.feedback-info') }}</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>

                        <div class="column is-half-tablet is-one-quarter-desktop">
                            <b-button class="is-light" tag="router-link" to="/share">
                                <article class="media">
                                    <figure class="media-left">
                                        <b-icon class="has-text-info is-size-2" pack="unicon" icon="uil-share"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">{{ $t('donation.how-help.share') }}</h5>
                                        <p class="is-size-5 has-text-grey">{{ $t('donation.how-help.share-info') }}</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>

                        <div class="column is-half-tablet is-one-quarter-desktop">
                            <b-button class="is-light" tag="a" href="https://github.com/NickeManarin/ScreenToGif/wiki/Localization" target="_blank" rel="noopener">
                                <article class="media">
                                    <figure class="media-left">
                                        <!-- <b-icon class="has-text-info is-size-2" pack="unicon" icon="uil-feedback"/> -->
                                        <b-icon class="has-text-info is-size-2 has-icon-large" pack="icon" icon="localization"></b-icon>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">{{ $t('donation.how-help.localization') }}</h5>
                                        <p class="is-size-5 has-text-grey">{{ $t('donation.how-help.localization-info') }}</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>

                        <div class="column is-half-tablet is-one-quarter-desktop">
                            <b-button class="is-light" @click="scrollToDonation()">
                                <article class="media">
                                    <figure class="media-left">
                                        <b-icon class="has-text-info is-size-2" pack="unicon" icon="uil-money-stack"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">{{ $t('donation.how-help.donate') }}</h5>
                                        <p class="is-size-5 has-text-grey">{{ $t('donation.how-help.donate-info') }}</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section ref="donationMethods" class="hero is-lighter">
            <div class="hero-body">
                <div class="container">
                    <h2 class="title is-size-3 has-text-centered is-unselectable has-arrow-cursor">{{ $t('donation.how-donate.title') }}</h2>
                    <p class="subtitle has-text-centered has-text-grey-71 is-unselectable has-arrow-cursor">{{ $t('donation.how-donate.subtitle') }}</p>

                    <div class="columns is-centered is-multiline">
                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light" tag="a" href="https://www.patreon.com/bePatron?u=3706208" target="_blank" rel="noopener">
                                <article class="media">
                                    <figure class="media-left">
                                        <ResponsiveImage :src="require('@/assets/media/donation/Patreon.svg')" maxWidth="40px" maxHeight="40px"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Patreon</h5>
                                        <p class="is-size-5 has-text-grey">{{ $t('donation.how-donate.patreon-info') }}</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>

                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light" @click="openPaypalDialog()">
                                <article class="media">
                                    <figure class="media-left">
                                        <ResponsiveImage :src="require('@/assets/media/donation/Paypal.svg')" maxWidth="40px" maxHeight="40px"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Paypal</h5>
                                        <p class="is-size-5 has-text-grey">{{ $t('donation.how-donate.paypal-info') }}</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>
                    </div>

                    <b-modal :active.sync="isPaypalModalActive" trap-focus aria-role="dialog" aria-modal :width="500" scroll="keep">
                        <div class="box has-text-centered content" style="padding: 40px">
                            <h2 class="title">{{ $t('donation.how-donate.paypal.title') }}</h2>
                            <p class="subtitle">{{ $t('donation.how-donate.paypal.subtitle') }}</p>

                            <b-collapse class="has-top-margin has-text-grey has-text-centered" 
                                :open.sync="isPaypalExpanderOpen" position="is-top" animation="slide" aria-id="expander"
                                @open="$gtag.event('Paypal fee explanation', {'event_category': 'Clicks', 'event_label': 'Open'})"
                                @close="$gtag.event('Paypal fee explanation', {'event_category': 'Clicks', 'event_label': 'Close'})">
                                
                                <a slot="trigger" slot-scope="props" aria-controls="expander" class="has-text-info is-unselectable">
                                    <b-icon pack="unicon" :icon="!props.open ? 'uil-angle-down' : 'uil-angle-up'"></b-icon>

                                    {{ !props.open ? $t('donation.how-donate.paypal.show-fee') : $t('donation.how-donate.paypal.hide-fee') }}
                                </a>

                                <p>{{ $t('donation.how-donate.paypal.explanation') }}</p>
                                
                                <p>
                                    <span>{{ feeConversion(20.0, 18.37, 'EUR €') }}</span><br>
                                    <span>{{ feeConversion(10.0, 9.01, 'EUR €') }}</span><br>
                                    <span>{{ feeConversion(5.0, 4.33, 'EUR €') }}</span><br>
                                    
                                    <span>{{ feeConversion(10.0, 9.06, 'USD $') }}</span><br>
                                    <span>{{ feeConversion(5.0, 4.38, 'USD $') }}</span><br>
                                </p>
                            </b-collapse>
                            
                            <br>

                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                                <input type="hidden" name="cmd" value="_xclick">
                                <input type="hidden" name="business" value="nicke@outlook.com.br">
                                <input type="hidden" name="lc" value="US">
                                <input type="hidden" name="item_name" value="ScreenToGif Donation">
                                <input type="hidden" name="item_number" value="ScreenToGif">
                                <input type="hidden" name="button_subtype" value="services">
                                <!--<input type="hidden" name="currency_code" value="USD">-->
                    
                                <b-field class="is-inline-flex">
                                    <b-select name="currency_code" v-model="paypalCurrency" placeholder="Select your currency" icon="dollar-alt">
                                        <option value="USD">US Dollar &nbsp; $</option>
                                        <option value="EUR">Euro &nbsp; €</option>
                                        <option value="AUD">Australian Dollar &nbsp; $</option>
                                        <option value="BRL">Brazilian Real &nbsp; R$</option>
                                        <option value="CAD">Canadian Dollar &nbsp; $</option>
                                        <option value="CHF">Swiss Franc &nbsp; CHF</option>
                                        <option value="CZK">Czech Koruna &nbsp; Kč</option>
                                        <option value="DKK">Danish Krone &nbsp; kr</option>
                                        <option value="GBP">Pound Sterling &nbsp; £</option>
                                        <option value="HKD">Hong Kong Dollar &nbsp; $</option>
                                        <option value="HUF">Hungarian Forint &nbsp; Ft</option>
                                        <option value="ILS">Israeli New Sheqel &nbsp; ₪</option>
                                        <option value="JPY">Japanese Yen &nbsp; ¥</option>
                                        <option value="MXN">Mexican Peso &nbsp; $</option>
                                        <option value="NOK">Norwegian Krone &nbsp; kr</option>
                                        <option value="NZD">New Zeland Dollar &nbsp; $</option>
                                        <option value="PHP">Philippine Peso &nbsp; ₱</option>
                                        <option value="PLN">Polish Zloty &nbsp; zł</option>
                                        <option value="RUB">Russian Ruble &nbsp; ₽</option>
                                        <option value="SGD">Singapore Dollar &nbsp; $‏</option>
                                        <option value="SEK">Swedish Krona &nbsp; kr</option>
                                        <option value="THB">Thai Baht &nbsp; ฿</option>
                                        <option value="TWD">Taiwan New Dollar &nbsp; NT$</option>
                                    </b-select>

                                    <p class="control">
                                        <button id="s_paypal2" type="submit" name="submit" alt="PayPal - The safer, easier way to pay online!" class="button is-link">{{ $t('donation.how-donate.paypal.donate') }}</button>                                        
                                    </p>
                                </b-field>
                            </form> 
                        </div>
                    </b-modal>

                    <div class="columns is-centered is-multiline">
                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light" tag="a" href="https://flattr.com/@NickeManarin/domain/screentogif.com" target="_blank" rel="noopener">
                                <article class="media">
                                    <figure class="media-left">
                                        <ResponsiveImage :src="require('@/assets/media/donation/Flattr.svg')" maxWidth="40px" maxHeight="40px"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Flattr</h5>
                                        <p class="is-size-5 has-text-grey">{{ $t('donation.how-donate.flattr-info') }}</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>

                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light" tag="a" href="https://ko-fi.com/nickemanarin" target="_blank" rel="noopener">
                                <article class="media">
                                    <figure class="media-left">
                                        <ResponsiveImage :src="require('@/assets/media/donation/Ko-fi.svg')" maxWidth="40px" maxHeight="40px"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Ko-fi</h5>
                                        <p class="is-size-5 has-text-grey">{{ $t('donation.how-donate.coffee-info') }}</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>

                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light" tag="a" href="https://www.buymeacoffee.com/NickeManarin" target="_blank" rel="noopener">
                                <article class="media">
                                    <figure class="media-left">
                                        <ResponsiveImage :src="require('@/assets/media/donation/Buymeacoffee.svg')" maxWidth="40px" maxHeight="40px"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Buy Me a Coffee</h5>
                                        <p class="is-size-5 has-text-grey">{{ $t('donation.how-donate.coffee-info') }}</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>
                    </div>

                    <div class="columns is-centered is-multiline">
                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light" tag="a" href="http://steamcommunity.com/id/nickesm/wishlist" target="_blank" rel="noopener">
                                <article class="media">
                                    <figure class="media-left">
                                        <ResponsiveImage :src="require('@/assets/media/donation/Steam.svg')" maxWidth="40px" maxHeight="40px"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Steam</h5>
                                        <p class="is-size-5 has-text-grey">{{ $t('donation.how-donate.steam-info') }}</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>
                        
                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light" tag="a" href="http://www.gog.com/u/Nickesm/wishlist" target="_blank" rel="noopener">
                                <article class="media">
                                    <figure class="media-left">
                                        <ResponsiveImage :src="require('@/assets/media/donation/Gog.svg')" maxWidth="40px" maxHeight="40px"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">GOG</h5>
                                        <p class="is-size-5 has-text-grey">{{ $t('donation.how-donate.gog-info') }}</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>

                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light" tag="a" href="https://www.amazon.com/hz/wishlist/ls/2S54SRWY2K8KF?ref_=wl_share" target="_blank" rel="noopener">
                                <article class="media">
                                    <figure class="media-left">
                                        <ResponsiveImage :src="require('@/assets/media/donation/Amazon.svg')" maxWidth="40px" maxHeight="40px"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">{{ $t('donation.how-donate.amazon') }}</h5>
                                        <p class="is-size-5 has-text-grey">{{ $t('donation.how-donate.amazon-info') }}</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h2 class="title is-size-3 has-text-centered is-unselectable has-arrow-cursor">{{ $t('donation.list.title') }}</h2>
                    <p class="subtitle has-text-centered has-text-grey-71 is-unselectable has-arrow-cursor">{{ $t('donation.list.subtitle') }}</p>

                    <b-table :data="patrons" ref="table" :loading="isLoading" hoverable selectable @select="openLink" :scrollable="false"
                         :default-sort-direction="defaultSortOrder" :default-sort="[sortField, sortOrder]">
                    
                        <template slot-scope="props">
                            <b-table-column class="is-unselectable" :cell-class="props.row.url ? 'has-pointer-cursor' : ''" 
                                field="version" :label="$t('donation.list.patron')" :custom-sort="sortName" sortable>
                                <b-tooltip v-if="props.row.url != null" :label="props.row.urlPretty" position="is-right" type="is-link">
                                    {{ props.row.name }}

                                    <b-icon class="has-text-link is-size-7" pack="unicon" icon="uil-external-link-alt"></b-icon>
                                </b-tooltip>

                                <p v-if="props.row.url == null">{{ props.row.name }}</p>
                            </b-table-column>

                            <b-table-column class="is-unselectable" :cell-class="props.row.url ? 'has-pointer-cursor' : ''" 
                                field="value" :label="$t('donation.list.ammount')" :custom-sort="sortValue" sortable numeric>
                                <template slot="header" slot-scope="{ column }">
                                    <b-tooltip :label="$t('donation.list.ammount-info')" type="is-info" size="is-small" animated dashed multilined>
                                        {{ column.label }}
                                    </b-tooltip>
                                </template>

                                {{ props.row.value.toLocaleString() }} {{ props.row.currency }} 
                            </b-table-column>

                            <!-- <b-table-column class="is-unselectable" cell-class="has-pointer-cursor" field="date" label="Date" sortable centered>
                                {{props.row.date ? new Date(props.row.date).toLocaleDateString() : "unknown"}}
                            </b-table-column> -->

                            <b-table-column class="is-unselectable" :cell-class="props.row.url ? 'has-pointer-cursor' : ''" 
                                field="platform" :label="$t('donation.list.from')" sortable numeric>
                                <template slot="header" slot-scope="{ column }">
                                    {{ column.label }}
                                </template>

                                {{ props.row.platform }}
                            </b-table-column>
                        </template>

                        <template slot="empty">
                            <section v-if="!isLoading" class="section">
                                <div class="content has-text-grey has-text-centered">
                                    <p>
                                        <b-icon icon="frown" size="is-large"></b-icon>
                                    </p>

                                    <p>{{ $t('donation.list.not-possible') }}</p>
                                </div>
                            </section>
                        </template>

                        <template slot="footer">
                            <p class="has-text-centered is-unselectable">
                                <span>
                                    {{ $t('donation.list.list-name') }}
                                </span>
                                <router-link to="/contact" tag="a">
                                    {{ $t('donation.list.contact') }}
                                </router-link>
                            </p>
                        </template>
                    </b-table>
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

        data() {
            return {
                isPaypalModalActive: false,
                isPaypalExpanderOpen: false,
                paypalCurrency: "USD",
                patrons: [
                    {
                        name: "Bluepoint Games",
                        url: "https://www.bluepointgames.com?from=ScreenToGif",
                        urlPretty: "bluepointgames.com",
                        value: 1000,
                        valueInUsd: 1000,
                        currency: "USD $",
                        platform: "Paypal"
                    },
                    {
                        name: "Nanch",
                        url: null,
                        urlPretty: null,
                        value: 255,
                        valueInUsd: 255,
                        currency: "USD $",
                        platform: "Patreon"
                    },
                    {
                        name: "Eirik",
                        url: "https://www.linkedin.com/in/eirikbirkeland",
                        urlPretty: "linkedin.com/in/eirikbirkeland",
                        value: 150,
                        valueInUsd: 150,
                        currency: "USD $",
                        platform: "Paypal"
                    },
                    {
                        name: "Loam",
                        url: "https://loam.net?from=ScreenToGif",
                        urlPretty: "loam.net",
                        value: 100,
                        valueInUsd: 100,
                        currency: "USD $",
                        platform: "Paypal"
                    },
                    {
                        name: "WHSR",
                        url: "https://www.webhostingsecretrevealed.net?from=ScreenToGif",
                        urlPretty: "webhostingsecretrevealed.net",
                        value: 50,
                        valueInUsd: 50,
                        currency: "USD $",
                        platform: "Paypal"
                    },
                    {
                        name: "Elmah",
                        url: "http://elmah.io?from=ScreenToGif",
                        urlPretty: "elmah.io",
                        value: 50,
                        valueInUsd: 50,
                        currency: "USD $",
                        platform: "Paypal"
                    },
                    {
                        name: "Is It Keto?",
                        url: 'https://www.isitketo.org?from=ScreenToGif',
                        urlPretty: 'isitketo.org',
                        value: 40,
                        valueInUsd: 40,
                        currency: "USD $",
                        platform: "Paypal"
                    },
                    {
                        name: "CampusMVP",
                        url: 'https://www.campusmvp.es?from=ScreenToGif',
                        urlPretty: 'campusmvp.es',
                        value: 30,
                        valueInUsd: 30,
                        currency: "USD $",
                        platform: "Paypal"
                    },
                    {
                        name: "TTVPS",
                        url: 'https://ttvps.com?from=ScreenToGif',
                        urlPretty: 'ttvps.com',
                        value: 200,
                        valueInUsd: 25.8,
                        currency: "HKD $",
                        platform: "Paypal"
                    },
                    {
                        name: "Art Trenton",
                        url: 'https://github.com/atrenton/MyJournal.Notebook',
                        urlPretty: 'github.com/atrenton/MyJournal.Notebook',
                        value: 25,
                        valueInUsd: 25,
                        currency: "USD $",
                        platform: "Paypal"
                    },
                    {
                        name: "Guard.io",
                        url: 'https://guard.io?from=ScreenToGif',
                        urlPretty: 'guard.io',
                        value: 20,
                        valueInUsd: 20,
                        currency: "USD $",
                        platform: "Paypal"
                    },
                    {
                        name: "Naruto Story",
                        url: 'https://narutostory.net?from=ScreenToGif',
                        urlPretty: 'narutostory.net',
                        value: 80,
                        valueInUsd: 19,
                        currency: "PLN zł",
                        platform: "Paypal"
                    },
                    {
                        name: "Justin Ballen",
                        url: 'https://jballen.io?from=ScreenToGif',
                        urlPretty: 'jballen.io',
                        value: 15,
                        valueInUsd: 15,
                        currency: "USD $",
                        platform: "Paypal"
                    },
                    {
                        name: "Gerhard Wonner",
                        url: 'https://gerhard-wonner.itch.io/runtothestairs',
                        urlPretty: 'gerhard-wonner.itch.io/runtothestairs',
                        value: 10,
                        valueInUsd: 10.84,
                        currency: "EUR €",
                        platform: "Paypal"
                    },
                    {
                        name: "Sqlitybi",
                        url: 'https://sqlitybi.com?from=ScreenToGif',
                        urlPretty: 'sqlitybi.com',
                        value: 40,
                        valueInUsd: 9.51,
                        currency: "PLN zł",
                        platform: "Paypal"
                    }
                ],
                isLoading: true,
                sortField: "valueInUsd",
                sortOrder: "desc",
                defaultSortOrder: "desc",
            };
        },

        mounted() {
            this.isLoading = false;
        },

        methods: {
            scrollToDonation(){
                //document.getElementById('donation-methods').scrollIntoView({ block: 'start',  behavior: 'smooth' });
                this.$refs.donationMethods.scrollIntoView({ block: 'start',  behavior: 'smooth' });
            },
            openPaypalDialog(){
                this.isPaypalModalActive = true;
                
            },
            feeConversion(start, end, currency){
                return this.$t('donation.how-donate.paypal.becomes')
                    .replace('{0}', start.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' ' + currency)
                    .replace('{1}', end.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' ' + currency)
            },
            sortName(a, b, isAsc){
                return ('' + a.name).localeCompare(b.name) * (isAsc ? -1 : 1);
            },
            sortValue(a, b, isAsc){
                return (a.valueInUsd > b.valueInUsd ? 1 : -1) * (isAsc ? 1 : -1);
            },
            openLink(row){
                if (row.url === null)
                    return;

                window.open(row.url, '_blank', 'noopener');
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "@/mixins/colors.scss";

    //Background of the hero panel.
    .hero.is-donation {
        background-image: linear-gradient($donation, $donation-light);
    }

    //Fills up the space.
    .column {
        height: 100%;
        padding: 0.75rem 0.5rem;
    }

    //Makes the buttons inside the columns more rounded and expanded.
    .column .button {
        white-space: normal;
        border-radius: 5px;
        padding: 0.75rem;
        width: 100%;
        height: 100%;
        justify-content: stretch;
    }

    //Reduces the margin of the icon of media element.
    figure.media-left{
        margin-right: 0.5rem;
    }

    //Removes the negative margin of the button.
    article span.icon {
        margin-left: 0px !important;
        margin-right: 0px !important;
    }

    //Adds a pointer cursor.
    .has-pointer-cursor {
        cursor: pointer;
    }
</style>

<style lang="scss">
    //Increase the size of the custom icon.
    .has-icon-large .icon {
        mask-size: 3.5rem;
    }

    //Makes inner element of the buttons ocupy the whole space.
    a > span {
        width: 100%;
    }

    //Adds a bit of margin to the expander content.
    .has-top-margin .collapse-content {
        margin-top: 0.5rem;
    }
</style>