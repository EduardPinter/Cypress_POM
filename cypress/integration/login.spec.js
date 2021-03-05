/// <reference types="Cypress" />

import { loginPage } from "../page_objects/loginPage"

// const locators = require("../fixtures/locators.json")
const data = require('../fixtures/data.json')
const errors = require('../fixtures/errors.json')

describe("Login Test", () => {

    before(() => {
        cy.visit('/')
        loginPage.visitLogin()
    })

    beforeEach(() => {
        cy.reload()
    })
    it('Attempt to login without password', () => {
        loginPage.fillEmailInput(data.loginRegister.email)
        loginPage.clickSubmitButton()
    })
    it('Attempt to login with incorrect email', () => {
        loginPage.fillEmailInput(data.loginRegister.incorrectEmail)
        loginPage.fillPasswordInput(data.loginRegister.password)
        loginPage.clickSubmitButton()
        loginPage.errorAlert.should("contain", errors.errors.loginInvalid)
    })
    it('Attempt to login with incorrect email type #1', () => {
        loginPage.fillEmailInput(data.loginRegister.emailWithoutDot)
        loginPage.fillPasswordInput(data.loginRegister.password)
        loginPage.clickSubmitButton()
        loginPage.errorAlert.should("contain", errors.errors.loginInvalid)

    })
    it('Attempt to login with incorrect email type #2', () => {
        loginPage.fillEmailInput(data.loginRegister.emailWithoutCom)
        loginPage.fillPasswordInput(data.loginRegister.password)
        loginPage.clickSubmitButton()

    })
    it('Attempt to login with incorrect email type #3', () => {
        loginPage.fillEmailInput(data.loginRegister.emailWithoutFront)
        loginPage.fillPasswordInput(data.loginRegister.password)
        loginPage.clickSubmitButton()

    })
    it('Attempt to login with incorrect email type #4', () => {
        loginPage.fillEmailInput(data.loginRegister.emailWithoutAt)
        loginPage.fillPasswordInput(data.loginRegister.password)
        loginPage.clickSubmitButton()

    })
    it('Attempt to login in with incorrect password, less than 8 chars', () => {
        loginPage.fillEmailInput(data.loginRegister.email)
        loginPage.fillPasswordInput(data.loginRegister.passwordLessThan8)
        loginPage.clickSubmitButton()
        loginPage.errorAlert.should("contain", errors.errors.loginInvalid)

    })
    it('Attempt to login in with incorrect password, no numbers', () => {
        loginPage.fillEmailInput(data.loginRegister.email)
        loginPage.fillPasswordInput(data.loginRegister.passwordWithoutNumbers)
        loginPage.clickSubmitButton()
        loginPage.errorAlert.should("contain", errors.errors.loginInvalid)

    })


    it('Logging in with valid credentials', () => {
        loginPage.login(data.loginRegister.email, data.loginRegister.password)
        loginPage.clickSubmitButton()
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/')
    })
})

describe("Logout", () => {
    it('Log out', () => {
        loginPage.logoutButtonClick()
    })
})