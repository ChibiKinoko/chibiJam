define([
    'lib/requests'
    
], function (requests) {
    
    function start () {
        
        var offset = 1;
        
        requests.getApi('http://api.jamendo.com/v3.0/tracks?client_id=90dd2c3d&format=jsonpretty&limit=1&offset=3', 'data', function (results) {
            console.log('toto');
            
            var track = results.results[0];
            
            console.log(track);
            
            $('#cover').attr('src', track.image);
            
            $('header').html(track.name);
            
            $('audio').attr('src', track.audio);
            
            $('#like').click();
            
        });
    }
    
    return {
        start: start
    };
    
});



