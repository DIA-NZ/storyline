function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5k65hbAPLlb":
        Script1();
        break;
      case "6jOWGgeRfOa":
        Script2();
        break;
  }
}

function Script1()
{
  var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear();
var player = GetPlayer();
var newName = month + "/" + day + "/" +year
player.SetVar("DateValue", newName);
}

function Script2()
{
  var currentTime = new Date()
var hours = currentTime.getHours()
var minutes = currentTime.getMinutes()
var seconds = currentTime.getSeconds()

var CurTime = hours+":"+minutes+":"+seconds
player.SetVar("TimeValue",CurTime);

 
}

