var musikJalan = false;
var audio = document.getElementById('bgMusic');

function bukaKartu() {
  document.getElementById('kartu').classList.add('aktif');
  document.getElementById('overlay').classList.add('aktif');
  document.body.style.overflow = 'hidden';
}

function tutupKartu() {
  document.getElementById('kartu').classList.remove('aktif');
  document.getElementById('overlay').classList.remove('aktif');
  document.body.style.overflow = '';

  audio.pause();
  audio.currentTime = 0;
  musikJalan = false;
}

function ledakKonfeti() {
  var container = document.getElementById('confettiContainer');
  var colors = ['#ff79b0','#c77dff','#ffdf6c','#79f2c0','#79c8ff','#ff9a9a'];
  var total = 80;

  for (var i = 0; i < total; i++) {
    (function(i) {
      setTimeout(function() {
        var piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + 'vw';
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        piece.style.width  = (Math.random() * 8 + 6) + 'px';
        piece.style.height = (Math.random() * 8 + 6) + 'px';
        piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        var dur = (Math.random() * 2 + 2).toFixed(1) + 's';
        piece.style.animationDuration = dur;
        container.appendChild(piece);
        setTimeout(function() { piece.remove(); }, parseFloat(dur) * 1000 + 200);
      }, i * 25);
    })(i);
  }

  if (!musikJalan) {
    audio.play().then(function() {
      musikJalan = true;
    }).catch(function(err) {
      console.warn('Gagal memutar musik:', err);
    });
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') tutupKartu();
});