/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let inputEl = document.getElementById("input-el");
let btnEl = document.getElementById("btn-el");
let lenEl = document.getElementById("len-el");
let volEl = document.getElementById("vol-el");
let massEl = document.getElementById("mass-el");

btnEl.addEventListener("click", function () {
  convLength();
  convVolume();
  convMass();
});

function convLength() {
  let meterValue = inputEl.value * 3.281;
  let feetValue = inputEl.value / 3.281;

  lenEl.innerHTML = `
            <p class="sub-text" >
                 ${inputEl.value} meters = ${meterValue.toFixed(3)} | 
                 ${inputEl.value} feet = ${feetValue.toFixed(3)}
              </p>`;
}

function convVolume() {
  let literValue = inputEl.value * 0.264;
  let gallonValue = inputEl.value / 0.264;

  volEl.innerHTML = `
              <p class="sub-text" >
                   ${inputEl.value} liters = ${literValue.toFixed(3)} | 
                   ${inputEl.value} gallons = ${gallonValue.toFixed(3)}
                </p>`;
}

function convMass() {
  let kiloValue = inputEl.value * 2.204;
  let poundsValue = inputEl.value / 2.204;

  massEl.innerHTML = `
                <p class="sub-text" >
                     ${inputEl.value} kilos = ${kiloValue.toFixed(3)} | 
                     ${inputEl.value} pounds = ${poundsValue.toFixed(3)}
                  </p>`;
}
