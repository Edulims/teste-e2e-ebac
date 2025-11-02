/// <reference types="cypress" />

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

  it('Selecionar produto 1', () => {
    //
    cy.get('.products > .row').children().first().click()
    cy.get('.button-variable-item-S').click()
    cy.get('.button-variable-item-Orange').click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain' , 'foi adicionado no seu carrinho.')

    
  })

  it('Selecionar produto 2', () => {
    //
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get('.products > .row').children().eq(3).click()
    cy.get('.button-variable-item-XS').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain' , 'foi adicionado no seu carrinho.')

  })

  it('Selecionar produto 3', () => {
    //
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get('.products > .row').children().eq(6).click()
    cy.get('.button-variable-item-XS').click()
    cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain' , 'foi adicionado no seu carrinho.')

  })

    it('Selecionar produto 4', () => {
    //
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get('.products > .row').children().eq(7).click()
    cy.get('.button-variable-item-XS').click()
    cy.get('.button-variable-item-Red').click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain' , 'foi adicionado no seu carrinho.')

  })


})