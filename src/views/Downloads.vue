<template>
    <div class="downloads">
        <section class="hero is-download">
            <div class="hero-body">
                <div class="container">
                    <h2 class="title is-size-3 has-text-centered is-unselectable">Latest Version</h2>
                    <p class="subtitle has-text-centered has-text-grey-lighter is-unselectable">
                        <span v-if="!isLoading">
                            Version {{ !isEmpty($store.release) ? $store.release.version : "..." }}
                        </span>

                        <b-skeleton v-if="isLoading" class="is-inline-block" height="20px" width="180px" animated></b-skeleton>
                    </p>

                    <div class="columns is-centered">
                        <div class="column is-4 has-text-centered">
                            <b-tooltip label="Downloads the installer version (.msi), which contains the main executable and optional addons." type="is-light" position="is-top" animated multilined>
                                <b-button type="is-info" size="is-large" icon-left="compact-disc" :loading="isLoading" tag="a" :target="downloads.length > 0 ? '_self' : '_blank'" 
                                    :href="!isEmpty($store.release) ? $store.release.download_link_inst : 'https://github.com/NickeManarin/ScreenToGif/releases/latest'" :inverted="!isLoading" :outlined="!isLoading"
                                    @click="$gtag.event('Download', {'event_category': 'Clicks', 'event_label': 'Installer'})">
                                    Installer
                                </b-button>
                            </b-tooltip>
                            
                            <p v-if="!isLoading && !isEmpty($store.release) && !$store.release.fromFoss" class="is-unselectable has-arrow-cursor">
                                <small>{{ !isEmpty($store.release) ? $store.release.size_inst : "..." }}</small>
                                •
                                <small>{{ !isEmpty($store.release) ? $store.release.download_count_inst.toLocaleString() : "..." }} downloads</small> 
                            </p>

                            <b-skeleton v-if="isLoading" height="20px" width="180px" animated></b-skeleton>
                        </div>

                        <div class="column is-4 has-text-centered">
                            <b-tooltip label="Downloads the portable version, which contains only the main executable. Addons needs to be dowloaded in Options > Extras." type="is-light" position="is-top" animated multilined>
                                <b-button type="is-info" size="is-large" icon-left="archive-alt" :loading="isLoading" tag="a" :target="downloads.length > 0 ? '_self' : '_blank'"
                                    :href="!isEmpty($store.release) ? $store.release.download_link_port : 'https://github.com/NickeManarin/ScreenToGif/releases/latest'" :inverted="!isLoading" :outlined="!isLoading"
                                    @click="$gtag.event('Download', {'event_category': 'Clicks', 'event_label': 'Portable'})">
                                    Portable
                                </b-button>
                            </b-tooltip>

                            <p v-if="!isLoading && !isEmpty($store.release) && !$store.release.fromFoss" class="is-unselectable has-arrow-cursor">
                                <small>{{ !isEmpty($store.release) ? $store.release.size_port : "..." }}</small>
                                •
                                <small>{{ !isEmpty($store.release) ? $store.release.download_count_port.toLocaleString() : "..." }} downloads</small>
                            </p>

                            <b-skeleton v-if="isLoading" height="20px" width="180px" animated></b-skeleton>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="hero is-lighter">
            <div class="hero-body">
                <div class="container">
                    <h3 class="title is-size-3 has-text-centered is-unselectable">Requirements</h3>
                    <p class="subtitle has-text-centered has-text-grey-71 is-unselectable">This app requires some software and hardware minimum configurations in order to run</p>

                    <div class="requirements columns is-centered">
                        <div class="column is-4 has-text-centered">
                            <b-button class="is-light" tag="a" href="https://www.microsoft.com/windows/" target="_blank" rel="noopener"
                                @click="$gtag.event('Open requirements links', {'event_category': 'Clicks', 'event_label': 'Windows'})">
                                <figure class="image is-64x64 is-inline-block">
                                    <ResponsiveImage :src="require('@/assets/Windows.svg')" maxWidth="64px" maxHeight="64px" alt="Windows logo." border-radius="0"/>
                                </figure>

                                <p class="subtitle is-size-6 has-text-grey"><strong>Windows 7 SP1</strong> or newer</p>
                            </b-button>
                        </div>

                        <div class="column is-4 has-text-centered">
                            <b-button class="is-light" tag="a" href="http://go.microsoft.com/fwlink/?LinkId=2085155" target="_blank" rel="noopener"
                                @click="$gtag.event('Open requirements links', {'event_category': 'Clicks', 'event_label': 'NetFramework'})">
                                <figure class="image is-64x64 is-inline-block">
                                    <ResponsiveImage :src="require('@/assets/Net.png')" maxWidth="64px" maxHeight="64px" alt="Net Framework logo." border-radius="0"/>
                                </figure>

                                <p class="subtitle is-size-6 has-text-grey"><strong>.Net Framework 4.8</strong> or newer</p>
                            </b-button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h2 class="title is-size-3 has-text-centered is-unselectable">All Releases</h2>
                    <p class="subtitle has-text-centered has-text-grey-71 is-unselectable">Expand to see the release details</p>

                    <b-table :data="$store.releaseList" ref="table" :loading="isLoading" hoverable detailed detail-key="version" 
                        selectable @select="toggle" paginated :per-page="perPage" :current-page.sync="currentPage" :scrollable="false"
                        aria-next-label="Next page" aria-previous-label="Previous page" aria-page-label="Page" aria-current-label="Current page" 
                        :default-sort-direction="defaultSortOrder" :default-sort="[sortField, sortOrder]">
                    
                        <template slot-scope="props">
                            <b-table-column class="is-unselectable" cell-class="has-pointer-cursor" field="version" label="Version"  :custom-sort="sortVersion" sortable>
                                <span class="tag" :class="versionType(props.row.is_prerelease)">
                                    {{ props.row.version }}
                                </span>
                            </b-table-column>

                            <b-table-column class="is-unselectable" cell-class="has-pointer-cursor" field="release_date" label="Release Date" sortable centered>
                                {{props.row.release_date ? new Date(props.row.release_date).toLocaleDateString() : "unknown"}}
                            </b-table-column>

                            <b-table-column class="is-unselectable" cell-class="has-pointer-cursor" field="active_days" label="Active Days" sortable numeric>
                                <template slot="header" slot-scope="{ column }">
                                    <b-tooltip :label="'Ammount of days being the most recent release'" type="is-info" size="is-small" animated dashed multilined>
                                        {{ column.label }}
                                    </b-tooltip>
                                </template>

                                {{ props.row.active_days | round(1)}}
                            </b-table-column>

                            <b-table-column class="is-unselectable" cell-class="has-pointer-cursor" field="download_count" label="Download Count" sortable numeric>
                                {{ props.row.download_count.toLocaleString() }}
                            </b-table-column>
                        </template>

                        <template slot="empty">
                            <section v-if="!isLoading" class="section">
                                <div class="content has-text-grey has-text-centered">
                                    <p>
                                        <b-icon icon="frown" size="is-large"></b-icon>
                                    </p>

                                    <p>Looks like it was not possible to load the releases.</p>
                                </div>
                            </section>

                            <!-- <section v-else class="section">
                                <div class="content has-text-grey has-text-centered">
                                    <p>
                                        <b-icon icon="sync" size="is-large"></b-icon>
                                    </p>

                                    <p>Loading...</p>
                                </div>
                            </section> -->
                        </template>

                        <template slot="detail" slot-scope="props">
                            <article class="media">
                                <figure class="media-left">
                                    <p class="image is-64x64">
                                        <!-- <img v-if="props.row.is_picture_loaded" :src="props.row.author_picture" alt="Author avatar" @load="imageLoaded(props.row)"> -->
                                        <!-- <b-skeleton v-if="!props.row.is_picture_loaded" width="64px" height="64px" animated></b-skeleton> -->

                                        <ResponsiveImage :src="props.row.author_picture + '&s=128'" maxWidth="64px" maxHeight="64px" borderRadius="4px" skeleton/>
                                    </p>
                                </figure>

                                <div class="media-content">
                                    <nav class="level is-marginless">
                                        <div class="level-left">
                                            <a class="level-item" :href="props.row.url">
                                                <span class="is-size-4 has-text-weight-semibold is-marginless">ScreenToGif {{ props.row.version }}</span>  
                                            </a>
                                            <p class="level-item is-vcentered">
                                                <small>by <a :href="props.row.author_url">@{{ props.row.author_login }}</a></small>  
                                            </p>
                                        </div>

                                        <div class="level-right">
                                            <p class="level-item">
                                                <small>{{ props.row.date_time_since }}</small>
                                            </p>
                                        </div>
                                    </nav>

                                    <div class="content has-side-padding">
                                        <VueShowdown :markdown="props.row.description" tag="span"></VueShowdown>                                                
                                    </div>

                                    <hr>

                                    <nav class="level is-marginless is-paddingless">
                                        <div class="level-left"></div>

                                        <div class="level-right">
                                            <div v-if="props.row.download_count_inst > 0" class="level-item has-text-centered">
                                                <div>
                                                    <b-button type="is-info" size="is-medium" icon-left="compact-disc"
                                                            tag="a" :href="props.row.download_link_inst">
                                                        Installer
                                                    </b-button>

                                                    <p class="is-size-7 is-unselectable has-arrow-cursor">{{ props.row.download_count_inst.toLocaleString() }} downloads</p>
                                                    <p class="is-size-7 is-unselectable has-arrow-cursor">{{ props.row.size_inst }}</p>
                                                </div>
                                            </div>

                                            <div class="level-item"></div>

                                            <div class="level-item has-text-centered">
                                                <div>
                                                    <b-button type="is-info" size="is-medium" icon-size="is-medium" icon-left="archive-alt"
                                                                tag="a" :href="props.row.download_link_port" :disabled="props.row.download_link_port === null">
                                                        Portable
                                                    </b-button>

                                                    <p class="is-size-7 is-unselectable has-arrow-cursor">{{ props.row.download_count_port.toLocaleString() }} downloads</p>
                                                    <p class="is-size-7 is-unselectable has-arrow-cursor">{{ props.row.size_port }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </article>
                        </template>

                        <template slot="footer">
                            <th class="is-hidden-mobile"></th>

                            <th v-if="!isLoading">
                                <div class="th-wrap">
                                    <p>
                                        <span class="has-text-grey">{{ $store.releaseList != null ? $store.releaseList.length : 0 }}</span>
                                        <span> versions released</span>  
                                    </p> 
                                </div>
                            </th>

                            <th v-if="!isLoading">
                                <div class="th-wrap is-centered-desktop">
                                    <p>
                                        <span>Average of </span>  
                                        <span class="has-text-grey">{{ averagePerMonth.toFixed(2).toLocaleString() }}</span>
                                        <span> per month</span>
                                    </p> 
                                </div>
                            </th>

                            <th v-if="!isLoading">
                                <div class="th-wrap is-numeric-desktop">
                                    <p>
                                        <span>Active for </span>  
                                        <span class="has-text-grey">{{ projectAge }} </span>
                                    </p> 
                                </div>
                            </th>

                            <th v-if="!isLoading">
                                <div class="th-wrap is-numeric-desktop">
                                    <p>
                                        <span>Downloaded </span> 
                                        <span class="has-text-grey">{{ $store.totalDownloads.toLocaleString() }}</span>
                                        <span> times</span>
                                    </p> 
                                </div>
                            </th>
                        </template>
                    </b-table>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import ResponsiveImage from "@/components/ResponsiveImage.vue";
    import helpers from '../mixins/helpers';

    export default {
        components: {
            ResponsiveImage
        },
        mixins: [
            helpers,
        ],

        data() {
            return {
                downloads: [],
                aux: {},
                isLoading: true,
                totalDownloads: 0,
                totalDays: 0,
                sortField: "version",
                sortOrder: "desc",
                defaultSortOrder: "desc",
                currentPage: 1,
                perPage: 10
            };
        },

        mounted() {
            this.load();
        },

        methods: {
            sortVersion(a, b, isAsc){
                return this.compareVersion(a.version, b.version) * (isAsc ? 1 : -1);
            },
            compareVersion(versionA, versionB){
                var versionsA = versionA.split(/\./g), versionsB = versionB.split(/\./g);

                while (versionsA.length || versionsB.length) {
                    var a = Number(versionsA.shift()), b = Number(versionsB.shift());
                    
                    if (a == b)
                        continue;
                    
                    return (a > b || isNaN(b)) ? 1 : -1;
                }
                
                return -1;
            },
            load() {
                if (this.$store.releaseList.length > 0 && this.$store.previousDate && new Date().getTime() - this.$store.previousDate > 300) { //300s, 5 minutes.
                    this.isLoading = false;
                    return;
                }

                this.$http.get("https://screentogif-releases.azurewebsites.net/api/v1/releases")
                    .then(async res => {
                        this.treatData(await res.json());
                    }, error =>{
                        console.log("Exception in getting releases.", error);

                        this.fallbackLoad();

                        this.$gtag.exception({'description': error, 'fatal': false});
                        throw error;
                    })
                    .catch(e => {
                        console.log("Exception in getting releases.", e);

                        this.fallbackLoad();

                        this.$gtag.exception({'description': e, 'fatal': false});
                        throw e;
                    });
            },
            fallbackLoad(){
                this.$http.get(`https://api.github.com/repos/NickeManarin/ScreenToGif/releases?per_page=70`)
                    .then(async res => {
                        this.treatDataFallback(await res.json());
                    }, error => {
                        console.log("Exception in getting releases, in fallback.", error);

                        this.showError();
                        this.downloads = [];
                        this.totalDownloads = 0;
                        this.totalDays = 0;

                        this.loadFromFosshub();

                        this.$gtag.exception({'description': error, 'fatal': true});
                        throw error;
                    })
                    .catch(e => {
                        console.log("Exception in getting releases, in fallback.", e);

                        this.showError();
                        this.downloads = [];
                        this.totalDownloads = 0;
                        this.totalDays = 0;

                        this.loadFromFosshub();

                        this.$gtag.exception({'description': e, 'fatal': true});
                        throw e;
                    });
            },
            loadFromFosshub(){
                this.$http.get(`https://www.fosshub.com/feed/5bfc6fce8c9fe8186f809d24.json`)
                    .then(async res => {
                        var e = await res.json();

                        this.aux = {};
                        this.aux.fromFoss = true;
                        this.aux.version = e.items[0].version;
                        this.aux.download_link_port = e.items.filter((e) => { return e.type.endsWith('(Zip)'); })[0].link;
                        this.aux.download_link_inst = e.items.filter((e) => { return e.type.endsWith('(MSI)'); })[0].link;
                        this.aux.release_date = e.published_at;
                        this.aux.release_date_obj = updatedAt;
                        //this.aux.date_time_since = this.since(updatedAt, new Date());

                        this.$store.release = this.aux;
                        this.$store.previousDate = new Date().getTime() / 1000; //Seconds.
                        this.isLoading = false;
                    }, error => {
                        console.log("Exception in getting latest release from Fosshub.", error);

                        this.isLoading = false;
                        throw error;
                    })
                    .catch(e => {
                        console.log("Exception in getting latest release from Fosshub.", e);

                        this.isLoading = false;
                        throw e;
                    });
            },
            treatData(data) {
                this.totalDownloads = 0;
                this.totalDays = 0;
                var previousUpdatedAt = new Date();
                this.downloads = [];

                data.releases.forEach((e, index) => {
                    var releaseDate = new Date(e.releaseDate);

                    //Displayed on the row.
                    this.aux = {};
                    this.aux.version = e.version;
                    this.aux.release_date = releaseDate;
                    this.aux.release_date_obj = releaseDate;
                    this.aux.download_count = e.downloadCount;
                    this.aux.is_prerelease = e.isPreRelease;
                    this.aux.active_days = this.dateDiff(previousUpdatedAt, releaseDate);

                    //Displayed on the detailed view.
                    this.aux.author_login = e.authorLogin;
                    this.aux.author_picture = e.authorAvatar;
                    this.aux.is_picture_loaded = false;
                    this.aux.author_url = e.authorUrl;
                    this.aux.url = e.url;
                    this.aux.description = e.description;
                    //this.aux.date_time_since = this.since(releaseDate, new Date());

                    this.aux.download_count_port = e.downloadCountPortable;
                    this.aux.download_link_port = e.portableUrl;
                    this.aux.size_port = this.humanizeSize(e.portableSize, false);
                    this.aux.download_count_inst = e.downloadCountInstaller;
                    this.aux.download_link_inst = e.installerUrl;
                    this.aux.size_inst = this.humanizeSize(e.installerSize, false);

                    this.downloads.push(this.aux);

                    this.totalDownloads += this.aux.download_count;
                    this.totalDays += this.aux.active_days;
                    previousUpdatedAt = releaseDate;
                });

                this.$store.releaseList = this.downloads;
                this.$store.release = this.downloads[0];
                this.$store.previousDate = new Date().getTime() / 1000; //Seconds.
                this.$store.totalDownloads = this.totalDownloads;
                this.$store.totalDays = this.totalDays;
                this.isLoading = false;
            },
            treatDataFallback(data) {
                this.totalDownloads = 0;
                this.totalDays = 0;
                var previousUpdatedAt = new Date();
                this.downloads = [];

                data.forEach((e, index) => {
                    if (e.assets.length === 0) 
                        return; //Equivalent to continue;

                    var port = e.assets[0];
                    var inst = e.assets[1];
                    var updatedAt = new Date(e.published_at);

                    //Displayed on the row.
                    this.aux = {};
                    this.aux.version = e.tag_name;
                    this.aux.release_date = updatedAt;
                    this.aux.release_date_obj = updatedAt;
                    this.aux.download_count = port.download_count + (inst != undefined ? inst.download_count : 0);
                    this.aux.is_prerelease = e.prerelease;
                    this.aux.active_days = this.dateDiff(previousUpdatedAt, updatedAt);

                    //Displayed on the detailed view.
                    this.aux.author_login = e.author.login;
                    this.aux.author_picture = e.author.avatar_url;
                    this.aux.is_picture_loaded = false;
                    this.aux.author_url = e.author.url;
                    this.aux.url = e.html_url;
                    this.aux.description = e.body;
                    //this.aux.date_time_since = this.since(updatedAt, new Date());

                    this.aux.download_count_port = port.download_count;
                    this.aux.download_link_port = port.browser_download_url;
                    this.aux.size_port = this.humanizeSize(port.size, false);
                    this.aux.download_count_inst = inst != undefined ? inst.download_count : 0;
                    this.aux.download_link_inst = (inst != undefined ? inst.browser_download_url : undefined)
                    this.aux.size_inst = (inst != undefined ? this.humanizeSize(inst.size, false) : undefined)

                    this.downloads.push(this.aux);

                    this.totalDownloads += this.aux.download_count;
                    this.totalDays += this.aux.active_days;
                    previousUpdatedAt = updatedAt;
                });

                this.$store.releaseList = this.downloads;
                this.$store.release = this.downloads[0];
                this.$store.previousDate = new Date().getTime() / 1000; //Seconds.
                this.$store.totalDownloads = this.totalDownloads;
                this.$store.totalDays = this.totalDays;
                this.isLoading = false;
            },
            toggle(row) {
                this.$refs.table.toggleDetails(row);
                
                this.$gtag.event('Expand version details', {'event_category': 'Clicks', 'event_label': 'Row ' + row.version});
            },
            versionType(prerelease) {
                return prerelease ? "is-warning" : "is-info";
            },
            showError(){
                this.$buefy.toast.open({
                    duration: 5000,
                    message: `It was not possible to load the releases.`,
                    position: 'is-bottom',
                    type: 'is-danger'
                })
            }
        },

        computed: {
            projectAge() {
                var end = new Date(new Date().setHours(0, 0, 0, 0));
                var start = new Date(2012, 10 - 1, 12);

                var years = end.getFullYear() - start.getFullYear();
                var months = end.getMonth() - start.getMonth();
                var days = end.getDate() - start.getDate();

                //Work out the difference in months.
                months += years * 12;

                if (days < 0)
                    months -= 1;
                
                //Now add those months to the date of birth.
                start.setMonth(start.getMonth() + months);
                
                //Calculate the difference in milliseconds.
                var diff = end - start;
                
                //Divide that by 86400 to get the number of days.
                var days = Math.round(diff / 86400 / 1000);
                
                //Now convert months back to years and months.
                years = parseInt(months / 12);
                months -= (years * 12);

                //Format age as "xx years, yy months, zz days".
                var text = "";

                if (years)
                    text = years + (years > 1 ? " years" : " year");
                
                if (months) {
                    if (text.length)
                        text = text + ", ";
                    
                    text = text + months + (months > 1 ? " months" : " month")
                }

                if (days) {
                    if (text.length)
                        text = text + ", ";
                    
                    text = text + days + (days > 1 ? " days" : " day")
                }
                               
                return text;
            },
            averagePerMonth() {
                var end = new Date(new Date().setHours(0, 0, 0, 0));
                var start = new Date(2012, 10 - 1, 12);

                var years = end.getFullYear() - start.getFullYear();
                var months = end.getMonth() - start.getMonth();
                var days = end.getDate() - start.getDate();

                //Work out the difference in months.
                months += years * 12;

                if (days < 0)
                    months -= 1; 

                return (this.downloads.length > 0 ? this.downloads.length : this.$store.releaseList.length) / months;
            }
        },

        filters: {
            round(value, length) {
                return value.toFixed(length);
            }
        },
    };
</script>

<style lang="scss" scoped>
    @import "@/mixins/colors.scss";

    //Background of the hero panel.
    .hero.is-download {
        background-image: linear-gradient($download, $download-light);
    }
    
    //Fills up the space.
    .column {
        height: 100%;
        padding: 0.75rem 0.5rem;
    }

    //Makes the buttons inside the columns more rounded and expanded. Avoid aplying to the others.
    .requirements .column .button {
        white-space: normal;
        border-radius: 5px;
        padding: 0.75rem;
        width: 100%;
        height: 100%;
    }

    .has-side-padding {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    .has-side-margin {
        margin-left: 1.5rem;
    }

    .has-pointer-cursor {
        cursor: pointer;
    }

    .has-arrow-cursor {
        cursor: default;
    }

    div .table-wrapper {
        overflow-x: hidden !important;
    }

    hr {
        margin: 1rem 0;
    }
</style>

<style lang="scss">
    //Removes the hover effect on the detail of the row.
    .table.is-hoverable tbody tr.detail:not(.is-selected):hover {
        background-color: hsl(0, 0, 98%);
    }
</style>