describe("Login Test", () => {
    
    before(() => {
      cy.loginCommand()
    })

    it('visit gallery', () => {
        cy.visit('/')
    })
})