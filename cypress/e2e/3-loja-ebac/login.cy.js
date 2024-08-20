
///<reference types="cypress" />

describe('Funcionalidade: Login', () => {
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') 

  })

  it('Deve fazer login com sucesso', () => {
    cy.get('#username').type('regina.teste@teste.com.br')
    cy.get('#password').type('teste@teste')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, regina.teste')
  })

  afterEach(() => {
    cy.screenshot()
  })

  it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
    cy.get('#username').type('reginateste@teste.com.br')
    cy.get('#password').type('teste@teste')
    cy.get('.woocommerce-form > .button').click()
    // cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido.')
    cy.get('.woocommerce-error > li').should('exist')
  });


  it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
    cy.get('#username').type('regina.teste@teste.com.br')
    cy.get('#password').type('testeteste')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail regina.')
  });
})