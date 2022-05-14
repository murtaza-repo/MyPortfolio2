(function ($) {
    'use strict';

    var form = $('.contact__form'),
        message = $('.contact__msg'),
        loader = $('.loader'),
        form_data;

    // Success function
    function done_func(response) {
        loader.hide();
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 20000000);
        form.find('input:not([type="submit"]), textarea').val('');
    }

    // fail function
    function fail_func(data) {
        loader.hide();
        message.fadeIn().removeClass('alert-success').addClass('alert-danger');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 2000000);
    }

    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        loader.show();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
            .done(done_func)
            .fail(fail_func);
    });

    loader.hide();
})(jQuery);