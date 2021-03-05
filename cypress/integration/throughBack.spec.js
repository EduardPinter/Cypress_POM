describe("Login Test", () => {
    
    before(() => {
        cy.request('POST', "https://gallery-api.vivifyideas.com/api/auth/login", {
            email:"ep@gmail.com", password:"bboy96ns"
        })
        .its('body').then((identity) => {
            window.localStorage.setItem('token', identity.access_token)
        })
    })

    it('visit gallery', () => {
        cy.visit('/')
    })
})