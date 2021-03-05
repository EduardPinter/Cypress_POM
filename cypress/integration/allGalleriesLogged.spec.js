/// <reference types="Cypress" />

import { allGalleries } from "../page_objects/allGalleries"
import { loginPage } from "../page_objects/loginPage"
import { registerPage } from "../page_objects/registerPage"

const locators = require("../fixtures/locators.json")
const data = require('../fixtures/data.json')

describe("Login Test", () => {

    beforeEach(() => {
        cy.visit('/')
        loginPage.visitLogin();
        loginPage.login("ep@gmail.com", "bboy96ns")
    })

    it("Filter field, searching for existent gallery", () => {
        allGalleries.inputFieldType(data.filterHomePage.testImage)
        allGalleries.filterButtonClick()
        cy.wait(1000)
    })

    it("Filter field, 1 char search", () => {
        allGalleries.inputFieldType(data.filterHomePage.oneChar)
        allGalleries.filterButtonClick()
        cy.wait(1000)
    })

    it("My Galleries - navigation link", () => {
        allGalleries.clickMyGalleries()
        cy.wait(1000)
    })

    it("Create Gallery - navigation link", () => {
        allGalleries.clickCreateGallery()
        cy.wait(1000)
    })

    it("Login - navigation link", () => {
        loginPage.visitLogin()
        cy.wait(1000)
    })

    it("Register - navigation link", () => {
        registerPage.registerPageVisit()
        cy.wait(1000)
    })

    
    
})