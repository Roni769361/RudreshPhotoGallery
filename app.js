// document.getElementById("clickGallery").addEventListener("click",)

function clickGallery(){
    document.getElementById("topHeader").style.display='none';
    document.getElementById("marriage").style.display='none';
    document.getElementById("other").style.display='none';
    document.getElementById("gallary").style.display='block';
    document.getElementById("galleryfit").style.display='block';
}
function home(){
    document.getElementById("gallary").style.display = 'none';
    document.getElementById("galleryfit").style.display = 'none';
    document.getElementById("other").style.display='none';
    document.getElementById("marriage").style.display='none';
    document.getElementById("topHeader").style.display = 'block';

}
function logout(){
    document.getElementById("gallary").style.display = 'none';
    document.getElementById("galleryfit").style.display = 'none';
    document.getElementById("HomeText").style.display = 'none';
    document.getElementById("other").style.display='none';
    document.getElementById("marriage").style.display='none';
    document.getElementById("topHeader").style.display = 'block';
    document.getElementById("loging").style.display = 'block';

}

function marriage(){
    document.getElementById("topHeader").style.display='none';
    document.getElementById("other").style.display='none';
    document.getElementById("galleryfit").style.display='none';
    document.getElementById("gallary").style.display='block';
    document.getElementById("marriage").style.display='block';
}

function other(){
    document.getElementById("topHeader").style.display='none';
    document.getElementById("marriage").style.display='none';
    document.getElementById("galleryfit").style.display='none';
    document.getElementById("gallary").style.display='block';
    document.getElementById("other").style.display='block';
}


function sinin(){

    const email = document.getElementById("form2Example1").value;
    const pass = document.getElementById("form2Example2").value;

    if(email == "Rudresh" && pass == "769361"){
        document.getElementById("HomeText").style.display = 'block';
        document.getElementById("loging").style.display = 'none';

    }
    else{
        alert("Sorry, User ID or Pass Code Not Match. Please Try Again.")
    }

}