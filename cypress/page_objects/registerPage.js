class RegisterPage {

   get firstName(){ return cy.get("#first-name") }
   get lastName() { return cy.get("#last-name") }
   get email(){ return cy.get("#email")}
   get password(){ return cy.get("#password") }
   get passwordConfirmation() { return cy.get('#password-confirmation')}
   get checkbox(){ return cy.get("input[type=checkbox]") }
   get submitButton(){ return cy.get("button[type=submit]") }
   get registerPageLink(){ return cy.get("a[href='/register']") }

    get passwordNotMatchAlert() {
        return cy.get(".alert")
      }

     get checkboxNotChecked(){
        return cy.get(".alert")
      }

     get emailTaken(){
         return cy.get(".alert")
      }

     get emailInvalid(){
      return cy.get(".alert")
      }
     

     firstNameInput(firstName){
        this.firstName.type(firstName)
     }

     lastNameInput(lastName){
      this.lastName.type(lastName)
      }

      emailInput(email){
      this.email.type(email)
      }

      passwordInput(password){
      this.password.type(password)
      }

      passwordConfInput(password){
         this.passwordConfirmation.type(password)
      }

      checkboxCheck(){
      this.checkbox.check()
      }

      submitClick(){
      this.submitButton.click()
      }

      registerPageVisit(){
      this.registerPageLink.click()
      }



}

export const registerPage = new RegisterPage()