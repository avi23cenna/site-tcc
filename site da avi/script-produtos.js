
function escolhaDourado(){
    reset_Cor();
    Cor$Frasc = 1;
    Change();
}

function escolhaAzul(){
    reset_Cor();
    Cor$Frasc = 2;
    Change();
}

function escolhaVermelho(){
    reset_Cor();
    Cor$Frasc = 3;
    Change();
}

function escolhaVerde(){
    reset_Cor();
    Cor$Frasc = 4;
    Change();
}

function escolhaRosa(){
    reset_Cor();
    Cor$Frasc = 5;
    Change();
}

function escolhaMarrom(){
    reset_Cor();
    Cor$Frasc = 6;
    Change();
}

function aromaDoce(){
    Valor$Fragrancia$Var = 33;
    reset();
}

function aromaAmadeirado(){
    Valor$Fragrancia$Var = 33;
    reset();
}

function aromaCitrico(){
    Valor$Fragrancia$Var = 33;
    reset();
}

function valor1(){
    reset_Frasc();
    Tip$Frasc = 10;
    Valor$Variavel = 7;
    Change();
    reset();
};

function valor2(){
    reset_Frasc();
    Tip$Frasc = 100;
    Valor$Variavel = 8;
    Change();
    reset();
};

function valor3(){
    reset_Frasc();
    Tip$Frasc = 1000;
    Valor$Variavel = 10;
    Change();
    reset();
};

let Valor$Variavel = 0;
let Valor$Fragrancia$Var = 0;
let Cor$Frasc = 0 ;
let Tip$Frasc = 0;

function Change(){
    let Total$Frasc = Cor$Frasc + Tip$Frasc;

    if (Total$Frasc === 10){
        document.getElementById('perfum').src = "img/Frasco1.png";
    }

    if (Total$Frasc === 11){
        document.getElementById('perfum').src = "img/Frasco1Cor1.png";
    }

    if (Total$Frasc === 12){
        document.getElementById('perfum').src = "img/Frasco1Cor2.png";
    }

    if (Total$Frasc === 13){
        document.getElementById('perfum').src = "img/Frasco1Cor3.png";
    }

    if (Total$Frasc === 14){
        document.getElementById('perfum').src = "img/Frasco1Cor4.png";
    }

    if (Total$Frasc === 15){
        document.getElementById('perfum').src = "img/Frasco1Cor5.png";
    }

    if (Total$Frasc === 16){
        document.getElementById('perfum').src = "img/Frasco1Cor6.png";
    }

    if (Total$Frasc === 100){
        document.getElementById('perfum').src = "img/Frasco2.png";
    }

    if (Total$Frasc === 101){
        document.getElementById('perfum').src = "img/Frasco2Cor1.png";
    }

    if (Total$Frasc === 102){
        document.getElementById('perfum').src = "img/Frasco2Cor2.png";
    }

    if (Total$Frasc === 103){
        document.getElementById('perfum').src = "img/Frasco2Cor3.png";
    }

    if (Total$Frasc === 104){
        document.getElementById('perfum').src = "img/Frasco2Cor4.png";
    }

    if (Total$Frasc === 105){
        document.getElementById('perfum').src = "img/Frasco2Cor5.png";
    }

    if (Total$Frasc === 106){
        document.getElementById('perfum').src = "img/Frasco2Cor6.png";
    }

    if (Total$Frasc === 1000){
        document.getElementById('perfum').src = "img/Frasco3.png";
    }

    if (Total$Frasc === 1001){
        document.getElementById('perfum').src = "img/Frasco3Cor1.png";
    }

    if (Total$Frasc === 1002){
        document.getElementById('perfum').src = "img/Frasco3Cor2.png";
    }

    if (Total$Frasc === 1003){
        document.getElementById('perfum').src = "img/Frasco3Cor3.png";
    }

    if (Total$Frasc === 1004){
        document.getElementById('perfum').src = "img/Frasco3Cor4.png";
    }

    if (Total$Frasc === 1005){
        document.getElementById('perfum').src = "img/Frasco3Cor5.png";
    }

    if (Total$Frasc === 1006){
        document.getElementById('perfum').src = "img/Frasco3Cor6.png";
    }

}

function reset_Cor(){
    Cor$Frasc = 0;
}

function reset_Frasc(){
    Tip$Frasc = 0;
}

let qtd = document.getElementById('quant-porções');
let qtdValor = 0;
qtd.textContent += qtdValor;
qtd.innerHTML = "Quantidade: ";
qtd.innerHTML += qtdValor;

let qtd$ = document.getElementById('result-final');
let qtd$valor = 0;
qtd$.textContent += qtd$valor;
qtd$.innerHTML = "R$: ";
qtd$.innerHTML += qtd$valor;


function reset(){
    qtd.innerHTML = "Quantidade: "
    qtd.innerHTML += 0;
    qtd$.innerHTML = "R$: ";
    qtd$.innerHTML += 0;
    qtdValor = 0;
    qtd$valor = 0;
}

function aumentaQtd(){
    qtdValor ++;
    qtd.innerHTML = "Quantidade: ";
    qtd.innerHTML += qtdValor;
    qtd$valor = qtd$valor + Valor$Variavel + Valor$Fragrancia$Var;
    qtd$.innerHTML = "R$: "
    qtd$.innerHTML += qtd$valor
    parou()
}

function abaixaQtd(){
    if (qtdValor > 0){
        qtdValor --;
        qtd.innerHTML = "Quantidade: ";
        qtd.innerHTML += qtdValor;
        qtd$valor = qtd$valor - Valor$Variavel - Valor$Fragrancia$Var;
        qtd$.innerHTML = "R$: "
        qtd$.innerHTML += qtd$valor
    }
}

function parou(){
    if (Valor$Fragrancia$Var == 0){
        alert("por favor escolha corretamte todas as alternativas")
        reset()
    }

    if(Cor$Frasc == 0){
        alert("por favor escolha corretamte todas as alternativas")
        reset()
    }

    if(Valor$Variavel == 0){
        alert("por favor escolha corretamte todas as alternativas")
        reset()
    }
}
