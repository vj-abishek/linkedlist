import LinkedList from './LinkedList';

const list = new LinkedList();

list.insertFirst(300);
list.insertFirst(200);
list.insertFirst(100);
list.insertLast(400);
// list.insertAt(2,500);
// list.getAt(3);

list.removeAt(3);

list.printData();
