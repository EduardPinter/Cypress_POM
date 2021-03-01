/// <reference types="Cypress" />

const locators = require("../fixtures/locators.json")

describe("Login Test", () => {

    before(() => {
        cy.visit('/')
        cy.get(locators.login.loginPage).click();
    })

    it('Attempt to login without password', () => {
        cy.get(locators.login.email).type('ep@gmail.com')
        cy.get(locators.login.submit).click()
    })
    it('Attempt to login with incorrect email', () => {
        cy.get(locators.login.email).clear().type('epp@gmail.com')
        cy.get(locators.login.password).clear().type('bboy96ns')
        cy.get(locators.login.submit).click()
    })
    it('Attempt to login with incorrect email type #1', () => {
        cy.get(locators.login.email).clear().type('ep@gmailcom')
        cy.get(locators.login.password).clear().type('bboy96ns')
        cy.get(locators.login.submit).click()
    })
    it('Attempt to login with incorrect email type #2', () => {
        cy.get(locators.login.email).clear().type('ep@gmail')
        cy.get(locators.login.password).clear().type('bboy96ns')
        cy.get(locators.login.submit).click()
    })
    it('Attempt to login with incorrect email type #3', () => {
        cy.get(locators.login.email).clear().type('@gmail.com')
        cy.get(locators.login.password).clear().type('bboy96ns')
        cy.get(locators.login.submit).click()
    })
    it('Attempt to login with incorrect email type #4', () => {
        cy.get(locators.login.email).clear().type('epgmail.com')
        cy.get(locators.login.password).clear().type('bboy96ns')
        cy.get(locators.login.submit).click()
    })
    it('Attempt to login in with incorrect password, less than 8 chars', () => {
        cy.get(locators.login.email).clear().type('ep@gmail.com')
        cy.get(locators.login.password).clear().type('bboy96n')
        cy.get(locators.login.submit).click()
    })
    it('Attempt to login in with incorrect password, no numbers', () => {
        cy.get(locators.login.email).clear().type('ep@gmail.com')
        cy.get(locators.login.password).clear().type('bboynsep')
        cy.get(locators.login.submit).click()
    })


    it.only('Logging in with valid credentials', () => {
        cy.get(locators.login.email).clear().type('ep@gmail.com').should("be.visible")
        cy.get(locators.login.password).clear().type('bboy96ns').should("be.visible")
        cy.get(locators.login.submit).click()
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/')
    })
    it('Log out', () => {
        cy.get(locators.logout.button).click()
    })
    
})