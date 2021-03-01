class CreateGallery {

    get titleLessThan1Char() {
        return cy.get(".alert")
     }

     get titleMoreThan255Char(){
        return cy.get(".alert")
     }

     get WrongImageFormat(){
        return cy.get(".alert")
     }

    get titleInput() {
        return cy.get("#title")
    }
    get descInput() {
        return cy.get("#description")
    }
    get imageUrlInput() {
        return cy.get("input[type='url']")
    }

    get createGalleryPage(){
        return cy.get('a[href="/create"')
    }

    get submitButtonCreateGallery(){
        return cy.contains('Submit')
    }

    titleInputType(title) {
        this.titleInput.type(title)
    }
    descInputType(desc) {
        this.descInput.type(desc)
    }
    imageUrlInputField(url) {
        this.imageUrlInput.type(url)
    }

    submitButtonCreateGalleryClick(){
        this.submitButtonCreateGallery.click()
    }

    creatingNewGalleryPage(){
        this.createGalleryPage.click()
    }

    createAGallery(title,desc,imageUrl)
    {
        this.titleInput.type(title)
        this.descInput.type(desc)
        this.imageUrlInput.type(imageUrl)
        this.submitButtonCreateGallery.click()
    }
}

export const createGallery = new CreateGallery()