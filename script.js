// DISPLAYS AND ERROR MESSAGE WHEN BROWSER THRESHOLD (Height > 300px) IS REACHED
const getEasterEgg = document.getElementById("easterEgg");
getEasterEgg.innerHTML = `
  &rarr; Got a little carried away, no? </br>
  &rarr; let&rsquo;s not tamper, Okay? Dial it back some. </br></br>
  &rarr; BTW&hellip; any chance the easter egg&rsquo;s been found? </br>
  &rarr; curious if it&rsquo;ll ever get used. ;)
  `;

// ONCLICK CHANGES UI COLOR
// STILL TRYING TO UNDERSTAND THE VARIOUS OPERATIONS (===) AND WRAPPING STATEMENTS TRUE/FALSE IN WRAP ()
function dark() {
  document.body.style.backgroundColor = "#111111";
  document.body.style.color = "#B4B4B4";
  document.body.style.textDecorationColor = "#B4B4B4";
}

// BLACK ON WHITE
function light() {
  document.body.style.backgroundColor = "#fff";
  document.body.style.color = "#1e1e1e";
  document.body.style.textDecorationColor = "#1e1e1e";
}

// WHITE ON BLACK
function error() {
  document.body.style.backgroundColor = "#0000cc";
  document.body.style.color = "#696969";
}

// GREY ON BLUE
function chiaroscuro(click) {
  if (click === true) {
    dark();
  } else {
    light();
  }
}

// Stores Title and Default Title
let storedTitle = "";
let defaultTitle = "Browse All";

// const browserSize = window.matchMedia("(min-width: 900px)");

// function getDefaultTitle(size) {
//   if (size.matches) {
//     titleDisplay.textContent = defaultTitle;
//   } else titleDisplay.textContent = storedTitle;
// }

// browserSize.addEventListener("change", handleResize);
// getDefaultTitle(browserSize); // Initial check

// Locate where to displays Title
const titleDisplay = document.getElementById("projectTitle");

// Defines specific media element to target all
const getTitle = document.querySelectorAll("img, video, a");

// Message Arry
const messageArry = [
  `Quality ain’t rushed; it’s Practiced.`,
  `Persuaded by a dream, immortalized by the art.`,
  `Runway Thots. Boujee Models. Brutalist Design.`,
  // `Not everything has a purpose but everything has its place.`,
  `Curate to cultivate vision.`,
];

// Message Arry
const rngIndex = Math.floor(Math.random() * messageArry.length);

// While hovering over each “media” element,
getTitle.forEach((media) => {
  media.addEventListener("mouseover", (event) => {
    // locate the [alt] attribute ie project’s title
    const getAltText =
      event.target.alt ||
      event.target.getAttribute("title") ||
      event.target.dataset.title ||
      "Untitled";

    // and move to "Stores Title".
    if (storedTitle !== getAltText) {
      storedTitle = getAltText;
      titleDisplay.textContent = storedTitle;
    }
  });

  // At resting, display "Default Title" ie default behavior.
  media.addEventListener("mouseout", () => {
    titleDisplay.textContent = messageArry[rngIndex];
    storedTitle = "";
  });
});
