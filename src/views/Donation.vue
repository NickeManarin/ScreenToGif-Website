<template>
    <div class="donation">
        <vue-headful :title="$t('donation.meta-title')" :description="$t('donation.meta-description')"/>

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
                            <b-button class="is-light" tag="a" href="https://github.com/NickeManarin/ScreenToGif/issues" target="_blank" rel="noopener"
                                @click="$gtag.event('How-to-help', {'event_category': 'Clicks', 'event_label': 'Feedback'})">
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
                            <b-button class="is-light" tag="router-link" to="/share" 
                                @click="$gtag.event('How-to-help', {'event_category': 'Clicks', 'event_label': 'Share'})">
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
                            <b-button class="is-light" tag="a" href="https://github.com/NickeManarin/ScreenToGif/wiki/Localization" target="_blank" rel="noopener"
                                @click="$gtag.event('How-to-help', {'event_category': 'Clicks', 'event_label': 'Localization'})">
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
                            <b-button class="is-light" tag="a" href="https://www.patreon.com/bePatron?u=3706208" target="_blank" rel="noopener"
                                @click="$gtag.event('How-to-donate', {'event_category': 'Clicks', 'event_label': 'Patreon'})">
                                <article class="media">
                                    <figure class="media-left">
                                        <ResponsiveImage :src="require('@/assets/media/donation/Patreon.svg')" width="40px" height="40px" maxWidth="40px" maxHeight="40px"/>
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
                                        <ResponsiveImage :src="require('@/assets/media/donation/Paypal.svg')" width="40px" height="40px" maxWidth="40px" maxHeight="40px"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Paypal</h5>
                                        <p class="is-size-5 has-text-grey">{{ $t('donation.how-donate.paypal-info') }}</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>
                    </div>

                    <b-modal :active.sync="isPaypalModalActive" trap-focus aria-role="dialog" aria-modal :width="500" scroll="keep"
                        @close="$gtag.event('How-to-donate', {'event_category': 'Clicks', 'event_label': 'Paypal hide'})">
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
                                        <button id="s_paypal2" type="submit" name="submit" alt="PayPal - The safer, easier way to pay online!" class="button is-link"
                                            @click="$gtag.event('How-to-donate', {'event_category': 'Clicks', 'event_label': 'Paypal'})">
                                            {{ $t('donation.how-donate.paypal.donate') }}
                                        </button>                                        
                                    </p>
                                </b-field>
                            </form> 
                        </div>
                    </b-modal>

                    <div class="columns is-centered is-multiline">
                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light" tag="a" href="https://flattr.com/@NickeManarin/domain/screentogif.com" target="_blank" rel="noopener"
                                @click="$gtag.event('How-to-donate', {'event_category': 'Clicks', 'event_label': 'Flattr'})">
                                <article class="media">
                                    <figure class="media-left">
                                        <ResponsiveImage :src="require('@/assets/media/donation/Flattr.svg')" width="40px" height="40px" maxWidth="40px" maxHeight="40px"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Flattr</h5>
                                        <p class="is-size-5 has-text-grey">{{ $t('donation.how-donate.flattr-info') }}</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>

                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light" tag="a" href="https://ko-fi.com/nickemanarin" target="_blank" rel="noopener"
                                @click="$gtag.event('How-to-donate', {'event_category': 'Clicks', 'event_label': 'Kofi'})">
                                <article class="media">
                                    <figure class="media-left">
                                        <ResponsiveImage :src="require('@/assets/media/donation/Ko-fi.svg')" width="40px" height="40px" maxWidth="40px" maxHeight="40px"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Ko-fi</h5>
                                        <p class="is-size-5 has-text-grey">{{ $t('donation.how-donate.coffee-info') }}</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>

                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light" tag="a" href="https://www.buymeacoffee.com/NickeManarin" target="_blank" rel="noopener"
                                @click="$gtag.event('How-to-donate', {'event_category': 'Clicks', 'event_label': 'BuyMeACoffee'})">
                                <article class="media">
                                    <figure class="media-left">
                                        <ResponsiveImage :src="require('@/assets/media/donation/Buymeacoffee.svg')" width="40px" height="40px" maxWidth="40px" maxHeight="40px"/>
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
                            <b-button class="is-light" tag="a" href="https://steamcommunity.com/id/nickesm/wishlist" target="_blank" rel="noopener"
                                @click="$gtag.event('How-to-donate', {'event_category': 'Clicks', 'event_label': 'Steam'})">
                                <article class="media">
                                    <figure class="media-left">
                                        <ResponsiveImage :src="require('@/assets/media/donation/Steam.svg')" width="40px" height="40px" maxWidth="40px" maxHeight="40px"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Steam</h5>
                                        <p class="is-size-5 has-text-grey">{{ $t('donation.how-donate.steam-info') }}</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>
                        
                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light" tag="a" href="https://www.gog.com/u/Nickesm/wishlist" target="_blank" rel="noopener"
                                @click="$gtag.event('How-to-donate', {'event_category': 'Clicks', 'event_label': 'GOG'})">
                                <article class="media">
                                    <figure class="media-left">
                                        <ResponsiveImage :src="require('@/assets/media/donation/Gog.svg')" width="40px" height="40px" maxWidth="40px" maxHeight="40px"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">GOG</h5>
                                        <p class="is-size-5 has-text-grey">{{ $t('donation.how-donate.gog-info') }}</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>

                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light" tag="a" href="https://www.amazon.com/hz/wishlist/ls/2S54SRWY2K8KF?ref_=wl_share" target="_blank" rel="noopener"
                                @click="$gtag.event('How-to-donate', {'event_category': 'Clicks', 'event_label': 'Amazon'})">
                                <article class="media">
                                    <figure class="media-left">
                                        <ResponsiveImage :src="require('@/assets/media/donation/Amazon.svg')" width="40px" height="40px" maxWidth="40px" maxHeight="40px"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">{{ $t('donation.how-donate.amazon') }}</h5>
                                        <p class="is-size-5 has-text-grey">{{ $t('donation.how-donate.amazon-info') }}</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>

                        <div class="column is-half-tablet is-one-third-desktop" v-if="false">
                            <form action="https://www.coinpayments.net/index.php" method="post" target="_blank" rel="noopener">
                                <input type="hidden" name="cmd" value="_donate">
                                <input type="hidden" name="reset" value="1">
                                <input type="hidden" name="merchant" value="579f3ffc9deba33fde35314f92f06513">
                                <input type="hidden" name="item_name" value="ScreenToGif Donation">
                                <input type="hidden" name="currency" value="USD">
                                <input type="hidden" name="amountf" value="10.00000000">
                                <input type="hidden" name="allow_amount" value="1">
                                <input type="hidden" name="want_shipping" value="0">
                                <input type="hidden" name="allow_extra" value="1">

                                <button type="submit" name="submit" class="button is-light" 
                                    @click="$gtag.event('How-to-donate', {'event_category': 'Clicks', 'event_label': 'Amazon'})">
                                    <article class="media">
                                        <figure class="media-left">
                                            <ResponsiveImage :src="require('@/assets/media/donation/Amazon.svg')" width="40px" height="40px" maxWidth="40px" maxHeight="40px"/>
                                        </figure>

                                        <div class="media-content">
                                            <h5 class="is-size-4 has-text-weight-semibold">{{ $t('donation.how-donate.amazon') }}</h5>
                                            <p class="is-size-5 has-text-grey">{{ $t('donation.how-donate.amazon-info') }}</p>
                                        </div>
                                    </article>
                                </button>
                            </form>
                        </div>
                    </div>

                    <div class="columns is-centered is-multiline">
                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light" @click="openBitcoinDialog()">
                                <article class="media">
                                    <figure class="media-left">
                                        <ResponsiveImage :src="require('@/assets/media/donation/Bitcoin.svg')" width="40px" height="40px" maxWidth="40px" maxHeight="40px"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Bitcoin</h5>
                                        <p class="is-size-5 has-text-grey">{{ $t('donation.how-donate.cripto-info') }}</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>

                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light" @click="openBitcoinCashDialog()">
                                <article class="media">
                                    <figure class="media-left">
                                        <ResponsiveImage :src="require('@/assets/media/donation/BitcoinCash.svg')" width="40px" height="40px" maxWidth="40px" maxHeight="40px"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Bitcoin Cash</h5>
                                        <p class="is-size-5 has-text-grey">{{ $t('donation.how-donate.cripto-info') }}</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>
                    </div>

                    <b-modal :active.sync="isBitcoinModalActive" trap-focus aria-role="dialog" aria-modal :width="600" scroll="keep"
                        @close="$gtag.event('How-to-donate', {'event_category': 'Clicks', 'event_label': 'Bitcoin hide'})">
                        <div class="box has-text-centered content" style="padding: 40px">
                            <h2 class="title">{{ $t('donation.how-donate.cripto.title').replace('{0}', 'Bitcoin') }}</h2>
                            <p class="subtitle">{{ $t('donation.how-donate.cripto.subtitle') }}</p>
                            
                            <ResponsiveImage :src="require('@/assets/media/donation/BitcoinAddress.png')" width="145px" height="145px" maxWidth="145px" maxHeight="145px" borderRadius="4px" skeleton/>

                            <br>

                            <div class="columns is-centered is-mobile has-top-margin">
                                <div class="column is-narrow has-text-centered">
                                    <div class="has-code">
                                        <code><span class="is-unselectable">></span> bc1q9l8ql9a2hsew0skcnnfupq97tlaqnxwqh4smrc </code>
                                        <b-button type="is-primary" inverted @click="copyAddress('bc1q9l8ql9a2hsew0skcnnfupq97tlaqnxwqh4smrc', 'Bitcoin')">{{ $t('home.copy') }}</b-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-modal>

                    <b-modal :active.sync="isBitcoinCashModalActive" trap-focus aria-role="dialog" aria-modal :width="600" scroll="keep"
                        @close="$gtag.event('How-to-donate', {'event_category': 'Clicks', 'event_label': 'BitcoinCash hide'})">
                        <div class="box has-text-centered content" style="padding: 40px">
                            <h2 class="title">{{ $t('donation.how-donate.cripto.title').replace('{0}', 'Bitcoin Cash') }}</h2>
                            <p class="subtitle">{{ $t('donation.how-donate.cripto.subtitle') }}</p>
                            
                            <ResponsiveImage :src="require('@/assets/media/donation/BitcoinCashAddress.png')" width="207px" height="207px" maxWidth="207px" maxHeight="207px" borderRadius="4px" skeleton/>

                            <br>

                            <div class="columns is-centered is-mobile has-top-margin">
                                <div class="column is-narrow has-text-centered">
                                    <div class="has-code">
                                        <code><span class="is-unselectable">></span> qqcmje9zkgj0hazantpvx8pn3acqdg4pe5dtytm2c6 </code>
                                        <b-button type="is-primary" inverted @click="copyAddress('qqcmje9zkgj0hazantpvx8pn3acqdg4pe5dtytm2c6', 'Bitcoin Cash')">{{ $t('home.copy') }}</b-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-modal>
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
                    
                        <b-table-column class="is-unselectable" field="name" :label="$t('donation.list.patron')" :custom-sort="sortName" sortable v-slot="props">
                            <div :class="props.row.url ? 'has-pointer-cursor' : ''">
                                <b-tooltip v-if="props.row.url != null" :label="props.row.urlPretty" position="is-right" type="is-link">
                                    {{ props.row.name }}

                                    <b-icon class="has-text-link is-size-7" pack="unicon" icon="uil-external-link-alt"/>
                                </b-tooltip>

                                <p v-if="props.row.url == null">{{ props.row.name }}</p>
                            </div>
                        </b-table-column>

                        <b-table-column class="is-unselectable" field="value" :label="$t('donation.list.amount')" :custom-sort="sortValue" sortable numeric>
                            <template v-slot:header="{ column }">
                                <b-tooltip :label="$t('donation.list.amount-info')" type="is-info" size="is-small" animated dashed multilined>
                                    {{ column.label }}
                                </b-tooltip>
                            </template>

                            <template v-slot="props">
                                <div :class="props.row.url ? 'has-pointer-cursor' : ''">
                                    {{ props.row.value.toLocaleString($i18n.locale, { minimumFractionDigits: (props.row.currency === 'BTC' ? 4 : 0) }) }} {{ props.row.currency }} 
                                </div>
                            </template>
                        </b-table-column>

                        <!-- <b-table-column class="is-unselectable" cell-class="has-pointer-cursor" field="date" label="Date" sortable centered v-slot="props">
                            {{props.row.date ? new Date(props.row.date).toLocaleDateString($i18n.locale) : "unknown"}}
                        </b-table-column> -->

                        <b-table-column class="is-unselectable" field="platform" :label="$t('donation.list.from')" sortable numeric>
                            <template v-slot:header="{ column }">
                                {{ column.label }}
                            </template>

                            <template v-slot="props">
                                <div :class="props.row.url ? 'has-pointer-cursor' : ''">
                                    {{ props.row.platform }}
                                </div>
                            </template>
                        </b-table-column>

                        <template slot="empty">
                            <section v-if="!isLoading" class="section">
                                <div class="content has-text-grey has-text-centered">
                                    <p>
                                        <b-icon icon="frown" size="is-large"/>
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
                isBitcoinModalActive: false,
                isBitcoinCashModalActive: false,
                paypalCurrency: "USD",
                patrons: [
                    {
                        name: "Bluepoint Games",
                        url: "https://www.bluepointgames.com?ref=ScreenToGif",
                        urlPretty: "bluepointgames.com",
                        value: 1000,
                        valueInUsd: 1000,
                        currency: "USD $",
                        platform: "Paypal"
                    },
                    {
                        name: "Microsoft",
                        url: "https://www.microsoft.com?ref=ScreenToGif",
                        urlPretty: "microsoft.com",
                        value: 500,
                        valueInUsd: 500,
                        currency: "USD $",
                        platform: "Github"
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
                        name: "EaseUS",
                        url: "https://easeus.com/?ref=ScreenToGif",
                        urlPretty: "easeus.com",
                        value: 120,
                        valueInUsd: 120,
                        currency: "USD $",
                        platform: "Paypal"
                    },
                    {
                        name: "Noderaider",
                        url: "https://twitter.com/noderaider",
                        urlPretty: "twitter.com/noderaider",
                        value: 120,
                        valueInUsd: 120,
                        currency: "USD $",
                        platform: "Paypal"
                    },
                    {
                        name: "datamate",
                        url: "https://datamate.org?ref=ScreenToGif",
                        urlPretty: "datamate",
                        value: 100,
                        valueInUsd: 111.72,
                        currency: "EUR €",
                        platform: "Paypal"
                    },
                    {
                        name: "Loam",
                        url: "https://loam.net?ref=ScreenToGif",
                        urlPretty: "loam.net",
                        value: 100,
                        valueInUsd: 100,
                        currency: "USD $",
                        platform: "Paypal"
                    },
                    {
                        name: "Kreiseder IT Services",
                        url: 'https://kreiseder.org/?ref=ScreenToGif',
                        urlPretty: 'kreiseder.org',
                        value: 60,
                        valueInUsd: 66,
                        currency: "EUR €",
                        platform: "Paypal"
                    },
                    {
                        name: "Brunner BI",
                        url: "https://www.brunner.bi?ref=ScreenToGif",
                        urlPretty: "brunner.bi",
                        value: 0.0015,
                        valueInUsd: 55.68,
                        currency: "BTC",
                        platform: "Bitcoin"
                    },
                    {
                        name: "WHSR",
                        url: "https://www.webhostingsecretrevealed.net?ref=ScreenToGif",
                        urlPretty: "webhostingsecretrevealed.net",
                        value: 50,
                        valueInUsd: 50,
                        currency: "USD $",
                        platform: "Paypal"
                    },
                    {
                        name: "Elmah",
                        url: "http://elmah.io?ref=ScreenToGif",
                        urlPretty: "elmah.io",
                        value: 50,
                        valueInUsd: 50,
                        currency: "USD $",
                        platform: "Paypal"
                    },
                    {
                        name: "Is It Keto?",
                        url: 'https://www.isitketo.org?ref=ScreenToGif',
                        urlPretty: 'isitketo.org',
                        value: 40,
                        valueInUsd: 40,
                        currency: "USD $",
                        platform: "Paypal"
                    },
                    {
                        name: "DataTraveler1",
                        url: null,
                        urlPretty: null,
                        value: 36.7,
                        valueInUsd: 36.7,
                        currency: "USD $",
                        platform: "Paypal"
                    },
                    {
                        name: "CampusMVP",
                        url: 'https://www.campusmvp.es?ref=ScreenToGif',
                        urlPretty: 'campusmvp.es',
                        value: 30,
                        valueInUsd: 30,
                        currency: "USD $",
                        platform: "Paypal"
                    },
                    {
                        name: "TTVPS",
                        url: 'https://ttvps.com?ref=ScreenToGif',
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
                        name: "Jako7000",
                        url: null,
                        urlPretty: null,
                        value: 20,
                        valueInUsd: 22.57,
                        currency: "EUR €",
                        platform: "Paypal"
                    },
                    {
                        name: "Guard.io",
                        url: 'https://guard.io?ref=ScreenToGif',
                        urlPretty: 'guard.io',
                        value: 20,
                        valueInUsd: 20,
                        currency: "USD $",
                        platform: "Paypal"
                    },
                    {
                        name: "Naruto Story",
                        url: 'https://narutostory.net?ref=ScreenToGif',
                        urlPretty: 'narutostory.net',
                        value: 80,
                        valueInUsd: 19,
                        currency: "PLN zł",
                        platform: "Paypal"
                    },
                    {
                        name: "Rogerty",
                        url: 'https://www.rogerty.com?ref=ScreenToGif',
                        urlPretty: 'rogerty.com',
                        value: 15,
                        valueInUsd: 17.6,
                        currency: "EUR €",
                        platform: "Paypal"
                    },
                    {
                        name: "Justin Ballen",
                        url: 'https://jballen.io?ref=ScreenToGif',
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
                        url: 'https://sqlitybi.com?ref=ScreenToGif',
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
                //this.$refs.donationMethods.scrollIntoView({ block: 'start',  behavior: 'smooth' });
                this.$scrollTo(this.$refs.donationMethods, 700);
                this.$gtag.event('How-to-help', {'event_category': 'Clicks', 'event_label': 'Donate'});
            },
            openPaypalDialog(){
                this.isPaypalModalActive = true;
                this.$gtag.event('How-to-donate', {'event_category': 'Clicks', 'event_label': 'Paypal show'});
            },
            openBitcoinDialog(){
                this.isBitcoinModalActive = true;
                this.$gtag.event('How-to-donate', {'event_category': 'Clicks', 'event_label': 'Bitcoin show'});
            },
            openBitcoinCashDialog(){
                this.isBitcoinCashModalActive = true;
                this.$gtag.event('How-to-donate', {'event_category': 'Clicks', 'event_label': 'BitcoinCash show'});
            },
            feeConversion(start, end, currency){
                return this.$t('donation.how-donate.paypal.becomes')
                    .replace('{0}', start.toLocaleString(this.$i18n.locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' ' + currency)
                    .replace('{1}', end.toLocaleString(this.$i18n.locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' ' + currency)
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
                this.$gtag.event('Patron table', {'event_category': 'Clicks', 'event_label': 'Installer ' + row.urlPretty });
            },
            copyAddress(address, type) {
                this.$gtag.event('How-to-donate', {'event_category': 'Clicks', 'event_label': 'Copy ' + type + ' address' });

                this.$copyText(address).then((e) => {
                    this.$buefy.toast.open({
                        duration: 5000,
                        message: this.$t('donation.how-donate.cripto.address-copied'),
                        position: 'is-bottom',
                        type: 'is-success'
                    });
                }, (e) => {
                    console.log('It was not possible to copy the wallet address.', e);

                    this.$buefy.toast.open({
                        duration: 5000,
                        message:  this.$t('donation.how-donate.cripto.address-not-copied'),
                        position: 'is-bottom',
                        type: 'is-danger'
                    });

                    this.$gtag.exception({'description': e, 'fatal': false});
                });
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

        //Chocolatey code and button to copy.
    .has-code {
        display: inline-flex;
        font-size: 1.1em;
        color: white;
        background: #5cadd5;
        padding: calc(0.75rem - 1px); 
        line-height: 1.5rem;
        border-radius: 4px;
        align-items: center;
        -webkit-overflow-scrolling: touch;
        overflow-x: auto;
        white-space: pre;
        word-wrap: normal;
    }

    //Makes the code inside the div.choco blend in.
    .has-code code {
        background-color: transparent;
        color: currentColor;
        font-size: 1em;
        padding: 0;
    }

    .has-code button {
        font-family: inherit;
        line-height: 1.5rem;
        margin: 0 0 0 1rem;
        padding-bottom: calc(.375em - 1px) !important;
        padding-top: calc(.375em - 1px) !important;
    }
</style>