/// <reference types="cypress" />

context('Editing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('edits a packlist', () => {
    cy.get('ul')
      .contains('Rockharz')
      .click({ timeout: 400 })
      .get('img[alt="packlist"]')
      .visit('http://localhost:3000/packlist/medieval')
      .contains('PackList')
      .get('button')
      .contains('medieval')
      .get('ul')
      .should('contain', 'Felldecke')
      .get('img[alt="edit"]')
      .click()
      .get('button')
      .contains('X')
      .click()
      .get('ul')
      .contains('Wasser')
      .should('not.be.visible')
      .get('input[name="item"]')
      .type('Milch')
      .get('img[alt="add"]')
      .click()
      .get('ul')
      .contains('Milch')
      .get('img[alt="save"]')
      .click()
      .get('ul')
      .contains('Milch')
  })
  it('deletes an event', () => {
    cy.get('ul')
      .contains('Rockharz')
      .click({ timeout: 600 })
      .closest('li')
      .find('img[alt="delete"]')
      .click({ force: true })
    cy.get('ul').contains('Rockharz').should('not.be.visible')
  })

  it('edit an event', () => {
    cy.get('ul')
      .contains('WikingerEvent')
      .click({ timeout: 600 })
      .closest('li')
      .find('img[alt="edit"]')
      .click({ force: true })
    cy.get('input[name="name"]')
      .clear()
      .type('TestEvent')
      .get('input[name="location"]')
      .clear()
      .type('Herne')
      .get('input[name="price"]')
      .type('20')
      .get('img[alt="save"]')
      .click()
    cy.get('ul').contains('TestEvent')
  })
})
