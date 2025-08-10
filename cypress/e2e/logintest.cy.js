///<referance type="cypress/ ">


import { LoginPage } from "../pages/loginPage";

const login_page = new LoginPage();
describe('auth test page login ',function(){
before(()=>{
      cy.visit("https://www.saucedemo.com/");
});

it('make sure that when enter invalid data will the operate login will sucess',function()
{
    ///cy.visit("https://www.saucedemo.com/");

login_page.username("REG");
login_page.pass("REG")
login_page.click_login();
cy.title().should('include', 'Swag ');

})
it('make sure that when enter valid data will login',()=>{
login_page.username("standard_user");
login_page.pass("secret_sauce")
login_page.click_login();
  cy.contains('Sauce Labs Backpack').should('be.visible');


})



it.only ('make sure that when login will apear proucts',()=>{

login_page.username("standard_user");
login_page.pass("secret_sauce")
login_page.click_login();
cy.get('[data-test="inventory-item"]').should('have.length.greaterThan', 0);

})





});
