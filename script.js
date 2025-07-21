// Defines "404" Page
let $404 = document.getElementById("error");

// Defines "aboutMe" Id
let aboutMe = document.getElementById("aboutMe");

// Structures HTML within the "aboutMe" Id
aboutMe.innerHTML = `
<div>
  <p><mark>August Foreman</mark> is a multidisciplinary creative, who specializes in logo design, typography, and broadcast media, actively exploring Frontend development and storytelling through art and motion.</p>
  <p>His experience spans print and digital media, with a focus on entertainment, music, streetwear, visual arts, and cultural institutions. Creativity doesn’t exist in isolation. View his portfolio or connect for more.</p>
  </div>
<p>&copy;2025 AUG SVCS, LLC. All rights protected by my lord and savior. (\u00A0Imprint: Site <a data-title="Developer" href="https://madebyaug.com">MadeByAug</a>, deployed on <a data-title="CMS" href="https://github.com/madebyaug/2025.AUG-TempPort">GitHub</a>, and Typeset in <a data-title="Typography" href="https://www.schick-toikka.com/dia">Dia Regular</a>.\u00A0)</p>
`;

// On hover, A links animate
const $a = document.querySelectorAll("a");
$a.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.style.animation = "none";
    void element.offsetWidth; // Force reflow
    element.style.animation = "blinker 0.3s ease 0s 1 forwards";
  });
});

// Grey on Black
function dark() {
  document.body.style.backgroundColor = "#111111";
  document.body.style.color = "#B4B4B4";
  $a.forEach((element) => {
    element.style.textDecorationThickness = "0.5px";
    element.style.textDecorationColor = "#B4B4B4";
  });
}

// Black on White
function light() {
  document.body.style.backgroundColor = "#fff";
  document.body.style.color = "#1e1e1e";
  $a.forEach((element) => {
    element.style.textDecorationThickness = "1px";
    element.style.textDecorationColor = "#1e1e1e";
  });
}

// Grey on Blue
function error() {
  document.body.style.backgroundColor = "#0000cc";
  document.body.style.color = "#696969";
}

// Defines specific and all Media
const getTitle = document.querySelectorAll("img, video, a");
const mediaAll = document.querySelectorAll("img, video");

window.onload = () => {
  if (!$404) {
    light();
  } else {
    error();
  }

  // Media elements non-blur and -offset Delay
  mediaAll.forEach((element) => {
    setTimeout(() => {
      element.style.filter = `blur(0px)`;
      element.style.removeProperty("filter");
    }, 100);

    setTimeout(() => {
      element.style.marginLeft = `0`;
    }, 200);
  });
};

// Stores Title and Default Title
let storedTitle = "";
let defaultTitle = `Media –All: ${mediaAll.length} Fetched`;
document.getElementById("defaultTitle").textContent = defaultTitle;

// Defines Title displays Location
const titleDisplay = document.getElementById("projectTitle");
titleDisplay.textContent = defaultTitle;

// Quote Arry
const quoteArry = [
  `Quality ain’t rushed. It’s Practiced.`,
  `Persuaded by a dream to be immortalized through art.`,
  `A burnt bridge keeps the food warm.`,
  `Simplicity = Innovation`,
  `Runway Thots. Boujee Models. Brutalist Design.`,
  `Not everything has a place, but everything has a purpose.`,
  `The most convincing lies are the ones we tell ourself.`,
  `Never conform, always adapt.`,
  `Curate: Cultivate your vision.`,
  `A tragic story’s end bred pure carelessness.`,
  `A creative who never pushes boundaries will keep telling the same stories.`,
  `The world may take your reputation — not your character.`,
  `Pride > Humility.`,
  `Restart: Delete old work.`,
  `An artist without literature and philosophy is a child without love and affection`,
];

// Rng Message Selector
const rngIndex = Math.floor(Math.random() * quoteArry.length);

// Defines Quotes
const $quotes = document.getElementById("quotes");
$quotes.innerHTML = `
  <p>( QUOTE ) “${quoteArry[rngIndex]}”</p>
  <h1>[\u00A0&rarr;\u00A0&rarr;\u00A0]</h1>
`;

// While hovering over each “media” element,
getTitle.forEach((media) => {
  media.addEventListener("mouseover", (event) => {
    // locate the [alt] or other attributes ie project’s title
    const getAltText =
      event.currentTarget.alt ||
      event.currentTarget.title ||
      event.currentTarget.dataset.title ||
      "Untitled";
    console.log(getAltText);

    // If stored title is not alt title
    if (storedTitle !== getAltText) {
      // update storedTitle to getAltText
      storedTitle = getAltText;
      titleDisplay.textContent = storedTitle;
    }
  });

  // At rest, display "Default Title" ie default behavior.
  media.addEventListener("mouseout", () => {
    // titleDisplay.textContent = quoteArry[rngIndex];
    titleDisplay.textContent = defaultTitle;
    storedTitle = "";
  });
});

// Displays and error message when browser threshold (Height > 300px) is reached
const getEasterEgg = document.getElementById("easterEgg");
getEasterEgg.innerHTML = `
  <h1>( easterEgg )</h1>
  <p>Got a little carried away, no? Let&rsquo;s dial it back some. BTW&hellip; any chance the easter egg&rsquo;s been found? Curious if it&rsquo;ll ever get used. [\u00A0&rarr;\u00A0&rarr;\u00A0] <a href="#">clue???</a></p>
  `;

// Defines Clue
const $clue = document.querySelector("#easterEgg a");
$clue.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("The brush hasn’t gone beyond a second pass.");
});

// Defines "aboutMeBtn" and "footer"
const aboutMeBtn = document.getElementById("aboutMeBtn");
const $footer = document.querySelector("footer");

// Defines "Click" boolean and "width"
let click = false;
let width;

// Defines Browser
function setLayoutWidth() {
  width = window.innerWidth < 800 || window.innerHeight < 450 ? "50vw" : "20vw";
  aboutMe.style.width = width;

  if (!click) {
    $footer.style.marginLeft = `-${width}`;
  }
}

// Called when Browser resizes
setLayoutWidth();

// Listens for Browser resize
window.addEventListener("resize", setLayoutWidth);

// Defines "footer" default width
$footer.style.marginLeft = `-${width}`;

document.addEventListener("DOMContentLoaded", () => {
  mediaAll.forEach((element) => {
    element.style.filter = `blur(5px)`;
    // element.style.marginLeft = `-1400px`;
    element.style.transition = `filter 1s ease, margin-left 10s ease`;
  });
});

// Defines "aboutMeBtn" click
aboutMeBtn.addEventListener("click", () => {
  click = !click;

  if (click === true) {
    $footer.style.marginLeft = "0";
  } else {
    $footer.style.marginLeft = `-${width}`;
  }
});
