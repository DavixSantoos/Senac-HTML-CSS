const botaoVermelho = document.getElementById('btnRed');
const botaoVerde = document.getElementById('btnGreen');
const botaoRosa = document.getElementById('btnPink');
const botaopreto = document.getElementById('btnBlack');
const botaoHide = document.querySelector("#btnHide");
const titulo = document.querySelector("#titulo");
const botaoTema = document.querySelector("#btnEscuro");

function alterarCor(cor) {
    document.body.style.backgroundColor = cor;
}

botaoVermelho.addEventListener('click', () => alterarCor("red"));

botaoVerde.addEventListener('click', () => alterarCor("green"));

botaoRosa.addEventListener('click',() => alterarCor("pink"));

botaopreto.addEventListener('click',()=> alterarCor("black"));

botaoHide.addEventListener('click', () =>{
    //titulo.classList.add('invisivel');
    titulo.classList.toggle('invisivel')

    if(botaoHide.textContent == "Esconder Titulo"){
       botaoHide.textContent = "Mostrar Título" 
    } else {
       botaoHide.textContent = "Esconder Titulo"
    }
    
});

botaoTema.addEventListener('click',()=>{
    document.body.classList.toggle('TemaEscuro')
});