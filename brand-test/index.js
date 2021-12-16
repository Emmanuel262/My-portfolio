const themeDots = document.getElementsByClassName('theme-dot');
const modeId = document.getElementById('theme-style');
let theme = localStorage.getItem('theme');
if(theme == null){
  setTheme('light');
} else {
  setTheme(theme);
}


for(var i = 0; i < themeDots.length; i++ ){
  themeDots[i].addEventListener('click', (e) => {
    e.preventDefault();
    let mode = e.target.dataset.mode;
    setTheme(mode);
  })
}

function setTheme(mode) {
  if(mode == 'light') {
    modeId.href = 'default.css';
  }
  if(mode == 'blue') {
    modeId.href = 'blue.css';

  }
  if(mode == 'green') {
    modeId.href = 'green.css';

  }
  if(mode == 'purple') {
    modeId.href = 'purple.css';

  }

  localStorage.setItem('theme', mode);
}