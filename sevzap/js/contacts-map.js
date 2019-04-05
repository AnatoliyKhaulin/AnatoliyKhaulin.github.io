if ($('.contacts-block__map').length > 0) {
  var firstMap;
  var secondMap;
  var threeMap;
  var firstMapCords = [59.897406, 30.414818];
  var secondMapCords = [59.909039, 30.433646];
  var threeMapCords = [59.782560, 30.175677];

  $(window).on('resize', function () {
    setTimeout(function () {
      firstMap.container.fitToViewport();
    }, 250);
    setTimeout(function () {
      secondMap.container.fitToViewport();
    }, 250);
    setTimeout(function () {
      threeMap.container.fitToViewport();
    }, 250);
  });

  function init() {

    // Карта первая вкладка

    firstMap = new ymaps.Map("firstMap", {
      center: firstMapCords,
      zoom: 13,
    }, {
      searchControlProvider: 'yandex#search'
    });
    firstMap.controls.add(new ymaps.control.ZoomControl({
      options: {
        position: {
          left: 10,
          bottom: 70
        }
      }
    }));

    firstMap.geoObjects
      .add(new ymaps.Placemark(firstMapCords, {
        balloonContent: 'улица Пинегина, 4 <br> Санкт - Петербург, Россия, 192029 '
      }, {
        preset: 'islands#redDotIcon',
      }))


    // Карта вторая вкладка.

    secondMap = new ymaps.Map("secondMap", {
      center: secondMapCords,
      zoom: 13,
    }, {
      searchControlProvider: 'yandex#search'
    });
    secondMap.controls.add(new ymaps.control.ZoomControl({
      options: {
        position: {
          left: 10,
          bottom: 70
        }
      }
    }));

    secondMap.geoObjects
      .add(new ymaps.Placemark(secondMapCords, {
        balloonContent: 'г. Санкт-Петербург, Октябрьская наб., <br> д. 26, корп.5.'
      }, {
        preset: 'islands#redDotIcon',
      }))

    // // Карта третья вкладка.

    threeMap = new ymaps.Map("threeMap", {
      center: threeMapCords,
      zoom: 13,
    }, {
      searchControlProvider: 'yandex#search'
    });
    threeMap.controls.add(new ymaps.control.ZoomControl({
      options: {
        position: {
          left: 10,
          bottom: 70
        }
      }
    }));

    threeMap.geoObjects
      .add(new ymaps.Placemark(threeMapCords, {
        balloonContent: 'Ленинградская область, промзона <br> «Горелово», Волхонское шоссе, 4, участок 2/2.'
      }, {
        preset: 'islands#redDotIcon',
      }))

    firstMap.controls.remove('geolocationControl');
    firstMap.controls.remove('searchControl');
    firstMap.controls.remove('trafficControl');
    firstMap.controls.remove('typeSelector');
    firstMap.controls.remove('fullscreenControl');
    firstMap.controls.remove('rulerControl');
    firstMap.controls.remove('zoomControl');
    firstMap.behaviors.disable('scrollZoom');
    firstMap.behaviors.disable('drag');

    secondMap.controls.remove('geolocationControl');
    secondMap.controls.remove('searchControl');
    secondMap.controls.remove('trafficControl');
    secondMap.controls.remove('typeSelector');
    secondMap.controls.remove('fullscreenControl');
    secondMap.controls.remove('rulerControl');
    secondMap.controls.remove('zoomControl');
    secondMap.behaviors.disable('scrollZoom');
    secondMap.behaviors.disable('drag');

    threeMap.controls.remove('geolocationControl');
    threeMap.controls.remove('searchControl');
    threeMap.controls.remove('trafficControl');
    threeMap.controls.remove('typeSelector');
    threeMap.controls.remove('fullscreenControl');
    threeMap.controls.remove('rulerControl');
    threeMap.controls.remove('zoomControl');
    threeMap.behaviors.disable('scrollZoom');
    threeMap.behaviors.disable('drag');
  }
  ymaps.ready(init);
}
