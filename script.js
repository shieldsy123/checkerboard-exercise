for (var i = 0; i < 90; i++){
  var div = document.createElement("div");
  div.style.float = "left";
  div.style.width = "11.1%";
  div.style.height = "100px";
  if ((i%2) == 0) {
    div.style.background = "red";
  } else {
    div.style.background = "black";
  }
  document.body.appendChild(div);
}
