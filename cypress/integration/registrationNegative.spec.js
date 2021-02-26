/// <reference types="Cypress" />

const locators = require("../fixtures/locators.json")
const faker = require('faker')

describe("Login Test", () => {

    beforeEach(() => {
        cy.visit('/')
        cy.wait(1000)
        cy.get(locators.register.registerPage).click()
        cy.wait(1500)
    })
    it('All empty fields', () => {   
        cy.get(locators.register.submit).click()
        cy.wait(1500)
    })
    it('First Name - empty field', () => {
        cy.get(locators.register.lastName).type('Petrovic')
        cy.get(locators.register.email).type('pp@test.com')
        cy.get(locators.register.password).type('test1234')
        cy.get(locators.register.passwordConfirmation).type('test1234')
        cy.get(locators.register.checkbox).check()
        cy.get(locators.register.submit).click()
        cy.wait(1000)

    })
    it('Last Name - empty field', () => {
        cy.get(locators.register.firstName).clear().type('Petar')
        cy.get(locators.register.lastName).clear()
        cy.get(locators.register.email).clear().type('pp@test.com')
        cy.get(locators.register.password).clear().type('test1234')
        cy.get(locators.register.passwordConfirmation).clear().type('test1234')
        cy.get(locators.register.checkbox).uncheck().check()
        cy.get(locators.register.submit).click()
        cy.wait(1000)

    })
    it('Email - empty field', () => {
        cy.get(locators.register.firstName).clear().type('Petar')
        cy.get(locators.register.lastName).clear().type('Petrovic')
        cy.get(locators.register.email).clear()
        cy.get(locators.register.password).clear().type('test1234')
        cy.get(locators.register.passwordConfirmation).clear().type('test1234')
        cy.get(locators.register.checkbox).uncheck().check()
        cy.get(locators.register.submit).click()
        cy.wait(1000)

    })
    it('Email incorrect form #1', () => {
        cy.get(locators.register.firstName).clear().type('Petar')
        cy.get(locators.register.lastName).clear().type('Petrovic')
        cy.get(locators.register.email).clear().type('pptest.com')
        cy.get(locators.register.password).clear().type('test1234')
        cy.get(locators.register.passwordConfirmation).clear().type('test1234')
        cy.get(locators.register.checkbox).uncheck().check()
        cy.get(locators.register.submit).click()
        cy.wait(1000)

    })
    it('Email incorrect form #2', () => {
        cy.get(locators.register.firstName).clear().type('Petar')
        cy.get(locators.register.lastName).clear().type('Petrovic')
        cy.get(locators.register.email).clear().type('@test.com')
        cy.get(locators.register.password).clear().type('test1234')
        cy.get(locators.register.passwordConfirmation).clear().type('test1234')
        cy.get(locators.register.checkbox).uncheck().check()
        cy.get(locators.register.submit).click()
        cy.wait(1000)

    })
    it('Email incorrect form #3', () => {
        cy.get(locators.register.firstName).clear().type('Petar')
        cy.get(locators.register.lastName).clear().type('Petrovic')
        cy.get(locators.register.email).clear().type('pp@testcom')
        cy.get(locators.register.password).clear().type('test1234')
        cy.get(locators.register.passwordConfirmation).clear().type('test1234')
        cy.get(locators.register.checkbox).uncheck().check()
        cy.get(locators.register.submit).click()
        cy.wait(1000)

    })
    it('Email incorrect form #4', () => {
        cy.get(locators.register.firstName).clear().type('Petar')
        cy.get(locators.register.lastName).clear().type('Petrovic')
        cy.get(locators.register.email).clear().type('pp@test')
        cy.get(locators.register.password).clear().type('test1234')
        cy.get(locators.register.passwordConfirmation).clear().type('test1234')
        cy.get(locators.register.checkbox).uncheck().check()
        cy.get(locators.register.submit).click()
        cy.wait(1000)

    })
    it('Email incorrect form #5', () => {
        cy.get(locators.register.firstName).clear().type('Petar')
        cy.get(locators.register.lastName).clear().type('Petrovic')
        cy.get(locators.register.email).clear().type('pp@')
        cy.get(locators.register.password).clear().type('test1234')
        cy.get(locators.register.passwordConfirmation).clear().type('test1234')
        cy.get(locators.register.checkbox).uncheck().check()
        cy.get(locators.register.submit).click()
        cy.wait(1000)

    })
    it('Email incorrect form #6', () => {
        cy.get(locators.register.firstName).clear().type('Petar')
        cy.get(locators.register.lastName).clear().type('Petrovic')
        cy.get(locators.register.email).clear().type('petarpetrovic')
        cy.get(locators.register.password).clear().type('test1234')
        cy.get(locators.register.passwordConfirmation).clear().type('test1234')
        cy.get(locators.register.checkbox).uncheck().check()
        cy.get(locators.register.submit).click()
        cy.wait(1000)

    })
    it('Password and confirm password - empty field', () => {
        cy.get(locators.register.firstName).clear().type('Petar')
        cy.get(locators.register.lastName).clear().type('Petrovic')
        cy.get(locators.register.email).clear().type('pp@test.com')
        cy.get(locators.register.password).clear()
        cy.get(locators.register.passwordConfirmation).clear()
        cy.get(locators.register.checkbox).uncheck().check()
        cy.get(locators.register.submit).click()
        cy.wait(1000)

    })
    it('Password less than 8 chars', () => {
        cy.get(locators.register.firstName).clear().type('Petar')
        cy.get(locators.register.lastName).clear().type('Petrovic')
        cy.get(locators.register.email).clear().type('pp@test.com')
        cy.get(locators.register.password).clear().type('test123')
        cy.get(locators.register.passwordConfirmation).clear().type('test123')
        cy.get(locators.register.checkbox).uncheck().check()
        cy.get(locators.register.submit).click()
        cy.wait(1000)

    })
    it('Password only chars', () => {
        cy.get(locators.register.firstName).clear().type('Petar')
        cy.get(locators.register.lastName).clear().type('Petrovic')
        cy.get(locators.register.email).clear().type('pp@test.com')
        cy.get(locators.register.password).clear().type('testtest')
        cy.get(locators.register.passwordConfirmation).clear().type('testtest')
        cy.get(locators.register.checkbox).uncheck().check()
        cy.get(locators.register.submit).click()
        cy.wait(1000)

    })
    it('Password - empty field', () => {
        cy.get(locators.register.firstName).clear().type('Petar')
        cy.get(locators.register.lastName).clear().type('Petrovic')
        cy.get(locators.register.email).clear().type('pp@test.com')
        cy.get(locators.register.password).clear()
        cy.get(locators.register.passwordConfirmation).clear().type('test1234')
        cy.get(locators.register.checkbox).uncheck().check()
        cy.get(locators.register.submit).click()
        cy.wait(1000)

    })
    it('Password confirmation - empty field', () => {
        cy.get(locators.register.firstName).clear().type('Petar')
        cy.get(locators.register.lastName).clear().type('Petrovic')
        cy.get(locators.register.email).clear().type('pp@test.com')
        cy.get(locators.register.password).clear().type('test1234')
        cy.get(locators.register.passwordConfirmation).clear()
        cy.get(locators.register.checkbox).uncheck().check()
        cy.get(locators.register.submit).click()
        cy.wait(1000)

    })
    it('Password confirmation doesnt match with password', () => {
        cy.get(locators.register.firstName).clear().type('Petar')
        cy.get(locators.register.lastName).clear().type('Petrovic')
        cy.get(locators.register.email).clear().type('pp@test.com')
        cy.get(locators.register.password).clear().type('test1234')
        cy.get(locators.register.passwordConfirmation).clear().type('test12345')
        cy.get(locators.register.checkbox).uncheck().check()
        cy.get(locators.register.submit).click()
        cy.wait(1000)

    })
    it('Terms and Conditions - unchecked', () => {
        cy.get(locators.register.firstName).clear().type('Petar')
        cy.get(locators.register.lastName).clear().type('Petrovic')
        cy.get(locators.register.email).clear().type('pp@test.com')
        cy.get(locators.register.password).clear().type('test1234')
        cy.get(locators.register.passwordConfirmation).clear().type('test1234')
        cy.get(locators.register.checkbox).uncheck()
        cy.get(locators.register.submit).click()
        cy.wait(1000)

    })
    it('Clear fields', () => {
        cy.get(locators.register.firstName).clear()
        cy.get(locators.register.lastName).clear()
        cy.get(locators.register.email).clear()
        cy.get(locators.register.password).clear()
        cy.get(locators.register.passwordConfirmation).clear()
        cy.get(locators.register.checkbox).uncheck()
    })
})