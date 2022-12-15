import {By} from "selenium-webdriver";
import {BasePage} from "./basePage";

export class Anna extends BasePage {
    //selectors
    logInBtn: By = By.xpath ('(//a[text()="Log In"])[1]');
    usernameField: By = By.css ('#edit-name');
    passwordField: By = By.css ('#edit-pass');
    logInBtnGreen: By = By.xpath ('//button[@id="edit-submit"]');
    myAccountTitle: By = By.css ('#page-title');
    errorMessage: By = By.xpath ('//div[@class="messages error"]');
    logOutBtn: By = By.xpath ('(//a[text()= "Log Out"])[1]');
    searchBar: By =By.xpath ('//input[@id="edit-search-block-form--4"]');
    searchField: By = By.xpath ('//input[@id="edit-search-block-form--2"]');
    searchBtnGreen: By = By.css('#edit-submit--2');
    searchBtnGreen1: By = By.css('#edit-submit--3');
    searchResults: By = By.xpath ('//ol[@class="search-results apachesolr_search-results"]');
    searchContent: By = By.xpath('//div[@class="abaproduct-content"]');
    searchList: By = By.xpath ('//ol[@class="search-results apachesolr_search-results"]');
    browseBooksTab: By = By.xpath('//a[text()="Browse Books"]');
    bookCategoryArt: By =By.xpath('//a[text()="Art"]');
    artBook: By = By.xpath('(//a[@href="/book/9780743201100"])[2]');
    addToCartBtn: By = By.css ('#edit-add-to-cart');
    cartMessage: By = By.xpath('//div[@class="messages status"]');
    shoppingCart: By = By.xpath('(//a[@href="/cart"])[1]');
    removeBtn: By = By.xpath('//button[@name="remove-0"]');
    qtyNumberField: By = By.xpath('//input[@class="form-text required"]');
    qtyField: By = By.css('#edit-items-0-qty');
    updateCartBtn: By = By.xpath('(//button[@id="edit-update"])[2]');



    constructor() {
        super ({url:"https://thecuriousreaderbooks.indielite.org/"}) 
};

    async getAccountResults() {
        return await this.getText(this.myAccountTitle);
    };

    async getErrorResults() {
        return await this.getText(this.errorMessage);
    };

    async getSearchResults() {
        return await this.getText(this.searchResults);
    };

    async getContentResults() {
        return await this.getText(this.searchContent);
    };

    async getListResults() {
        return await this.getText(this.searchList);
    };

    async getQuantity() {
        return await this.driver.findElement(this.qtyField).getAttribute("value");
    
    };

    async getCartResult() {
        return await this.getText(this.cartMessage);
    };
};