/// <reference types="Cypress" />

import { loginPage } from '../page_objects/loginPage.js'

const locators = require("../fixtures/locators.json")

describe("Login Test", () => {

    beforeEach(() => {
        cy.visit('/')
        loginPage.visitLogin();
        loginPage.login("ep@gmail.com", "bboy96ns")
    })

    it("Filter field, searching for existent gallery", () => {
        cy.get(locators.allGalleries.inputField).type("test image")
        cy.get(locators.allGalleries.filterButton).click()
        cy.wait(1000)
    })

    it("Filter field, 1 char search", () => {
        cy.get(locators.allGalleries.inputField).type("a")
        cy.get(locators.allGalleries.filterButton).click()
        cy.wait(1000)
    })

    it("My Galleries - navigation link", () => {
        cy.get(locators.allGalleries.myGalleries).click()
        cy.wait(1000)
    })

    it("Create Gallery - navigation link", () => {
        cy.get(locators.allGalleries.createAGallery).click()
        cy.wait(1000)
    })

    it("Login - navigation link", () => {
        cy.get(locators.allGalleries.login).click()
        cy.wait(1000)
    })

    it("Register - navigation link", () => {
        cy.get(locators.register.registerPage).click()
        cy.wait(1000)
    })

    
    
})