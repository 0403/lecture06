var INTERVAL = 1000;//変数INTERVALに1000ミリ秒（=１秒）を代入
var DEFAULT_MESSAGE = "終了"//変数DEFAULT_MESSAGEに“終了”を代入

var alarm = {
		duration: -1,
		message: ""
};
//変数"alarm"のdurationに-1を代入して、"message"を無しに定義する
var formatCounterAsString = function(){
		return "あと" + alarm.duration + "秒";
};//関数"formatCounterAsString"を"あと" + alarm.duration + "秒"と定義

var updateCounter = function(){
		alarm.output.textContent = formatCounterAsString();
};//関数"updateCounter"をalarm.output.textContentにformatCounterAsStringを表示すると定義

var showAlarmMessage = function(){
		var message = DEFAULT_MESSAGE;//メッセージを既定メッセージに
		if(alarm.message.length > 0){
				message = alarm.message;//メッセージの欄に入力があったら、それを表示
		}
		if(Notification.permission == "granted"){
				var notification = new Notification(message);//通知が許可されてれば通知する
		}
		alarm.output.textContent = message;//"alarm.output.textContent"にメッセージ表示
};

var update = function(){
		alarm.duration = alarm.duration - 1;
		if(isReadyToCountdown()){
				updateCounter();
				window.setTimeout(update, INTERVAL);
		}else{
				showAlarmMessage();
		}
};///関数updateをalarm.durationをalarm.duration　- 1にし、関数isReadyToCountdownが正しければ、
//関数updateCounterを実行し、INTERVAL（１秒）経過後にupdateを実行し、正しくなければ関数showAlarmMessage()を実行すると定義

var isReadyToCountdown = function(){
		return Number.isInteger(alarm.duration) && alarm.duration > 0;
};//関数"isReadyToCountdown"をアラームの残り時間が整数であるかの真偽値を出し、かつアラームの残り時間が正かの審議と定義

var setupAlarm = function(durationString, message){
		alarm.duration = Number(durationString),
		alarm.message = message;
};//関数"setupAlarm"を"alarm.duration"を数字かどうか確かめたdurationStringに、"alarm.message"をmessageにすると定義

var startAlarm = function(){
		setupAlarm(alarm.durationSelect.value, alarm.messageInput.value);
		if(isReadyToCountdown()){
				updateCounter();
				window.setTimeout(update, INTERVAL);
		}
};//関数startAlarmをalarm.durationSelectとalarm.messageInputを所得し、関数isReadyToCountdownが正しければ、
//関数updateCounterを実行し、INTERVAL（１秒）経過後にupdateを実行すると定義
var initApp = function(){
		alarm.durationSelect = document.querySelector("#duration");
		alarm.messageInput = document.querySelector("#message");
		alarm.output = document.querySelector("#countdown");

		Notification.requestPermission(function(status){
				if(Notification.permission != status){
						Notification.permission = status;
				}
		});

		var startButton = document.querySelector("#start");
		startButton.addEventListener("click", startAlarm);
};//関数"initApp"をID属性durationの要素を探して"alarm.durationSelect"に、
//ID属性messageの要素を探して"alarm.messageInput"に、ID属性countdownの要素を探して"alarm.output"にし、
//通知の許可を得ているならば、通知し、
//ID属性startの要素を探して変数startButtonにして、startButtonをクリックするとアラームが始まるように定義

initApp();//関数"initApp"を実行
