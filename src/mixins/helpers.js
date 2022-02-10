//import { default as config } from '../config';

export default {
    methods: {
        isEmpty(obj) {
            for(var i in obj) 
              return false; 
  
            return true;
        },
        dateDiff(date1, date2) {
            var datediff = date1.getTime() - date2.getTime(); //Store the getTime diff - or +
            return datediff / (24 * 60 * 60 * 1000); //Convert values to -/+ days and return value.
        },
        since(older, newer) {
            //Years.
            var years = newer.getFullYear() - older.getFullYear();

            if (years > 0)
                return years == 1 ? this.$t('navigation.download.dates.year') : this.$t('navigation.download.dates.years').replace('{0}', years);

            //Months.
            var months = newer.getMonth() - older.getMonth();

            if (months > 0)
                return months == 1 ? this.$t('navigation.download.dates.month') : this.$t('navigation.download.dates.months').replace('{0}', months);

            //Days and weeks.
            var days = newer.getDate() - older.getDate();
            var weeks = (days / 7).toFixed(0);

            if (weeks > 0)
                return weeks == 1 ? this.$t('navigation.download.dates.week') : this.$t('navigation.download.dates.weeks').replace('{0}', weeks);

            if (days > 0) return days == 1 ? this.$t('navigation.download.dates.day') : this.$t('navigation.download.dates.days').replace('{0}', days);

            //Hours.
            var hours = newer.getHours() - older.getHours();
            
            if (hours > 0)
                return hours == 1 ? this.$t('navigation.download.dates.hour') : this.$t('navigation.download.dates.hours').replace('{0}', hours);

            //Minutes.
            var minutes = newer.getMinutes() - older.getMinutes();

            if (minutes > 0)
                return minutes == 1 ? this.$t('navigation.download.dates.minute') : this.$t('navigation.download.dates.minutes').replace('{0}', minutes);

            return this.$t('navigation.download.dates.now');
        },
        humanizeSize(bytes, si) {
            var thresh = si ? 1000 : 1024;

            if (Math.abs(bytes) < thresh) return bytes + " B";

            var units = si
                ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
                : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];

            var u = -1;
            do {
                bytes /= thresh;
                ++u;
            } while (Math.abs(bytes) >= thresh && u < units.length - 1);

            return bytes.toFixed(1) + " " + units[u];
        },
        trimLeft(text, charlist) {
            if (charlist === undefined)
                charlist = "\\s";
        
            return text.replace(new RegExp("^[" + charlist + "]+"), "");
        },
        trimRight(text, charlist) {
            if (charlist === undefined)
                charlist = "\\s";
        
            return text.replace(new RegExp("[" + charlist + "]+$"), "");
        },
        toLocaleFixed(value, decimals, locale){
            return value.toLocaleString(locale, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
        },
        getArchitecture(name) {
            if (name?.toLowerCase().includes('x64'))
                return 'x64';
            
            if (name?.toLowerCase().includes('arm64'))
                return 'arm64';
            
            if (name?.toLowerCase().includes('x86'))
                return 'x86';

            return 'anyCpu';
        },
        getBinaryType(name) {
            if (name?.toLowerCase().includes('setup'))
                return 'installer';
            
            if (name?.toLowerCase().includes('package'))
                return 'package';

            return 'portable';
        },
        getContentType(name) {
            if (name?.toLowerCase().includes('light'))
                return 'light';
            
            return 'full';
        },
        daysInMonth(date) {
            return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        },
        fieldSorter(a, b, fields) {
            var dir = [], i, l = fields.length;
            
            fields = fields.map(function(o, i) {
              if (o[0] === "-") {
                dir[i] = -1;
                o = o.substring(1);
              } else {
                dir[i] = 1;
              }

              return o;
            });

            for (i = 0; i < l; i++) {
                var o = fields[i];

                if (a[o] > b[o]) return dir[i];
                if (a[o] < b[o]) return -(dir[i]);
              }
              return 0;
        }
    },
    // filters:{ }
};