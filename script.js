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

const Modal = {
    wrapper: document.querySelector('.modal'),
    messageInvestimentoTotal: document.querySelector(
        '.modal .result-wrapper span .tt-bruto'
    ),
    btnClose: document.querySelector('.modal button'),

    open() {
        Modal.wrapper.classList.add('open');
    },

    close() {
        Modal.wrapper.classList.remove('open');
    },
};

form.onsubmit = (event) => {
    event.preventDefault();

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
