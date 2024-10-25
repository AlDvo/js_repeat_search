import { BasePage } from "./base.page.js";

export class MainPage extends BasePage {
    header = this.page.locator(".header-top__actions");
    
    constructor(page) {
        super(page);
        this.searchButton = this.header.getByRole('button', { name: "Поиск" });
    }

    async goToSearchPage() {
        await this.searchButton.click();
    }
}