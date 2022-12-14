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


    constructor() {
        super ({url:"https://thecuriousreaderbooks.indielite.org/"}) 
};
// a few getresults fo each test file
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
    }
};