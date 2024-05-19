const muteUnmuteButton = document.getElementById('mute-unmute');
const sidebar = document.getElementById('sidebar');
const chattogglebtn = document.getElementById('chat');
const leftWrapper = document.getElementById('leftwrapper');
const closeBtn = document.getElementById('close-btn');


muteUnmuteButton.addEventListener('click', function() {
this.classList.toggle('active');
// Add logic for muting/unmuting
});

chattogglebtn.addEventListener('click', function(){
   sidebar.classList.toggle('active');
   leftWrapper.classList.toggle('active');
})
closeBtn.addEventListener('click', function(){
   sidebar.classList.remove('active');
   leftWrapper.classList.remove('active');
})
document.addEventListener('keydown', function(event) {
   const key = event.key.toLowerCase();
   if (key === 'w') toggleImage('left', 0);
   if (key === 's') toggleImage('left', 1);
   if (key === 'd') toggleImage('left', 2);
   if (key === 'f') toggleImage('left', 3);
   if (key === 'a') toggleImage('left', 4);
   if (key === 'y') toggleImage('right', 0);
   if (key === 'x') toggleImage('right', 1);
   if (key === 'c') toggleImage('right', 2);
   if (key === 'v') toggleImage('right', 3);
   if (key === 'b') toggleImage('right', 4);

});

function toggleImage(side, index) {
   const images = document.querySelectorAll(`.${side}-images`);
   images.forEach((image, i) => {
       if (i === index) {
           image.classList.add('active');
       } else {
           image.classList.remove('active');
       }
   });
}