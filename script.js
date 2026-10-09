
/* =========================
   HAMBURGER MENU
========================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton) {

    menuButton.addEventListener("click", function () {

        navLinks.classList.toggle("show");

    });

}


/* =========================
   MENU CATEGORY FILTER
========================= */

const categoryButtons =
    document.querySelectorAll(".category-button");

const menuCards =
    document.querySelectorAll(".menu-card");


categoryButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        /* Get the category that was clicked */

        const category =
            button.getAttribute("data-category");


        /* Change active button */

        categoryButtons.forEach(function(button) {

            button.classList.remove("active-category");

        });

        button.classList.add("active-category");


        /* Show or hide food cards */

        menuCards.forEach(function(card) {

            const cardCategory =
                card.getAttribute("data-category");


            if (category === "all" ||
                category === cardCategory) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        /* Stop the page from refreshing */

        event.preventDefault();


        /* Get form values */

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();

        const formMessage =
            document.getElementById("formMessage");


        /* Check if fields are empty */

        if (name === "" ||
            email === "" ||
            message === "") {

            formMessage.textContent =
                "Please fill in all the fields.";

            formMessage.style.color = "red";

            return;
        }


        /* Simple email check */

        if (!email.includes("@")) {

            formMessage.textContent =
                "Please enter a valid email address.";

            formMessage.style.color = "red";

            return;
        }


        /* Successful submission */

        formMessage.textContent =
            "Thank you! Your message has been received.";

        formMessage.style.color = "green";


        /* Clear the form */

        contactForm.reset();

    });

}

