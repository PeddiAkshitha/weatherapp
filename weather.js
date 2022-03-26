let req=new XMLHttpRequest();
//open a connection
req.open('GET','https://api.openweathermap.org/data/2.5/weather?q=manhattan&appid=93f26e3c57081a6210de53b8dcfdfea4',true);
req.onload=function fun(){
    if(req.status>=200 && req.status<400){
        //get the data
        console.log("Login successful");
        let data=JSON.parse(req.responseText);

        let imgsrc='https://openweathermap.org/img/w/'+data.weather[0].icon+'.png';
        document.getElementById('mypara').innerHTML=data.main.temp+'F';
        document.getElementById('myimg').src=imgsrc;
        console.log(data);

    }
    else{
        console.log("couldnot load the data");
    }
}

// if any error is present
req.onerror=function fun1(){
    console.log("Error!!! carefull");
}

//sends the request
req.send();