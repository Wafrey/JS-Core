class SortedList {

    constructor() {
        this.collection = [];
        this.size=0;
    }

    add(element) {
        this.collection.push(element);
        this.size++;

        this.sort();
    }

    remove(index) {
        if (index >= 0 && index < this.collection.length){
            this.collection.splice(index, 1);
            this.size--;
        }
    }
    
    get(index){
        return this.collection[index];
    }

    sort(){
        return this.collection.sort((a,b)=> (a-b));
    }

}

let list = new SortedList();

list.add(5);
list.add(6);
list.add(0);

console.log(list);