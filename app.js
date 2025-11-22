const key = document.querySelectorAll('.key')
const popup  = document.querySelector('#keymap-popup')
const startButton = document.querySelector("#start-btn")

const sound ={
  "C": './sounds/key01.mp3',
  "D": './sounds/key02.mp3',
  "E": './sounds/key03.mp3',
  "F": './sounds/key04.mp3',
  "G": './sounds/key05.mp3',
  "A": './sounds/key06.mp3',
  "B": './sounds/key07.mp3',
 
  // Second octave (C1 → B1)
"C1": './sounds/key08.mp3',
"D2": './sounds/key09.mp3',
"E3": './sounds/key10.mp3',
"F4": './sounds/key11.mp3',
"G5": './sounds/key12.mp3',
"A6": './sounds/key13.mp3',
"B7": './sounds/key14.mp3',


"C#": './sounds/key15.mp3',
"D#": './sounds/key16.mp3',
"F#": './sounds/key17.mp3',
"G#": './sounds/key18.mp3',
"A#": './sounds/key19.mp3',
"C#1": './sounds/key20.mp3',
"D#2": './sounds/key21.mp3',
"F#3": './sounds/key22.mp3',
"G#4": './sounds/key23.mp3',
"A#5": './sounds/key24.mp3',

}


// Map computer keyboard keys → piano notes
const keyMap = {

  // White keys - Octave 1
  "a": "C",
  "s": "D",
  "d": "E",
  "f": "F",
  "g": "G",
  "h": "A",
  "j": "B",

  // White keys - Octave 2
  "k": "C1",
  "l": "D2",
  ";": "E3",
  "'": "F4",
  "z": "G5",
  "x": "A6",
  "c": "B7",

  // Black keys - Octave 1
  "w": "C#",
  "e": "D#",
  "t": "F#",
  "y": "G#",
  "u": "A#",

  // Black keys - Octave 2
  "i": "C#1",
  "o": "D#2",
  "p": "F#3",
  "[": "G#4",
  "]": "A#5"
};




function animateKey(note) {

   key.forEach((e)=> {
       if (e.getAttribute('data-note') === note) {
            e.classList.add("active");
       }
       setTimeout(()=>{
       e.classList.remove('active')
       },150)
   } )

}

function playSound(e) {
     note = keyMap[e.key];
    if(!note)return ;
    const audio = new Audio(sound[`${note}`]);
    audio.currentTime = 0;
    audio.play()
}

window.addEventListener('keydown',function(e){
  playSound(e)
  animateKey(note)
})




window.addEventListener('load' , function(){
    popup.style.display = 'flex';
})

startButton.addEventListener('click' , function() {
    popup.style.display = 'none'
})



