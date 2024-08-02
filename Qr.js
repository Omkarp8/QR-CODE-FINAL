let img = document.getElementById("img");
let qrTxt = document.getElementById("qrTxt");
let qrImg = document.getElementById("qrImg");

   img ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
function GenerateQR(){
  if (qrTxt.value.length > 0 ){
      
      qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrTxt.value;

}
}