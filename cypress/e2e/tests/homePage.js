export class homePage {

 elements={
    searchBar:".form-control",
    goSearch:".input-group-btn > .btn",
    selectProduct:':nth-child(1) > .product-thumb > .image > a > .img-responsive',
    addToCart:'#button-cart',
    success:".alert.alert-success.alert-dismissible"


 }

   searchArticle(article){
    
    cy.get(this.elements.searchBar).type(article)
    cy.get(this.elements.goSearch).click()
   }

   addingArticle(){
    cy.get(this.elements.selectProduct).click()
    cy.get(this.elements.addToCart).click()
   }

   verify(){
    return cy.get(this.elements.success)
   }




 }

