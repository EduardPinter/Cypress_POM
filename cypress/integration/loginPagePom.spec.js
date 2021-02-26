/// <reference types="Cypress" />

import { loginPage } from '../page_objects/loginPage.js'

 const locators = require("../fixtures/locators.json")

describe("Login Test", () => {

    beforeEach(() => {
        cy.visit('/')
        loginPage.visitLogin();
    })

    it('Attempt to login without password', () => {
        loginPage.fillEmailInput('ep@gmail.com')
        cy.get(locators.login.submit).click()
    })
    it.only('Attempt to login with incorrect email', () => {
        loginPage.login('epp@gmail.com', "bboy96ns")
    })
    it('Attempt to login with incorrect email type #1', () => {
        loginPage.fillEmailInput('ep@gmailcom')
        loginPage.fillPasswordInput('bboy96ns')
        loginPage.clickSubmitButton()
    })
    it('Attempt to login with incorrect email type #2', () => {
        cy.get(locators.login.email).clear().type('ep@gmail')
        cy.get(locators.login.password).clear().type('bboy96ns')
        loginPage.clickSubmitButton()
    })
    it('Attempt to login with incorrect email type #3', () => {
        cy.get(locators.login.email).clear().type('@gmail.com')
        cy.get(locators.login.password).clear().type('bboy96ns')
        loginPage.clickSubmitButton()
    })
    it('Attempt to login with incorrect email type #4', () => {
        cy.get(locators.login.email).clear().type('epgmail.com')
        cy.get(locators.login.password).clear().type('bboy96ns')
        loginPage.clickSubmitButton()
    })
    it('Attempt to login in with incorrect password, less than 8 chars', () => {
        cy.get(locators.login.email).clear().type('ep@gmail.com')
        cy.get(locators.login.password).clear().type('bboy96n')
        loginPage.clickSubmitButton()
    })
    it('Attempt to login in with incorrect password, no numbers', () => {
        cy.get(locators.login.email).clear().type('ep@gmail.com')
        cy.get(locators.login.password).clear().type('bboynsep')
        loginPage.clickSubmitButton()
    })


    it('Logging in with valid credentials', () => {
        cy.get(locators.login.email).clear().type('ep@gmail.com')
        cy.get(locators.login.password).clear().type('bboy96ns')
        loginPage.clickSubmitButton()
    })
    it('Log out', () => {
        cy.get(locators.logout.button).click()
    })
    
})