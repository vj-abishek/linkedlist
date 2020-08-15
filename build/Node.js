var Node = (function () {
    function Node(data, next) {
        if (next === void 0) { next = null; }
        this.data = data;
        this.next = next;
    }
    return Node;
})();
;
exports["default"] = Node;
