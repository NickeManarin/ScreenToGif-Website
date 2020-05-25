//import { default as config } from '../config';

export default {
    methods: {
        downloadDetails(action) {
            this.$http.get(`https://api.github.com/repos/NickeManarin/ScreenToGif/releases/latest`)
                .then(async res => {
                    var e = await res.json();

                    if (e.assets.length === 0)
                        throw new Error("Release has no assets.");

                    var port = e.assets[0];
                    var inst = e.assets[1];
                    var updatedAt = new Date(e.published_at);

                    //Displayed on the row.
                    var aux = {};
                    aux.version = e.tag_name;
                    aux.release_date = e.published_at;
                    aux.release_date_obj = updatedAt; //As Date object.
                    aux.download_count = port.download_count + (inst != undefined ? inst.download_count : 0);
                    aux.is_prerelease = e.prerelease;
                    aux.active_days = this.dateDiff(updatedAt, new Date());

                    //Displayed on the detailed view.
                    aux.author_login = e.author.login;
                    aux.author_picture = e.author.avatar_url;
                    aux.author_url = e.author.url;
                    aux.url = e.html_url;
                    aux.description = e.body;
                    //aux.date_time_since = this.since(updatedAt, new Date());

                    aux.download_count_port = port.download_count;
                    aux.download_link_port = port.browser_download_url;
                    aux.size_port = this.humanizeSize(port.size, false);
                    aux.download_count_inst = inst != undefined ? inst.download_count : 0;
                    aux.download_link_inst = inst != undefined ? inst.browser_download_url : undefined;
                    aux.size_inst = inst != undefined ? this.humanizeSize(inst.size, false) : undefined;

                    //Makes sure that the object is full created before setting to the global variable.
                    this.$store.release = aux;

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

                    var updatedAt = new Date(e.published_at);

                    //TODO: Test this later.
                    var aux = {};
                    aux.fromFoss = true;
                    aux.version = e.items[0].version;
                    aux.download_link_port = e.items.filter((e) => { return e.type.endsWith('(Zip)'); })[0].link;
                    aux.download_link_inst = e.items.filter((e) => { return e.type.endsWith('(MSI)'); })[0].link;
                    aux.release_date = e.published_at;
                    aux.release_date_obj = updatedAt; //As Date object.
                    //aux.date_time_since = this.since(updatedAt, new Date());
                    
                    //Makes sure that the object is full created before setting to the global variable.
                    this.$store.release = aux;

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
    },
    // filters:{ }
};