/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe('Round 3 ', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl_etapa3'))
  })

  it('Check name, rating and price from the first list item', () => {
    // Search for Manaus
    cy.get("input[name='ss']").type('Manaus')
   
    
    cy.get("body").then($body => {
      if ($body.find("[data-testid='autocomplete-results']")) {
        cy.get("button[type='submit']").click()
      } else {
        cy.get("button[aria-label='Dismiss sign in information.']").click()
        cy.get("button[type='submit']").click()
      }
    })
  
    // Select any date and scroll to the top
    cy.get("[data-testid='searchbox-datepicker-calendar']").find('table').contains('15').click()
    cy.get("[data-testid='searchbox-layout-vertical']").find('button[type="submit"]').click()
    cy.scrollTo('top')
    // Select by the best rating
    cy.get('[data-testid="sorters-dropdown-trigger"]').click()
    cy.get("[data-testid='sorters-dropdown']").find('li').eq(8).click()

    // Assert the name, rating and price from the first list item
    // Name
    cy.get("[data-testid='property-card'").first().find("[data-testid='title']")
      .should('have.text', 'Hotel Villa Amazônia')
      // Rating
    cy.get("[data-testid='property-card'").first().find("[data-testid='rating-stars'] > span")
      .should('have.length', 5)
      // Price
    cy.get("[data-testid='property-card'").first().find("[data-testid='price-and-discounted-price']")
      .should('have.text', 'R$\u00A01,248')
  })

})