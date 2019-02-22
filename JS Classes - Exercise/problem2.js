function solve(arr, sort) {

    class Tickets {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let unsortedArr = [];
    let sortedArr = [];

    for (let ticket of arr) {

        let [destination, price, status] = ticket.split('|');
        price = Number(price);
        unsortedArr.push(new Tickets(destination, price, status));
    }

    switch (sort) {

        case 'destination':
            sortedArr = unsortedArr.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            sortedArr = unsortedArr.sort((a, b) => a.price - b.price);
            break;
        case 'status':
            sortedArr = unsortedArr.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }

    return sortedArr;
}