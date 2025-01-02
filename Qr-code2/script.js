const generateBtn = document.querySelector("form button");
const qrCodeBox = document.querySelector(".qr-code");
const qrInput = document.querySelector("form input");
const qrImage = document.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    const inputValue = qrInput.value;
    if (!inputValue) {
        alert("لطفا یک مقدار وارد کنید");
        return;
    }

    generateBtn.innerText = "در حال ایجاد...";
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?data=${inputValue}&size=200x200`;

    qrImage.addEventListener("load", () => {
        qrCodeBox.classList.remove("hidden");
        generateBtn.innerText = "ایجاد کد QR";
        
    });
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
        qrCodeBox.classList.add("hidden");
    }
});
