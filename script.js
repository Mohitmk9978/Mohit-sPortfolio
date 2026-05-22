// Initialize EmailJS
emailjs.init("BPy32oQKJ53xs9aKg");


// CONTACT FORM

document
  .getElementById("contact-form")
  .addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Send Email
    emailjs.sendForm(
      "service_kdm0e87",
      "template_imep7pb",
      this,
      "BPy32oQKJ53xs9aKg"
    )

    .then(() => {

      alert("Message Sent Successfully!");

      // Reset form
      this.reset();

    })

    .catch((error) => {

      console.log(error);

      alert("Failed to send message");

    });

});



//  DARK MODE 

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  if(document.body.classList.contains("dark-mode")){

    toggleBtn.innerHTML = "☀️ Light Mode";

  } else {

    toggleBtn.innerHTML = "🌙 Dark Mode";

  }

});

// TYPING ANIMATION

var typed = new Typed("#typing-text", {

    strings: [
      "MERN Stack Developer",
      "AI Enthusiast",
      "Full Stack Engineer",
      "Frontend Developer"
      
    ],
  
    typeSpeed: 70,
  
    backSpeed: 50,
  
    backDelay: 1500,
  
    loop: true
  
  });

  // AOS ANIMATION

AOS.init({
  duration: 1200,
  once: true
});


window.addEventListener("load", () => {

  setTimeout(() => {

    document.getElementById("loader").style.display = "none";

    document.getElementById("content").style.display = "block";

  }, 1500); // 1.5 seconds

});