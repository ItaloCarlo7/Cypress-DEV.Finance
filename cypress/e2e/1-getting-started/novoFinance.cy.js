

describe('Transações', () => {


beforeEach(() => {   //hooks
    cy.visit("https://dev-finance.netlify.app/")
});
    it('Cadastrar uma entrada', () => {
       
         criarTransacao("Freela", 250)
         
        cy.get("tbody tr td.description").should("have.text", "Freela")
    });
    it('Cadastrar uma saída', () => {
   
       criarTransacao("Cinema", -50)

        // cy.get('[data-index="1"] > .description').should("have.text", "Cinema") Este codigo funciona quando é apenas um teste
        cy.get("tbody tr td.description").should("have.text", "Cinema") // Este codigo funciona quando for dois testes separados
    });
    it('Excluir transação', () => {
        criarTransacao("Freela", 250)
        criarTransacao("Açái", 35)


        cy.contains(".description", "Freela") //td - referencia
            .parent() // tr
            .find('img') // elemento que a gente precisa
            .click()
        
    //Outra forma de buscar o elemento    
        // cy.contains(".description", "Freela")
           //  .siblings()
           //  .children('img')
           //  .click()

           cy.get('tbody tr').should("have.length", 1)
    });
});
function criarTransacao(descricao, valor) {
    cy.contains("Nova Transação").click()
        cy.get('#description').type(descricao)
        cy.get('#amount').type(valor)
        cy.get('#date').type("2025-01-27") // yyyy-mm-dd
        cy.get('button').click() // Outra forma de capturar este elemento, cy.contains('button', 'Salvar').click()
}