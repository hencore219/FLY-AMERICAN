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
        window.location="http://127.0.0.1:5500/Fly%20american%20check%20in%20page/index.html"
    }

}