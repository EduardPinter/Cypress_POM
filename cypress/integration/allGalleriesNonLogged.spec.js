/// <reference types="Cypress" />

import { allGalleries } from "../page_objects/allGalleries"
import { loginPage } from "../page_objects/loginPage"
import { registerPage } from "../page_objects/registerPage"

 // const locators = require("../fixtures/locators.json")
 var faker = require('faker')
 const data = require('../fixtures/data.json')

describe("All galleries - not logged in", () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it("Filter field, searching for existent gallery", () => {
        allGalleries.inputFieldType(data.filterHomePage.image555)
        allGalleries.filterButtonClick()
        allGalleries.firstGallery.should("contain", "Image555")

    })

    /* it("Filter field, matching with 2 galleries", () => {
        allGalleries.inputFieldType(data.filterHomePage.slika5)
        allGalleries.filterButtonClick()
        cy.get(".grid").should(($p) => {
    expect($p).to.have.length(2)
    expect($p.first()).to.contain('5 Slika') 

  })  

    })  */

    it("Filter field, 1 char search", () => {
        allGalleries.inputFieldType(data.filterHomePage.oneChar)
        allGalleries.filterButtonClick()
    })

    it("Login - navigation link", () => {
        loginPage.visitLogin()
    })

    it("Register - navigation link", () => {
        registerPage.registerPageVisit()
    })

    it("Load More - button click", () => {
        allGalleries.clickLoadMore()
    })

    it.only("filtering galleries and checking if all of them have the searched word in them", () => {
        allGalleries.inputFieldType(data.createGallery.petSlika)
        allGalleries.filterButtonClick()
        allGalleries.galleryGrid.children().should("contain", data.createGallery.cat)
    })

    
})