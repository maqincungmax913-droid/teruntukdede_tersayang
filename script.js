// Tombol No kabur

const no = document.getElementById("no");

no.onclick = () => {
  
  no.style.position = "absolute";
  
  no.style.left = Math.random() * 80 + "vw";
  
  no.style.top = Math.random() * 80 + "vh";
  
};

document.getElementById("yes").onclick = () => {
  
  document.querySelector(".card").innerHTML = `

<img src="Foto1.JPG" class="photo">

<h1>Yeyyy kamu pilih aku 🤍</h1>

<button id="playMusic">🎵 Play Music</button>

<p id="loveText"></p>

<audio id="music" loop>
<source src="Fixcinta1.mp3" type="audio/mpeg">
</audio>

`;
  
  const text2 = `Terima kasih sudah hadir di hidupku 🤍

Aku tidak tahu bagaimana panjangnya perjalanan kita nanti,
tapi untuk hari ini aku bersyukur pernah menemukanmu.
Kamu adalah seseorang yang membuat hari-hariku terasa lebih berwarna.
Aku tahu aku bukan orang yang sempurna.
Aku punya kekurangan dan masa lalu,
tapi aku ingin terus belajar menjadi seseorang
yang bisa membuatmu merasa dicintai.

Terima kasih sudah memilih aku.
Semoga cerita kecil kita bisa menjadi sesuatu
yang selalu kita ingat.

Our story forever with you 🤍`;
  
  let j = 0;
  
  function writeText() {
    
    if (j < text2.length) {
      
      document.getElementById("loveText").innerHTML +=
        text2.charAt(j);
      
      j++;
      
      setTimeout(writeText, 50);
      
    } else {
      // tulisan sudah selesai baru hujan love
      hujanLove();
    }
    
  }
  
  writeText();
  
  
  function hujanLove() {
    
    setInterval(() => {
      
      const love = document.createElement("div");
      
      love.className = "love";
      love.innerHTML = ["🤍", "❤️", "💕", "✨"][Math.floor(Math.random() * 4)];
      
      love.style.left = Math.random() * 100 + "vw";
      love.style.animationDuration =
        (Math.random() * 3 + 2) + "s";
      
      document.body.appendChild(love);
      
      setTimeout(() => {
        love.remove();
      }, 5000);
      
    }, 150);
    
  }
  
  
  // Musik
  const music = document.getElementById("music");
  const button = document.getElementById("playMusic");
  
  button.onclick = () => {
    music.play();
  };
  
};