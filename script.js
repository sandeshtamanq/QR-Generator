const qrForm = document.querySelector("#url-form");
const url = document.querySelector("#url");
qrForm.addEventListener("submit", (e) => {
  e.preventDefault();
  clearUI();
  const urlValue = url.value;

  if (urlValue === "") {
    alert("Please Enter a url");
  } else {
    generateQrCode(urlValue);
    setTimeout(() => {
      const qrUrl = document.querySelector("#qrcode").querySelector("img").src;
      saveBtn(qrUrl);
    }, 40);
  }
});

const generateQrCode = (url) => {
  const qrcode = new QRCode(document.getElementById("qrcode"), {
    text: url,
    width: 400,
    height: 400,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
};

function clearUI() {
  document.querySelector("#qrcode").innerHTML = "";
  const saveLink = document.querySelector("#link");
  if (saveLink) {
    console.log("here");
    saveLink.remove();
  }
}

function saveBtn(url) {
  const btnSave = document.createElement("a");
  (btnSave.id = "link"), (btnSave.classList = "bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-full block text-center m-auto my-5");
  btnSave.href = url;
  btnSave.download = document.querySelector("#qrcode");
  btnSave.innerHTML = "Save QR";
  document.querySelector(".generated").appendChild(btnSave);
}
