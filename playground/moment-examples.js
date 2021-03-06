var moment = require('moment');
moment.locale('ru');
console.log(moment().format());

var now = moment();

console.log('Current timestamp', now.unix());
var timestamp = 1497128835;

var currentMoment = moment.unix(timestamp);
console.log('Current moment', currentMoment.format('MMM D, YY @ h:mm a'));

console.log('Current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
