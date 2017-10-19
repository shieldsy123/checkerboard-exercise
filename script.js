for (var i = 0; i < 90; i++){
  var div = document.createElement("div");
  div.style.float = "left";
  div.style.width = "11.1%";
  div.style.height = "100px";
  if ((i%2) == 0) {
    div.style.background = "linear-gradient(to top, orange, white)";
  } else {
    div.style.background = "linear-gradient(to bottom, orange, white)";
  }
  document.body.appendChild(div);
}
