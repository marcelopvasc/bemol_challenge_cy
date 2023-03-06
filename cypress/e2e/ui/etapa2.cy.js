/* eslint-disable no-undef */
/// <reference types="Cypress" />

import search from '../../fixtures/search.json'

describe('Round 2 ', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl_etapa2'))
  })

  search.forEach(search => {
    it(`Perform the search with the value ${search.search_value}`, () => {
      cy.performSearch(search.search_value)
      cy.get('#resultado-DNEC').contains('td', search.result)
    })
  })
})
