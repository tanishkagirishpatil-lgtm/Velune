// ==========================
// ELEMENTS
// ==========================

const display =
document.getElementById("display");

const progressRing =
document.querySelector(".ring-progress");

const startBtn =
document.getElementById("startBtn");

const pauseBtn =
document.getElementById("pauseBtn");

const resetBtn =
document.getElementById("resetBtn");

const focusAudio =
document.getElementById("focusAudio");

const musicToggle =
document.getElementById("musicToggle");

musicToggle.innerHTML =
'<i class="fa-solid fa-volume-high"></i>';

const soundButtons =
document.querySelectorAll(".sound-btn");

const themeBackground =
document.querySelector(
  ".theme-background"
);





// ==========================
// TIMER
// ==========================

let timer = null;

let seconds = 0;

let running = false;

// ==========================
// UPDATE DISPLAY
// ==========================

function updateDisplay(){

  let hrs =
  Math.floor(seconds / 3600);

  let mins =
  Math.floor((seconds % 3600) / 60);

  let secs =
  seconds % 60;

  display.innerHTML =

  `${String(hrs).padStart(2,'0')}:` +

  `${String(mins).padStart(2,'0')}:` +

  `${String(secs).padStart(2,'0')}`;

  // Ring Progress

  let progress =
  (seconds % 60) / 60;

  let offset =
  1130 - (1130 * progress);

  progressRing.style.strokeDashoffset =
  offset;

}

// ==========================
// START
// ==========================

startBtn.onclick = ()=>{

  if(running) return;

  running = true;
  document.body.classList.add(
  "focus-active"
);

  timer = setInterval(()=>{

    seconds++;

    // Focus Master Achievement

if(seconds >= 1800
&& !focusMasterUnlocked){

  focusMasterUnlocked = true;

  focusMasterStatus.innerHTML =
  "Unlocked";

  focusMasterStatus.classList.add(
    "unlocked"
  );
 xp += 100;

updateXP();
}

    updateDisplay();

  },1000);

};

// ==========================
// PAUSE
// ==========================

pauseBtn.onclick = ()=>{

  document.body.classList.remove(
  "focus-active"
);

  running = false;

  clearInterval(timer);

};

// ==========================
// RESET
// ==========================

resetBtn.onclick = ()=>{

  document.body.classList.remove(
  "focus-active"
);

  running = false;

  clearInterval(timer);

  seconds = 0;

  updateDisplay();

};

// ==========================
// AUDIO
// ==========================

let playing = false;


musicToggle.innerHTML =
'<i class="fa-solid fa-volume-high"></i>';

musicToggle.onclick = ()=>{

  if(focusAudio.paused){

    focusAudio.play();

      musicToggle.innerHTML =
    '<i class="fa-solid fa-volume-high"></i>';

  }

  else{

    focusAudio.pause();

     musicToggle.innerHTML =
    '<i class="fa-solid fa-volume-xmark"></i>';

  }

};

// ==========================
// SOUND SWITCHING
// ==========================

soundButtons.forEach((button)=>{

  button.onclick = ()=>{

    // Remove Active

    soundButtons.forEach((btn)=>{

      btn.classList.remove(
        "active-sound"
      );

    });

    // Add Active

    button.classList.add(
      "active-sound"
    );

    // Change Audio

    focusAudio.src =
    button.dataset.sound;
    focusAudio.play();

document.body.classList.add(
  "music-active"
);

    // Theme Switching

    document.body.classList.remove(
  "purple",
  "blue",
  "green",
  "cyan"
);

    
    // Cursor Glow Colors

if(button.dataset.theme === "blue"){

  cursorGlow.style.background =

  `radial-gradient(
    circle,
    rgba(56,189,248,0.22),
    transparent 70%
  )`;

}

if(button.dataset.theme === "green"){

  cursorGlow.style.background =

  `radial-gradient(
    circle,
    rgba(74,222,128,0.22),
    transparent 70%
  )`;

}

if(button.dataset.theme === "cyan"){

  cursorGlow.style.background =

  `radial-gradient(
    circle,
    rgba(96,165,250,0.22),
    transparent 70%
  )`;

}

if(button.dataset.theme === "purple"){

  cursorGlow.style.background =

  `radial-gradient(
    circle,
    rgba(139,92,246,0.22),
    transparent 70%
  )`;

}

    document.body.classList.add(
      button.dataset.theme
    );

    // Hide All

rainContainer.style.display =
"none";

forestContainer.style.display =
"none";

oceanContainer.style.display =
"none";

lofiContainer.style.display =
"none";

// Show Current Theme

if(button.dataset.theme === "blue"){

  rainContainer.style.display =
  "block";

}

if(button.dataset.theme === "green"){

  forestContainer.style.display =
  "block";

}

if(button.dataset.theme === "cyan"){

  oceanContainer.style.display =
  "block";

}

if(button.dataset.theme === "purple"){

  lofiContainer.style.display =
  "block";

}

// ==========================
// BACKGROUND IMAGES
// ==========================

themeBackground.classList.add(
  "show"
);

// Lofi

if(button.dataset.theme ===
"purple"){

  themeBackground.style.backgroundImage =

  "url('assets/images/lofi.jpg')";

}

// Rain

if(button.dataset.theme ===
"blue"){

  themeBackground.style.backgroundImage =

  "url('assets/images/rain.jpg')";

}

// Forest

if(button.dataset.theme ===
"green"){

  themeBackground.style.backgroundImage =

  "url('assets/images/forest.jpg')";

}

// Ocean

if(button.dataset.theme ===
"cyan"){

  themeBackground.style.backgroundImage =

  "url('assets/images/ocean.jpg')";

}

    // Play

    if(playing){

      focusAudio.play();
      document.body.classList.add(
  "music-active"
);

    }

  };

});

// ==========================
// PLAY / PAUSE AUDIO
// ==========================

document.querySelector(
".active-sound"
);

startBtn.addEventListener(
"click",
()=>{

  if(!playing){

    focusAudio.play();

    playing = true;

  }

});
// ==========================
// CURSOR GLOW
// ==========================

const cursorGlow =
document.querySelector(
".cursor-glow"
);

document.addEventListener(
"mousemove",
(e)=>{

  cursorGlow.style.left =
  e.clientX + "px";

  cursorGlow.style.top =
  e.clientY + "px";

});

// ==========================
// DEEP FOCUS MODE
// ==========================

const focusBtn =
document.getElementById(
  "focusBtn"
);

let deepFocus = false;

focusBtn.onclick = ()=>{

  deepFocus = !deepFocus;

  document.body.classList.toggle(
    "deep-focus"
  );

  // Icon Switch

  if(deepFocus){

    focusBtn.innerHTML =

    `<i class="fa-solid fa-compress"></i>`;

  }

  else{

    focusBtn.innerHTML =

    `<i class="fa-solid fa-expand"></i>`;

  }

};
// ==========================
// SESSION COMPLETE
// ==========================

const sessionPopup =
document.querySelector(
  ".session-popup"
);

const closePopup =
document.getElementById(
  "closePopup"
);

// Only Run If Popup Exists

if(sessionPopup && closePopup){

  // Demo Trigger

  setTimeout(()=>{

    sessionPopup.classList.add(
      "show"
    );

  },15000);

  // Close Popup

  closePopup.onclick = ()=>{

    sessionPopup.classList.remove(
      "show"
    );

  };

}
// ==========================
// MOTIVATIONAL QUOTES
// ==========================

const quotes = [

  "Discipline creates freedom.",

  "Small progress is still progress.",

  "Focus on becoming, not proving.",

  "Deep work creates rare results.",

  "Consistency beats intensity.",

  "Your future is built today.",

  "Stay patient and trust yourself."

];

const quoteText =
document.getElementById(
  "quoteText"
);

let quoteIndex = 0;

// Change Quote

setInterval(()=>{

  quoteIndex++;

  if(
    quoteIndex >= quotes.length
  ){

    quoteIndex = 0;

  }

  // Fade Out

  quoteText.style.opacity = 0;

  setTimeout(()=>{

    quoteText.innerHTML =

    `"${quotes[quoteIndex]}"`;

    // Fade In

    quoteText.style.opacity = 1;

  },400);

},6000);

// ==========================
// LAP SYSTEM
// ==========================

const lapBtn =
document.getElementById(
  "lapBtn"
);

const lapCount =
document.getElementById(
  "lapCount"
);

const lapHistory =
document.getElementById(
  "lapHistory"
);

let lapNumber = 0;

let firstLapUnlocked = false;

let fiveLapUnlocked = false;

let focusMasterUnlocked = false;

// ==========================
// XP SYSTEM
// ==========================

let xp = 0;

let level = 1;
let lastLevel = 1;

const xpValue =
document.getElementById(
  "xpValue"
);

const xpFill =
document.getElementById(
  "xpFill"
);

const levelText =
document.getElementById(
  "levelText"
);

function updateXP(){

  xpValue.innerHTML =

  `${xp} XP`;

  // Fill %

  let fill =
  (xp % 100);

  xpFill.style.width =

  `${fill}%`;

  // Level

  level =
  Math.floor(xp / 100) + 1;

  // Level Up Check

if(level > lastLevel){

  showToast(
    `✨ Level ${level} Reached`
  );

  lastLevel = level;

}

  levelText.innerHTML =

  `Level ${level}`;

}

const firstLapStatus =
document.getElementById(
  "firstLapStatus"
);

const fiveLapStatus =
document.getElementById(
  "fiveLapStatus"
);

const focusMasterStatus =
document.getElementById(
  "focusMasterStatus"
);

const toast =
document.getElementById(
  "toast"
);

function showToast(message){

  toast.innerHTML =

  message;

  toast.classList.add(
    "show"
  );

  setTimeout(()=>{

    toast.classList.remove(
      "show"
    );

  },3000);

}

lapBtn.onclick = ()=>{

  // Prevent Empty Lap

  

  lapNumber++;
  // XP Reward

xp += 5;

updateXP();

// First Lap Achievement

if(lapNumber >= 1
&& !firstLapUnlocked){

  firstLapStatus.innerHTML =
  "Unlocked";

  firstLapStatus.classList.add(
    "unlocked"
  );

  showToast(
  "🏆 First Lap Unlocked +10 XP"
);

firstLapUnlocked = true;
}

// 5 Laps Achievement

if(lapNumber >= 5){

  fiveLapUnlocked = true;

  fiveLapStatus.innerHTML =
  "Unlocked";

  fiveLapStatus.classList.add(
    "unlocked"
  );
  xp += 25;

updateXP();

}
  // Update Counter

  lapCount.innerHTML =

  `${lapNumber} Laps`;

  // Create Lap Item

  const lapItem =
  document.createElement("div");

  lapItem.classList.add(
    "lap-item"
  );

  // Add Content

  lapItem.innerHTML = `

    <span>

      Lap ${lapNumber}

    </span>

    <span>

      ${display.innerHTML}

    </span>

  `;

  // Add To History

 lapHistory.prepend(
  lapItem
);

};

// ==========================
// RAIN EFFECT
// ==========================

const rainContainer =
document.querySelector(
  ".rain-container"
);

// Create Rain

function createRain(){

  rainContainer.innerHTML = "";

  for(let i = 0; i < 120; i++){

    const drop =
    document.createElement("div");

    drop.classList.add(
      "rain-drop"
    );

    // Random Position

    drop.style.left =

    Math.random() * 100 + "vw";

    // Random Speed

    drop.style.animationDuration =

    (Math.random() * 1 + 0.5)
    + "s";

    // Random Delay

    drop.style.animationDelay =

    Math.random() * 2 + "s";

    rainContainer.appendChild(
      drop
    );

  }

}

// Start Rain

createRain();

// ==========================
// FOREST EFFECT
// ==========================

const forestContainer =
document.querySelector(
  ".forest-container"
);

function createForest(){

  for(let i = 0; i < 100; i++){

  const firefly =
  document.createElement("div");

  firefly.classList.add(
    "firefly"
  );

  firefly.style.left =
  Math.random() * 100 + "%";

  firefly.style.top =
  Math.random() * 100 + "%";

  firefly.style.animationDelay =
  Math.random() * 10 + "s";

  forestContainer.appendChild(
    firefly
  );

}

  

  for(let i = 0; i < 100; i++){

    const particle =
    document.createElement("div");

    particle.classList.add(
      "forest-particle"
    );

    const size =

20 + Math.random() * 40;

particle.style.width =
size + "px";

particle.style.height =
size + "px";

    particle.style.left =

    Math.random() * 100 + "vw";

    particle.style.top =
    Math.random() * 100 + "%";

    particle.style.animationDuration =

    (Math.random() * 8 + 6)
    + "s";

    particle.style.animationDelay =

    Math.random() * 5 + "s";

    forestContainer.appendChild(
      particle
    );

  }

}

createForest();

// ==========================
// OCEAN EFFECT
// ==========================

const oceanContainer =
document.querySelector(
  ".ocean-container"
);

function createOcean(){


  for(let i = 0; i < 3; i++){

  const wave =
  document.createElement("div");

  wave.classList.add(
    "ocean-wave"
  );

  wave.style.bottom =
  (-50 + i * 120) + "px";

  wave.style.animationDuration =
  (18 + i * 6) + "s";

  oceanContainer.appendChild(
    wave
  );

}

  for(let i = 0; i < 8; i++){

  const bubble =
  document.createElement("div");

  bubble.classList.add(
    "bubble"
  );

  const size =

  15 + Math.random() * 60;

  bubble.style.width =
  size + "px";

  bubble.style.height =
  size + "px";

  bubble.style.bottom =
 Math.random() * 100 + "%";

  bubble.style.left =
  Math.random() * 100 + "%";

  bubble.style.animationDuration =
  (10 + Math.random() * 12)
  + "s";

  bubble.style.animationDelay =
 "-" + (Math.random() * 20) + "s";

  oceanContainer.appendChild(
    bubble
  );

}
for(let i = 0; i < 40; i++){

  const particle =
  document.createElement("div");

  particle.classList.add(
    "ocean-particle"
  );

  particle.style.left =
  Math.random() * 100 + "%";

  particle.style.top =
 Math.random() * 100 + "%";

  particle.style.animationDuration =
  (15 + Math.random() * 10) + "s";

  particle.style.animationDelay =
  Math.random() * 20 + "s";

  oceanContainer.appendChild(
    particle
  );

}
}
  createOcean();

// ==========================
// LOFI EFFECT
// ==========================

const lofiContainer =
document.querySelector(
  ".lofi-container"
);

function createLofi(){

  for(let i = 0; i < 25; i++){

    const orb =
    document.createElement("div");

    orb.classList.add(
      "lofi-orb"
    );

    orb.style.width =

    orb.style.height =

    (Math.random() * 300 + 200)
    + "px";

    orb.style.top =

    Math.random() * 80 + "%";

    orb.style.left =

    Math.random() * 80 + "%";

    orb.style.animationDuration =

    (Math.random() * 10 + 10)
    + "s";

    lofiContainer.appendChild(
      orb
    );

  }

}

createLofi();


const orbContainer =
document.querySelector(".floating-orbs");

for(let i = 0; i < 18; i++){

    const orb =
    document.createElement("div");

    orb.classList.add(
        "floating-orb"
    );

    const size =
    120 + Math.random() * 250;

    orb.style.width =
    size + "px";

    orb.style.height =
    size + "px";

    orb.style.left =
    Math.random() * 100 + "%";

    orb.style.animationDuration =
    20 + Math.random() * 20 + "s";

    orb.style.animationDelay =
    Math.random() * 15 + "s";

    orbContainer.appendChild(
        orb
    );

}

// ==========================
// INTRO SCREEN
// ==========================

window.addEventListener(
  "load",
  ()=>{

    setTimeout(()=>{

      document
      .querySelector(
        ".intro-screen"
      )
      .classList.add(
        "hide"
      );

    },3500);

  }
);




// ==========================
// LOADER
// ==========================

window.addEventListener(
  "load",
  ()=>{

    setTimeout(()=>{

      document
      .querySelector(".loader")
      .classList.add(
        "hidden"
      );

    },3000);

  }
);