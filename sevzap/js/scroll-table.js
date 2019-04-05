$(window).on('load', function() {
  if ($(window).width() < 1024) {
    if ($('.js-scrollpane').length > 0) {
      $('.js-scrollpane').jScrollPane({
        verticalDragMinHeight: 20,
        verticalDragMaxHeight: 20,
        horizontalDragMinWidth: 20,
        horizontalDragMaxWidth: 70,
        mouseWheelSpeed: 10,
        animateScroll: true,
        animateDuration: 10,
      });
    }
  }
});

$(window).on('resize', function () {
  if ($(window).width() < 1024) {
    if ($('.js-scrollpane').length > 0) {
      $('.js-scrollpane').jScrollPane({
        verticalDragMinHeight: 20,
        verticalDragMaxHeight: 20,
        horizontalDragMinWidth: 20,
        horizontalDragMaxWidth: 70,
        mouseWheelSpeed: 10,
        animateScroll: true,
        animateDuration: 10,
      });
    }
  } else {
    var scrollPane = $('.js-scrollpane').jScrollPane({
      verticalDragMinHeight: 20,
      verticalDragMaxHeight: 20,
      horizontalDragMinWidth: 20,
      horizontalDragMaxWidth: 70,
      mouseWheelSpeed: 10,
      animateScroll: true,
      animateDuration: 10,
    });
    var api = scrollPane.data('jsp');
    api.destroy();
  }
});