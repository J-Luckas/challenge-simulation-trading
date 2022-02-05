

const IU = {
    APORTE: '#aport',
    APORTE_MENSAL: '#monthlyAport',
    
    BOTAO_RENDIMENTO_BRUTO: '#bruto',
    BOTAO_RENDIMENTO_LIQUIDO: '#liquido',

    PRAZO_MESES: "#deadline",
    
    BOTAO_INDEX_PRE: '#pre',
    BOTAO_INDEX_POS: '#pos',
    BOTAO_INDEX_FIXADO: '#fixado',
    
    RENTABILIDADE: '#rentability',
    
    IPCA: '#ipca',
    CDI: '#cdi',

    BOTAO_RESETA_FORMULARIO: '#reset-simulator-form',
    BOTAO_RESETA_FORMULARIO_MOBILE: '#reset-simulator-form-mobile',
    BOTAO_SIMULAR: '#submit-simulator-form',

    FORMULARIO: '#form-simulator'
};

Feature('Test form submit');

Before( ({ I }) => {
    I.amOnPage( 'http://127.0.0.1:3001' );
} );

Scenario("Don't validate aport input", ({ I }) => {
  
  I.fillField( IU.APORTE, 'Teste' );
  I.see('Aporte inicial deve ser um número!');
});

Scenario("Don't validate aport monthly input", ({ I }) => {
    
    I.fillField( IU.APORTE_MENSAL, 'Teste' );
    I.see('Aporte mensal deve ser um número!');
});

Scenario("Don't validate prazo input", ({ I }) => {   
    I.fillField( IU.PRAZO_MESES, 'Teste' );
    I.see('Prazo deve ser um número!');
});
