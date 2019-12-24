function update() {
  var dt = new Date
  var tz = dt.getTimezoneOffset()
  var now = Math.floor(dt / 1000 - tz * 60)
  var next = Math.ceil((dt / 1000 / 60 - tz) / 60 / 24) * 60 * 60 * 24
  var left = next - now
  /*var text = ~~(left/60/60) + "h " + ~~(left/60%60) + "m " + ~~(left%60) + "s"*/
  var hours = ~~(left/60/60)
  document.getElementById("hours").innerHTML = "<span class='countdown_time'>" + hours + "</span>"
  var minutes = ~~(left/60%60)
  document.getElementById("minutes").innerHTML = "<span class='countdown_time'>" + minutes + "</span>"
  var seconds = ~~(left%60)
  document.getElementById("seconds").innerHTML = "<span class='countdown_time'>" + seconds + "</span>"
  var hours2 = ~~(left/60/60)
  document.getElementById("hours2").innerHTML = "<span class='countdown_time'>" + hours + "</span>"
  var minutes2 = ~~(left/60%60)
  document.getElementById("minutes2").innerHTML = "<span class='countdown_time'>" + minutes + "</span>"
  var seconds2 = ~~(left%60)
  document.getElementById("seconds2").innerHTML = "<span class='countdown_time'>" + seconds + "</span>"
}

update()
setInterval(update, 1000)

let open = document.querySelector(".button-o"),
	open2 = document.querySelector(".header_main_offer_countdown_form .button"),
	close = document.querySelector(".close"),
	popUp = document.querySelector(".pop_up");
open.onclick = function(){
	popUp.className = "pop_up";
};
open2.onclick = function(){
	popUp.className = "pop_up";
};
close.onclick = function(){
	popUp.className = "hide_pop_up";
};
