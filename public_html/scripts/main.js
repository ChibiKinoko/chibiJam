/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

require.config({
    paths: {
        'jquery': 'vendor/jquery-1.11.3.min'
    }
});

require(['jquery', 'bootstrap'], function (toto, bootstrap) {
 
    // do something with the loaded modules
    //console.log('jQuery version:', $.fn.jquery); // 1.11.3
    
    toto('#wrapper').click(function () {
        alert('toto');
    });
    
    //bootstrap.init();
 
});


