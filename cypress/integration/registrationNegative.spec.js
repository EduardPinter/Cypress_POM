/// <reference types="Cypress" />

import { registerPage } from "../page_objects/registerPage"

// const locators = require("../fixtures/locators.json")
const data = require('../fixtures/data.json')
const faker = require('faker')
const errorMessage = require('../fixtures/errors.json')


describe("Login Test", () => {

    before(() => {
        cy.visit('/')
        cy.wait(1000)
        registerPage.registerPageVisit()
        cy.wait(1500)
    })

    beforeEach(() => {
        cy.reload()
    })

    it('All empty fields', () => {   
        registerPage.submitClick()
        cy.wait(1500)
    })
    it('First Name - empty field', () => {
        registerPage.lastNameInput(data.loginRegister.lastName)
        registerPage.emailInput(data.loginRegister.email)
        registerPage.passwordInput(data.loginRegister.password)
        registerPage.passwordConfInput(data.loginRegister.password)
        registerPage.checkboxCheck()
        registerPage.submitClick()
        cy.wait(1000)

    })
    it('Last Name - empty field', () => {
        registerPage.firstNameInput(data.loginRegister.firstName)
        registerPage.emailInput(data.loginRegister.email)
        registerPage.passwordInput(data.loginRegister.password)
        registerPage.passwordConfInput(data.loginRegister.password)
        registerPage.checkboxCheck()
        registerPage.submitClick()
        cy.wait(1000)

    })
    it('Email - empty field', () => {
        registerPage.firstNameInput(data.loginRegister.firstName)
        registerPage.lastNameInput(data.loginRegister.lastName)
        registerPage.passwordInput(data.loginRegister.password)
        registerPage.passwordConfInput(data.loginRegister.password)
        registerPage.checkboxCheck()
        registerPage.submitClick()
        cy.wait(1000)

    })
    it('Email incorrect form #1', () => {
        registerPage.firstNameInput(data.loginRegister.firstName)
        registerPage.lastNameInput(data.loginRegister.lastName)
        registerPage.emailInput(data.loginRegister.emailWithoutAt)
        registerPage.passwordInput(data.loginRegister.password)
        registerPage.passwordConfInput(data.loginRegister.password)
        registerPage.checkboxCheck()
        registerPage.submitClick()
        cy.wait(1000)

    })
    it('Email incorrect form #2', () => {
        registerPage.firstNameInput(data.loginRegister.firstName)
        registerPage.lastNameInput(data.loginRegister.lastName)
        registerPage.emailInput(data.loginRegister.emailWithoutFront)
        registerPage.passwordInput(data.loginRegister.password)
        registerPage.passwordConfInput(data.loginRegister.password)
        registerPage.checkboxCheck()
        registerPage.submitClick()
        cy.wait(1000)

    })
    it('Email incorrect form #3', () => {
        registerPage.firstNameInput(data.loginRegister.firstName)
        registerPage.lastNameInput(data.loginRegister.lastName)
        registerPage.emailInput(data.loginRegister.emailWithoutDot)
        registerPage.passwordInput(data.loginRegister.password)
        registerPage.passwordConfInput(data.loginRegister.password)
        registerPage.checkboxCheck()
        registerPage.submitClick()
        registerPage.emailInvalid.should('contain', errorMessage.errors.emailInvalid)
        cy.wait(1000)

    })
    it('Email incorrect form #4', () => {
        registerPage.firstNameInput(data.loginRegister.firstName)
        registerPage.lastNameInput(data.loginRegister.lastName)
        registerPage.emailInput(data.loginRegister.emailWithoutCom)
        registerPage.passwordInput(data.loginRegister.password)
        registerPage.passwordConfInput(data.loginRegister.password)
        registerPage.checkboxCheck()
        registerPage.submitClick()
        cy.wait(1000)

    })
    it('Email incorrect form #5', () => {
        registerPage.firstNameInput(data.loginRegister.firstName)
        registerPage.lastNameInput(data.loginRegister.lastName)
        registerPage.emailInput(data.loginRegister.emailWithoutOperator)
        registerPage.passwordInput(data.loginRegister.password)
        registerPage.passwordConfInput(data.loginRegister.password)
        registerPage.checkboxCheck()
        registerPage.submitClick()
        cy.wait(1000)

    })
    it('Email incorrect form #6', () => {
        registerPage.firstNameInput(data.loginRegister.firstName)
        registerPage.lastNameInput(data.loginRegister.lastName)
        registerPage.emailInput(data.loginRegister.regularStringAsEmail)
        registerPage.passwordInput(data.loginRegister.password)
        registerPage.passwordConfInput(data.loginRegister.password)
        registerPage.checkboxCheck()
        registerPage.submitClick()
        cy.wait(1000)

    })
    it('Password and confirm password - empty field', () => {
        registerPage.firstNameInput(data.loginRegister.firstName)
        registerPage.lastNameInput(data.loginRegister.lastName)
        registerPage.emailInput(data.loginRegister.email)
        registerPage.checkboxCheck()
        registerPage.submitClick()
        cy.wait(1000)

    })
    it('Password less than 8 chars', () => {
        registerPage.firstNameInput(data.loginRegister.firstName)
        registerPage.lastNameInput(data.loginRegister.lastName)
        registerPage.emailInput(data.loginRegister.email)
        registerPage.passwordInput(data.loginRegister.passwordLessThan8)
        registerPage.passwordConfInput(data.loginRegister.passwordLessThan8)
        registerPage.checkboxCheck()
        registerPage.submitClick()
        registerPage.passwordNotMatchAlert.should("contain", errorMessage.errors.passwordLessThan8).and('contain', errorMessage.errors.emailTaken)
        cy.wait(1000)

    })
    it('Password only chars', () => {
        registerPage.firstNameInput(data.loginRegister.firstName)
        registerPage.lastNameInput(data.loginRegister.lastName)
        registerPage.emailInput(data.loginRegister.email)
        registerPage.passwordInput(data.loginRegister.passwordWithoutNumbers)
        registerPage.passwordConfInput(data.loginRegister.passwordWithoutNumbers)
        registerPage.checkboxCheck()
        registerPage.submitClick()
        registerPage.passwordNotMatchAlert.should("contain", errorMessage.errors.passwordInvalid).and('contain', errorMessage.errors.emailTaken)
        cy.wait(1000)

    })
    it('Password - empty field', () => {
        registerPage.firstNameInput(data.loginRegister.firstName)
        registerPage.lastNameInput(data.loginRegister.lastName)
        registerPage.emailInput(data.loginRegister.email)
        registerPage.passwordConfInput(data.loginRegister.password)
        registerPage.checkboxCheck()
        registerPage.submitClick()
        cy.wait(1000)

    })
    it('Password confirmation - empty field', () => {
        registerPage.firstNameInput(data.loginRegister.firstName)
        registerPage.lastNameInput(data.loginRegister.lastName)
        registerPage.emailInput(data.loginRegister.email)
        registerPage.passwordInput(data.loginRegister.password)
        registerPage.checkboxCheck()
        registerPage.submitClick()
        cy.wait(1000)

    })
    it.only('Password confirmation doesnt match with password', () => {
        registerPage.firstNameInput(data.loginRegister.firstName)
        registerPage.lastNameInput(data.loginRegister.lastName)
        registerPage.emailInput(data.loginRegister.email)
        registerPage.passwordInput(data.loginRegister.password)
        registerPage.passwordConfInput(data.loginRegister.passwordNotMatch)
        registerPage.checkboxCheck()
        registerPage.submitClick()
        registerPage.passwordNotMatchAlert.should('contain', errorMessage.errors.passwordNotMatching).and('contain', errorMessage.errors.emailTaken)
        cy.wait(1000)

    })
    it.only('Terms and Conditions - unchecked', () => {
        registerPage.firstNameInput(data.loginRegister.firstName)
        registerPage.lastNameInput(data.loginRegister.lastName)
        registerPage.emailInput(data.loginRegister.email)
        registerPage.passwordInput(data.loginRegister.password)
        registerPage.passwordConfInput(data.loginRegister.password)
        registerPage.submitClick()
        registerPage.checkboxNotChecked.should('contain', errorMessage.errors.checkboxNotChecked).and('contain', errorMessage.errors.emailTaken)
        cy.wait(1000)

    })
    it.only('Email already taken', () => {
        registerPage.firstNameInput(data.loginRegister.firstName)
        registerPage.lastNameInput(data.loginRegister.lastName)
        registerPage.emailInput(data.loginRegister.email)
        registerPage.passwordInput(data.loginRegister.password)
        registerPage.passwordConfInput(data.loginRegister.password)
        registerPage.checkboxCheck()
        registerPage.submitClick()
        registerPage.emailTaken.should('contain', errorMessage.errors.emailTaken)
        cy.wait(1000)

    })
})