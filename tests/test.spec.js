import { test, expect } from '@playwright/test';
import { App } from "../src/pages/index";
import * as allure from "allure-js-commons";

const URL = "https://www.tretyakovgallery.ru";
let app;
let firstSearchText = "Пушкин";
let secondSearchText = "Италия";

test.only("Check_search_field", async ({ page }) => {

    app = new App(page);

    await allure.step("Открыть главныую страницу", async ({ page }) => {
        await app.mainPage.open(URL);
    });

    await allure.step("Нажать на кнпоку поиска в верхнем меню", async ({ page }) => {
        await app.mainPage.goToSearchPage();
    });

    await allure.step(`Найти значение ${firstSearchText}`, async ({ page }) => {
        await app.popupPage.fillSearchField(firstSearchText);
    });

    await allure.step("Проверить отображение результатов", async () => {
        await app.searchPage.checkSearchResult(firstSearchText);
        await expect(page).toHaveURL(URL + "/search/?query=%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD");
    });

    await allure.step("Нажать на кнпоку поиска в верхнем меню", async ({ page }) => {
        await app.mainPage.goToSearchPage();
    });

    await allure.step(`Найти значение ${secondSearchText}`, async ({ page }) => {
        await app.popupPage.fillSearchField(secondSearchText);
    });

    await allure.step("Проверить отображение результатов", async () => {
        await app.searchPage.checkSearchResult(secondSearchText);
        await expect(page).toHaveURL(URL + "/search/?query=%D0%98%D1%82%D0%B0%D0%BB%D0%B8%D1%8F");
    });
}); 