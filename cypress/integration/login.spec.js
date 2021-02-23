/// <reference types="Cypress" />

describe("Login Test", () => {

    it('Visit gallery page', () => {
        cy.visit('/')
    })
    it('Login page', () => {
        cy.get("a[href='/login']").click();
    })
    it('Attempt to login without password', () => {
        cy.get('#email').type('ep@gmail.com')
        cy.get('button').click()
    })
    it('Attempt to login with incorrect email', () => {
        cy.get('#email').clear().type('epp@gmail.com')
        cy.get('#password').clear().type('bboy96ns')
        cy.get('button').click()
    })
    it('Attempt to login with incorrect email type #1', () => {
        cy.get('#email').clear().type('ep@gmailcom')
        cy.get('#password').clear().type('bboy96ns')
        cy.get('button').click()
    })
    it('Attempt to login with incorrect email type #2', () => {
        cy.get('#email').clear().type('ep@gmail')
        cy.get('#password').clear().type('bboy96ns')
        cy.get('button').click()
    })
    it('Attempt to login with incorrect email type #3', () => {
        cy.get('#email').clear().type('@gmail.com')
        cy.get('#password').clear().type('bboy96ns')
        cy.get('button').click()
    })
    it('Attempt to login with incorrect email type #4', () => {
        cy.get('#email').clear().type('epgmail.com')
        cy.get('#password').clear().type('bboy96ns')
        cy.get('button').click()
    })
    it('Attempt to login in with incorrect password, less than 8 chars', () => {
        cy.get('#email').clear().type('ep@gmail.com')
        cy.get('#password').clear().type('bboy96n')
        cy.get('button').click()
    })
    it('Attempt to login in with incorrect password, no numbers', () => {
        cy.get('#email').clear().type('ep@gmail.com')
        cy.get('#password').clear().type('bboynsep')
        cy.get('button').click()
    })


    it('Logging in with valid credentials', () => {
        cy.get('#email').clear().type('ep@gmail.com')
        cy.get('#password').clear().type('bboy96ns')
        cy.get('button').click()
    })
    it('Log out', () => {
        cy.get("a[role='button ']").click()
    })
    
})