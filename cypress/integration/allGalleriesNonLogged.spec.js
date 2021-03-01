/// <reference types="Cypress" />

 const locators = require("../fixtures/locators.json")
 var faker = require('faker')

describe("All galleries - not logged in", () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it("Filter field, searching for existent gallery", () => {
        cy.get(locators.allGalleries.inputField).type("Image555")
        cy.get(locators.allGalleries.filterButton).click()
        cy.get("h2 > .box-title").should("contain", "Image555")

    })

    it.only("Filter field, matching with 2 galleries", () => {
        cy.get(locators.allGalleries.inputField).type("5 Slika")
        cy.get(locators.allGalleries.filterButton).click()
        cy.get(".grid").should(($p) => {
    expect($p).to.have.length(2)
    expect($p.first()).to.contain('5 Slika')

  })

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