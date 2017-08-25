/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function (Mozilla) {
    'use strict';

    var $slideShow = $('.carousel');

    $slideShow.cycle({
        fx: 'scrollHorz',
        log: false,
        slides: '> .carousel-item',
        pager: '> .carousel-pager',
        pauseOnHover: true,
        speed: 500,
        timeout: 6000
    });

    var $button = $('.path-selector ul > li > button');

    $button.on('mouseenter', function(e) {
        $slideShow.cycle('pause'); //pause auto-running slideshow
        $slideShow.cycle('goto', e.target.dataset.index); //go to specific path
    });

    $button.on('mouseleave', function() {
        $slideShow.cycle('resume'); //resume auto-running slideshow
    });

})(window.Mozilla);
