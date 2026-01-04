//your JS code here. If required.
function showAlert(e) {
      e.preventDefault(); // stop page refresh

      let fname = document.getElementById("fname").value;
      let lname = document.getElementById("lname").value;
      let phone = document.getElementById("phone").value;
      let email = document.getElementById("email").value;

      alert(
        "First Name: " + fname + "\n" +
        "Last Name: " + lname + "\n" +
        "Phone Number: " + phone + "\n" +
        "Email ID: " + email
      );
    }