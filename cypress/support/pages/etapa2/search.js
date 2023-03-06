Cypress.Commands.add('performSearch', (searchValue) => {
  cy.get('#endereco').type(searchValue, { log: false })
  cy.get('#btn_pesquisar').click()
})
