import { allGalleries } from "../page_objects/allGalleries"
import { loginPage } from "../page_objects/loginPage"
import { registerPage } from "../page_objects/registerPage"

const data = require('../fixtures/data.json')

describe("Login test", () => {
    it("intercept", () => {
        cy.intercept("POST", "https://gallery-api.vivifyideas.com/api/auth/login", (req) => {
        }).as('succesfullLogin')
        cy.visit('/')
        loginPage.visitLogin()
        loginPage.fillEmailInput(data.loginRegister.email)
        loginPage.fillPasswordInput(data.loginRegister.password)
        loginPage.clickSubmitButton()
        cy.wait("@succesfullLogin").then((interception) => {
            expect(interception.response.statusCode).to.equal(200)
        })

    })
})