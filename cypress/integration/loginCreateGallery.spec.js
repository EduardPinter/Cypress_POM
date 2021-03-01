/// <reference types="Cypress" />

import { loginPage } from '../page_objects/loginPage.js'
import { createGallery } from "../page_objects/createGallery"
import { registerPage } from "../page_objects/registerPage"

 const locators = require("../fixtures/locators.json")
 var faker = require('faker')
 const dataString = require("../fixtures/data.json")
 const errorMessages = require("../fixtures/errors.json")

describe("Login Test", () => {

    before(() => {
        cy.visit('/')
        loginPage.visitLogin();
        loginPage.login("ep@gmail.com", "bboy96ns")
        createGallery.creatingNewGalleryPage()
    })

    beforeEach(() => {
        createGallery.titleInput.clear()
        createGallery.descInput.clear()
        createGallery.imageUrlInput.clear()
    })

    it("All empty fields", () => {
        createGallery.submitButtonCreateGalleryClick()
        cy.wait(1000)

    })

    it("Title - empty field", () => {
        createGallery.descInputType("opis")
        createGallery.imageUrlInputField("https://www.google.com/image.jpg")
        createGallery.submitButtonCreateGalleryClick()
        cy.wait(1000)

    })

    it("Title - 1 char input", () => {
        createGallery.createAGallery(dataString.createGallery.galleryTitle1Char, "desc", "https://www.google.com/js.jpg")
        createGallery.titleLessThan1Char.should("contain", errorMessages.createGallery.lessThan1Char).and('have.class', 'alert-danger').and('have.css', "color", "rgb(114, 28, 36)" )
        cy.wait(1000)

    })

    it("Title - massive string input", () => {
        createGallery.createAGallery(faker.random.words(150), "desc", "https://www.google.com/js.jpeg")
        createGallery.titleMoreThan255Char.should("contain", errorMessages.createGallery.moreThan255Char)
        cy.wait(1000)

    })

    it("Image Url - empty field", () => {
        createGallery.titleInputType(dataString.createGallery.galleryTitle)
        createGallery.descInputType(dataString.createGallery.galleryDesc)
        createGallery.submitButtonCreateGalleryClick()
        cy.wait(1000)

    })

    it("Image Url - without extension", () => {
        createGallery.createAGallery('pa', "desc", "https://www.google.com/js")
        cy.wait(1000)

    })

    it.only("Image Url - with unsupported image format", () => {
        createGallery.createAGallery('pa', "desc", "https://www.google.com/js.raw")
        createGallery.WrongImageFormat.should("contain", errorMessages.createGallery.wrongImageFormat)
        cy.wait(1000)

    })

    it.only("Filling 5 images", () => {
        createGallery.titleInputType("5 Slika")
        for(var i = 0; i<=4; i++){
            cy.get("input[type='url']").eq(i).type(faker.image.imageUrl() + ".jpg")
            cy.contains("Add image").click()
            cy.wait(1000)
            if(i === 4){
                cy.get("i[class='fas fa-trash']").eq(5).click()
            }
        }
        createGallery.submitButtonCreateGalleryClick()
    })




  /*  it("Create a Gallery", () => {
        createGallery.createAGallery("title", "desc", "https://www.google.com/js.jpg")
        
    }) */ 
/*     it('Log out', () => {
        cy.get(locators.logout.button).click()
    }) */
    
})