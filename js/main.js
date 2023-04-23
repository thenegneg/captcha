/* alert("Please enter the security code") */
let captch = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
let clickMe = document.querySelector("button.click");
let divCaptcha = document.querySelector("div.captcha");
let capt = document.querySelector("input#capt");
clickMe.addEventListener("click", function () {
  generateData();
});
let captBtn = document.querySelector("button.captBtn");
captBtn.addEventListener("click", function () {
  if (capt.value === generate) {
    console.log("ok");
    document.querySelector("div.footer").innerHTML="Great :D thanks"
  } else {
    console.log("not-ok");
    document.querySelector("div.footer").innerHTML="Ooops, please try again"
    generateData();
  }
});
function generateData() {
  generate =
    captch.charAt(Math.random() * 61) +
    captch.charAt(Math.random() * 61) +
    captch.charAt(Math.random() * 61) +
    captch.charAt(Math.random() * 61) +
    captch.charAt(Math.random() * 61);
  divCaptcha.innerText = generate;
}
