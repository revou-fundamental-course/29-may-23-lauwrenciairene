var nama = prompt("Masukkan nama kamu");
document.getElementById("nama").innerText = nama;
console.log(nama);

function validateForm() {
    var currentTime = new Date().toLocaleString(); // Get the current time
    var name = document.forms ["message-form"] ["full-name"] .value;
    var birthDate = document.forms ["message-form"] ["birth-date"] .value;
    var gender = document.forms ["message-form"] ["gender"] .value;
    var messages = document.forms ["message-form"] ["messages"] .value;

    if (name == "" || birthDate == "" || gender == "" || messages == "") {alert ("Tidak boleh ada yang kosong");
    return false;}


setSenderUI (currentTime, name, birthDate, gender, messages);

return false;
}

function setSenderUI (currentTime, name, birthDate, gender, messages) {
    document.getElementById("current-time").innerText = currentTime; // Display the submission time
    document.getElementById("sender-full-name") .innerText = name;
    document.getElementById("sender-birth-date") .innerText = birthDate;
    document.getElementById("sender-gender") .innerText = gender;
    document.getElementById("sender-messages") .innerText = messages;
}