import {homePage} from "./homePage"
const homePageObj = new homePage()
import inputData from "../../fixtures/inputData.json"



Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

        it("Adding to cart",()=>{

            cy.login(inputData.email,inputData.password)
            homePageObj.searchArticle(inputData.article)
            homePageObj.addingArticle()
            homePageObj.verify().should('contain',inputData.succes)
        })
        
       
        
   