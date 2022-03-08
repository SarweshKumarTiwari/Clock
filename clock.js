console.log("this is a clock");
const time=document.getElementById("time");
const setdate=document.getElementById("date");
const mounthNames=["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
const dayNames=["Sun","Mon","Tue","Wed","Thr","Fri","Sat"];
setInterval(() => {
    const date=new Date();
    hour=alwaysTens(date.getHours());
    minute=alwaysTens(date.getMinutes());
    seconds=alwaysTens(date.getSeconds());
    Year=date.getFullYear();
    month=mounthNames[date.getMonth()];
    day=dayNames[date.getDay()];
    n=date.getDate();
    time.innerHTML=`${hour}:${minute}:${seconds}`;
    setdate.innerHTML=`${day},${n},${month}<br>${Year}`;
}, 1000);
function alwaysTens(params) {
    if(params<10){
        return "0"+String(params);
    }
    else{
        return params;
    }
}