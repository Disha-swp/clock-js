function DateTime(){
   // tz = 'Africa/Juba';
   tz = f1.tz.options[f1.tz.options.selectedIndex].value;
    str = new Date().toLocaleString("en-Nz",{timeZone:tz,timeZoneName:"short"})
    document.getElementById('timer').innerHTML = str+"  "+tz;
    setInterval(DateTime,1000);
}
var mytimeZone = ['Indian/Mahe','Africa/Khartoum','Europe/Stockholm'];
function addoption(selectbox,text,value)
{
    var optn = document.createElement("option");
    optn.text = text;
    optn.value = value;
    selectbox.options.add(optn);
}
for(i=0 ; i<mytimeZone.length;i++)
{
    addoption(document.f1.tz,mytimeZone[i],mytimeZone[i]);
}
// function DateTime(){
// let a = new Date();
// let hour = a.getHours();      //worls for both 01 hour and 15 hours
// let time = (hour<10 ? ("0"+hour):hour) + ":" + (a.getMinutes()<10?("0"+a.getMinutes()):a.getMinutes()) + ":" +(a.getSeconds()<10 ? ("0"+a.getSeconds()):a.getSeconds());
// let date = a.toLocaleDateString();
// document.getElementById('timer').innerHTML = time +" on "+date; 
// }
//

//arrow function
// const options = {weekday: 'long',year: 'numeric',month: 'long',day:'numeric'};
// setInterval( DateTime = ()=> {
//     let a = new Date(); //get hours() here works only when hour is single digit
//     let time = (a.getHours()<10 ?("0"+a.getHours()):getHours()) + ":" + 
//     (a.getMinutes()<10?("0"+a.getMinutes()):a.getMinutes())
//      +":" + (a.getSeconds()<10 ? ("0"+a.getSeconds()):a.getSeconds());
//     let date = a.toLocaleDateString(undefined,options);
//     document.getElementById('timer').innerHTML = time +" <br>on "+date; 
// },1000);


