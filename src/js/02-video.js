import Player from '@vimeo/player'

var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))


const onTimeUpdate = function(data) {
    let currentTime = data.seconds
    localStorage.setItem('videoplayer-current-time', currentTime)
};
    
player.on('timeupdate', throttle(onTimeUpdate, 1000));
