class AllGalleries {

    get inputField() { return cy.get('input[type="text"]') }
    get filterButton() { return cy.get("button[type=button]") }
    get myGalleriesPage() { return cy.get("a[href='/my-galleries']") }
    get createGalleryPage() { return cy.get("a[href='/create']") }
    get loadMore() { return cy.contains("Load More") }
    get firstGallery() { return cy.get("h2 > .box-title") }
    get galleryGrid() { return cy.get("div.grid") }

    inputFieldType(word){
        this.inputField.type(word)
    }
    filterButtonClick(){
        this.filterButton.click()
    }
    clickMyGalleries(){
        this.myGalleriesPage.click()
    }
    clickCreateGallery(){
        this.createGalleryPage.click()
    }
    clickLoadMore(){
        this.loadMore.click()
    }

}

export const allGalleries = new AllGalleries()