class Telephone {
    constructor() {
        this.phoneNumbers = new Set();
        this.observers = [];
    }

    addPhoneNumber(number) {
        this.phoneNumbers.add(number);
    }

    removePhoneNumber(number) {
        this.phoneNumbers.delete(number);
    }

    dialPhoneNumber(number) {
        if (this.phoneNumbers.has(number)) {
            console.log(`Dialing ${number}...`);
            this.notifyObservers(number);
        } else {
            console.log(`Error: ${number} is not in the phone book!`);
        }
    }

    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(number) {
        this.observers.forEach(observer => observer.update(number));
    }

}

class Observer {
    update(number) {
        throw new Error("Method 'update' should be implemented");// To be implemented by subclasses
    }
}

class PrintNumberObserver extends Observer {
    update(number) {
        console.log(`${number}`);
    }
}

class NowDialingObserver extends Observer {
    update(number) {
        console.log(`Now Dialing ${number}`);
    }
}

// Example usage
const telephone = new Telephone();
const printObserver = new PrintNumberObserver();
const dialingObserver = new NowDialingObserver();

// Adding observers
telephone.addObserver(printObserver);
telephone.addObserver(dialingObserver);

// Adding numbers
telephone.addPhoneNumber("2347023232");
telephone.addPhoneNumber("1234567890");

// Dialing a number
telephone.dialPhoneNumber("2347023232");
telephone.dialPhoneNumber("9876543210"); // Error: 9876543210 is not in the phone book!
