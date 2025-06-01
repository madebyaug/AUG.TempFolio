// DISPLAYS AND ERROR MESSAGE WHEN BROWSER THRESHOLD (Height > 300px) IS REACHED
document.getElementById("err").innerHTML =
  "&rarr; Got a little carried away, no? </br>" +
  "&rarr; let&rsquo;s not tamper, Okay? Dial it back some. </br></br>" +
  "&rarr; BTW&hellip; any chance the easter egg&rsquo;s been found? </br>" +
  "&rarr; curious if it&rsquo;ll ever get used. ;)";

// ONCLICK CHANGES UI COLOR
// STILL TRYING TO UNDERSTAND THE VARIOUS OPERATIONS (===) AND WRAPPING STATEMENTS TRUE/FALSE IN WRAP ()

function dark() {
  document.body.style.backgroundColor = "#111111";
  document.body.style.color = "#B4B4B4";
}

function light() {
  document.body.style.backgroundColor = "#fff";
  document.body.style.color = "#1e1e1e";
}

function err() {
  document.body.style.backgroundColor = "#0000cc";
  document.body.style.color = "#696969";
}

function chiaroscuro(click) {
  if (click === true) {
    // BLACK ON WHITE
    dark();
  } else {
    // WHITE ON BLACK
    light();
  }
}
