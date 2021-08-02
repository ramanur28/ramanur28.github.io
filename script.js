$('#navbar-link .nav-link').on('click', function () {
  $('#navbar-link .nav-link').find('li.active').removeClass('active');
  $(this).parent('li').addClass('active');
});
