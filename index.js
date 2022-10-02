let textbox = document.getElementById("textbox")
let slider = document.getElementById("textsize")
let sizedisplay = document.getElementById("sizedisplay")

let interpolate = x => 9+Math.pow(x, 1.4)*(124-9);

let changeTextSize = (range) => {
  let selectedSize = Math.round(interpolate(range.value));
  textbox.style.fontSize = `${selectedSize}px`
  sizedisplay.innerHTML = selectedSize
}

slider.onchange = function(){changeTextSize(this)}
slider.onmousemove = function(){changeTextSize(this)}
