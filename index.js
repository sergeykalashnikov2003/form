let text333 = document.getElementById("text333");
let button = document.getElementById("button333");
let company = document.getElementById("company");
let email = document.getElementById("email");
let areacode = document.getElementById("areacode");
let phonenumber = document.getElementById("phonenumber");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let select = document.getElementById("select");
let yes = document.getElementById("yes");
let no = document.getElementById("no");
let radio = document.getElementsByName("or");


button.addEventListener("click", function(){ 
if (firstname.value && lastname.value && company.value){
text333.innerText += `Firstname: ${firstname.value}\n Lastname:${lastname.value}\nCompany:${company.value}\n Email: ${email.value}\nArea code: ${areacode.value}\n Phone number: ${phonenumber.value}\n Select: ${select.options[select.selectedIndex].text}\n Existing customer: ${getRadioName()}\n`
}
});


function getRadioName() {
for (let i = 0; i < radio.length; i++) {
if(radio[i].checked) {
return radio[i].value;
}
}
}