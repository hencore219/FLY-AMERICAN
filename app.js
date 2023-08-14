function exit(){
    alert('Exiting Session');
    if(confirm("are you sure you want to exit?"))
    {
        window.location="https://google.com";
    }
    else{
        window.location="index.html";
    }
}

function checkin(){
    alert('checking in');
    if(confirm("checking in..."))
    {
        window.location="\Desktop\FLY AMERICAN";
    }
}

function bagtag(){
    alert('printing tags');
    if(confirm(prompt("") + "how many tags?"));
}