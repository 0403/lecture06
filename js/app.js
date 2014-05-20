var alarmF;

alarmoutput = document.querySelector("#fast coment");

var startAlarm1 = function(){
	    var alarmminute = document.querySelector("#minute1");
		var alarmsecond = document.querySelector("#second1");
		if (alarmminute="") 
  {alarmminute=0;
    alarmminute=parseInt(alarmminute);}
        if (alarmminute="") 
  {alarmsecond=0;
    alarmsecond=parseInt(alarm.second);}
      var durationtime=alarmminute*60+alarmsecond-1;
      if (durationtime=0)
 {alarmoutput = "予鈴"}
　　　　　　　 else
  {alarmminute = Math.floor(durationtime/60);
    alarmsecond = durationtime % 60;
  }
};

var initApp1 = function(){
		var startButton = document.querySelector("#start1");
		startButton.addEventListener("click", startAlarm1);
		alarmF=setInterval(startAlarm1,1000);
};

initApp1();

var startAlarm2 = function(){
	    var alarmminute = document.querySelector("#minute2");
		var alarmsecond = document.querySelector("#second2");
		if (alarmminute="") 
  {alarmminute=0;
    alarmminute=parseInt(alarmminute);}
        if (alarmminute="") 
  {alarmsecond=0;
    alarmsecond=parseInt(alarm.second);}
      var durationtime=alarmminute*60+alarmsecond-1;
      if (durationtime=0)
 {alarmoutput = "発表時間終了"}
　　　　　　　 else
  {alarmminute = Math.floor(durationtime/60);
    alarmsecond = durationtime % 60;
  }
};

var initApp2 = function(){
		var startButton = document.querySelector("#start2");
		startButton.addEventListener("click", startAlarm2);
		alarmF=setInterval(startAlarm2,1000);
};

initApp2();

var startAlarm3 = function(){
	    var alarmminute = document.querySelector("#minute3");
		var alarmsecond = document.querySelector("#second3");
		if (alarmminute="") 
  {alarmminute=0;
    alarmminute=parseInt(alarmminute);}
        if (alarmminute="") 
  {alarmsecond=0;
    alarmsecond=parseInt(alarm.second);}
      var durationtime=alarmminute*60+alarmsecond-1;
      if (durationtime=0)
 {alarmoutput = "質疑応答終了"}
　　　　　　　 else
  {alarmminute = Math.floor(durationtime/60);
    alarmsecond = durationtime % 60;
  }
};

var initApp3 = function(){
		var startButton = document.querySelector("#start3");
		startButton.addEventListener("click", startAlarm3);
		alarmF=setInterval(startAlarm3,1000);
};

initApp3();