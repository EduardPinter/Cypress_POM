/// <reference types="Cypress" />

import { loginPage } from '../page_objects/loginPage.js'


describe("Login Test", () => {

    beforeEach(() => {
        cy.visit('/')
        loginPage.visitLogin();
        loginPage.login("ep@gmail.com", "bboy96ns")
    })

    it('Visit My Galleries', () => {
        cy.visit('/my-galleries')
    })
    

    
    
})