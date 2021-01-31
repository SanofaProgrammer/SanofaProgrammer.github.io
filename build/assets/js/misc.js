$(function () {
    var startDate = new Date(2019, 00, 01);
    var units =
        countdown.YEARS |
        countdown.MONTHS |
        countdown.DAYS;
    
    var time = countdown(startDate, null, units).toString();
    $('#total-experience').text(time);
});