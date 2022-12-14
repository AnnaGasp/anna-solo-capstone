//searching for books
import {Anna} from "./annaPageObject"
const aNNa = new Anna ();

beforeEach (async () => {
    await aNNa.navigate();
});

afterAll (async () => {
    await aNNa.driver.quit();
});

describe ("Tests for searching books", () => {
    test ("Searching books by name, author or ISBN in searchbar on top", async () =>{
        await aNNa.setInput(aNNa.searchBar,"A Gentleman in Moscow\n");
        let resultsName = await aNNa.getSearchResults();
        expect (resultsName).toContain("A Gentleman in Moscow");

        await aNNa.setInput(aNNa.searchBar,"Amor Towles\n");
        let resultsAuthor = await aNNa.getListResults();
        expect (resultsAuthor).toContain("Amor Towles");

        await aNNa.setInput(aNNa.searchBar,"9780143110439\n");
        let resultsISBN = await aNNa.getContentResults();
        expect (resultsISBN).toContain("9780143110439");

    });

    test ("Searching books by name, author or ISBN in search window", async () =>{
        await aNNa.setInput(aNNa.searchField,"A Gentleman in Moscow");
        await aNNa.click(aNNa.searchBtnGreen);
        let resultsName = await aNNa.getSearchResults();
        expect (resultsName).toContain("A Gentleman in Moscow");

        await aNNa.setInput(aNNa.searchField,"Amor Towles");
        await aNNa.click(aNNa.searchBtnGreen1);
        let resultsAuthor = await aNNa.getListResults();
        expect (resultsAuthor).toContain("Amor Towles");

        await aNNa.setInput(aNNa.searchField,"9780143110439");
        await aNNa.click(aNNa.searchBtnGreen1);
        let resultsISBN = await aNNa.getContentResults();
        expect (resultsISBN).toContain("9780143110439");

    });
});