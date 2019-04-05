$(document).on('click', '.js-tab-link', function (e) {
  e.preventDefault();
  var $this = $(this),
    thisText = $this.text(),
    classBlock = $this.data('href'),
    $block = $this.closest('.js-tabsblock'),
    $tabLinkBlock = $block.find('.js-mobiletabs'),
    tabBlock = $block.find('.js-tab');

  $('.js-tab-link').each(function () {
    $(this).removeClass('-active');
  });

  tabBlock.each(function () {
    $(this).hide().removeClass('hidden-block');
  });

  $tabLinkBlock.removeClass('visible');
  $this.addClass('-active');
  $('.js-tab__' + classBlock)
    .show()
    .addClass('fadeIn')
    .siblings()
    .removeClass('fadeIn hidden-block');
});