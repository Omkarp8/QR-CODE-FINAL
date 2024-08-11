let img = document.getElementById("img");
let qrTxt = document.getElementById("qrTxt");
let qrImg = document.getElementById("qrImg");
let downloadBtn = document.getElementById("downloadBtn")

function GenerateQR() {
  if (qrTxt.value.length > 0) {

    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrTxt.value;

  }
}


const forEmailButton = document.getElementById('forEmailButton');
forEmailButton.addEventListener('click', function(){
  
  qrTxt.placeholder='Enter Email URL';

});

const forGoogleMap = document.getElementById('forGoogleMap');
forGoogleMap.addEventListener('click', function(){
  
  qrTxt.placeholder='Add your Google map link here';

});
const forInstagram = document.getElementById('forInstagram');
forInstagram.addEventListener('click', function(){
  
  qrTxt.placeholder='Add your Account name link here';

});
const forWhatsapp = document.getElementById('forWhatsapp');
forWhatsapp.addEventListener('click', function(){
  
  qrTxt.placeholder='Add your Whatsapp link here';

});
const forTwitter = document.getElementById('forTwitter');
forTwitter.addEventListener('click', function(){
  
  qrTxt.placeholder='Add your Twitter link here';

});
const forLinkedIn = document.getElementById('forLinkedIn');
forLinkedIn.addEventListener('click', function(){
  
  qrTxt.placeholder='Add your LinkedIn link here';

});