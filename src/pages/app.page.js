import { MainPage, PopupPage, SearchPage } from "./index";

export class App{
    constructor(page){
        this.page = page;
        this.mainPage = new MainPage(page);
        this.popupPage = new PopupPage(page);
        this.searchPage = new SearchPage(page);
    }
}