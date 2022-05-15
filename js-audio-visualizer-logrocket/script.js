let audio1 = new Audio();
audio1.src = 'audio.flac';

const container = document.getElementById('container');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let audioSource = null;
let analyzer = null;

audio1.play();
audioSource = audioCtx.createMediaElementSource(audio1);
analyzer = audioCtx.createAnalyser();
audioSource.connect(analyzer);
analyzer.connect(audioCtx.destination);

analyzer.fftSize = 128;
const bufferLength = analyzer.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
const barWidth = canvas.width / bufferLength;

function animate() {
  x = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  analyzer.getByteFrequencyData(dataArray);
  drawVisualizer({ bufferLength, dataArray, barWidth });
  requestAnimationFrame(animate);
}

function drawVisualizer({ bufferLength, dataArray, barWidth }) {
  let barHeight;

  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i];
    const red = (i * barHeight) / 10;
    const green = i * 4;
    const blue = barHeight / 4 - 12;

    ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
    ctx.fillRect( canvas.width / 2 - x, canvas.height - barHeight * 2, barWidth, barHeight * 2);
    ctx.fillRect( canvas.height / 2 + x, canvas.height - barHeight * 2, barWidth, barHeight * 2);

    x += barWidth;
  }
  /****************************************************************
   **  el cambio en el primer argumento de fillRect (antes 'x')  **
   **  hará que las barras comiencen al centro del canvas y se   **
   **  muevan de izquierda a derecha.                            **
   ****************************************************************/
    
  /****************************************************************
   **  este 2° loop hace lo mismmo pero ahora pinta de izquierda **
   **  a derecha complementando la animación del loop anterior   **
   ****************************************************************/

  // for (let i = 0; i < bufferLength; i++) {
  //   barHeight = dataArray[i];
  //   const red = (i * barHeight) / 10;
  //   const green = i * 4;
  //   const blue = barHeight / 4 - 12;

  //   ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
  //   ctx.fillRect( canvas.width + x, canvas.height - barHeight, barWidth, barHeight);
  //   x += barWidth;
  // }
}
// function animate() {
//   x = 0;
//   let barHeight;
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   analyzer.getByteFrequencyData(dataArray);
  
//   for (let i = 0; i < bufferLength; i++) {
//     barHeight = dataArray[i];
//     const red = (i * barHeight) / 10;
//     const green = i * 4;
//     const blue = barHeight / 4 - 12;

//     ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
//     ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
//     x += barWidth;
//   }


//   //* animación version simple en 1 solo color
//   // for (let i = 0; i < bufferLength; i++) {
//   //   barHeight = dataArray[i];
//   //   ctx.fillStyle = "white";
//   //   ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
//   //   x += barWidth;
//   // }
//   requestAnimationFrame(animate);
// }

animate();