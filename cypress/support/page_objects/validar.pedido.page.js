class ValidarPedidoPage { // <-- 1. Adicione a declaração da classe

    /**
     * Valida a mensagem de pedido recebido com sucesso.
     */
    validarPedidoRecebido() {
        cy.get('.woocommerce-notice', { timeout: 8000 })
            .should('contain', 'Seu pedido foi recebido')
        cy.screenshot() // Você pode manter o screenshot aqui
    }

} 

// 3. Exporte a classe
export default new ValidarPedidoPage()