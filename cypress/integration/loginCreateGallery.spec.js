/// <reference types="Cypress" />

import { loginPage } from '../page_objects/loginPage.js'
import { createGallery } from "../page_objects/createGallery"

 const locators = require("../fixtures/locators.json")

describe("Login Test", () => {

    before(() => {
        cy.visit('/')
        loginPage.visitLogin();
    })


    it('Logging in with valid credentials', () => {
        loginPage.fillEmailInput('ep@gmail.com')
        loginPage.fillPasswordInput('bboy96ns')
        loginPage.clickSubmitButton()
    })

    it("Click on Create Gallery", () => {
        createGallery.creatingNewGalleryPage()
        
    })


    it("Create a Gallery", () => {
        createGallery.createAGallery("title", "desc", "https://www.google.com/js.jpg")
        
    })
/*     it('Log out', () => {
        cy.get(locators.logout.button).click()
    }) */
    
})