//import { default as config } from '../config';

export default {
    methods: {
        downloadDetails(action) {
            this.$http.get(`https://api.github.com/repos/NickeManarin/ScreenToGif/releases/latest`)
                .then(async res => {
                    var e = await res.json();

                    if (e.assets.length === 0)
                        throw new Error("Release has no assets.");

                    var updatedAt = new Date(e.published_at);

                    //Main details.
                    var aux = {};
                    aux.version = e.tag_name;
                    aux.release_date = updatedAt;
                    aux.download_count = e.assets.map(item => item.download_count).reduce((prev, next) => prev + next);
                    aux.is_prerelease = e.prerelease;
                    aux.active_days = this.dateDiff(updatedAt, new Date());

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
                            mode: this.getContentType(m.name),
                            url: m.browser_download_url,
                            id: m.id,
                            name: m.name,
                            downloadCount: m.download_count,
                            size: this.humanizeSize(m.size, false)
                        }
                    }).sort((a, b) => this.fieldSorter(a, b, ['mode', 'type', 'arch']));

                    //Makes sure that the object is full created before setting to the global variable.
                    this.$store.commit('setRelease', aux);

                    //Calls the action that should be executed after the download.
                    if (action != undefined)
                        action();
                },
                error => {
                    console.log("It was not possible to download the latest release details.", error);

                    this.$gtag.exception({'description': error, 'fatal': false});

                    //Calls the action that should be executed after the download.
                    if (action != undefined)
                        action();
                })
                .catch(e => {
                    console.log("It was not possible to download the latest release details [G].", e);

                    this.$gtag.exception({'description': e, 'fatal': false});

                    //Calls the action that should be executed after the download.
                    if (action != undefined)
                        action();
                });
        },
        downloadDetailsFallback(action){
            this.$http.get(`https://www.fosshub.com/feed/5bfc6fce8c9fe8186f809d24.json`)
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
                            mode: this.getContentType(m.title),
                            url: m.link,
                            downloadCount: 0,
                            size: ''
                        }
                    }).sort((a, b) => this.fieldSorter(a, b, ['mode', 'type', 'arch']));
                    
                    //Makes sure that the object is full created before setting to the global variable.
                    this.$store.commit('setRelease', aux);

                    if (action != undefined)
                        action();
                }, error => {
                    console.log("Exception in getting latest release from Fosshub.", error);

                    this.$gtag.exception({'description': error, 'fatal': false});

                    if (action != undefined)
                        action();
                })
                .catch(e => {
                    console.log("Exception in getting latest release from Fosshub.", e);

                    this.$gtag.exception({'description': e, 'fatal': false});

                    if (action != undefined)
                        action();
                });
        },
        displayError(){
            this.$buefy.toast.open({
                duration: 5000,
                message: `It was not possible to fetch the release details.`,
                position: "is-bottom",
                type: "is-danger"
            });
        }
    }
};