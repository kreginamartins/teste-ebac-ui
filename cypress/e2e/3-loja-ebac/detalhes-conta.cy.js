/// <reference types="cypress"/>

describe('Funcionalidade: Detalhes da conta', () => {

  beforeEach(() => {
    cy.visit('minha-conta/edit-account')
    cy.login('regina.teste@teste.com.br', 'teste@teste')
  })

  it('Deve completar detalhes da conta com sucesso', () => {
    cy.detalhesConta('Regina', 'Martins', 'kelly.qa')
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
  });
  
})