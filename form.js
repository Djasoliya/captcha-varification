function genetarteCaptcha() {
  captchavalue = btoa(Math.trunc(Math.random() * 1000000000));
  captchavalue = captchavalue.substring(0, 6 + Math.random() * 4);
  document.getElementById("cap1").innerHTML = captchavalue;
}
function log() {
  var userInput = document.getElementById("cap2").value;
  var generatedCaptcha = document.getElementById("cap1").innerHTML;
  if (userInput == generatedCaptcha) {
    alert("Login succes");
    document.getElementById("cap2").value = " ";
  document.getElementById("cap1").innerHTML =" ";
  } else {
    alert("Login failed");
    genetarteCaptcha() ;
  }
  
}

// (function () {
//   const fonts = ["cursive", "sans-serif", "serif", "monospace"];
//   let captchavalue = "";
//   function generateCaptcha() {
//     let value = btoa(Math.random() * 1000000000);
//     value = value.substring(0, 5 + Math.random() * 5);
//     captchavalue = value;
//   }alert(captchavalue);
//   function setCaptcha() {
//         captchavalue.split(" ").map((char) => {
//         const rotate = -20 + Math.trunc(Math.random() * 30);
//         const font = Math.trunc(Math.random() * fonts.length);
//         return `<span
//   style="
//   transform:rotate(${rotate}deg);
//   font-family:${fonts[font]}"
//   >${char}</span>`;
//       }).join("");
//     document.querySelector("#cap1").innerHTML = html;
//   }
//   function initCaptcha() {
//     document.querySelector(".captcha-refresh").addEventListener("click", function () {
//         generateCaptcha();
//         setCaptcha();
//       });
//     generateCaptcha();
//     setCaptcha();
//   }
//   initCaptcha();
//   document.querySelector(".login").addEventListener("click" , function(){
//     let inputCaptchavalue = document.querySelector(".captcha-input").value;
//     if(inputCaptchavalue===captchavalue){
//         swal(" ", "logging in", "succses");
//     }
//     else{
//         swal("invalid captcha");
//     }
//   });
// })();

// function generateCaptcha() {
//     var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
//     var length = 6;
//     var captcha = "";
//     for (var i = 0; i < length; i++) {
//       var randomNum = Math.floor(Math.random() * chars.length);
//       captcha += chars.substring(randomNum, randomNum + 1);
//     }
//     document.getElementById("captchaImage").innerHTML = captcha;
//   }

//   function checkCaptcha() {
//     var userInput = document.getElementById("captcha").value;
//     var generatedCaptcha = document.getElementById("captchaImage").innerHTML;
//     if (userInput == generatedCaptcha) {
//       alert("You entered the correct text!");
//     } else {
//       alert("You entered the wrong text, please try again.");
//       generateCaptcha();
//     }
//   }

//   generateCaptcha();
