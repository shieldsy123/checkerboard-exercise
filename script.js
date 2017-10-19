for (i = 0; i < 90; i++){
  var div = document.createElement("div");
  div.style.float = "left";
  div.style.width = "11.1%";
  div.style.height = "100px";
  div.style.background = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  document.body.appendChild(div);
}

setInterval(function(){
  for (i = 0; i < 90; i++){
    var div = document.getElementsByTagName("div")[i];
    div.style.background = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  }
}, 1000);
