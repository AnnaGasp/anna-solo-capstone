//adding removing updating shopping cart
// added to your shopping cart.
//removed from your shopping cart.

import{Anna} from "./annaPageObject";
const AnnA = new Anna();

beforeEach (async () => {
    await AnnA.navigate();
});

afterAll (async () => {
    await AnnA.driver.quit();
});

describe("Tests for browsing books, adding/removing book to/from a cart, updating shopping cart", () =>{
    test("Browsing books and adding a book to a cart", async() =>{
        await AnnA.click(AnnA.browseBooksTab);
        await AnnA.click(AnnA.bookCategoryArt);
        await AnnA.click(AnnA.artBook);
        await AnnA.click(AnnA.addToCartBtn);
        let cartResult = await AnnA.getCartResult();
        expect(cartResult).toContain("added to your shopping cart.");
    });

    test("Updating quantity in shopping cart", async () =>{
        await AnnA.click(AnnA.browseBooksTab);
        await AnnA.click(AnnA.bookCategoryArt);
        await AnnA.click(AnnA.artBook);
        await AnnA.click(AnnA.addToCartBtn);
        await AnnA.click(AnnA.shoppingCart);
        await AnnA.setInput(AnnA.qtyNumberField,"2");
        await AnnA.click(AnnA.updateCartBtn);
        let updateResult = await AnnA.getQuantity();
        expect(updateResult).toContain("2");
    });

    test("Removing a book from a shopping cart", async() =>{
        await AnnA.click(AnnA.browseBooksTab);
        await AnnA.click(AnnA.bookCategoryArt);
        await AnnA.click(AnnA.artBook);
        await AnnA.click(AnnA.addToCartBtn);
        await AnnA.click(AnnA.shoppingCart);
        await AnnA.click(AnnA.removeBtn);
        let cartMessage = await AnnA.getCartResult();
        expect(cartMessage).toContain("removed from your shopping cart.");
    });
});