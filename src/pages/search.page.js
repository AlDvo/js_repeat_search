import { expect } from "@playwright/test";
import { BasePage } from "./base.page.js";

export class SearchPage extends BasePage {
    searchPage = this.page.locator(".search__results");

    constructor(page) {
        super(page);
        this.searchResult = this.searchPage.locator(".result-item");
    }

    async checkSearchResult(text) {
        for (const row of await this.searchResult.all()){
            let textResult = await row.textContent();
            expect(await row).toContainText(text, {ignoreCase: true});
            //`ожидали наличие текста ${text} в результате ${textResult}`
        }
    }
}