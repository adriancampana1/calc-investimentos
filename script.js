/* const form = document.querySelector('.form');
const inputTypeInvestment = document.querySelector('.typeofinvestment');
const inputInitialInvestment = document.querySelector(
    '#event-initial-investment'
);
const inputMonthlyInvestment = document.querySelector(
    '#event-monthly-investment'
);
const inputTerm = document.querySelector('input #event-term');
const selectTerm = document.querySelector('select #event-term');
const inputReturnInvestment = document.querySelector(
    '.input input #event-return-investment'
);
const selectReturnInvestment = document.querySelector(
    '.input select #event-return-investment'
);

const modal = document.querySelector('.modal');
const modalMessage = document.querySelector('.result-wrapper span');
const btnClose = document.querySelector('.modal button'); */

const form = document.querySelector('.form');

const inputInitial = document.querySelector('#event-initial-investment');
const inputMonthly = document.querySelector('#event-monthly-investment');

const inputTerm = document.querySelector('#event-term');
const selectTerm = document.querySelector('#event-select-term');

const inputReturnInvestment = document.querySelector(
    '#event-return-investment'
);
const selectReturnInvestment = document.querySelector(
    '#event-select-return-investment'
);

/* certo */

const Modal = {
    wrapper: document.querySelector('.modal'),
    messageInvestimentoTotal: document.querySelector(
        '.modal .result-wrapper span .tt-bruto'
    ),
    messageInvestido: document.querySelector(
        '.modal .result-wrapper span .vt-investido'
    ),
    messageJuros: document.querySelector('.modal .result-wrapper span .juros'),
    btnClose: document.querySelector('.modal button'),

    open() {
        Modal.wrapper.classList.add('open');
    },

    close() {
        Modal.wrapper.classList.remove('open');
    },
};

/* funções que fazem o calculo */

/* calculo do v total bruto */
function resultTotalValue(
    initial,
    monthly,
    termValue,
    termSelected,
    returnValue
) {
    let term = 0;

    /*  */
    if (termSelected == 'Anos') {
        term = parseFloat(termValue) * 12;
    } else if (termSelected == 'Meses') {
        term = parseFloat(termValue);
    }
    /*  */

    let investimentoAcumulado = parseFloat(initial);
    let investimentoTotalAcumulado =
        parseFloat(initial) + parseFloat(monthly) * term;
    let jurosCompostos = 0;
    let jurosCompostosTotais = 0;

    for (let i = 0; i < term; i++) {
        jurosCompostos = (investimentoAcumulado + returnValue) / 100;
        jurosCompostosTotais += jurosCompostos;
        investimentoAcumulado += jurosCompostos + parseFloat(monthly);
    }

    const valorReceber = investimentoTotalAcumulado + jurosCompostosTotais;

    console.log(valorReceber);
    console.log(investimentoAcumulado);

    /*
    transforma o resultado em moeda R$ .toLocaleString(
        'pt-br',
        { style: 'currency', currency: 'BRL' }
        ); */
}

form.onsubmit = (event) => {
    event.preventDefault();

    /* recebe os valores atribuidos na calculadora */
    const initial = inputInitial.value;
    const monthly = inputMonthly.value;

    const termValue = inputTerm.value;
    const termSelected = selectTerm.options[selectTerm.selectedIndex].text;

    const returnValue = inputReturnInvestment.value / 100;

    /* recebe os calculos e salva na constante para exibir no modal */
    const resultTotal = resultTotalValue(
        initial,
        monthly,
        termValue,
        termSelected,
        returnValue
    );

    Modal.open();
};

Modal.btnClose.onclick = () => {
    Modal.close();
};

/* function formatCurrency() {
        var elemento = document.getElementById('event-initial-investment');
        var valor = elemento.value;
    
        valor = valor + '';
        valor = parseInt(valor.replace(/[\D]+/g, ''));
        valor = valor + '';
        valor = valor.replace(/([0-9]{2})$/g, ',$1');
    
        if (valor.length > 6) {
            valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');
        }
    
        elemento.value = valor;
        if (valor == 'NaN') elemento.value = '';
    } */
