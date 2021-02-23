/// <reference types="Cypress" />

describe("Login Test", () => {

    it('Visit gallery page', () => {
        cy.visit('/')
    })
    it('Registration page', () => {
        cy.get('li:nth-of-type(2) > .nav-buttons.nav-link').click()
    })
    it('Filling the form', () => {
        cy.get('#first-name').type('Petar')
        cy.get('#last-name').type('Petrovic')
        cy.get('#email').type('pp@test.com')
        cy.get('#password').type('test1234')
        cy.get('#password-confirmation').type('test1234')
        cy.get('input[type=checkbox]').check()
        cy.get('button[type=submit]').click()




    })
    it('Filling the form', () => {
        cy.get('#first-name').clear()
        cy.get('#last-name').clear()
        cy.get('#email').clear()
        cy.get('#password').clear()
        cy.get('#password-confirmation').clear()
        cy.get('input[type=checkbox]').uncheck()
     




    })
})