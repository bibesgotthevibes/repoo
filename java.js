// document.addEventListener('DOMContentLoaded', function () {
//     // Get all the anchor links in the navbar
//     const navbarLinks = document.querySelectorAll('nav a');

//     // Add click event listeners to each navbar link
//     navbarLinks.forEach(link => {
//         link.addEventListener('click', function (e) {
//             e.preventDefault();

//             // Get the target section's ID from the href attribute
//             const targetId = this.getAttribute('href').substring(1);

//             // Scroll to the target section smoothly
//             document.getElementById(targetId).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     });
// });
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        document.querySelector('.content').style.transform = 'translate(0, 0)';
    }, 1000); // Adjust the delay as needed
});
function openSocialMedia(url) {
    window.open(url, '_blank');
}
function Myfunction(){
    document.body.classList.toggle("darkmode_and_lightmode");
}
function scrollToSection(sectionId) {
    var targetSection = document.getElementById(sectionId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
}