const { expect } = require("@playwright/test");

exports.dB_Login_Page = class dB_Login_Page{
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    
    this.loc_Login_lnk = page.locator("#login2");
    this.loc_userName_fld = page.locator("#loginusername");
    this.loc_password_fld = page.locator("#loginpassword");
    this.loc_Login_btn = page.getByRole("button", { name: "Log in" });
  }

  async goto() {
    await this.page.goto("/");
  }

  async login(userName, password) {
    await this.loc_Login_lnk.click();
    await this.loc_userName_fld.click();
    await this.loc_userName_fld.fill(userName);
    await this.loc_password_fld.fill(password);
    await this.loc_Login_btn.click();
    await expect(this.page.locator("#nameofuser")).toHaveText("Welcome " + userName);
  }
};
