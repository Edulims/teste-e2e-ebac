Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('criar', (usuario, senha) => {
    cy.get('#reg_email').type(usuario)
    cy.get('#reg_password').type(senha, {log: false})
    cy.get(':nth-child(4) > .button').click()
});

Cypress.Commands.add('adicionarProduto', (index, tamanho, cor) => {
  // Vai para a página de produtos
  cy.get('#primary-menu > .menu-item-629 > a').click()

  // Clica no produto específico
  cy.get('.products > .row').children().eq(index).click()

  // Seleciona as opções
  cy.get(tamanho).click()
  cy.get(cor).click()

  // Adiciona ao carrinho e valida
  cy.get('.single_add_to_cart_button').click()
  cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho.')
  cy.screenshot()
})