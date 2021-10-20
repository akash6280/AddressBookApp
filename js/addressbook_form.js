let isUpdate = false;
let contactDataObject = {};
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

    checkForUpdate();
});

const save = (event) => {
    event.preventDefault();
    event.stopPropagation();

    try{
        setContactDataObject();
        createAndUpdateStorage();
        resetForm();
        window.location.replace(site_properties.home_page);
    }catch(e){
        return;
    }
};

function createAndUpdateStorage(){
    let contactDataList = JSON.parse(localStorage.getItem("ContactDataList"));
    if(contactDataList){
      let contactData = contactDataList.find(contact => contact.id == contactDataObject.id);
      if(!contactData) {
        contactDataList.push(contactDataObject);
      }
      else {
        const index = contactDataList.map(contact => contact.id)
                                         .indexOf(contactData.id);
        contactDataList.splice(index, 1, contactDataObject);
      }
    }
    else{
      contactDataList = [contactDataObject];
    }
    localStorage.setItem("ContactDataList",JSON.stringify(contactDataList));
}

const setContactDataObject = () => {
        if(!isUpdate)contactDataObject.id=createNewContactId();
        contactDataObject._name = getInputValueById('#name');
        contactDataObject._phoneNumber = getInputValueById("#phoneNumber");
        contactDataObject._address = getInputValueById('#address');
        contactDataObject._state = getInputValueById("#state");
        contactDataObject._city = getInputValueById("#city");
        contactDataObject._zipcode= getInputValueById("#zip");

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

const checkForUpdate = () => {
    const contactJson = localStorage.getItem('editContact');
    isUpdate = contactJson ? true : false;
    if(!isUpdate) return;
    contactDataObject = JSON.parse(contactJson);
    setForm();
}

const setForm = () => {
    setValue('#name',contactDataObject._name);
    setValue('#phoneNumber',contactDataObject._phoneNumber);
    setValue('#address',contactDataObject._address);
    setValue('#city',contactDataObject._city);
    setValue('#state',contactDataObject._state);
    setValue('#zip',contactDataObject._zipcode);
}

 