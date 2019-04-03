(function () {
    var moduleName = 'nav';

    [].slice.call(document.querySelectorAll('.js-nav')).forEach(function (wrapper) {
        if (wrapper.dataset[moduleName + 'Init'] === 'true') return;
        wrapper.dataset[moduleName + 'Init'] = 'true';

        var btnHamburger = wrapper.querySelector('.js-nav-btn-hamburger');
        var links        = wrapper.querySelectorAll('.js-nav-link');
        var inners       = wrapper.querySelectorAll('.js-nav-inner');

        btnHamburger.addEventListener('click', function (event) {
            event.preventDefault();

            wrapper.classList.toggle('visible');
        });

        document.body.addEventListener('click', function (event) {
            if (event.target.closest('.js-nav')) return;

            wrapper.classList.remove('visible');
        });

        if (!(document.body.classList.contains('mobile'))) {
            [].slice.call(links).forEach(function (link) {
                link.addEventListener('mouseover', function () { link.parentElement.classList.add('opened') });
                link.addEventListener('mouseout', function () { link.parentElement.classList.remove('opened') });
            });

            [].slice.call(inners).forEach(function (inner) {
                inner.addEventListener('mouseover', function () { inner.parentElement.classList.add('opened') });
                inner.addEventListener('mouseout', function () { inner.parentElement.classList.remove('opened') });
            });
        }
    });
})();