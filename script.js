$(function() {
var $change = $(".buying01,.buy01,.selling02,.target03")

  $change.change(function() {

    var buying01 = $(".buying01").val();
    var buy01 = $(".buy01").val();
    $(".invest01").val(buying01 * buy01);
    $(".buy02").val(buy01);

    var selling02 = $(".selling02").val();
    $(".sum02").val(selling02 * buy01);

    var sum02 = $(".sum02").val();
    var invest01 = parseInt( $(".invest01").val() );
    $(".profit02").val(sum02 - invest01);

    var target03 = parseInt( $(".target03").val() );

    var result = Math.round((invest01 + target03) / buy01);
    $(".selling03").val(result);
  });

});
