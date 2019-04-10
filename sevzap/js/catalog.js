$(document).on('click touchstart', '.catalog-table__row--unavailable .catalog-table__order', function (e) {
  e.preventDefault();
});

$('.catalog-table__filter').on('click touchstart', function(e) {
  e.preventDefault();
  var $self = $(this);
  $self.toggleClass('catalog-table__filter--sort');

  if ($self.hasClass('catalog-table__filter--checkboxes')) {
    $('.catalog-table__filter-list').toggleClass('catalog-table__filter-list--showed');
  }
});

$(document).on('mouseup', function (e) {
  let $target = $('.catalog-table__filter--checkboxes, .catalog-table__filter-list');

  if (!$target.is(e.target) && $target.has(e.target).length === 0) {
    $('.catalog-table__filter-list').removeClass('catalog-table__filter-list--showed');
    $('.catalog-table__filter--checkboxes').removeClass('catalog-table__filter--sort');
  }
});

$(document).on('click', '.js-show-filter', function (e) {
  e.preventDefault();
  var $self = $(this);
  var $selfShowedText = $self.data('show');
  var $selfHiddenText = $self.data('hide');
  var $catalogFilter = $('.catalog-filter');

  $catalogFilter.slideToggle().toggleClass('catalog-filter--showed');

  if ($catalogFilter.hasClass('catalog-filter--showed')) {
    $self.text($selfShowedText);
  } else {
    $self.text($selfHiddenText);
  }
});

$(document).on('click', '.js-show-more-rows', function (e) {
  e.preventDefault();
  if ($('.catalog-table__row').hasClass('catalog-table__row--hidden')) {
    $('.catalog-table__row').removeClass('catalog-table__row--hidden');
    $(this).remove();
  }
});

$(document).on('click', '.js-show-sidebar', function (e) {
  e.preventDefault();
  var $self = $(this);
  var $selfShowedText = $self.data('show');
  var $selfHiddenText = $self.data('hide');
  var $catalogSidebar = $('.catalog-sidebar');

  $catalogSidebar.toggleClass('catalog-sidebar--showed');

  if ($catalogSidebar.hasClass('catalog-sidebar--showed')) {
    $self.text($selfShowedText);
  } else {
    $self.text($selfHiddenText);
  }
});
