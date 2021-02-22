/// <reference types="Cypress" />

describe("Login Test", () => {

    it('Visit gallery page', () => {
        cy.visit('/')
    })
    it('Login page', () => {
        cy.get("a[href='/login']").click();
    })
    it('Logging in', () => {
        cy.get('#email').type('ep@gmail.com')
        cy.get('#password').type('bboy96ns')
        cy.get('button').click()
    })
    it('Log out', () => {
        cy.get("a[role='button ']").click()
    })
})