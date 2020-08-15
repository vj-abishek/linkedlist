var Node_1 = require('./Node');
var LinkedList = (function () {
    function LinkedList() {
        this.head = null;
        this.size = 0;
    }
    LinkedList.prototype.insertFirst = function (data) {
        this.head = new Node_1["default"](data, this.head);
        this.size++;
    };
    LinkedList.prototype.insertLast = function (data) {
        var node = new Node_1["default"](data);
        if (!this.head) {
            this.head = node;
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            ;
            current.next = node;
        }
        this.size++;
    };
    LinkedList.prototype.insertAt = function (index, value) {
        if (this.isEmpty(index))
            return;
        if (index === 0) {
            this.insertFirst(value);
            return;
        }
        var node = new Node_1["default"](value);
        var current, previous;
        current = this.head;
        var count = 0;
        while (count < index) {
            previous = current;
            count++;
            current = current.next;
        }
        ;
        node.next = current;
        previous.next = node;
        this.size++;
    };
    LinkedList.prototype.getAt = function (index) {
        if (this.isEmpty(index))
            return;
        var current = this.head;
        var count = 0;
        while (current) {
            if (count === index) {
                console.log("V => ", current.data);
            }
            count++;
            current = current.next;
        }
        return null;
    };
    ;
    LinkedList.prototype.removeAt = function (index) {
        if (this.isEmpty(index))
            return;
        var current = this.head;
        if (index === 0) {
            this.head = current.next;
            return;
        }
        var count = 0, previous;
        while (count < index) {
            previous = current;
            count++;
            current = current.next;
        }
        ;
        previous.next = current.next;
        this.size--;
        return null;
    };
    ;
    LinkedList.prototype.reset = function () {
        this.head = null;
        this.size = 0;
    };
    LinkedList.prototype.isEmpty = function (index) {
        return (index > this.size || index < 0);
    };
    LinkedList.prototype.printData = function () {
        var current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    };
    LinkedList.prototype.printSize = function () {
        console.log(this.size);
    };
    return LinkedList;
})();
;
exports["default"] = LinkedList;
