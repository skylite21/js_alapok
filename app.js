// minden ami ebben a blokkban van az strict mode-ban lesz
// a strict mode egy szigorubb mukodest eredmenyez, tobb esetben
// fog hibat jelezni a bongeszo (es kevesebb lesz a nem vart munkodes)
// read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
(function () {
  // strict mode bekapcsolasa
  'use strict';

  // console-ra kiirjuk a hello word stringet
  console.log('hello world');

  // kivalasztunk minden html elemet amin rajta van az image popup class
  // es meghivjuk rá a magnific popup fugvenyt
  // a fugveny bemeneti parametere egy object
  // ami a popup beallitasait tartalmazza
  $('.image-popup').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });


  // minden hidden-image class-al rendelkező elemet elrejtünk
  // sima javascriptet használunk ehhez:
  [].forEach.call(document.querySelectorAll('.hidden'),
    function (el) {
      el.style.display = 'none';
    });


  // ez ugyanazt csinálja mint a fentebbi kód, csak ez
  // a jquery library segítségével:
  $('.hidden').css('display', 'none');

  // http://learn.jquery.com/using-jquery-core/document-ready/
  $(document).ready(function() {
    console.log('hello');
    // kiválasztjuk a menu id-vel rendelkező html elemet és átírjuk a tartalmát
    $('#menu').text('Main menu');
    // camelCase mindenSzoNagyBetuKiveveAzElso

    // lekérdezzük a #menu id tartalmát és betöltjük egy változóba
    let menuTitle = $('#menu').text();
    console.log(menuTitle);
    if (menuTitle === 'Main menu') {
      $('#menu').addClass('main-menu');
    }

    // létrehozzuk a menüpontokat:

    let menuContainer = $('<ul class="menu"></ul>');
    let menuItem = $('<li class="main-menu-item"></li>').text('elso menupont');

    // self closing tag... 
    let testTag = $('<div/>');

    testTag.attr('test', '2');
    $('body').append(testTag);

    // a menut és a menupont html-t a #menu id-vel rendelkező elembe betesszük:
    $('#menu').append(menuContainer);
    $('.menu').append(menuItem);

    $('.image-link').magnificPopup({
      type:'image',
      mainClass: 'mfp-fade',
      gallery:{
        enabled:true
      }
    });

    // $('.bxslider').bxSlider({useCSS: false});

  });


}()); // end of strict mode
