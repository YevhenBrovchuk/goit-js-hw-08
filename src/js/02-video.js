import Player from '@vimeo/player';
var throttle = require('lodash.throttle');
const LS_Key = "videoplayer-current-time";
const iframeEl = document.querySelector('iframe');

    const player = new Player(iframeEl);

    player.on('play', function() {
        console.log('played the video!');
       
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
  
player.on("timeupdate", throttle(timVideoSetLS, 1000, { 'leading': false } ) )
    

function timVideoSetLS(data) {
    localStorage.setItem(LS_Key, JSON.stringify(data.seconds))
}

player.setCurrentTime(JSON.parse(localStorage.getItem(LS_Key))).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});


