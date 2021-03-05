/// <reference types="Cypress" />

import { registerPage } from "../page_objects/registerPage"

const faker = require('faker')
const data = require('../fixtures/data.json')
const errors = require('../fixtures/errors.json')

describe("Login Test", () => {

    let userData = {
        randomName: faker.name.firstName(),
        randomLastName: faker.name.lastName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password()
    }

    before(() => {
        cy.visit('/')
        registerPage.registerPageVisit()

    })

    beforeEach(() => {
        registerPage.firstName.clear()
        registerPage.lastName.clear()
        registerPage.email.clear()
        registerPage.password.clear()
        registerPage.passwordConfirmation.clear()
        registerPage.checkbox.uncheck()
    })

    let pass = faker.internet.password()

    it('Filling the form', () => {
        registerPage.firstNameInput(data.loginRegister.firstName)
        registerPage.lastNameInput(data.loginRegister.lastName)
        registerPage.emailInput(data.loginRegister.email)
        registerPage.passwordInput(data.loginRegister.password)
        registerPage.passwordConfInput(data.loginRegister.password)
        registerPage.checkboxCheck()
        registerPage.submitClick()

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