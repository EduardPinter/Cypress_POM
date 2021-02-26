/// <reference types="Cypress" />

const faker = require('faker')

describe("Login Test", () => {

    let userData = {
        randomName: faker.name.firstName(),
        randomLastName: faker.name.lastName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password()
    }

    it('Visit gallery page', () => {
        cy.visit('/')
    })
    it('Registration page', () => {
        cy.get('li:nth-of-type(2) > .nav-buttons.nav-link').click()
    })

    let pass = faker.internet.password()

    it('Filling the form', () => {
        cy.get('#first-name').type(faker.name.firstName())
        cy.get('#last-name').type(faker.name.lastName())
        cy.get('#email').type(faker.internet.email())
        cy.get('#password').type(pass)
        cy.get('#password-confirmation').type(pass)
        cy.get('input[type=checkbox]').check()
        cy.get('button[type=submit]').click()




    })
    /* it('Filling the form', () => {
        cy.get('#first-name').clear()
        cy.get('#last-name').clear()
        cy.get('#email').clear()
        cy.get('#password').clear()
        cy.get('#password-confirmation').clear()
        cy.get('input[type=checkbox]').uncheck()
     




    })  */
})