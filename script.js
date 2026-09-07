document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.querySelector('input[name="name"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let phone = document.querySelector('input[name="phone"]').value;

    if (name === "" || email === "" || phone === "") {
        alert("Please fill all the required fields!");
        return;
    }

    if (phone.length !== 10) {
        alert("Please enter a valid 10-digit phone number!");
        return;
    }

    alert("Student Registration Successful!");
});
