/// <reference types="cypress" />

context('Cypress Studio', () => {


    beforeEach(() => {
        cy.visit('https://dev-finance.netlify.app/')
        cy.get('#data-table tbody tr').should('have.length', 0)
       
    }); 
    it('Adicionar, Renegade Longitude 2016', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#transaction > .button').click();
        cy.get('#description').type('Renegade Longitude 2016');
        cy.get('#amount').type('65000');
        cy.get('#date').type('2025-01-31');
        cy.get('button').click();
    });  
      it('Adicionar, Renegade 2016 Branca', () => {
        
        cy.get('#transaction > .button').click();
        cy.get('#description').type('Renegade 2016 Branca');
        cy.get('#amount').type('59000');
        cy.get('#date').type('2025-01-31');
        cy.get('button').click();
      });  
       
      it('Adicionar saída, meu carro', () => {
        cy.get('#transaction > .button').click();
        cy.get('#description').type('meu carro');
        cy.get('#amount').type('-63000');
        cy.get('#date').type('2025-01-31');
        cy.get('button').click();
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#transaction > .button').click();
        cy.get('#description').type('Compass');
        cy.get('#amount').type('87000');
        cy.get('#date').type('2025-02-04');
        cy.get('button').contains('Salvar').click();
        cy.get('[data-index="1"] > :nth-child(4) > img').click();
        // Compass apagado

        cy.get('#transaction > .button').click();
        cy.get('#description').type('Trabalho Qa');
        cy.get('#amount').type('8000');
        cy.get('#date').type('2025-02-04');
        cy.get('button').contains('Salvar').click();
        // Trabalho Qa adicionado 

        cy.get('#transaction > .button').click();
        cy.get('#description').type('Renegade Longitude 2016');
        cy.get('#amount').type('-63000');
        cy.get('#date').type('2025-02-04');
        cy.get('button').contains('Salvar').click();
        //Renegate Longitude 2016 adicionado

        cy.get('#transaction > .button').click();
        cy.get('#description').type('Parcelas Renegate');
        cy.get('#amount').type('-1000');
        cy.get('#date').type('2025-02-04');
        cy.get('button').contains('Salvar').click();
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[data-index="0"] > :nth-child(4) > img').click();
        /* ==== End Cypress Studio ==== */
        cy.get('#data-table tbody tr').should('have.length', 3)
        // 3 Itens na lista
      });
});