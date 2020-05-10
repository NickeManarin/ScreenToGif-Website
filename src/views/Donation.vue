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
                        <b-button class="column is-half-tablet is-one-quarter-desktop is-light " tag="a" 
                            href="https://github.com/NickeManarin/ScreenToGif/issues" target="_blank" rel="noopener">
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

                        <b-button class="column is-half-tablet is-one-quarter-desktop is-light " tag="a" 
                            href="" target="_blank" rel="noopener">
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

                        <b-button class="column is-half-tablet is-one-quarter-desktop is-light " tag="a" 
                            href="https://github.com/NickeManarin/ScreenToGif/wiki/Localization" target="_blank" rel="noopener">
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

                        <b-button class="column is-half-tablet is-one-quarter-desktop is-light " @click="scrollToDonation()">
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
        </section>

        <section ref="donationMethods" class="hero">
            <div class="hero-body">
                <div class="container">
                    <h2 class="title is-size-3 has-text-centered is-unselectable has-arrow-cursor">How can I donate?</h2>
                    <p class="subtitle has-text-centered is-unselectable has-arrow-cursor">Here are some ways to donate</p>

                    <div class="columns is-centered is-multiline is-mobile">
                        <div class="column is-half-tablet is-one-quarter-desktop">
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

                        <div class="column is-half-tablet is-one-quarter-desktop">
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

                                <b-modal :active.sync="isPaypalModalActive" trap-focus aria-role="dialog" aria-modal :width="640" scroll="keep">
                                    <div class="box">
                                        <b-select v-model="paypalCurrency" placeholder="Select your currency" icon="dollar-alt">
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
                                    </div>
                                </b-modal>
                            </b-button>
                        </div>

                        <div class="column">
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                <input type="hidden" name="cmd" value="_xclick">
                                <input type="hidden" name="business" value="nicke@outlook.com.br">
                                <input type="hidden" name="lc" value="US">
                                <input type="hidden" name="item_name" value="ScreenToGif Donation">
                                <input type="hidden" name="item_number" value="ScreenToGif">
                                <input type="hidden" name="button_subtype" value="services">
                                <!--<input type="hidden" name="currency_code" value="USD">-->

                                <b-field>
                                    <b-select name="currency_code" class="is-medium" placeholder="Select your currency" icon="dollar-alt">
                                        <option value="USD" selected="">US Dollar &nbsp; $</option>
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
                                        <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHosted">
                                        <b-button id="s_paypal2" type="submit" name="submit" alt="PayPal - The safer, easier way to pay online!" class="button is-primary">Donate</b-button>                                        
                                    </p>
                                </b-field>
                            </form>
                        </div>

                        <b-button class="column is-half-mobile is-light" tag="a" href="https://www.jetbrains.com/resharper/?from=ScreenToGif" target="_blank" style="height: 100%">
                            <figure class="image">
                                <imageLoader :src="require('@/assets/Jetbrains.svg')" width="44px" height="44px"></imageLoader>
                            </figure>

                            <p>Jetbrains</p>
                        </b-button>

                        <b-button class="column is-half-tablet is-one-quarter-desktop is-light " tag="a" 
                            href="https://github.com/NickeManarin/ScreenToGif/issues" target="_blank" rel="noopener">
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
                </div>
            </div>
        </section>

        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h2 class="title is-size-3 has-text-centered is-unselectable has-arrow-cursor">Patron list</h2>
                    <p class="subtitle has-text-centered is-unselectable has-arrow-cursor">Here are some of the people or companies who support the project</p>

                    <b-table :data="patrons" ref="table" :loading="isLoading" hoverable selectable @select="openLink"
                        paginated :per-page="perPage" :current-page.sync="currentPage" :scrollable="false"
                        aria-next-label="Next page" aria-previous-label="Previous page" aria-page-label="Page" aria-current-label="Current page" 
                        :default-sort-direction="defaultSortOrder" :default-sort="[sortField, sortOrder]">
                    
                        <template slot-scope="props">
                            <b-table-column class="is-unselectable" cell-class="has-pointer-cursor" field="version" label="Patron" :custom-sort="sortName" sortable>
                                {{ props.row.name }}
                            </b-table-column>

                            <b-table-column class="is-unselectable" cell-class="has-pointer-cursor" field="value" label="Donation ammount" :custom-sort="sortValue" sortable numeric>
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

                            <b-table-column class="is-unselectable" cell-class="has-pointer-cursor" field="platform" label="From" sortable numeric>
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
                        value: 1000,
                        valueInUsd: 1000,
                        currency: "U$D",
                        platform: "Paypal"
                    },
                    {
                        name: "Nanch",
                        website: null,
                        value: 255,
                        valueInUsd: 255,
                        currency: "U$D",
                        platform: "Patreon"
                    },
                    {
                        name: "Eirik",
                        url: "https://www.linkedin.com/in/eirikbirkeland",
                        value: 150,
                        valueInUsd: 150,
                        currency: "U$D",
                        platform: "Paypal"
                    },
                    {
                        name: "Loam",
                        url: "https://loam.net?from=ScreenToGif",
                        value: 100,
                        valueInUsd: 100,
                        currency: "U$D",
                        platform: "Paypal"
                    },
                    {
                        name: "WHSR",
                        url: "https://www.webhostingsecretrevealed.net?from=ScreenToGif",
                        value: 50,
                        valueInUsd: 50,
                        currency: "U$D",
                        platform: "Paypal"
                    },
                    {
                        name: "Elmah",
                        url: "http://elmah.io?from=ScreenToGif",
                        value: 50,
                        valueInUsd: 50,
                        currency: "U$D",
                        platform: "Paypal"
                    },
                    {
                        name: "Nanch",
                        url: null,
                        value: 50,
                        valueInUsd: 50,
                        currency: "U$D",
                        platform: "Patreon"
                    },
                ],
                isLoading: true,
                sortField: "valueInUsd",
                sortOrder: "desc",
                defaultSortOrder: "desc",
                currentPage: 1,
                perPage: 10
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
    }

    .button, .media, .media-content {
        height: 100%;
    }

    //Makes the buttons inside the columns more rounded.
    .column .button {
        white-space: normal;
        border-radius: 8px;
        padding: 0.75rem;
    }

    //Reduces the margin of the icon of media element.
    figure.media-left{
        margin-right: 0.3rem;
    }

    //Removes the negative margin of the button.
    article span.icon {
        margin-left: 0px !important;
        margin-right: 0px !important;
    }
</style>