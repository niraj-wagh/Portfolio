
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") === "#" + current) {
            a.classList.add("active");
        }
    });
});

(function(){
    emailjs.init("IC6sRdKcb4NVGCEv0"); // 🔴 replace
})();
function openPopup() {
    document.getElementById("contactPopup").style.display = "flex";
    document.body.classList.add("popup-open");
}

function closePopup() {
    document.getElementById("contactPopup").style.display = "none";
    document.body.classList.remove("popup-open");
}

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        ("service_eoyh3hq"),   // 🔴 replace
       ("template_fmxunns"),  // 🔴 replace
        this
    ).then(() => {
        document.getElementById("status").innerText = "✅ Message sent successfully!";
        this.reset();
    }, () => {
        document.getElementById("status").innerText = "❌ Failed to send message!";
    });
});
