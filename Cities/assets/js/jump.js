<script type="text/javascript" src="http://code.jquery.com/jquery-1.8.0.min.js"></script>
$(document).ready(function() {
  $("#educationclick").click(function() {
    $("html, body").animate({
      scrollTop: $("#education").offset().top }, {duration: 500,easing: "swing"});
    return false;
  });
  $("#p2").click(function() {
    $("html, body").animate({
      scrollTop: $("#div2").offset().top }, {duration: 500,easing: "swing"});
    return false;
  });
  $("#p3").click(function() {
    $("html, body").animate({
      scrollTop: $("#div3").offset().top }, {duration: 500,easing: "swing"});
    return false;
  });
});
