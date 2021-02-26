class CreateGallery {

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