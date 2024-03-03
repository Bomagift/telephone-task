class Telephone {
  constructor() {
    this.phoneNumbers = [];
    this.observers = [];
  }
  addObserver(observer) {
    this.observers.push(observer);
  }
  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }
  notifyObservers(phoneNumber) {
    this.observers.forEach((observer) => observer.notify(phoneNumber));
  }
  addPhoneNumber(phoneNumber) {
    this.phoneNumbers.push(phoneNumber);
  }
  removePhoneNumber(phoneNumber) {
    const remove = this.phoneNumbers.indexOf(phoneNumber);
    if (remove !== -1) {
      this.phoneNumbers.splice(remove, 1);
    }
  }
  dialPhoneNumber(phoneNumber) {
      this.notifyObservers(phoneNumber);
    
    }
  
}
class Observer {
  notify(phoneNumber) {}
}
class PrintPhoneNumberObserver extends Observer {
  notify(phoneNumber) {
    console.log(`Dialling ${phoneNumber}`);
  }
}
class customPrintObserver extends Observer {
  notify(phoneNumber) {
    console.log(`Now Dialling ${phoneNumber}`);
  }
}
 // Example usage
const telephone = new Telephone();
const observer1 = new 
PrintPhoneNumberObserver();
const observer2 = new 
customPrintObserver();
telephone.addObserver(observer1);
telephone.addObserver(observer2);
telephone.addPhoneNumber("2347023232");
telephone.dialPhoneNumber("Now Dialing 2347023232");
