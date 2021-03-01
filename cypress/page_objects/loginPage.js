class LoginPage {

    get titleInput() {
        return cy.get("#title")
    }
    get descInput() {
        return cy.get("#description")
    }
    get imageUrlInput() {
        return cy.get("input[type='url']")
    }
    
    get emailInput() {
        return cy.get('#email')
    }

    get passwordInput(){
        return cy.get('#password')
    }

    get submitButton(){
        return cy.get('button[type="submit"]')
    }

    get navigationLink() {
        return cy.get('a[href="/login"')
    }

    get createGalleryPage(){
        return cy.get('a[href="/create"')
    }

    get submitButtonCreateGallery(){
        return cy.contains('Submit')
    }

    creatingNewGalleryPage(){
        this.createGalleryPage.click()
    }

    visitLogin() {
        this.navigationLink.click()
    }

    fillEmailInput(email) {
        this.emailInput.type(email)
    }

    fillPasswordInput(password) {
        this.passwordInput.type(password)
    }

    clickSubmitButton() {
        this.submitButton.click()
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