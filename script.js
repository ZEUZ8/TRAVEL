let mybutton=document.getElementById("myBtn");

window.onscroll = function sinan(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
}

function up(){
    document.documentElement.scrollTop = 0;
}


function popup(){
    alert("CREAT AN ACCOUNT FIRST")
}





