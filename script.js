/*jslint browser: true*/
/*global $, jQuery, alert*/

var covers = ["http://i.imgur.com/RabxjRi.jpg", "http://i.imgur.com/EMIWSs4.jpg", "http://i.imgur.com/Yx7U084.jpg", "http://i.imgur.com/kaGP2OW.jpg", "http://i.imgur.com/FAeD3vl.jpg", "http://i.imgur.com/FXQ2MXf.jpg", "http://i.imgur.com/iDYzvsA.jpg", "http://i.imgur.com/ETldBgC.jpg", "http://i.imgur.com/BI6OjGW.jpg", "http://i.imgur.com/PcUfc9J.jpg"];

"use strict";

setInterval(function () {
  $('.jumbotron').css('background-image', "url(" + covers[~~(Math.random() * covers.length)] + ")");
}, 10000);