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
         $(this).removeClass("visible");
      });

      if (!child.hasClass("visible")) {
         child.css({
            'display': 'block'
         });
         child.addClass("visible");
      } else {
         $(child).css({
            'display': 'none'
         });
         $(child).removeClass("visible");
      }
   });

   $(".btn-dropdown li").on("click", function () {
      
      if ($(this).hasClass("disabled")) {
          return false;
      }
          
      var name = $(this).html(), setName = $(this).parent().siblings(), closeDropdown = $(this).parent(), index = $(this).index();
      setName.html(name);
      setName.addClass("valid");

      if (name === "Yellow" || name === "White" || name === "Transparent") {
         setName.css({
            'background-color': name,
            'color': '#000'
         });
      } else {
         setName.css({
            'background-color': name,
            'color': '#fff'
         });
      }

      if (setName.hasClass('first')) {
         first = index;
      } else if (setName.hasClass('second')) {
         second = index;
      } else if (setName.hasClass('third')) {
         third = 10 ** index;
      } else {
         switch (index) {
            case 0:
               fourth = 5;
               break;
            case 1:
               fourth = 10;
               break;
            default:
               fourth = 20;
               break;
         }
      }

      if ($('.first').hasClass('valid') && $('.second').hasClass('valid')) {
         var resistorValue = first + "" + second;

         if ($('.third').hasClass('valid')) {
            resistorValue = resistorValue * third;
         }

         if (fourth) {
            $('#tolerance').html(" - " + fourth + " %");
         }

         if (resistorValue >= 1000 && resistorValue <= 999999) {
            resistorValue = resistorValue / 1000;
            resistorValue = resistorValue + " K";
         } else if (resistorValue >= 1000000 && resistorValue <= 999999999) {
            resistorValue = resistorValue / 1000000;
            resistorValue = resistorValue + " M";
         } else if (resistorValue >= 1000000000 && resistorValue <= 99999999999) {
            resistorValue = resistorValue / 1000000000;
            resistorValue = resistorValue + " G";
         }

         $('#value').html(resistorValue);
      }

      $(closeDropdown).css({
         'display': "none"
      });
      $(closeDropdown).removeClass("visible");
   });

});