/// <reference types="cypress" />

// cy.viewport
// Arquivos de config
// Configs por linha de comando

context('Dev Finances Agilizei', () => {

    // hooks
    // trechos que executam antes e depois do teste
    // before - antes de todos os testes
    // beforeEach - antes de cada teste
    // after - depois de todos os testes
    // afterEach - depois de cada teste
    beforeEach(() => {
        cy.visit('https://dev-finance.netlify.app/')
        cy.get('#data-table tbody tr').should('have.length', 0)
       
    }); 
    it('Cadastrar entradas', () => {
        // - entender o fluxo manualmente
        // - mapear os elementos que vamos interagir
        // - descrever as interações com o cypress
        // - adicionar as asserções que a gente precisa
       
       
        cy.get('#transaction .button').click() // id + classe
        cy.get('#description').type('Total') // id
        cy.get('[name=amount]').type(63000) // atributo
        cy.get('[type=date]').type('2025-01-22')
        cy.get('button').contains('Salvar').click() // tipo e valor
        
        cy.get('#data-table tbody tr').should('have.length', 1)

    });
    it('Cadastrar Nova Entrada', () => {
         /* ==== Generated with Cypress Studio ==== */
         cy.get('#transaction > .button').click();
         cy.get('#description').clear('Renegade');
         cy.get('#description').type('Renegade Longitude');
         cy.get('#amount').clear('6');
         cy.get('#amount').type('63000');
         cy.get('#date').clear('0002-01-31');
         cy.get('#date').type('2025-01-31');
         cy.get('button').click();
         /* ==== End Cypress Studio ==== */
         cy.get('#data-table tbody tr').should('have.length', 1)

    });
    // Cadastrar saídas
    // Remover entradas e saídas
    it('Cadastrar saídas', () => {
        // - entender o fluxo manualmente
        // - mapear os elementos que vamos interagir
        // - descrever as interações com o cypress
        // - adicionar as asserções que a gente precisa
       
       
        cy.get('#transaction .button').click() // id + classe
        cy.get('#description').type('Compass') // id
        cy.get('[name=amount]').type(-85000) // atributo
        cy.get('[type=date]').type('2025-01-22')
        cy.get('button').contains('Salvar').click() // tipo e valor
        
        cy.get('#data-table tbody tr').should('have.length', 1)

    });
    // Remover entradas e saídas
    it('Remover entradas e saídas', () => {
        const entrada = 'Total'
        const saida = 'Compass'

        cy.get('#transaction .button').click() // id + classe
        cy.get('#description').type(entrada) // id
        cy.get('[name=amount]').type(-63000) // atributo
        cy.get('[type=date]').type('2025-01-22')
        cy.get('button').contains('Salvar').click() // tipo e valor

        cy.get('#transaction .button').click() // id + classe
        cy.get('#description').type(saida) // id
        cy.get('[name=amount]').type(-85000) // atributo
        cy.get('[type=date]').type('2025-01-22')
        cy.get('button').contains('Salvar').click() // tipo e valor

        // Estrategia para elemento pai, e avançar para um td img attr
        cy.get('td.description')
        .contains(entrada)
        .parent()
        .find('img[onclick*=remove]')
        .click()

        // Estrategia 2: buscar todos os irmãos, e buscar o que tem img + attr
        cy.get('td.description')
        .contains(saida)
        .siblings() 
        .children('img[onclick*=remove]')
        .click()

        // Asserção
        cy.get('#data-table tbody tr').should('have.length', 0)

       
    });
    
});

    

