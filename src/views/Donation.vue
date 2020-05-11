<template>
    <div class="donation">
        <section class="hero is-donation">
            <div class="hero-body">
                <div class="container">
                    <h2 class="title is-size-3 has-text-centered is-unselectable has-arrow-cursor">Did you like ScreenToGif?</h2>
                    <p class="subtitle has-text-centered is-unselectable has-arrow-cursor">And you want to help it somehow?</p>
                </div>
            </div>
        </section>

        <section class="hero">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h2 class="title is-size-3 is-unselectable has-arrow-cursor">Why help ScreenToGif?</h2>
                    <!-- <p class="subtitle is-unselectable has-arrow-cursor">If you wish to help the project, here's how</p> -->

                    <p class="content">
                        <span>Because it's a free and open-source app. No ads, nothing shady or obscure. If you have any doubt, feel free to ask or browse the source code.</span>
                        <br>
                        <span>Speaking of donations, they are the only source of income of ScreenToGif. If you would like to support this project then please consider donating.</span>
                        <br>
                        <span>There's 3 ways to donate, via monthly subscription (Patreon, Flattr), one time donation (Paypal, Ko-fi, ButMeACofee, Steam credits), or game gifts (Steam, GOG).</span>
                    </p>
                </div>
            </div>
        </section>

        <section class="hero is-light">
            <div class="hero-body">
                <div class="container">
                    <h2 class="title is-size-3 has-text-centered is-unselectable has-arrow-cursor">How can I help?</h2>
                    <p class="subtitle has-text-centered is-unselectable has-arrow-cursor">If you wish to help the project, here's how</p>

                    <div class="columns is-centered is-multiline">
                        <div class="column is-half-tablet is-one-quarter-desktop">
                            <b-button class="is-grey-95" tag="a" href="https://github.com/NickeManarin/ScreenToGif/issues" target="_blank" rel="noopener">
                                <article class="media">
                                    <figure class="media-left">
                                        <b-icon class="has-text-info is-size-2" pack="unicon" icon="uil-feedback"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Feedback</h5>
                                        <p class="is-size-5 has-text-grey">Report bugs and provide feedback about the user experience</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>

                        <div class="column is-half-tablet is-one-quarter-desktop">
                            <b-button class="is-grey-95" tag="a" href="" target="_blank" rel="noopener">
                                <article class="media">
                                    <figure class="media-left">
                                        <b-icon class="has-text-info is-size-2" pack="unicon" icon="uil-share"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Share</h5>
                                        <p class="is-size-5 has-text-grey">Share with your friends or create a review</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>

                        <div class="column is-half-tablet is-one-quarter-desktop">
                            <b-button class="is-grey-95" tag="a" href="https://github.com/NickeManarin/ScreenToGif/wiki/Localization" target="_blank" rel="noopener">
                                <article class="media">
                                    <figure class="media-left">
                                        <b-icon class="has-text-info is-size-2" pack="unicon" icon="uil-feedback"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Localization</h5>
                                        <p class="is-size-5 has-text-grey">Keep the localizations up to date or add one that is missing</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>

                        <div class="column is-half-tablet is-one-quarter-desktop">
                            <b-button class="is-grey-95" @click="scrollToDonation()">
                                <article class="media">
                                    <figure class="media-left">
                                        <b-icon class="has-text-info is-size-2" pack="unicon" icon="uil-money-stack"/>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Donate</h5>
                                        <p class="is-size-5 has-text-grey">Donations are also welcome 😊</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section ref="donationMethods" class="hero">
            <div class="hero-body">
                <div class="container">
                    <h2 class="title is-size-3 has-text-centered is-unselectable has-arrow-cursor">How can I donate?</h2>
                    <p class="subtitle has-text-centered is-unselectable has-arrow-cursor">Here are some ways to donate</p>

                    <div class="columns is-centered is-multiline">
                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light " @click="visitPatreon()">
                                <article class="media">
                                    <figure class="media-left">
                                        <imageLoader :src="require('@/assets/Patreon.svg')" width="40px" height="40px"></imageLoader>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Patreon</h5>
                                        <p class="is-size-5 has-text-grey">Subscribe to donate monthly via Patreon</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>

                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light" @click="openPaypalDialog()">
                                <article class="media">
                                    <figure class="media-left">
                                        <imageLoader :src="require('@/assets/Paypal.svg')" width="40px" height="40px"></imageLoader>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Paypal</h5>
                                        <p class="is-size-5 has-text-grey">Single time donation via Paypal</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>
                    </div>

                    <b-modal :active.sync="isPaypalModalActive" trap-focus aria-role="dialog" aria-modal :width="500" scroll="keep">
                        <div class="box has-text-centered content" style="padding: 40px">
                            <h2 class="title">Donate with PayPal</h2>
                            <p class="subtitle">Select your currency before continuing</p>

                            <br>
                            <p>PayPal has a fee based on value donated (6.4%) + a fixed value based on the currency selected (0.1 to 0.5 cents of dollar).</p>
                            <br>
                            <p>
                                <span>20.00 EUR becomes 18.37 EUR</span><br>
                                <span>10.00 EUR becomes 9.01 EUR</span><br>
                                <span>5.00 EUR becomes 4.33 EUR</span><br>
                                <span>10.00 USD becomes 9.06 USD</span><br>
                                <span>5.00 USD becomes 4.38 USD</span><br>
                            </p>
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
                                        <button id="s_paypal2" type="submit" name="submit" alt="PayPal - The safer, easier way to pay online!" class="button is-link">Donate</button>                                        
                                    </p>
                                </b-field>
                            </form> 
                        </div>
                    </b-modal>

                    <div class="columns is-centered is-multiline">
                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light" @click="visitPatreon()">
                                <article class="media">
                                    <figure class="media-left">
                                        <imageLoader :src="require('@/assets/Flattr.svg')" width="40px" height="40px"></imageLoader>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Flattr</h5>
                                        <p class="is-size-5 has-text-grey">Subscribe to donate monthly via Flattr</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>

                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light" @click="visitPatreon()">
                                <article class="media">
                                    <figure class="media-left">
                                        <imageLoader :src="require('@/assets/Ko-fi.svg')" width="40px" height="40px"></imageLoader>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Ko-fi</h5>
                                        <p class="is-size-5 has-text-grey">Buy a coffee for me</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>

                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light" @click="visitPatreon()">
                                <article class="media">
                                    <figure class="media-left">
                                        <imageLoader :src="require('@/assets/Buymeacoffee.svg')" width="40px" height="40px"></imageLoader>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Buy Me a Coffee</h5>
                                        <p class="is-size-5 has-text-grey">Buy a coffee for me</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>
                    </div>

                    <div class="columns is-centered is-multiline">
                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light" @click="visitPatreon()">
                                <article class="media">
                                    <figure class="media-left">
                                        <imageLoader :src="require('@/assets/Steam.svg')" width="40px" height="40px"></imageLoader>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Steam</h5>
                                        <p class="is-size-5 has-text-grey">Gift games or credits via Steam</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>
                        
                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light" @click="visitPatreon()">
                                <article class="media">
                                    <figure class="media-left">
                                        <imageLoader :src="require('@/assets/Gog.svg')" width="40px" height="40px"></imageLoader>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">GOG</h5>
                                        <p class="is-size-5 has-text-grey">Gift games via GOG</p>
                                    </div>
                                </article>
                            </b-button>
                        </div>

                        <div class="column is-half-tablet is-one-third-desktop">
                            <b-button class="is-light" @click="visitPatreon()">
                                <article class="media">
                                    <figure class="media-left">
                                        <imageLoader :src="require('@/assets/Amazon.svg')" width="40px" height="40px"></imageLoader>
                                    </figure>

                                    <div class="media-content">
                                        <h5 class="is-size-4 has-text-weight-semibold">Amazon Wishlist</h5>
                                        <p class="is-size-5 has-text-grey">Help me get new parts for my computer</p>
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
                    <h2 class="title is-size-3 has-text-centered is-unselectable has-arrow-cursor">Patron list</h2>
                    <p class="subtitle has-text-centered is-unselectable has-arrow-cursor">Here are some of the people or companies who support the project</p>

                    <b-table :data="patrons" ref="table" :loading="isLoading" hoverable selectable @select="openLink" :scrollable="false"
                         :default-sort-direction="defaultSortOrder" :default-sort="[sortField, sortOrder]">
                    
                        <template slot-scope="props">
                            <b-table-column class="is-unselectable" :cell-class="props.row.url ? 'has-pointer-cursor' : ''" 
                                field="version" label="Patron" :custom-sort="sortName" sortable>
                                <b-tooltip v-if="props.row.url != null" :label="props.row.urlPretty" position="is-right" type="is-link">
                                    {{ props.row.name }}

                                    <b-icon class="has-text-link is-size-7" pack="unicon" icon="uil-external-link-alt"></b-icon>
                                </b-tooltip>

                                <p v-if="props.row.url == null">{{ props.row.name }}</p>
                            </b-table-column>

                            <b-table-column class="is-unselectable" :cell-class="props.row.url ? 'has-pointer-cursor' : ''" 
                                field="value" label="Donation ammount" :custom-sort="sortValue" sortable numeric>
                                <template slot="header" slot-scope="{ column }">
                                    <b-tooltip :label="'The ordering is done via the value in U$D.'" type="is-info" size="is-small" animated dashed multilined>
                                        {{ column.label }}
                                    </b-tooltip>
                                </template>

                                {{ props.row.value.toLocaleString() }} {{ props.row.currency }} 
                            </b-table-column>

                            <!-- <b-table-column class="is-unselectable" cell-class="has-pointer-cursor" field="date" label="Date" sortable centered>
                                {{props.row.date ? new Date(props.row.date).toLocaleDateString() : "unknown"}}
                            </b-table-column> -->

                            <b-table-column class="is-unselectable" :cell-class="props.row.url ? 'has-pointer-cursor' : ''" 
                                field="platform" label="From" sortable numeric>
                                <template slot="header" slot-scope="{ column }">
                                    <b-tooltip :label="'Ammount of days being the most recent release'" type="is-info" size="is-small" animated dashed multilined>
                                        {{ column.label }}
                                    </b-tooltip>
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

                                    <p>Looks like it was not possible to load the patron list.</p>
                                </div>
                            </section>
                        </template>

                        <template slot="footer">
                            <p class="has-text-centered">
                                <span>Would you like to have your name listed here after a donation?</span>
                                <router-link to="/contact" tag="a">
                                    Contact me :)
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
    import ImageLoader from "@/components/ImageLoader.vue";

    export default {
        components: {
            ImageLoader
        },

        data() {
            return {
                isPaypalModalActive: false,
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
            sortName(a, b, isAsc){
                return ('' + a.name).localeCompare(b.name) * (isAsc ? -1 : 1);
            },
            sortValue(a, b, isAsc){
                return (a.valueInUsd > b.valueInUsd ? 1 : -1) * (isAsc ? 1 : -1);
            },
            openLink(row){
                window.open(row.url, '_blank', 'noopener');
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "@/mixins/colors.scss";

    //Background of the hero panel.
    section.hero.is-donation {
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