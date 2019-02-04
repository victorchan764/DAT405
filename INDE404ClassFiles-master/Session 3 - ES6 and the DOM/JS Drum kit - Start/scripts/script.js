const key = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('trasitionend', removeTransition));

function removeTransition(e){
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

window.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.CurrentTime = 0;
  audio.play();

  key.classList.add('playing');
});
