const { expect } = require("@playwright/test");

exports.dB_Home_Page = class dB_Home_Page {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    
    this.loc_Categories_li = page.locator("#itemc");
  }

  async goto() {
    await this.page.goto("/");
  }

  async verifyCategories(categories) {
    const categoryList = [];

    for (const categoryArr of await this.loc_Categories_li.all()) {
      const categoryText = await categoryArr.textContent();
      categoryList.push(categoryText);
      await expect(categories).toContain(categoryText);
    }

    console.log("List of categories: \n" + categoryList.join("\n"));
  }
};
