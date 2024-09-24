$(document).ready(function() {
  // Click on next button
  $('.form-wizard-next-btn').click(function() {
    var parentFieldset = $(this).parents('.wizard-fieldset');
    var currentActiveStep = $(this).parents('.form-wizard').find('.form-wizard-steps .active');
    var next = $(this);
    var nextWizardStep = true;
    parentFieldset.find('.wizard-required').each(function() {
      var thisValue = $(this).val();

      if (thisValue == "") {
        $(this).siblings(".wizard-form-error").slideDown();
        nextWizardStep = false;
      } else {
        $(this).siblings(".wizard-form-error").slideUp();
      }
    });
    if (nextWizardStep) {
      next.parents('.wizard-fieldset').removeClass("show").hide(400);
      currentActiveStep.removeClass('active').addClass('activated').next().addClass('active').show(400);
      next.parents('.wizard-fieldset').next('.wizard-fieldset').addClass("show").show(400);
      $(document).find('.wizard-fieldset').each(function() {
        if ($(this).hasClass('show')) {
          var formAtrr = $(this).attr('data-tab-content');
          $(document).find('.form-wizard-steps .form-wizard-step-item').each(function() {
            if ($(this).attr('data-attr') == formAtrr) {
              $(this).addClass('active');
              var innerWidth = $(this).innerWidth();
              var position = $(this).position();
              $(document).find('.form-wizard-step-move').css({ "left": position.left, "width": innerWidth });
            } else {
              $(this).removeClass('active');
            }
          });
        }
      });
    }
  });

  // Click on previous button
  $('.form-wizard-previous-btn').click(function() {
    var prev = $(this);
    var currentActiveStep = $(this).parents('.form-wizard').find('.form-wizard-steps .active');
    prev.parents('.wizard-fieldset').removeClass("show").hide(400);
    prev.parents('.wizard-fieldset').prev('.wizard-fieldset').addClass("show").show(400);
    currentActiveStep.removeClass('active').prev().removeClass('activated').addClass('active');
    $(document).find('.wizard-fieldset').each(function() {
      if ($(this).hasClass('show')) {
        var formAtrr = $(this).attr('data-tab-content');
        $(document).find('.form-wizard-steps .form-wizard-step-item').each(function() {
          if ($(this).attr('data-attr') == formAtrr) {
            $(this).addClass('active');
            var innerWidth = $(this).innerWidth();
            var position = $(this).position();
            $(document).find('.form-wizard-step-move').css({ "left": position.left, "width": innerWidth });
          } else {
            $(this).removeClass('active');
          }
        });
      }
    });
  });

  // Click on form submit button
  $(document).on("click", ".form-wizard .form-wizard-submit", function() {
    var parentFieldset = $(this).parents('.wizard-fieldset');
    var currentActiveStep = $(this).parents('.form-wizard').find('.form-wizard-steps .active');
    parentFieldset.find('.wizard-required').each(function() {
      var thisValue = $(this).val();
      if (thisValue == "") {
        $(this).siblings(".wizard-form-error").slideDown();
      } else {
        $(this).siblings(".wizard-form-error").slideUp();
      }
    });
  });

  // Focus on input field to check if it's empty or not
  $(".form-control").on('focus', function() {
    var tmpThis = $(this).val();
    if (tmpThis == '') {
      $(this).parent().addClass("focus-input");
    } else if (tmpThis != '') {
      $(this).parent().addClass("focus-input");
    }
  }).on('blur', function() {
    var tmpThis = $(this).val();
    if (tmpThis == '') {
      $(this).parent().removeClass("focus-input");
      $(this).siblings('.wizard-form-error').slideDown("3000");
    } else if (tmpThis != '') {
      $(this).parent().addClass("focus-input");
      $(this).siblings('.wizard-form-error').slideUp("3000");
    }
  });

  // Hover effect on stars
  // // Get the star elements
const stars = document.querySelectorAll('.star');

// Add event listener to each star
stars.forEach(star => {
  star.addEventListener('click', function() {
    const starValue = this.getAttribute('data-value');

    // Update the hidden input value
    document.getElementById('star-value').value = starValue;

    // Update the selected star rating display
    document.getElementById('star-rating-value').textContent = `Selected Star Rating: ${starValue}`;
  });
});
  
});
