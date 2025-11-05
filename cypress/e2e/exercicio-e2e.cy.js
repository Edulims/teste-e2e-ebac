/// <reference types="cypress" />
import checkoutPage from '../support/page_objects/checkout.page.js'
import validarPedidoPage from '../support/page_objects/validar.pedido.page.js'


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


    it('Seleciondo pedidos', () => {
    // produto 1
    cy.adicionarProduto(2, '.button-variable-item-32', '.button-variable-item-Brown')

    // produto 2
    cy.adicionarProduto(3, '.button-variable-item-XS', '.button-variable-item-Blue')

    // produto 3
    cy.adicionarProduto(6, '.button-variable-item-XS', ':nth-child(2) > .value > .variable-items-wrapper > .variable-item')

    // produto 4
    cy.adicionarProduto(1, '.button-variable-item-S', '.button-variable-item-Brown')

    //clicar no carrinho após selecionar a peça
    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()
    
    //preencher o checkout
    const dadosCliente = {
        nome: 'Edu',
        sobrenome: 'Lima',
        endereco: 'Rua professor',
        cidade: 'Curitiba',
        cep: '81310020',
        telefone: '41984996555',
        email: 'edu@teste.com'
    }

    checkoutPage.preencherCheckout(dadosCliente)
    checkoutPage.aceitarTermos()
    checkoutPage.finalizarPedido()
    
    validarPedidoPage.validarPedidoRecebido()
    


  })

    





})