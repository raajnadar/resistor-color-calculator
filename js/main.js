/*jslint browser : true */
/*global $, console */

$(window).on('load', function () {
   'use strict';
   var first, second, third, fourth, resistorValue;

   $(".btn").on('click', function () {
      var child = $(this).siblings();
      
      $('.btn-dropdown').each(function () {
         $(this).css({
            'display': 'none'
         });
         $(child).removeClass("visible");
      });

      if (!child.hasClass("visible")) {
         child.addClass("visible");
         child.css({
            'display': 'block'
         });
      } else {
         $(child).css({
            'display': 'none'
         });
         $(child).removeClass("visible");
      }
   });

   $(".btn-dropdown li").on("click", function () {
      var name = $(this).html(), setName = $(this).parent().siblings(), closeDropdown = $(this).parent(), index = $(this).index();
      setName.html(name);
      setName.addClass("valid");
      setName.css({
         'background-color': name,
         'color': '#fff'
      });
      
      if (setName.hasClass('first')) {
         first = index;
      } else if (setName.hasClass('second')) {
         second = index;
      } else {
         third = 10 ** index;
      }
      
      if ($('.first').hasClass('valid') && $('.second').hasClass('valid')) {
         var resistorValue = first + "" + second;
         
         if ($('.third').hasClass('valid')) {
            resistorValue = resistorValue * third;
         }
         
         $('#value').html(resistorValue);
      }
      
      $(closeDropdown).css({
         'display': "none"
      });
      $(closeDropdown).removeClass("visible");
   });

});