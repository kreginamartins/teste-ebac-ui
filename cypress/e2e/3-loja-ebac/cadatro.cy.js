/// <reference types="cypress"/>
import { faker } from "@faker-js/faker";


describe('Funcionalidade: Cadastro', () => {

  beforeEach(() => {
    cy.visit('minha-conta')
  })

  it('deve completar o cadastro com suceso', () => {
    cy.get('#reg_email').type(faker.internet.email())
    cy.get('#reg_password').type('teste@123')
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(faker.person.firstName())
    cy.get('#account_last_name').type(faker.person.fullName())
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
  });


  it('Deve completar o cadastro com sucesso - Usando Variáveis', () => {
    let nome = faker.person.firstName()
    let email = faker.internet.email(nome)
    let sobrenome = faker.person.lastName()

    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type('teste@123')
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').type(sobrenome)
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
  });

  it.only('Deve fazer o cadastro com sucesso - Usando comandos customizados', () => {
    cy.preCadastro(faker.internet.email(), 'teste@123', faker.person.firstName(), faker.person.fullName())
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
  });
})