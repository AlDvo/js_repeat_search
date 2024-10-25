import { BasePage } from "./base.page.js";

export class PopupPage extends BasePage {
    popup = this.page.locator(".popup_content");

    constructor(page) {
        super(page);
        this.searchField = this.popup.getByPlaceholder("Что вы ищете?");
        this.searchResult = this.popup.locator("search-result search__result");
        this.searchButton = this.popup.getByRole("button" , {name: "Поиск"});
    }

    async fillSearchField(text) {
        await this.searchField.click();
        await this.searchField.fill(text);
        await this.searchButton.click();
    }
}