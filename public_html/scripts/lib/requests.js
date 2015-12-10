define([
    
], function () {
    
    function getApi (url, data, success) {
         
         return $.get(url, data, success);
    }
    
    return {
        getApi: getApi
    };
});