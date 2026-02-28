/*
    Name: Zia A Ali
    Date Created: 2/26/2026
    Date Modified: 2/26/2026
    Purpose: JS file for HW 1
*/

const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

let slider = document.getElementById("range");
    let output = document.getElementById("range-slider");
    output.innerHTML = slider.value;

    slider.oninput = function () {
    output.innerHTML = this.value;};