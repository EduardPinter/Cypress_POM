class LoginPage {

    get emailInput() { return cy.get('#email') }

    get passwordInput() { return cy.get('#password') }

    get submitButton() { return cy.get('button[type="submit"]') }

    get navigationLink() { return cy.get('a[href="/login"') }

    get submitButtonCreateGallery() { return cy.contains('Submit') }

    get logoutButton() { return cy.get("a[role='button ']") }

    get errorAlert() { return cy.get(".alert") }


    logoutButtonClick() { this.logoutButton.click() }

    creatingNewGalleryPage() { this.createGalleryPage.click() }

    visitLogin() { this.navigationLink.click() }

    clickSubmitButton() { this.submitButton.click() }

    fillEmailInput(email) {
        this.emailInput.type(email)
    }

    fillPasswordInput(password) {
        this.passwordInput.type(password)
    }

    login(email,password) {
        email = email || undefined
        password = password || undefined
        if(password != undefined || email != undefined){
            this.emailInput.type(email)
            this.passwordInput.type(password)
        }
        this.submitButton.click()
    }

}

export const loginPage = new LoginPage()