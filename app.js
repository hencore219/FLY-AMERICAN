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
}

function bagtag(){
    alert('printing tags');
    if(confirm(prompt("") + "how many tags?"));
}