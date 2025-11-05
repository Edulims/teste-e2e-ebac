class CheckoutPage {

    /**
     * Preenche os campos de faturamento do checkout.
     * @param {object} dados - Um objeto com os dados do cliente.
     * Ex: { nome: 'Edu', sobrenome: 'Lima', ... }
     */
    preencherCheckout(dados) {
        cy.get('#billing_first_name').type(dados.nome)
        cy.get('#billing_last_name').type(dados.sobrenome)
        cy.get('#billing_address_1').type(dados.endereco)
        cy.get('#billing_city').type(dados.cidade)
        cy.get('#billing_postcode').type(dados.cep)
        cy.get('#billing_phone').type(dados.telefone)
        cy.get('#billing_email').type(dados.email)
    }

    aceitarTermos() {
        cy.get('#terms').click()
    }

    finalizarPedido() {
        cy.get('#place_order').click()
    }

    
}

// Exporta uma *nova instância* da classe para ser usada nos testes
export default new CheckoutPage()