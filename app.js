const email = "fatmakarpinar46@gmail.com";

function maskEmail(email) {
   const atIndex = email.indexOf("@");
   const userName = email.slice(0, atIndex);
   const domain = email.slice(atIndex);
   const firstChar = userName[0];
   const lastChar = userName[userName.length-1];
   const starsCount = userName.length-2;
   const stars = "*".repeat(starsCount);
   const maskedUserName = firstChar + stars + lastChar;

return maskedUserName + domain;
}  

console.log(maskEmail(email));