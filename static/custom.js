$(document).ready(function () {
    $(window).on('hashchange', function () {
        if (window.location.href.indexOf("/payment-method") > -1) {
            $('#snipcart-bill-me-later').click();
        }
    }).trigger('hashchange');
    if (window.location.pathname == '/') {
        window.location.href = "/category";
    }
});
