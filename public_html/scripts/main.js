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

require(['bootstrap'], function (Bootstrap) {
 
    Bootstrap.init();
 
});


