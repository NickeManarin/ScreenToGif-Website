<template>
    <div class="downloads">
        <vue-headful :title="$t('downloads.meta-title')" :description="$t('downloads.meta-description')"/>

        <section class="hero is-download">
            <div class="hero-body">
                <div class="container">
                    <h2 class="title is-size-3 has-text-centered is-unselectable">{{ $t('downloads.latest') }}</h2>
                    <p class="subtitle has-text-centered has-text-grey-lighter is-unselectable">
                        <span v-if="!isLoading">
                            {{ !isEmpty($store.state.release) ? $t('home.version').replace('{0}', $store.state.release.version) : '...' }}
                        </span>

                        <b-skeleton v-if="isLoading" height="20px" width="180px" animated></b-skeleton>
                    </p>

                    <b-dropdown class="columns is-centered is-vcentered is-mobile" v-model="$store.state.architecture" aria-role="list" 
                        v-if="$store.state.release.version !== '' && $store.state.release.assets.length > 2"
                        @change="$gtag.event('Language', {'event_category': 'Clicks', 'event_label': 'Switch architecture: ' + this.$store.state.architecture})">
                        <button class="button is-download" type="button" slot="trigger">
                            <template>
                                <b-icon class="left-icon" icon="processor"/>
                                <span class="has">{{$store.state.architecture}}</span>                                           
                            </template>

                            <b-icon pack="unicon" icon="uil-angle-down"/>
                        </button>

                        <b-dropdown-item value="arm64" aria-role="listitem">
                            <h3 class="is-unselectable">arm64 • Arm 64 bits</h3>
                        </b-dropdown-item>

                        <b-dropdown-item value="x64" aria-role="listitem">
                            <h3 class="is-unselectable">x64 • 64 bits</h3>
                        </b-dropdown-item>

                        <b-dropdown-item value="x86" aria-role="listitem">
                            <h3 class="is-unselectable">x86 • 32 bits</h3>
                        </b-dropdown-item>
                    </b-dropdown>

                    <div class="columns is-centered is-vcentered is-multiline is-mobile">
                        <div class="column is-narrow has-text-centered">
                            <b-tooltip :label="$t('home.installer-info')" type="is-light" position="is-top" animated multilined>
                                <b-button ref="installerButton" type="is-info" size="is-large" icon-left="compact-disc" 
                                    :style="{ 'min-width': getMinWidthPortable() }" :loading="isLoading" tag="a" :target="$store.state.release.length > 0 ? '_self' : '_blank'" 
                                    :href="$store.getters.getUrlInstaller" :inverted="!isLoading" :outlined="!isLoading" 
                                    @click="$gtag.event('Download', {'event_category': 'Clicks', 'event_label': 'Installer'})">
                                    {{ $t('home.installer') }}
                                </b-button>
                            </b-tooltip>
                            
                            <p v-if="!isLoading && !isEmpty($store.state.release) && !$store.state.release.fromFoss" class="is-unselectable has-arrow-cursor">
                                <small>{{ $store.getters.getSizeInstaller }}</small>
                                •
                                <small>{{ $t('home.downloads').replace('{0}', $store.getters.getDownloadCountInstaller) }}</small> 
                            </p>

                            <b-skeleton v-if="isLoading" height="20px" width="180px" animated></b-skeleton>
                        </div>

                        <div class="column is-12-mobile is-1-tablet has-text-centered">
                            <p class="has-text-light is-unselectable">{{ $t('home.or') }}</p>
                        </div>

                        <div class="column is-narrow has-text-centered">
                            <b-tooltip :label="$t('home.portable-info')" type="is-light" position="is-top" animated multilined>
                                <b-button ref="portableButton" type="is-info" size="is-large" icon-left="archive-alt" 
                                    :style="{ 'min-width': getMinWidthInstaller() }" :loading="isLoading" tag="a" :target="$store.state.release.length > 0 ? '_self' : '_blank'" 
                                    :href="$store.getters.getUrlPortable" :inverted="!isLoading" :outlined="!isLoading" 
                                    @click="$gtag.event('Download', {'event_category': 'Clicks', 'event_label': 'Portable'})">
                                     {{ $t('home.portable') }}
                                </b-button>
                            </b-tooltip>

                            <p v-if="!isLoading && !isEmpty($store.state.release) && !$store.state.release.fromFoss" class="is-unselectable has-arrow-cursor">
                                <small>{{ $store.getters.getSizePortable }}</small>
                                •
                                <small>{{ $t('home.downloads').replace('{0}', $store.getters.getDownloadCountPortable) }}</small>
                            </p>

                            <b-skeleton v-if="isLoading" height="20px" width="180px" animated></b-skeleton>
                        </div>
                    </div>

                    <b-collapse v-if="!isLoading" class="has-text-light has-text-centered" 
                                :open.sync="isExpanderOpen" position="is-top" animation="slide" aria-id="expander"
                                @open="$gtag.event('Latest release details', {'event_category': 'Clicks', 'event_label': 'Open'})"
                                @close="$gtag.event('Latest release details', {'event_category': 'Clicks', 'event_label': 'Close'})">
                                
                        <a slot="trigger" slot-scope="props" aria-controls="expander" class="has-text-light is-unselectable">
                            <b-icon pack="unicon" :icon="!props.open ? 'uil-angle-down' : 'uil-angle-up'"></b-icon>

                            {{ !props.open ? $t('downloads.show-release-notes') : $t('downloads.hide-release-notes') }}
                        </a>

                        <div class="columns is-centered has-top-margin">
                            <div class="column is-10-tablet is-9-desktop is-8-widescreen is-7-fullhd">
                                <p class="content has-text-light has-text-justified is-unselectable">
                                    <VueShowdown :markdown="!isEmpty($store.state.release) ? $store.state.release.description : ''" tag="span"></VueShowdown> 
                                </p>
                            </div>
                        </div>
                    </b-collapse>

                    <p class="has-text-centered">
                        <b-skeleton v-if="isLoading" height="20px" width="180px" animated></b-skeleton>
                    </p>
                </div>
            </div>
        </section>

        <section class="hero is-lighter">
            <div class="hero-body">
                <div class="container">
                    <h3 class="title is-size-3 has-text-centered is-unselectable">{{ $t('downloads.requirements.title') }}</h3>
                    <p class="subtitle has-text-centered has-text-grey-71 is-unselectable">{{ $t('downloads.requirements.subtitle') }}</p>

                    <div class="requirements columns is-centered">
                        <div class="column is-4 has-text-centered">
                            <b-button class="is-light" tag="a" href="https://www.microsoft.com/windows/" target="_blank" rel="noopener"
                                @click="$gtag.event('Requirements links', {'event_category': 'Clicks', 'event_label': 'Windows'})">
                                <figure class="image is-64x64 is-inline-block">
                                    <ResponsiveImage :src="require('@/assets/media/downloads/Windows.svg')" maxWidth="64px" maxHeight="64px" alt="Windows logo." border-radius="0"/>
                                </figure>

                                <p class="subtitle is-size-6 has-text-grey" v-html="$t('downloads.requirements.windows')"></p>
                            </b-button>
                        </div>

                        <div class="column is-4 has-text-centered" v-if="$store.state.release.version === '' || $store.state.release.assets.length < 3">
                            <b-button class="is-light" tag="a" href="http://go.microsoft.com/fwlink/?LinkId=2085155" target="_blank" rel="noopener"
                                @click="$gtag.event('Requirements links', {'event_category': 'Clicks', 'event_label': 'NetFramework'})">
                                <figure class="image is-64x64 is-inline-block">
                                    <ResponsiveImage :src="require('@/assets/media/downloads/Net.png')" maxWidth="64px" maxHeight="64px" alt="Net Framework logo." border-radius="0"/>
                                </figure>

                                <p class="subtitle is-size-6 has-text-grey" v-html="$t('downloads.requirements.framework').replace('.NET 6', '.NET Framework 4.8')"></p>
                            </b-button>
                        </div>

                        <div class="column is-4 has-text-centered" v-if="$store.state.release.version !== '' && $store.state.release.assets.length > 2">
                            <b-button class="is-light" tag="a" href="https://dotnet.microsoft.com/en-us/download" target="_blank" rel="noopener"
                                @click="$gtag.event('Requirements links', {'event_category': 'Clicks', 'event_label': 'NetFramework'})">
                                <figure class="image is-64x64 is-inline-block">
                                    <ResponsiveImage :src="require('@/assets/media/downloads/Net.png')" maxWidth="64px" maxHeight="64px" alt=".NET logo." border-radius="0"/>
                                </figure>

                                <p class="subtitle is-size-6 has-text-grey" v-html="$t('downloads.requirements.framework')"></p>
                            </b-button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="hero" v-if="displayReleases">
            <div class="hero-body">
                <div class="container">
                    <h2 class="title is-size-3 has-text-centered is-unselectable">{{ $t('downloads.releases.title') }}</h2>
                    <p class="subtitle has-text-centered has-text-grey-71 is-unselectable">{{ $t('downloads.releases.subtitle') }}</p>

                    <b-message type="is-info" v-if="isFallback">
                        {{ $t('downloads.releases.loading-issue') }}
                    </b-message>

                    <b-table ref="table" :data="$store.state.releases" :loading="isLoading" hoverable detailed detail-key="version" 
                        selectable @select="toggle" paginated backend-pagination :total="$store.state.releasesCount" :per-page="pageSize" @page-change="onPageChange" :scrollable="false"
                        aria-next-label="Next page" aria-previous-label="Previous page" aria-page-label="Page" aria-current-label="Current page" 
                        backend-sorting @sort="onSort" :default-sort-direction="defaultSortOrder" :default-sort="[sortField, sortOrder]"
                        @details-open="(row, index) => detailsOpen(row)" @details-close="(row, index) => detailsClose(row)">
                    
                        <b-table-column class="is-unselectable" cell-class="has-pointer-cursor" field="version" :label="$t('downloads.releases.table.version')" sortable v-slot="props">
                            <span class="tag" :class="versionType(props.row.is_prerelease)">
                                {{ props.row.version }}
                            </span>
                        </b-table-column>

                        <b-table-column class="is-unselectable" cell-class="has-pointer-cursor" field="release_date" :label="$t('downloads.releases.table.date')" sortable centered v-slot="props">
                            {{props.row.release_date ? new Date(props.row.release_date).toLocaleDateString($i18n.locale) : "unknown"}}
                        </b-table-column>

                        <b-table-column class="is-unselectable" cell-class="has-pointer-cursor" field="active_days" :label="$t('downloads.releases.table.days')" sortable numeric>
                            <template v-slot:header="{ column }">
                                <b-tooltip :label="$t('downloads.releases.table.days-info')" type="is-info" size="is-small" animated dashed multilined>
                                    {{ column.label }}
                                </b-tooltip>
                            </template>

                            <template v-slot="props">
                                {{ toLocaleFixed(props.row.active_days, 1, $i18n.locale) }}
                            </template>
                        </b-table-column>

                        <b-table-column class="is-unselectable" cell-class="has-pointer-cursor" field="download_count" :label="$t('downloads.releases.table.count')" sortable numeric v-slot="props">
                            {{ props.row.download_count.toLocaleString($i18n.locale) }}
                        </b-table-column>

                        <template slot="empty">
                            <section v-if="!isLoading" class="section">
                                <div class="content has-text-grey has-text-centered">
                                    <p>
                                        <b-icon icon="frown" size="is-large"></b-icon>
                                    </p>

                                    <p>{{ $t('downloads.releases.table.not-possible') }}</p>
                                </div>
                            </section>
                        </template>

                        <template slot="detail" slot-scope="props">
                            <article class="media">
                                <figure class="media-left">
                                    <p class="image is-64x64">
                                        <ResponsiveImage :src="props.row.author_picture + '&s=128'" width="64px" height="64px" maxWidth="64px" maxHeight="64px" borderRadius="4px" skeleton/>
                                    </p>
                                </figure>

                                <div class="media-content">
                                    <nav class="level is-marginless">
                                        <div class="level-left">
                                            <a class="level-item" :href="props.row.url" target="_blank" rel="noopener"
                                                @click="$gtag.event('Release links', {'event_category': 'Clicks', 'event_label': 'Release ' + props.row.version })">
                                                <span class="is-size-4 has-text-weight-semibold is-marginless">ScreenToGif {{ props.row.version }}</span>  
                                            </a>

                                            <p class="level-item is-vcentered">
                                                <small v-html="$t('navigation.download.by').replace('{0}', '<a href={0} target=_blank rel=noopener>@{1}</a>')
                                                    .replace('{0}', props.row.author_url).replace('{1}', props.row.author_login)"
                                                    @click="$gtag.event('Release links', {event_category: 'Clicks', event_label: 'Author ' + props.row.version })"/>
                                            </p>
                                        </div>

                                        <div class="level-right">
                                            <p class="level-item">
                                                <small>{{ since(props.row.release_date_obj, new Date()) }}</small>
                                            </p>
                                        </div>
                                    </nav>

                                    <div class="px-3">
                                        <div class="content">
                                            <VueShowdown :markdown="props.row.description" tag="span"/>
                                        </div>

                                        <hr>

                                        <h3 class="title is-size-5 is-unselectable mb-2">Files</h3>

                                        <div v-for="asset in props.row.assets" :key="asset.url" class="ml-2">
                                            <nav class="level is-marginless p-1">
                                                <div class="level-left">
                                                    <div class="level-item">
                                                        <a :href="asset.url" rel="nofollow" :class="{ 'is-italic is-disabled is-unselectable has-text-grey': asset.url == null }">
                                                            <i class="unicon is-large" :class="[ asset.type === 'portable' ? 'uil-archive-alt' : 'uil-compact-disc' ]"></i>
                                                            <span class="px-1 has-text-weight-medium">{{ asset.type === 'portable' ? $t('home.portable') : $t('home.installer') }}</span>
                                                        </a>

                                                        <b-tag class="is-light ml-1" :class="[ asset.arch === 'arm64' ? 'is-success' : asset.arch === 'x64' ? 'is-link' : 'is-warning' ]" v-if="asset.arch !== 'anyCpu'" v-text="asset.arch"/>
                                                    </div>
                                                </div>

                                                <div class="level-right mt-0">
                                                    <div class="level-item has-text-centered">
                                                        <p class="has-text-grey" v-text="asset.size"/>
                                                        <p class="has-text-weight-bold px-1">•</p>
                                                        <p class="has-text-grey" v-text="$t('home.downloads').replace('{0}', asset.downloadCount.toLocaleString($i18n.locale))"/>
                                                    </div>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </template>

                        <template slot="footer">
                            <th class="is-hidden-mobile"></th>

                            <th v-if="!isLoading">
                                <div class="th-wrap">
                                    <p v-html="$t('downloads.releases.table.versions-total').replace('{0}', '<span class=has-text-grey>{1}</span>').replace('{1}', $store.state.releasesCount != null ? $store.state.releasesCount : 0)">
                                    </p> 
                                </div>
                            </th>

                            <th v-if="!isLoading">
                                <div class="th-wrap is-centered-desktop">
                                    <p v-html="$t('downloads.releases.table.average-month').replace('{0}', '<span class=has-text-grey>{1}</span>').replace('{1}', toLocaleFixed(averagePerMonth, 2, $i18n.locale))">
                                    </p>
                                </div>
                            </th>

                            <th v-if="!isLoading">
                                <div class="th-wrap is-numeric-desktop">
                                    <p v-html="$t('downloads.releases.table.active-total').replace('{0}', '<span class=has-text-grey>{1}</span>').replace('{1}', projectAge)">
                                    </p>
                                </div>
                            </th>

                            <th v-if="!isLoading">
                                <div class="th-wrap is-numeric-desktop">
                                    <p v-html="$t('downloads.releases.table.downloads-total').replace('{0}', '<span class=has-text-grey>{1}</span>').replace('{1}', toLocaleFixed($store.state.totalDownloads, 0, $i18n.locale))">
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
    import helpers from '@/mixins/helpers';

    export default {
        components: {
            ResponsiveImage
        },
        mixins: [
            helpers
        ],

        data() {
            return {
                displayReleases:  true,
                isLoading: true,
                isExpanderOpen: false,
                isFallback: false,
                sortField: "version",
                sortOrder: "desc",
                defaultSortOrder: "desc",
                page: 1,
                pageSize: 10
            };
        },

        mounted() {
            this.load();
        },

        methods: {
            getMinWidthInstaller() {
                var size = this.$refs.portableButton !== undefined ? (this.$refs.portableButton.$el.clientWidth + 2) + "px" : 0;

                this.$nextTick().then(() => {
                    this.$refs.installerButton.$el.style.minWidth = 0 + "px";

                    this.$nextTick().then(() => {
                        this.$refs.installerButton.$el.style.minWidth = (this.$refs.portableButton.$el.clientWidth + 2) + "px";
                    });
                });

                return size;
            },
            getMinWidthPortable() {
                var size = this.$refs.installerButton !== undefined ? (this.$refs.installerButton.$el.clientWidth + 2) + "px" : 0;

                this.$nextTick().then(() => {
                    this.$refs.portableButton.$el.style.minWidth = 0 + "px";

                    this.$nextTick().then(() => {
                        this.$refs.portableButton.$el.style.minWidth = (this.$refs.installerButton.$el.clientWidth + 2) + "px";
                    });
                });

                return size;
            },

            onPageChange(page) {
                this.page = page
                this.load()
            },
            onSort(field, order) {
                this.sortField = field
                this.sortOrder = order
                this.load()
            },

            load() {
                const params = [
                    `pageSize=${this.pageSize}`,
                    `page=${this.page}`,
                    `sortColumn=${this.sortField}`,
                    `sortDirection=${this.sortOrder}`
                ].join('&')

                this.isLoading = true;
                this.$http.get(`https://screentogif-releases.azurewebsites.net/api/v1/releases?${params}`)
                    .then(async res => {
                        this.parse(await res.json());
                    }, error =>{
                        console.log('error', 'Exception in getting releases.', error);

                        this.loadFromGithub();

                        this.$gtag.exception({'description': error, 'fatal': false});
                    });
            },
            loadFromGithub(){
                this.$http.get('https://api.github.com/repos/NickeManarin/ScreenToGif/releases?per_page=10')
                    .then(async res => {
                        this.parseFromGithub(await res.json());
                    }, error => {
                        console.log('error', 'Exception in getting releases, in fallback.', error);
                        
                        this.showError();
                        this.loadFromFosshub();

                        this.$gtag.exception({'description': error, 'fatal': true});
                    });
            },
            loadFromFosshub(){
                this.displayReleases = false;

                this.$http.get('https://www.fosshub.com/feed/5bfc6fce8c9fe8186f809d24.json')
                    .then(async res => {
                        var e = await res.json();

                        var aux = {};
                        aux.fromFoss = true;
                        aux.version = e.items[0].version;
                        aux.release_date = new Date(e.published_at);

                        aux.assets = e.items.map(m => {
                            return {
                                arch: this.getArchitecture(m.title),
                                type: this.getBinaryType(m.title),
                                url: m.link,
                                downloadCount: 0,
                                size: ''
                            }
                        });
                        
                        this.$store.commit('setRelease', aux);
                        this.isLoading = false;
                    }, error => {
                        console.log('error', 'Exception in getting latest release from Fosshub.', error);

                        this.isLoading = false;
                        throw error;
                    });
            },

            parse(data) {
                this.isFallback = false;
                this.displayReleases = true;

                let aux = data.releases.map(e => {
                    var releaseDate = new Date(e.releaseDate);

                    //Displayed on the row.
                    var aux = {};
                    aux.version = e.version;
                    aux.release_date = releaseDate;
                    aux.release_date_obj = releaseDate;
                    aux.download_count = e.downloadCount;
                    aux.is_prerelease = e.isPreRelease;
                    aux.active_days = e.activeDays;

                    //Displayed on the detailed view.
                    aux.author_login = e.authorLogin;
                    aux.author_picture = e.authorAvatar;
                    aux.is_picture_loaded = false;
                    aux.author_url = e.authorUrl;
                    aux.url = e.url;
                    aux.description = e.description;

                    aux.assets = e.assets.map(m => {
                        return {
                            arch: this.getArchitecture(m.name),
                            type: this.getBinaryType(m.name),
                            url: m.url,
                            id: m.id,
                            name: m.name,
                            downloadCount: m.downloadCount,
                            size: this.humanizeSize(m.size, false)
                        }
                    }).sort((a, b) => this.fieldSorter(a, b, ['type', 'arch']));
                    
                    return aux;
                });

                this.$store.commit('setReleases', aux);
                this.$store.commit('setDownloadCount', data.downloadCount);
                this.$store.commit('setDaysCount', data.activeDays);
                this.$store.commit('setReleaseCount', data.releasesCount);

                this.isLoading = false;
            },
            parseFromGithub(data) {
                this.displayReleases = true;
                let totalDownloads = 0;
                let totalDays = 0;
                let previousUpdatedAt = new Date();

                let aux = data.map((e) => {
                    if (e.assets.length === 0) 
                        return;

                    var updatedAt = new Date(e.published_at);

                    //Displayed on the row.
                    var aux = {};
                    aux.version = e.tag_name;
                    aux.release_date = updatedAt;
                    aux.release_date_obj = updatedAt;
                    aux.download_count = e.assets.map(item => item.download_count).reduce((prev, next) => prev + next);
                    aux.is_prerelease = e.prerelease;
                    aux.active_days = this.dateDiff(previousUpdatedAt, updatedAt);

                    //Displayed on the detailed view.
                    aux.author_login = e.author.login;
                    aux.author_picture = e.author.avatar_url;
                    aux.is_picture_loaded = false;
                    aux.author_url = e.author.html_url;
                    aux.url = e.html_url;
                    aux.description = e.body;

                    aux.assets = e.assets.map(m => {
                        return {
                            arch: this.getArchitecture(m.name),
                            type: this.getBinaryType(m.name),
                            url: m.browser_download_url,
                            id: m.id,
                            name: m.name,
                            downloadCount: m.download_count,
                            size: this.humanizeSize(m.size, false)
                        }
                    }).sort((a, b) => this.fieldSorter(a, b, ['type', 'arch']));

                    totalDownloads += aux.download_count;
                    totalDays += aux.active_days;
                    previousUpdatedAt = updatedAt;

                    return aux;
                });

                this.$store.commit('setRelease', aux[0]);
                this.$store.commit('setReleases', aux);
                this.$store.commit('setDownloadCount', totalDownloads);
                this.$store.commit('setDaysCount', totalDays);
                this.$store.commit('setReleaseCount', aux.length);
                this.$store.commit('setOldestDate', aux.map(m => m.release_date).reduce((a, b) => a < b ? a : b));

                this.isFallback = true;
                this.isLoading = false;
            },

            toggle(row) {
                this.$refs.table.toggleDetails(row);
            },
            detailsOpen(row) {
                this.$gtag.event('Version details', {'event_category': 'Clicks', 'event_label': 'Expand row ' + row.version});
            },
            detailsClose(row) {
                this.$gtag.event('Version details', {'event_category': 'Clicks', 'event_label': 'Collapse row ' + row.version});
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
                var start = this.isFallback ? this.$store.state.oldestDate : new Date(2013, 10 - 1, 12);

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
                var numberOfDays = Math.round(diff / 86400 / 1000);
                
                //Now convert months back to years and months.
                years = parseInt(months / 12);
                months -= (years * 12);

                //Format age as "xx years, yy months, zz days".
                var text = "";

                if (years)
                    text = this.$t('downloads.releases.dates.year' + (years == 1 ? '' : 's')).replace('{0}', years);
                
                if (months) {
                    if (text.length)
                        text = text + ", ";
                    
                    text += this.$t('downloads.releases.dates.month' + (months == 1 ? '' : 's')).replace('{0}', months);
                }

                if (numberOfDays) {
                    if (text.length)
                        text = text + ", ";
                    
                    text += this.$t('downloads.releases.dates.day' + (numberOfDays == 1 ? '' : 's')).replace('{0}', numberOfDays);
                }
                               
                return text;
            },
            averagePerMonth() {
                var end = new Date(new Date().setHours(0, 0, 0, 0));
                var start = this.isFallback ? this.$store.state.oldestDate : new Date(2013, 10 - 1, 12);

                var years = end.getFullYear() - start.getFullYear();
                var months = end.getMonth() - start.getMonth();
                var days = end.getDate() - start.getDate();

                //Work out the difference in months.
                months += years * 12;
                months += days / this.daysInMonth(end);

                //if (days < 0)
                //    months -= 1; 

                return this.$store.state.releasesCount / months;
            }
        }
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

    .has-side-margin {
        margin-left: 1.5rem;
    }

    div .has-top-margin {
        margin-top: 1rem;
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

    .is-disabled {
        cursor: not-allowed;
        text-decoration: line-through;
    }
</style>

<style lang="scss">
    //Removes the hover effect on the detail of the row.
    .table.is-hoverable tbody tr.detail:not(.is-selected):hover {
        background-color: hsl(0, 0, 98%);
    }

    @media screen and (max-width: 1023px)
    {
        .table-wrapper {
            overflow-x: hidden;
        }
    }

    /* Release notes text (not the section titles) */
    .content span p {
        margin-left: 0.5rem !important;
    }

    .dropdown .dropdown-menu {
        left: unset;
        min-width: 10rem;
    }
</style>