class Node {
    data: number;
    next: Node;

    constructor(data: number, next = null){
        this.data = data;
        this.next = next;
    }
};

export default Node;