$(document).ready(function () {
    $('#toggler').on('click', function () {
        $(this).siblings('.container').toggleClass('d-none');
    });
});