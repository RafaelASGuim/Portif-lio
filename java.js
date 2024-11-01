var modal = document.getElementById("myModal");
var btn = document.querySelector(".eer");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function bigImg(x) {
    x.style.height = "350px";
}

function normalImg(x) {
    x.style.height = "200px";
}

const toggle = document.getElementById('modeToggle');
const espaco = document.querySelector('.espaco');
const paragraphs = document.querySelectorAll('p');
const headings = document.querySelectorAll('h1');
const headings2 = document.querySelectorAll('h3');


toggle.addEventListener('change', () => {
    document.body.style.backgroundColor = toggle.checked ? '#fff' : '';
    document.body.style.color = toggle.checked ? '#fff' : '';
   
    espaco.style.background = toggle.checked
        ? 'linear-gradient(rgb(48 0 255), rgb(169 165 165))'  // Fundo claro
        : 'linear-gradient(180deg, rgb(0, 0, 0),#000, #392686)';        // Fundo escuro
});
toggle.addEventListener('change', () => {
    const isChecked = toggle.checked;

    // Cores de fundo

    
  
    
    
    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        } else {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        }
    });
    

    // Alterando as cores dos parágrafos e cabeçalhos
    paragraphs.forEach(p => {
        p.style.color = document.body.style.color; // Manter a cor do texto
    });

    headings.forEach(h1 => {
        h1.style.color = document.body.style.color; // Manter a cor do texto
    });
    headings2.forEach(h3 => {
        h1.style.color = document.body.style.color; // Manter a cor do texto
    });
});


toggle.addEventListener('change', () => {
    if (toggle.checked) {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    } else {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    }
});



var aText = new Array(
    " Sou um desenvolvedor full stack em busca de novas oportunidades e desafios no mundo da tecnologia.",
   " Embora esteja começando minha jornada, as áreas mais de minha experiência profissional, minhas paixões",
   " pelo marketing e desenvolvimento de sites me impulsionam a buscar conhecimento e crescimento contínuo."
    );
    var iSpeed = 60;
    var iIndex = 0;
    var iArrLength = aText[0].length;
    var iScrollAt = 20;
   
    var iTextPos = 0;
    var sContents = '';
    var iRow;
   
    function typewriter()
    {
    sContents = ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    var destination = document.getElementById("typedtext");
   
    while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "";
    if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
    iArrLength = aText[iIndex].length;
    setTimeout("typewriter()", 500);
    }
    } else {
    setTimeout("typewriter()", iSpeed);
    }
    }

  
     
   
    typewriter();