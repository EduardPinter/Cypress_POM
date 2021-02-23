/// <reference types="Cypress" />

describe("Login Test", () => {

    it('Visit gallery page', () => {
        cy.visit('/')
        cy.wait(1000)
    })
    it('Registration page', () => {
        cy.get('li:nth-of-type(2) > .nav-buttons.nav-link').click()
        cy.wait(1500)
    })
    it('All empty fields', () => {   
        cy.get('button[type=submit]').click()
        cy.wait(1500)
    })
    it('First Name - empty field', () => {
        cy.get('#last-name').type('Petrovic')
        cy.get('#email').type('pp@test.com')
        cy.get('#password').type('test1234')
        cy.get('#password-confirmation').type('test1234')
        cy.get('input[type=checkbox]').check()
        cy.get('button[type=submit]').click()
        cy.wait(1000)

    })
    it('Last Name - empty field', () => {
        cy.get('#first-name').clear().type('Petar')
        cy.get('#last-name').clear()
        cy.get('#email').clear().type('pp@test.com')
        cy.get('#password').clear().type('test1234')
        cy.get('#password-confirmation').clear().type('test1234')
        cy.get('input[type=checkbox]').uncheck().check()
        cy.get('button[type=submit]').click()
        cy.wait(1000)

    })
    it('Email - empty field', () => {
        cy.get('#first-name').clear().type('Petar')
        cy.get('#last-name').clear().type('Petrovic')
        cy.get('#email').clear()
        cy.get('#password').clear().type('test1234')
        cy.get('#password-confirmation').clear().type('test1234')
        cy.get('input[type=checkbox]').uncheck().check()
        cy.get('button[type=submit]').click()
        cy.wait(1000)

    })
    it('Email incorrect form #1', () => {
        cy.get('#first-name').clear().type('Petar')
        cy.get('#last-name').clear().type('Petrovic')
        cy.get('#email').clear().type('pptest.com')
        cy.get('#password').clear().type('test1234')
        cy.get('#password-confirmation').clear().type('test1234')
        cy.get('input[type=checkbox]').uncheck().check()
        cy.get('button[type=submit]').click()
        cy.wait(1000)

    })
    it('Email incorrect form #2', () => {
        cy.get('#first-name').clear().type('Petar')
        cy.get('#last-name').clear().type('Petrovic')
        cy.get('#email').clear().type('@test.com')
        cy.get('#password').clear().type('test1234')
        cy.get('#password-confirmation').clear().type('test1234')
        cy.get('input[type=checkbox]').uncheck().check()
        cy.get('button[type=submit]').click()
        cy.wait(1000)

    })
    it('Email incorrect form #3', () => {
        cy.get('#first-name').clear().type('Petar')
        cy.get('#last-name').clear().type('Petrovic')
        cy.get('#email').clear().type('pp@testcom')
        cy.get('#password').clear().type('test1234')
        cy.get('#password-confirmation').clear().type('test1234')
        cy.get('input[type=checkbox]').uncheck().check()
        cy.get('button[type=submit]').click()
        cy.wait(1000)

    })
    it('Email incorrect form #4', () => {
        cy.get('#first-name').clear().type('Petar')
        cy.get('#last-name').clear().type('Petrovic')
        cy.get('#email').clear().type('pp@test')
        cy.get('#password').clear().type('test1234')
        cy.get('#password-confirmation').clear().type('test1234')
        cy.get('input[type=checkbox]').uncheck().check()
        cy.get('button[type=submit]').click()
        cy.wait(1000)

    })
    it('Email incorrect form #5', () => {
        cy.get('#first-name').clear().type('Petar')
        cy.get('#last-name').clear().type('Petrovic')
        cy.get('#email').clear().type('pp@')
        cy.get('#password').clear().type('test1234')
        cy.get('#password-confirmation').clear().type('test1234')
        cy.get('input[type=checkbox]').uncheck().check()
        cy.get('button[type=submit]').click()
        cy.wait(1000)

    })
    it('Email incorrect form #6', () => {
        cy.get('#first-name').clear().type('Petar')
        cy.get('#last-name').clear().type('Petrovic')
        cy.get('#email').clear().type('petarpetrovic')
        cy.get('#password').clear().type('test1234')
        cy.get('#password-confirmation').clear().type('test1234')
        cy.get('input[type=checkbox]').uncheck().check()
        cy.get('button[type=submit]').click()
        cy.wait(1000)

    })
    it('Password and confirm password - empty field', () => {
        cy.get('#first-name').clear().type('Petar')
        cy.get('#last-name').clear().type('Petrovic')
        cy.get('#email').clear().type('pp@test.com')
        cy.get('#password').clear()
        cy.get('#password-confirmation').clear()
        cy.get('input[type=checkbox]').uncheck().check()
        cy.get('button[type=submit]').click()
        cy.wait(1000)

    })
    it('Password less than 8 chars', () => {
        cy.get('#first-name').clear().type('Petar')
        cy.get('#last-name').clear().type('Petrovic')
        cy.get('#email').clear().type('pp@test.com')
        cy.get('#password').clear().type('test123')
        cy.get('#password-confirmation').clear().type('test123')
        cy.get('input[type=checkbox]').uncheck().check()
        cy.get('button[type=submit]').click()
        cy.wait(1000)

    })
    it('Password only chars', () => {
        cy.get('#first-name').clear().type('Petar')
        cy.get('#last-name').clear().type('Petrovic')
        cy.get('#email').clear().type('pp@test.com')
        cy.get('#password').clear().type('testtest')
        cy.get('#password-confirmation').clear().type('testtest')
        cy.get('input[type=checkbox]').uncheck().check()
        cy.get('button[type=submit]').click()
        cy.wait(1000)

    })
    it('Password - empty field', () => {
        cy.get('#first-name').clear().type('Petar')
        cy.get('#last-name').clear().type('Petrovic')
        cy.get('#email').clear().type('pp@test.com')
        cy.get('#password').clear()
        cy.get('#password-confirmation').clear().type('test1234')
        cy.get('input[type=checkbox]').uncheck().check()
        cy.get('button[type=submit]').click()
        cy.wait(1000)

    })
    it('Password confirmation - empty field', () => {
        cy.get('#first-name').clear().type('Petar')
        cy.get('#last-name').clear().type('Petrovic')
        cy.get('#email').clear().type('pp@test.com')
        cy.get('#password').clear().type('test1234')
        cy.get('#password-confirmation').clear()
        cy.get('input[type=checkbox]').uncheck().check()
        cy.get('button[type=submit]').click()
        cy.wait(1000)

    })
    it('Password confirmation doesnt match with password', () => {
        cy.get('#first-name').clear().type('Petar')
        cy.get('#last-name').clear().type('Petrovic')
        cy.get('#email').clear().type('pp@test.com')
        cy.get('#password').clear().type('test1234')
        cy.get('#password-confirmation').clear().type('test12345')
        cy.get('input[type=checkbox]').uncheck().check()
        cy.get('button[type=submit]').click()
        cy.wait(1000)

    })
    it('Terms and Conditions - unchecked', () => {
        cy.get('#first-name').clear().type('Petar')
        cy.get('#last-name').clear().type('Petrovic')
        cy.get('#email').clear().type('pp@test.com')
        cy.get('#password').clear().type('test1234')
        cy.get('#password-confirmation').clear().type('test1234')
        cy.get('input[type=checkbox]').uncheck()
        cy.get('button[type=submit]').click()
        cy.wait(1000)

    })
    it('Clear fields', () => {
        cy.get('#first-name').clear()
        cy.get('#last-name').clear()
        cy.get('#email').clear()
        cy.get('#password').clear()
        cy.get('#password-confirmation').clear()
        cy.get('input[type=checkbox]').uncheck()
    })
})