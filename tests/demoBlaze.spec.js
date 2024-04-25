import { test, expect } from "@playwright/test";
const { dB_Login_Page } = require("../pages/dB_Login_page.spec");
const { dB_Home_Page } = require("../pages/dB_Home_page.spec");
const { dB_Cart_Page } = require("../pages/dB_Cart_page.spec");
const { dB_SignUp_Page } = require("../pages/dB_SignUp_page.spec");

// Due to most of the hooks are being internally managed by Playwright,
// test.describe hook was used to give a brief description of the test suite.
test.describe("DemoBlaze tests for DBP assesment", () => {
  test("Login", { tag: "@regression" }, async ({ page }) => {
    const userName = "admin";
    const password = "admin";
    const dB_Login = new dB_Login_Page(page);
    await dB_Login.goto();
    await dB_Login.login(userName, password);
  });

  test(
    "Verify existant categories",
    { tag: "@regression" },
    async ({ page }) => {
      const categories = ["Phones", "Laptops", "Monitors"];
      const dB_Home = new dB_Home_Page(page);
      await dB_Home.goto();
      await dB_Home.verifyCategories(categories);
    }
  );

  test("Purchase product", { tag: "@regression" }, async ({ page }) => {
    const cartName = "Juan Johnson";
    const cartCountry = "Mexico";
    const cartCity = "Nogales";
    const cartCard = "1234 5678 9123 4567";
    const cartMonth = "11";
    const cartYear = "2024";

    const dB_Cart = new dB_Cart_Page(page);
    await dB_Cart.goto();
    await dB_Cart.purchaseProduct(
      cartName,
      cartCountry,
      cartCity,
      cartCard,
      cartMonth,
      cartYear
    );
  });

  test("Create user", { tag: "@regression" }, async ({ page }) => {
    const dateTimeString = new Date()
      .toLocaleString("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
      .replace(/\//g, "-")
      .replace(/, /g, "/")
      .replace(/:/g, ":");

    const userName = `test${dateTimeString}`;
    const password = "admin";

    const dB_SignUp = new dB_SignUp_Page(page);
    await dB_SignUp.goto();
    await dB_SignUp.login(userName, password);
  });

  test(
    "Should not create existant user",
    { tag: "@negative" },
    async ({ page }) => {
      const userName = "admin";
      const password = "admin";

      const dB_SignUp = new dB_SignUp_Page(page);
      await dB_SignUp.goto();
      await dB_SignUp.login(userName, password);
    }
  );
});
