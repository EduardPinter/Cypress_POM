/// <reference types="Cypress" />

import { allGalleries } from "../page_objects/allGalleries"
import { loginPage } from "../page_objects/loginPage"
import { registerPage } from "../page_objects/registerPage"

const dataNegative = require("../fixtures/dataNegativeRegistration.json")

describe("ForEach test", () => {

    before(() => {
        cy.visit('/')
        registerPage.registerPageVisit();
    })
    beforeEach(() => {
        cy.reload()
    })

    dataNegative.forEach(function(element) {
        
        it(dataNegative.element, () => {
            registerPage.firstNameInput(dataNegative.element.firstName)
            registerPage.lastNameInput(dataNegative.element.lastName)
            registerPage.emailInput(dataNegative.element.email)
            registerPage.passwordInput(dataNegative.element.password)
            registerPage.passwordConfInput(dataNegative.element.passwordConfirmation)
            registerPage.checkboxCheck()
            registerPage.submitClick()
            cy.wait(1500)
        })
    })


})