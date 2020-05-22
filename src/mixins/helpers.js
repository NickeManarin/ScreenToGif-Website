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
                return years == 1 ? "an year ago" : `${years} years ago`;

            //Months.
            var months = newer.getMonth() - older.getMonth();

            if (months > 0)
                return months == 1 ? "a month ago" : `${months} months ago`;

            //Days and weeks.
            var days = newer.getDate() - older.getDate();
            var weeks = (days / 7).toFixed(0);

            if (weeks > 0)
                return weeks == 1 ? "a week ago" : `${weeks} weeks ago`;

            if (days > 0) return days == 1 ? "a day ago" : `${days} days ago`;

            //Minutes.
            var minutes = newer.getMinutes() - older.getMinutes();

            if (minutes > 0)
                return minutes == 1 ? "a minute ago" : `${minutes} minutes ago`;

            return "Just now";
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
                charlist = "\s";
        
            return text.replace(new RegExp("^[" + charlist + "]+"), "");
        },
        trimRight(text, charlist) {
            if (charlist === undefined)
                charlist = "\s";
        
            return text.replace(new RegExp("[" + charlist + "]+$"), "");
        }
    },
    // filters:{ }
};