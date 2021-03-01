/// <reference types="Cypress" />

 const locators = require("../fixtures/locators.json")
 var faker = require('faker')

describe("All galleries - not logged in", () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it("Filter field, searching for existent gallery", () => {
        cy.get(locators.allGalleries.inputField).type("test image")
        cy.get(locators.allGalleries.filterButton).click()
    })

    it("Filter field, 1 char search", () => {
        cy.get(locators.allGalleries.inputField).type("a")
        cy.get(locators.allGalleries.filterButton).click()
    })

    it("Login - navigation link", () => {
        cy.get(locators.allGalleries.login).click()
    })

    it("Register - navigation link", () => {
        cy.get(locators.register.registerPage).click()
    })

    it("Load More - button click", () => {
        cy.contains("Load More").click()
    })

    
})