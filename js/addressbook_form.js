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
        createAndUpdateStorage(addressBookData);
    }catch(e){
        return;
    }
};

function createAndUpdateStorage(addressBookData){
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if(addressBookList != undefined){
        addressBookList.push(addressBookData);
    }else{
        addressBookList = [addressBookData];
    }
    
    localStorage.setItem("AddressBookList",JSON.stringify(addressBookList));
}
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

const resetForm=()=>{
    setValue("#name","");
    setValue("#phoneNumber","");
    setValue("#address","");
    setValue("#state","");
    setValue("#city","");
    setValue("#zipCode","");
    setTextValue('.name-error','');
    setTextValue('.phoneNumber-error','');
    setTextValue('.address-error','');
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
} 


const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

 