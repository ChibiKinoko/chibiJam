define([
    'jquery'
], function ($) {
    
    'use strict';
    
    function getApi (url, settings) {
        
        settings.data = $.extend({
                client_id: '90dd2c3d',
                format: 'jsonpretty'
            }, settings.data);
        
        return $.ajax(
            url,
            settings
            
        );
         
        //return $.get(url, '', success);
    }
    
    return {
        getApi: getApi
    };
});