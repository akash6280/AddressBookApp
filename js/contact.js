const nameRegex = RegExp("^[A-Z]{1}[a-zA-Z]{2,}$");
const phoneNumberRegex = RegExp("^([+][0-9]{3}|[0-9]{2})?[1-9]{1}[0-9]{9}$");
const addressRegex= RegExp('^[a-zA-Z0-9]{3,}([\\s]?[a-zA-Z0-9]{3,})*$')
const zipRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");

class ContactData {

    id ;
    
    get name() { 
        return this._name; 
    }
    set name(name) {
        if(nameRegex.test(name))
            this._name = name;
        else throw 'Invalid name';
    }

    get phoneNumber() { 
        return this._phoneNumber; 
    }

    set phoneNumber(phoneNumber) {
        if(phoneNumberRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else throw 'Invalid phone number';
    }

    get address() { 
        return this._address;
    }
    set address(address){
        if(addressRegex.test(address))
            this._address = address;
        else throw 'Invalid address';
    }

    get city() { 
        return this._city;
    }
    set city(city) {
        this._city = city;
    }

    get state() { 
        return this._state
    }
    set state(state) {
        this._state = state;
    }

    get zipcode() { 
        return this._zipcode;
    }
    set zipcode(zipcode) {
        if(zipRegex.test(zipcode))
        this._zipcode = zipcode;
        else throw 'Invalid zipcode number';
       
    }
    
    toString() {
        return "ID= "+this.id+",Name= " + this.name + ",Phone Number= " + this.phoneNumber + ",Address= " + this.address + ",City= " + this.city + ",State=" 
                + this.state + ",Zip code= " + this.zipcode;
    }
} 
