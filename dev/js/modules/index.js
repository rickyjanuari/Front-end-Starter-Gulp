require('./helpers');
const jQuery = require('jquery'); // npm install jquery


jQuery(function($) {

    /* 1. Menu Mobile */
    var $body = $('body'),
      $menu = $('.menu-list'),
      $btnMenu = $('.menu-mobile'),
      back = '<li class="back"><a href="#"><i class="fa fa-angle-left"></i>Back</a></li>';
    $('ul', $menu).prepend(back);
    $('.menu-item-has-children > a', $menu).on('click', function (event) {
      var $item = $(event.target).closest('.menu-item-has-children'),
        ww = $(window).width();
      if (ww <= 991) {
        event.preventDefault();
        $('> .sub-menu', $item).addClass('active');
      }
    });
    $menu.on('click', '.back', function (event) {
      event.preventDefault();
      $(this).closest('.sub-menu').removeClass('active');
    });
    $menu.on('open', function () {
      $menu.addClass('active');
      $body.addClass('menu-active');
    });
    $menu.on('close', function () {
      $menu.removeClass('active');
      $body.removeClass('menu-active');
    });
    $btnMenu.on('click', function () {
      $menu.trigger('open');
    });
    $('.hide-menu').on('click', function () {
      $menu.trigger('close');
    });
    $(document).on('keydown', function (event) {
      if (event.keyCode === 27) {
        $menu.trigger('close');
      }
    });
    /* End 1 . Menu Mobile */
});