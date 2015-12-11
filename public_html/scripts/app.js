define([
    'lib/requests',
    'jquery'
    
], function (Requests, $) {
    
    
    'use strict';
    
    function start () {
        
        var offset = Math.floor(Math.random() * 300000);
        
        var $header = $('header');
        var $cover = $('#cover')
        
        Requests.getApi(
            'http://api.jamendo.com/v3.0/tracks', {
                data: {
                    audioformat: 'mp31',
                    limit: 1,
                    offset: offset
                }
            }).success(function (results) {
                console.log('toto');

                var track = results.results[0];

                console.log(track);

                $header.html(track.name);
                $cover.attr('src', track.image);

                var audioOgg = track.audio.replace(/https:\/\/mp3l/, 'https://ogg').replace('mp3', 'ogg');

                var audio = new Audio(audioOgg);
                audio.play();            
        });
        
    }
    
    return {
        start: start
    };
    
});



