$('#menu').on('show.bs.collapse', function () {
    $('#menu').addClass('collapsible-menu-expanded');
});
$('#menu').on('hidden.bs.collapse', function () {
    $('#menu').removeClass('collapsible-menu-expanded');
});
$(window).on('resize', function() {
  if ($(window).width() >= 768) {
    $('#menu').collapse('hide');
  }
});
