class RegisterPage {

    get passwordNotMatchAlert() {
        return cy.get(".alert")
     }

     get checkboxNotChecked(){
        return cy.get(".alert")
     }


}

export const registerPage = new RegisterPage()