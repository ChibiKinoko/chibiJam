define([
    'lib/requests',
    'jquery'

], function (Requests, $) {


    'use strict';

    function start() {

        var offset = Math.floor(Math.random() * 300000);

        var $header = $('header');
        var $cover = $('#cover');
        var $artist = $('#artist');
        var $album = $('#album');
        var $like = $('#like');
        var $dislike = $('#dislike');
        var audio = new Audio();
        var track;

        Requests.getApi(
                'http://api.jamendo.com/v3.0/tracks', {
                    data: {
                        audioformat: 'mp31',
                        limit: 1,
                        offset: offset
                    }
                }).success(function (results) {
            //console.log('toto');

            track = results.results[0];

            console.log(track);

            $header.html(track.name);
            $cover.attr('src', track.image);
            $artist.html('Artist : ' + track.artist_name);
            $album.html('Album : ' + track.album_name);

            var audioOgg = track.audio.replace(/https:\/\/mp3l/, 'https://ogg').replace('mp3', 'ogg');

            audio.src = audioOgg;
            audio.play();
        });

        $like.click(function () {
            
            localStorage.setItem("like", track.id);

            offset = Math.floor(Math.random() * 300000);

            Requests.getApi(
                    'http://api.jamendo.com/v3.0/tracks', {
                        data: {
                            audioformat: 'mp31',
                            limit: 1,
                            offset: offset
                        }
                    }).success(function (results) {
                console.log('like');

                track = results.results[0];

                console.log(track);

                $header.html(track.name);
                $cover.attr('src', track.image);
                $artist.html('Artist : ' + track.artist_name);
                $album.html('Album : ' + track.album_name);

                var audioOgg = track.audio.replace(/https:\/\/mp3l/, 'https://ogg').replace('mp3', 'ogg');

                audio.src = audioOgg;
                audio.play();
            });
        });

        $dislike.click(function () {

            offset = Math.floor(Math.random() * 300000);

            Requests.getApi(
                    'http://api.jamendo.com/v3.0/tracks', {
                        data: {
                            audioformat: 'mp31',
                            limit: 1,
                            offset: offset
                        }
                    }).success(function (results) {
                console.log('dislike');

                var track = results.results[0];

                console.log(track);

                $header.html(track.name);
                $cover.attr('src', track.image);
                $artist.html('Artist : ' + track.artist_name);
                $album.html('Album : ' + track.album_name);

                var audioOgg = track.audio.replace(/https:\/\/mp3l/, 'https://ogg').replace('mp3', 'ogg');

                audio.src = audioOgg;
                audio.play();
            });
        });

    }

    return {
        start: start
    };

});



