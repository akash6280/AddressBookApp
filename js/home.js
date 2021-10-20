let contactDataList;
window.addEventListener("DOMContentLoaded", (event) => {
    contactDataList = getContactDataFromStorage();
    document.querySelector(".address-count").textContent = contactDataList.length;
    createInnerHtml();
    localStorage.removeItem('editContact');
});

const getContactDataFromStorage = () => {
    return localStorage.getItem('AddressBookList') ?JSON.parse(localStorage.getItem('AddressBookList')) : [];
}

const createInnerHtml = () => {
    if(contactDataList.length == 0) return;
    const headerHtml = `<tr>
                        <th>FullName</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip code</th>
                        <th>Phone Number</th>
                        </tr>`;                    
    let innerHtml = `${headerHtml}`;
    for(const contactData of contactDataList) {
        innerHtml = `${innerHtml}  
                        <tr>
                        <td>${contactData._name}</td>
                        <td>${contactData._address}</td>
                        <td>${contactData._city}</td>
                        <td>${contactData._state}</td>
                        <td>${contactData._zipcode}</td>
                        <td>${contactData._phoneNumber}</td>
                        <td>
                        <td>
                            <img id="${contactData._id}" onclick="remove(this)" alt="delete"
                            src="../assets/icons/delete-black-18dp.svg" style="padding-right: 5px;">
                            <img id="${contactData._id}" alt="edit" onclick="update(this)"
                            src="../assets/icons/create-black-18dp.svg">
                        </td>
                        </tr>`;
    }
    document.querySelector("#table-display").innerHTML = innerHtml;
}; 