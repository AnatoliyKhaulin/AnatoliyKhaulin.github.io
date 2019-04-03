(function () {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            let node = this;

            while (node) {
                if (node.matches(css)) {
                    return node;
                } else {
                    node = node.parentElement;
                }
            }

            return null;
        };
    }



    if (Element && !Element.prototype.matches) {
        const proto = Element.prototype;

        proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
    }
})();