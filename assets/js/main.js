// contas -> + , - , * , / , ** , 

function escopo(){

    const tabelaConsole = document.querySelectorAll('.btn');
    const inputCalculo = document.querySelector('.input-calculo');

    //string que segura os digitos que estao sendo manipulados
    let digitos = '';

    for(let i of tabelaConsole){
        i.addEventListener('click',apertaBotao);
    }

    function atualizaDisplay(){
        inputCalculo.value = digitos;
    }

    function adicionaNovoDigito(digito){
        digitos += digito;
    }

    function apertaBotao(e){
        const btnText = e.target.innerText;
        if( continuaConta(btnText) ) {
            adicionaNovoDigito(btnText);
            atualizaDisplay();
        }
    }

    function limpaDigito(){
        digitos = digitos.slice(0,-1)
        atualizaDisplay()
    }

    function iniciaResultado()
    {   
        digitos = eval(digitos)
        atualizaDisplay();
    }

    function limpaTodosDigitos(){
        digitos = '';
        atualizaDisplay();
    }

    function continuaConta(btnText)
    {
        if(btnText === 'C'){
            limpaTodosDigitos();
            return false;
        }else if(btnText === '='){
            iniciaResultado();
            return false;
        }else if(btnText=== '«'){
            limpaDigito();
            return false;
        }
        return true;
    }     
}

escopo();