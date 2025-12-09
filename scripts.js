function Send()
{
    document.getElementById("sent").innerHTML = "Gönderildi!"

}
setTimeout(() => {
  document.getElementById("sent").classList.add("fade-out");
}, 2000);
