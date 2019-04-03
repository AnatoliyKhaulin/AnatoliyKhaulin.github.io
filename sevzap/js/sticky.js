(function () {
    var moduleName = 'sticky';

    [].slice.call(document.querySelectorAll('.js-sticky')).forEach(function (wrapper) {
        if (wrapper.dataset[moduleName + 'Init'] === 'true') return;
        wrapper.dataset[moduleName + 'Init'] = 'true';

        var element = wrapper.querySelector('.js-sticky-element');
        var fakeBlock;

        init();

        window.addEventListener('load', sticky);
        window.addEventListener('scroll', sticky);
        window.addEventListener('resize', sticky);

        window.onbeforeprint = () => fakeBlock.style.display = 'none';
        window.onafterprint  = () => fakeBlock.style.display = 'block';

        function init() {
            createFakeBlock();
            sticky();
        }

        function createFakeBlock() {
            fakeBlock = document.createElement('div');
            wrapper.before(fakeBlock);
        }

        function sticky() {
            var scrollTop          = (document.documentElement.scrollTop || document.body.scrollTop);
            var offsetTopElement   = element.getBoundingClientRect().top + (document.documentElement.scrollTop || document.body.scrollTop);
            var offsetTopFakeBlock = fakeBlock.getBoundingClientRect().top + (document.documentElement.scrollTop || document.body.scrollTop);
            var elementHeight      = element.offsetHeight;
            var fakeBlockHeight    = element.offsetHeight;

            if (wrapper.classList.contains('sticky')) {
                if (scrollTop < (offsetTopFakeBlock + fakeBlockHeight)) {
                    wrapper.classList.remove('sticky');

                    fakeBlock.style.height = '0';
                }
            } else {
                if (scrollTop > (offsetTopElement + elementHeight)) {
                    wrapper.classList.add('sticky');

                    fakeBlock.style.height = elementHeight + 'px';
                }
            }
        }
    });
})();