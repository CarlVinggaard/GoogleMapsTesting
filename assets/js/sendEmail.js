function sendMail(contactForm) {
    var templateParams = {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
            };

    emailjs.send("gmail", "email_template", templateParams)
    .then(
        function(response) {
            console.log("Success!", response);
        }, function(error) {
            console.log("Error!", error);
        }
    )
}


            