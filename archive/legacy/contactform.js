
$(document).ready(function() {

  $(document).on("change paste keyup keypress keydown", ".mobileNumOnly", function () {
    // Backspace, tab, enter, end, home, left, right
    // We don't support the del key in Opera because del == . == 46.
    var controlKeys = [8, 9, 13, 35, 36, 37, 39, 107, 16];
    // IE doesn't support indexOf
    var isControlKey = controlKeys.join(",").match(new RegExp(event.which));
    // Some browsers just don't raise events for control keys. Easy.
    // e.g. Safari backspace.
    if (!event.which || // Control keys in most browsers. e.g. Firefox tab is 0
        (48 <= event.which && event.which <= 57) || (96 <= event.which && event.which <= 105) ||// Always 1 through 9
        (190 == event.which || 110 == event.which) || 
        ((43 == event.which || 187 == event.which) && !($(this).val().includes("+"))) || // to allow + symbol
        isControlKey) { // Opera assigns values for control keys.
      return;
    } else {
      event.preventDefault();
    }
  });

  // Contact Us
  $('form.contactus_form').submit(function() {
    
    var payload = {
      'name': $('form.contactus_form #name1').val(),
      'email': $('form.contactus_form #email1').val(),
      'number': $('form.contactus_form #number1').val(),
      'subject': $('form.contactus_form #subject1').val(),
      'message': $('form.contactus_form #message1').val(),
      'to': 'info'
    }

    $('.loader').addClass('loader-transprent')
    $('form.contactus_form #result1').html('')

    $.ajax({
      url: '../admin/contactus.php',
      type: 'POST',
      contentType: "application/json",
      dataType: 'json',
      data: JSON.stringify(payload),
      success: function (response) {

        $('.loader').removeClass('loader-transprent')

        if(response.status) {
          $('form.contactus_form input').val('')
          $('form.contactus_form select').val('')
          $('form.contactus_form textarea').val('')

          $('form.contactus_form #result1').html('<div class="alert-success" style="padding:10px; margin-bottom:25px;">Your message has been sent successfully. We will get back to you in 4-5 working days<button type="button" class="close" onclick="closeAlert(this)">x</button></div>')
        } else {
          $('form.contactus_form #result1').html('<div class="alert-danger" style="padding:10px; margin-bottom:25px;">'+response.message+'</div>')
        }
      },
      error: function (xhr, status, error) {
        $('.loader').removeClass('loader-transprent')
        $('form.contactus_form #result1').html('<div class="alert-danger" style="padding:10px; margin-bottom:25px;">Unable to send message. Please try again.</div>')
      }
    })
  })

  // Subscribe Us
  $('form.subscribe_form').submit(function() {
    
    var payload = {
      'name': $('form.subscribe_form .username').val(),
      'email': $('form.subscribe_form .email').val(),
      'company': $('form.subscribe_form .companyName').val(),
      'to': 'info'
    }

    $('.loader').addClass('loader-transprent')
    $('form.subscribe_form #result').html('')

    $.ajax({
      url: '../admin/subscribe.php',
      type: 'POST',
      contentType: "application/json",
      dataType: 'json',
      data: JSON.stringify(payload),
      success: function (response) {

        $('.loader').removeClass('loader-transprent')

        if(response.status) {
          $('form.subscribe_form input').val('')
          $('form.subscribe_form select').val('')
          $('form.subscribe_form textarea').val('')

          $('form.subscribe_form #result').html('<div class="alert-success" style="padding:10px; margin-bottom:25px;">Subscription added successfully<button type="button" class="close" onclick="closeAlert(this)">x</button></div>')
        } else {
          $('form.subscribe_form #result').html('<div class="alert-danger" style="padding:10px; margin-bottom:25px;">'+response.message+'</div>')
        }
      },
      error: function (xhr, status, error) {
        $('.loader').removeClass('loader-transprent')
        $('form.subscribe_form #result').html('<div class="alert-danger" style="padding:10px; margin-bottom:25px;">Unable to send request. Please try again.</div>')
      }
    })
  })

  // Request for a Quote
  $('form.rfq_form').submit(function() {
    
    var payload = {
      'name': $('form.rfq_form .userName').val(),
      'email': $('form.rfq_form .email').val(),
      'number': $('form.rfq_form .mobile').val(),
      'company': $('form.rfq_form .company').val(),
      'subject': $('form.rfq_form .subject').val(),
      'message': $('form.rfq_form .message').val(),
      'to': $('form.rfq_form').hasClass('solutionsPage') ? 'sales' : 'project'
    }

    $('.loader').addClass('loader-transprent')
    $('form.rfq_form #result1').html('')

    $.ajax({
      url: '../admin/reqQuote.php',
      type: 'POST',
      contentType: "application/json",
      dataType: 'json',
      data: JSON.stringify(payload),
      success: function (response) {

        $('.loader').removeClass('loader-transprent')

        if(response.status) {
          $('form.rfq_form input').val('')
          $('form.rfq_form select').val('')
          $('form.rfq_form textarea').val('')

          $('form.rfq_form #result1').html('<div class="alert-success" style="padding:10px; margin-bottom:25px;">Your Quote has been sent successfully<button type="button" class="close" onclick="closeAlert(this)">x</button></div>')
        } else {
          $('form.rfq_form #result1').html('<div class="alert-danger" style="padding:10px; margin-bottom:25px;">'+response.message+'</div>')
        }
      },
      error: function (xhr, status, error) {
        $('.loader').removeClass('loader-transprent')
        $('form.rfq_form #result1').html('<div class="alert-danger" style="padding:10px; margin-bottom:25px;">Unable to send Quote. Please try again.</div>')
      }
    })
  })

})
function closeAlert(ele) {
  $(ele).parent().remove()
}