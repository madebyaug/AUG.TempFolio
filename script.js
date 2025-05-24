// DISPLAYS AND ERROR MESSAGE WHEN BROWSER THRESHOLD (Height > 300px) IS REACHED
document.getElementById("err").innerHTML =
  "&rarr; Got a little carried away, no? </br>" +
  "&rarr; let&rsquo;s not tamper, Okay? Dial it back some. </br></br>" +
  "&rarr; BTW&hellip; any chance the easter egg&rsquo;s been found? </br>" +
  "&rarr; curious if it&rsquo;ll ever get used. ;)";

// ONCLICK CHANGES UI COLOR
// STILL TRYING TO UNDERSTAND THE VARIOUS OPERATIONS (===) AND WRAPPING STATEMENTS TRUE/FALSE IN WRAP ()

function darkmode(click) {
  if (click === true) {
    // RED ON WHITE
    document.body.style.backgroundColor = "#838383";
    document.body.style.color = "#fefefe";
  } else {
    // BLACK ON WHITE
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#1e1e1e";
  }
}
