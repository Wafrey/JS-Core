class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = Number(capacity);
        this.bookings = [];
        this.currentBookingNumber = 1;
        this.allAvailableRooms = {
            single: Math.floor(this.capacity * 50 / 100),
            double: Math.floor(this.capacity * 30 / 100),
            maisonette: Math.floor(this.capacity * 20 / 100)
        }
    }


    get roomsPricing() {
        return {
            'single': 50,
            'double': 90,
            'maisonette': 135
        }
    }

    get servicesPricing() {
        return {
            'food': 10,
            'drink': 15,
            'housekeeping': 25
        }
    }

    rentARoom(clientName, roomType, nights) {
        if (!this.allAvailableRooms.hasOwnProperty(roomType)) {
            return;
        }
        if (this.allAvailableRooms[roomType] <= 0) {
            let message = `No ${roomType} rooms available!\n`;
            let otherRooms = Object.keys(this.allAvailableRooms).filter(r => r !== roomType);
            otherRooms.forEach(r => {
                if (this.allAvailableRooms[r] > 0) {
                    message += `Available ${r} rooms: ${this.allAvailableRooms[r]}\n`;
                }
            });
            return message;
        }

        const currentClient = {
            bookNumber: this.currentBookingNumber,
            clientName,
            roomType,
            nights,
            cost: this.roomsPricing[roomType] * nights,
            services: [],
            servicesCost: 0,
        };
        this.bookings.push(currentClient);
        this.allAvailableRooms[roomType]--;
        return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber++}.`
    }

    roomService(currentBookingNumber, serviceType) {
        let booking = this.bookings.find(b => b.bookNumber === currentBookingNumber);
        if (!booking) {
            return `The booking ${currentBookingNumber} is invalid.`
        }
        if (!this.servicesPricing.hasOwnProperty(serviceType)) {
            return `We do not offer ${serviceType} service.`
        }

        booking.services.push(serviceType);
        booking.servicesCost = booking.servicesCost + this.servicesPricing[serviceType];
        return `Mr./Mrs. ${booking.clientName}, Your order for ${serviceType} service has been successful.`;
    }

    checkOut(currentBookingNumber) {
        let currentBooking = this.bookings.find(b => b.bookNumber === currentBookingNumber);
        if (!currentBooking) {
            return `The booking ${currentBookingNumber} is invalid.`
        }
        if (currentBooking.servicesCost < 0) {
            return `We hope you enjoyed your time here, Mr./Mrs. ${currentBooking.clientName}. The total amount of money you have to pay is ${currentBooking.cost} BGN.`
        } else {
            return `We hope you enjoyed your time here, Mr./Mrs. ${currentBooking.clientName}. The total amount of money you have to pay is ${currentBooking.cost + currentBooking.servicesCost} BGN. You have used additional room services, costing ${currentBooking.servicesCost} BGN.`
        }
    }

    report() {
        let output = '';
        output += `${this.name.toUpperCase()} DATABASE:\n`;
        output += `${'-'.repeat(20)}\n`;
        if (this.bookings.length === 0) {
            output += 'There are currently no bookings.';
            return output;
        }
        this.bookings.forEach(x => {
            output += `bookingNumber - ${x.bookNumber}\n`;
            output += `clientName - ${x.clientName}\n`;
            output += `roomType - ${x.roomType}\n`;
            if (x.bookNumber === this.currentBookingNumber - 1 && x.servicesCost <= 0) {
                output += `nights - ${x.nights}`;
            } else {
                output += `nights - ${x.nights}\n`;
            }

            if (x.servicesCost > 0) {
                if (this.currentBookingNumber - 1 === x.bookNumber) {
                    output += `services: ${x.services.join(', ')}`;
                } else {
                    output += `services: ${x.services.join(', ')}\n`;
                }
            }

            if (x.bookNumber !== this.currentBookingNumber - 1)
                output += `${'-'.repeat(10)}\n`;
        });

        return output;
    }
    
}

let hotel = new Hotel('Hostel', 10);
// console.log(hotel.rentARoom('Ivan', 'maisonette', 3));
// console.log(hotel.rentARoom('Goshe', 'maisonette', 3));
// console.log(hotel.rentARoom('Goshe', 'double', 1));


// console.log(hotel.roomService(3, 'food'));
// console.log(hotel.roomService(3, 'housekeeping'));
// console.log(hotel.checkOut(3));

console.log(hotel.report());
