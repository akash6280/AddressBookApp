window.addEventListener('DOMContentLoaded',(event) => {

    const name = document.querySelector('#name');
    const nameError = document.querySelector('.name-error');
    name.addEventListener('input',function(){
        if(name.value.length == 0){
            nameError.textContent = "";
            return;
        }
        try{
            new AddressBookData().name=name.value;
            nameError.textContent="";
            
        } catch(e){
            nameError.textContent = e;
        }
    });

    const phoneNumber = document.querySelector('#phoneNumber');
    const phoneNumberError = document.querySelector('.phoneNumber-error');
    phoneNumber.addEventListener('input', function () {
        if (phoneNumber.value.length == 0) {
            phoneNumberError.textContent = "";
            return;
        }
        try {
            (new AddressBookData()).phoneNumber = phoneNumber.value;
            phoneNumberError.textContent = "";
        } catch (e) {
            phoneNumberError.textContent = e;
        }
    });

    const address = document.querySelector('#address');
    const addressError = document.querySelector('.address-error');
    address.addEventListener('input', function () {
        if (address.value.length == 0) {
            addressError.textContent = "";
            return;
        }
        try {
            (new AddressBookData()).address = address.value;
            addressError.textContent = "";
        } catch (e) {
            addressError.textContent = e;
        }
    });

    const form=document.querySelector('.form');
    form.addEventListener('click',function(){
        document.getElementById('submitButton').disabled = false;
    });
});

const save = () => {

    try{
        let addressBookData = createAddressBookDataObject();
    }catch(e){
        return;
    }
};

const createAddressBookDataObject = () => {
    let addressBookDataObject = new AddressBookData();
    try {
        addressBookDataObject.id = new Date().getTime();
        addressBookDataObject.name = getInputValueById('#name');
        addressBookDataObject.phoneNumber = getInputValueById("#phoneNumber");
        addressBookDataObject.address = getInputValueById('#address');
        addressBookDataObject.tate = getInputValueById("#state");
        addressBookDataObject.city = getInputValueById("#city");
        addressBookDataObject.zipcode= getInputValueById("#zipCode");
        console.log(addressBookDataObject.toString());
    } catch (e) {
        console.log(e);
    }
    return addressBookDataObject;

}


function getInputValueById(property) {
    let value = document.querySelector(property).value;
    return value;
} 


 