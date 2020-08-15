import Node from './Node';

class LinkedList {
    private head: Node;
    private size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertFirst(data: number): void {
        this.head = new Node(data, this.head);
        this.size++;
    }


    insertLast(data: number): void{
        const node = new Node(data);
        
        if(!this.head){
            this.head = node
        }else{
            let current = this.head;

            while(current.next){
                current = current.next
            };
    
            current.next = node;
        }

        this.size++;
    }

    insertAt(index: number, value : number){
        if(this.isEmpty(index)) return;

        if(index === 0){
            this.insertFirst(value);
            return;
        }

        const node = new Node(value);
        let current: Node, previous: Node;

        current = this.head;
        let count = 0;

        while(count < index){
            previous = current;
            count++;
            current = current.next;
        };

       node.next = current;
       previous.next = node;

       this.size++;
    }

    getAt(index: number){
        if(this.isEmpty(index)) return;

        let current = this.head;
        let count = 0;

        while(current){
            if(count === index){
                console.log("V => ",current.data);
            }
            count++;
            current = current.next;
        }
        return null;
    };

    removeAt(index: number){
        if(this.isEmpty(index)) return;

        let current = this.head;

        if(index === 0){
            this.head = current.next;
            return;
        }

        let count = 0, previous: Node;

        while(count < index){
            previous = current
            count ++;
            current = current.next;
        };

        previous.next = current.next;
        this.size--;
        return null;
    };

    reset(){
        this.head = null;
        this.size = 0;
    }

    private isEmpty(index: number): Boolean{
        return (index > this.size || index < 0)
    }
    // PrintAll
    printData():void {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    printSize():void{
        console.log(this.size);
    }
};

export default LinkedList;