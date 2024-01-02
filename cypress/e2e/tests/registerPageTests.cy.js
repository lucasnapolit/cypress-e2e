import { registerPage } from "../registerPage";
const rActions = new registerPage()
import inputData from "../../fixtures/inputData.json"


describe ("Automation tests",()=>{
    

    it("Regsitration Flow ",()=>{
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register")
      rActions.typeName(inputData.firstName)
      rActions. typeLastName(inputData.lastName)
      rActions.typeEmail(inputData.email)
      rActions.typeTelefone(inputData.telefone)
      rActions.typePassowrd(inputData.password)
      rActions.typeConfirmation(inputData.password)
      rActions.agreePolicy()
      rActions.Nextbutton()
      
        

        

    })

})