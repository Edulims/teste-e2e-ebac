// <reference types="cypress" />

//const { should } = require("chai");

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('/')
  });

  

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      //Fazendo uma compra teste para o checkout
      cy.get('#primary-menu > .menu-item-629 > a').click()
      cy.get('.products > .row').children().eq(1).click()
      cy.get('.button-variable-item-S').click()
      cy.get('.button-variable-item-Brown').click()
      cy.get('.single_add_to_cart_button').click()
      //clicar no carrinho após selecionar a peça
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()
      //preencher o checkout
      cy.get('#billing_first_name').type('Edu')
      cy.get('#billing_last_name').type('Lima')
      cy.get('#billing_address_1').type('Rua professor')
      cy.get('#billing_city').type('Curitiba')
      cy.get('#billing_postcode').type('81310-020')
      cy.get('#billing_phone').type('41984996555')
      cy.get('#billing_email').type('edu@teste.com')
      cy.get('#terms').click()
      cy.get('#place_order').click()
      cy.get('.woocommerce-notice').should('contain' , 'Seu pedido foi recebido.')

      
  });


})