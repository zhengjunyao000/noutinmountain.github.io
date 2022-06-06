/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zheng
 * @Date: 2021-12-31 00:08:36
 * @LastEditors: zheng
 * @LastEditTime: 2021-12-31 11:55:38
 */
let message = document.getElementsByTagName("timing")[0];
message.style.color = "red"; //设置颜色
var endtime = new Date("2022/05/28 08:30"); //设置目标日期
function showTime(){
	var stime = new Date();
	var time = endtime - stime;
	if(time > 0){
		var day = Math.floor(time/1000/3600/24); 
		var hour = Math.floor(time%(3600*24*1000)/1000/3600);
		var min = Math.floor(time%(3600*24*1000)/1000%3600/60);
		var sec = Math.floor(time%(3600*24*1000)/1000%3600%60);
		var str ='距离2022年软考'+day+'天'+hour+'小时'+min+'分钟'+sec+'秒'; //设置字符串
		message.innerHTML = str;
	}
}
setInterval(showTime,1000);

