$('#toRight').click(function () {
    $('#right>select').append($('#left>select>option:selected'));
});
$('#toLeft').click(function () {
    $('#left>select').append($('#right>select>option:selected'));
});
$('#toAllRight').click(function () {
    $('#right>select').append($('#left>select>option'));
});
$('#toAllLedt').click(function () {
    $('#left>select').append($('#right>select>option'));
});