let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add ('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// message
const form = document.querySelector('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const message = document.getElementById('message');



function sendEmail() {
    const bodyMessage = `name: ${name.value}<br> email: ${email.value}<br> phone: ${phone.value}<br> message: ${message.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "fikriramdani225@gmail.com",
        Password : "1EE8D86756D03D444CE75C47838D4EFCC5DC",
        To : 'fikriramdani225@gmail.com',
        From : "fikriramdani225@gmail.com",
        Subject :subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Success",
                text: "Terimakasih atas pesannya",
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
        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    sendEmail();
});

