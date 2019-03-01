function sortedList() {
    let collection = (() => {
        let numbers = [];
        let size = 0;

        const add = function (element) {
            numbers.push(element);
            numbers.sort((a, b) => a - b);
            this.size++;
        }

        const remove = function (index)  {
            validateIndex(index);
            numbers.splice(index, 1);
            this.size--;
        }

        const get= function (index){
            validateIndex(index);
            return numbers[index];
        }

        const validateIndex = function (index) {
            if (index < 0 || index >= numbers.length) {
                throw new RangeError('Index is outside the bounds of the array!')
            }

        }

        return {
            add,
            remove,
            get,
            size
        }

    })()

    return collection;
}