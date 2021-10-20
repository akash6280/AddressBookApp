window.addEventListener('DOMContentLoaded',(event) => {

    const name = document.querySelector('#name');
    const nameError = document.querySelector('.name-error');
    name.addEventListener('input',function(){
        if(name.value.length == 0){
            nameError.textContent = "";
            return;
        }
        try{
            new ContactData().name=name.value;
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
            new ContactData().phoneNumber = phoneNumber.value;
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
            new ContactData().address = address.value;
            addressError.textContent = "";
        } catch (e) {
            addressError.textContent = e;
        }
    });

    const zip = document.querySelector('#zip');
    const zipError = document.querySelector('.zip-error');
    zip.addEventListener('input', function () {
        if (zip.value.length == 0) {
            zipError.textContent = "";
            return;
        }
        try {
            ( new ContactData()).zipcode = zip.value;
            zipError.textContent = "";
        } catch (e) {
            zipError.textContent = e;
        }
    });


    const form=document.querySelector('.form');
    form.addEventListener('click',function(){
        document.getElementById('submitButton').disabled = false;
    });
});

const save = () => {

    try{
        let contactData = createContactDataObject();
        createAndUpdateStorage(contactData);
        open("../pages/addressbook_home.html");
    }catch(e){
        return;
    }
};

function createAndUpdateStorage(contactData){
    let contactDataList = JSON.parse(localStorage.getItem("ContactDataList"));
    if(contactDataList != undefined){
        contactDataList.push(contactData);
    }else{
        contactDataList = [contactData];
    }
    
    localStorage.setItem("ContactDataList",JSON.stringify(contactDataList));
}
const createContactDataObject = () => {
    let contactDataObject = new ContactData();
    try {
        contactDataObject.id = createNewContactId();
        contactDataObject.name = getInputValueById('#name');
        contactDataObject.phoneNumber = getInputValueById("#phoneNumber");
        contactDataObject.address = getInputValueById('#address');
        contactDataObject.state = getInputValueById("#state");
        contactDataObject.city = getInputValueById("#city");
        contactDataObject.zipcode= getInputValueById("#zip");
        console.log(contactDataObject.toString());
        alert(contactDataObject.toString());
    } catch (e) {
        console.log(e);
    }
    return contactDataObject;

}
const createNewContactId = () => {
    let contactID = localStorage.getItem("ContactId");
    contactID = !contactID ? 1 : (parseInt(contactID)+1).toString();
    localStorage.setItem("ContactId",contactID);
    return contactID;
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
    setValue("#zip","");
     setTextValue('.name-error','');
    setTextValue('.phoneNumber-error','');
    setTextValue('.address-error','');
    setTextValue('.zip-error',"");
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
} 


const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

 