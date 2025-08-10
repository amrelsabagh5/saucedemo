
///<referance type = "cypress/">

import { LoginPage } from "../pages/loginPage";



const page_login1 = new LoginPage

before(function (){
 cy.visit("https://www.saucedemo.com/");
page_login1.username("standard_user");
page_login1.pass("secret_sauce")
page_login1.click_login();


});

describe ('auth products',function(){

   it ('make sure that when clik in product will open page his product',function(){

cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click();

cy.contains('Sauce Labs Backpack').should('be.visible');

})

it ('make sure that when add to card will adding ',function(){

  cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click();
cy.get('[data-test="add-to-cart"]').click();
cy.contains('Remove').should('be.visible')

})

it('make sure that when click on remove will retern to add to card',function(){
cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click();
cy.get('[data-test="add-to-cart"]').click();
cy.get('[data-test="remove"]') .click();
cy.contains('Add to cart').should('be.visible');

})


it ('make sure that when add card will sending note in shopping ', function(){
cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click();
cy.get('[data-test="add-to-cart"]').click();
cy.get('[data-test="shopping-cart-link"]').click();
cy.contains('Checkout').should('be.visible');
})

it('make sure that the proudact which is adding , adding by way right ',function(){
cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click();
cy.get('[data-test="add-to-cart"]').click();
cy.get('[data-test="shopping-cart-link"]').click();
cy.contains('Sauce Labs Backpack').should('be.visible');

})
it('Should appear when adding two products to the card. ',function(){

cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
cy.get('[data-test="shopping-cart-link"]').click();
cy.get('[data-test="continue-shopping"]').click();
cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
cy.get('[data-test="shopping-cart-link"]').click();
cy.contains('Sauce Labs Bike Light').should('be.visible');
cy.contains('Sauce Labs Backpack').should('be.visible');

})


it('make sure that when remove order will removed in bage shopping', function(){

cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
cy.get('[data-test="shopping-cart-link"]').click();
cy.get('[data-test="continue-shopping"]').click();
cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
cy.get('[data-test="remove-sauce-labs-backpack"]').click();
cy.get('[data-test="remove-sauce-labs-bike-light"]').click();
cy.get('[data-test="shopping-cart-link"]').click();
cy.get('[data-test="inventory-item"]').should('have.length',0)



})

it ('make sure that icon items have (all,about,logout,reset app state) ',function (){
cy.get('#react-burger-menu-btn').click();
cy.contains('All Items').should('be.visible');
cy.contains('About').should('be.visible');
cy.contains('Logout').should('be.visible');
cy.contains('Reset App State').should('be.visible');


});

it('make sure that when open page About will opened',function(){
cy.get('#react-burger-menu-btn').click();
cy.get('[data-test="about-sidebar-link"]').click();
cy.contains('About').should('be.visible')

})
it('make sure that when click on icon logout will do it',function(){
  
cy.get('#react-burger-menu-btn').click();
cy.get('[data-test="logout-sidebar-link"]').click();
cy.contains('Swag Labs').should('be.visible');

})

it('make sure that when click Reset on App will reset any action  on page items',function(){
  cy.get('#react-burger-menu-btn').click();
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  cy.get('[data-test="reset-sidebar-link"]').click();
 cy.get('[data-test="remove-sauce-labs-backpack"]').should('contain.text','Add to card')
})

it('make sure that when clcik on reset on app will reset in page order ',function(){
cy.get('#react-burger-menu-btn').click();
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  cy.get('[data-test="reset-sidebar-link"]').click();
  cy.get('[data-test="shopping-cart-link"]').click();
 cy.get('[data-test="inventory-item"]').should('have.length',0)

})

it.only('When I filter by z for the correct order it will show',function(){

  cy.get('[data-test="product-sort-container"]').select(1);

  cy.get('.inventory_item_name').then($names => {
    const actualNames = [...$names].map(el => el.innerText.trim());
    const sortedNames = [...actualNames].sort((a, b) => b.localeCompare(a));
    expect(actualNames).to.deep.equal(sortedNames);
  });
});

})


