const form = document.querySelector("form");
const fullName = ducument.getElementaryById("name");
const email = ducument.getElementaryById("email");
const phone = ducument.getElementaryById("phone");
const subject = ducument.getElementaryById("subject");
const message = ducument.getElementaryById("message");


function sendEmail() {
    const bodyMessage ='Full name: ${fullName.value}<br> Email: ${email.value}<br> Phone number: ${phone.value}<br> Message: ${mess.value}';

    Email.send({
        SecureToken:"5c744fc7-d306-470b-9b0e-dcc2326dc2b7",
        
        To : 'sahnisimran267@gmail.com',
        From : "sahnisimran267@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message=="OK"){
            Swal.fire({
                title: "Done!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");
    for (const item of items) {
    if (item.value == "") {
    item.classList.add("error");
    item.parentElement.classList.add("error");
    }

    if (items[1].value !=""){
        checkEmail();
    }
    items[1].addEventListener("keyup",() => {
        checkEmail();
    })
    item.addEventListener("keyup", () => {
        if (item.value != "") {
            item.classlist.remove("error");
            item.parentElement.classlist.remove("error");
        }
        else {
             item.classList.add("error");
             item.parentElement.classList.add("error");
            }

        });
    }    
}

function checkEmail(){
    const emailRegex= /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email")
if (!email.value.match(emailRegex)){
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value !=""){
        errorTxtEmail.innerText="enter a valid email address";
    }
    else{
        errorTxtEmail.innerText="emailaddress cant be left blank"; 
    }
}
else{
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
}
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error") 
    && !!email.classList.contains ("error") 
&& !phone.classList.contains("error") 
&& !subject.classList. contains("error") 
&& !mess.classList.contains("error")) {
        sendEmail();
        form.reset(); 
        return false;
}
});