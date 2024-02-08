function babyChoice() {
  
  const buttonTexts = {
    'baby-but-1': 'Molodec, good vybor!',
    'baby-but-2': 'Ty chio, ona zhe v govnie...',
    'baby-but-3': 'Ja predlozhila usynovit baby, a ne ubit'
  };

  let messageDiv = document.getElementById('baby-message');

  let buttons = document.querySelectorAll('.baby-but');

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      let buttonId = this.id;
      let buttonText = buttonTexts[buttonId];
      messageDiv.textContent = buttonText;

      buttons.forEach(function(btn) {
        btn.classList.remove('baby-but-active');
      });
      this.classList.add('baby-but-active');
    });
  });
}



function husbandChoice() {

  let messageDiv = document.getElementById('husband-message');

  let buttons = document.querySelectorAll('.husband-but');

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      messageDiv.textContent = 'ZRADA! totalna zrada... a ja dumala, ty po devochkam((';

      buttons.forEach(function(btn) {
        btn.classList.remove('husband-but-active');
      });
      this.classList.add('husband-but-active');
    });
  });
}

function marriageChoiceNo() {
  let myButtonNo = document.getElementById('button-no');
  let myButtonYes = document.getElementById('button-yes');

  const buttonTexts = ['vsmysle net?...', 'ne obizhaj menia', 'ty ne na tu knopku nazhimajesh', 'nazhmi da', 'blat nazhmi da', 'nu i poshla nachui'];

  let width = 120;
  let height = 100;
  let fontSize = 20;

  let clickCount = 0;
  let currentIndex = 0;

  myButtonNo.addEventListener('click', function() {
    if (clickCount >= 6) {
      return
    }

    let newText = buttonTexts[clickCount];

    myButtonNo.textContent = newText;

    clickCount++
    width += 30;
    height += 20;
    fontSize += 3;

    myButtonYes.style.width = width + 'px';
    myButtonYes.style.height = height + 'px';
    myButtonYes.style.fontSize = fontSize + 'px'
  })
}

function marriageChoiceYes() {
  let myButtonYes = document.getElementById('button-yes');
  myButtonYes.addEventListener('click', function() {
    myButtonYes.textContent = '💕💕💕'
  })
}

function countDown() {
  let countDownDate = new Date("March 19, 2054 00:00:00").getTime();

  let x = setInterval(function() {

    let now = new Date().getTime();
    
    let distance = countDownDate - now;
    
    let years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
    let days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("countdown").innerHTML = years + "л " + days + "д " + hours + "ч "
    + minutes + "м " + seconds + "с ";
    
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "Время истекло";
    }
  }, 1000);
}


babyChoice();
husbandChoice();
marriageChoiceNo();
marriageChoiceYes();
countDown();



