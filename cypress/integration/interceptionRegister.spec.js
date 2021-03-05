import { allGalleries } from "../page_objects/allGalleries"
import { loginPage } from "../page_objects/loginPage"
import { registerPage } from "../page_objects/registerPage"

const data = require('../fixtures/data.json')

describe("Register test", () => {
    it("intercept", () => {
        cy.intercept("POST", "https://gallery-api.vivifyideas.com/api/auth/register", (req) => {
        }).as('succesfullRegister')
        cy.visit('/')
        registerPage.registerPageVisit()
        registerPage.firstNameInput(data.loginRegister.firstName)
        registerPage.lastNameInput(data.loginRegister.lastName)
        registerPage.emailInput(data.loginRegister.emailOne)
        registerPage.passwordInput(data.loginRegister.password)
        registerPage.passwordConfInput(data.loginRegister.password)
        registerPage.checkboxCheck()
        registerPage.submitClick()
        cy.wait("@succesfullRegister").then((interception) => {
            expect(interception.response.statusCode).to.equal(200)
            expect(interception.response.body.access_token).exist
        })

    })
})