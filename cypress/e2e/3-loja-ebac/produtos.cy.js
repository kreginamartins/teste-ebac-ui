/// <reference types="cypress" />

import produtosPage from '../../support/page-objects/produtos.page';


describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    afterEach(() => {
        cy.screenshot();
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
        //.first()
        //.last()
        //.eq(2)
        .contains('Apollo Running Short')
        .click()

        cy.get('#tab-title-description > a').should('contain' , 'Descrição')
    });


    it('Deve selecionar um produto da lista', () => {
       produtosPage.buscarProdutoLista('Aether Gym Pant')

        cy.get('#tab-title-description > a').should('contain' , 'Descrição')
        
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Abominable Hoodie'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });
    
    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Zeppelin Yoga Pant')
        cy.get('.product_title').should('contain', 'Zeppelin Yoga Pant')

    });

    it('Deve adicionar produto ao carrinho', () => {
        let quantidade = 5
        produtosPage.buscarProduto('Daphne Full-Zip Hoodie')
        produtosPage.addProdutoCarrinho('M', 'Purple', quantidade)
        cy.get('.woocommerce-message').should('contain', `${quantidade} × “Daphne Full-Zip Hoodie” foram adicionados no seu carrinho.`)
    });

    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[2].nomeProduto)
            produtosPage.addProdutoCarrinho(dados[2].tamanho, dados[2].cor, dados[2].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[2].nomeProduto)

        })
       
    });
});