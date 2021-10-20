const checkName = (name) => {
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(!nameRegex.test(name)) throw 'Invalid Name';
}

const checkPhoneNumber = (phoneNumber) => {
    let phoneNumberRegex = RegExp("^([+][0-9]{3}|[0-9]{2})?[1-9]{1}[0-9]{9}$");
    if(!phoneNumberRegex.test(phoneNumber)) throw 'Invalid Phone Number';
}

const checkAddress = (address) => {
    let addressRegex = RegExp('^[a-zA-Z0-9]{3,}([\\s]?[a-zA-Z0-9]{3,})*$');
    if(!addressRegex.test(address)) throw 'Invalid Address';
}

const checkZipCode = (zipCode) => {
    let zipCodeRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
    if(!zipCodeRegex.test(zipCode)) throw 'Invalid Zipcode';
}