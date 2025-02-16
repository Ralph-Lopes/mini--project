// function toggleDropdown(id) {
//     const dropdown = document.getElementById(id);
//     if (dropdown.style.display === "none" || dropdown.style.display === "") {
//         dropdown.style.display = "block";
//     } else {
//         dropdown.style.display = "none";
//     }
// }

// // Close dropdowns when clicking outside
// document.addEventListener("click", function (event) {
//     const dropdowns = document.querySelectorAll(".airport-list, .calendar, .passenger-list");
//     dropdowns.forEach((dropdown) => {
//         if (!dropdown.contains(event.target) && !dropdown.previousElementSibling.contains(event.target)) {
//             dropdown.style.display = "none";
//         }
//     });
// });