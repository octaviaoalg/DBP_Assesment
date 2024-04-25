const { expect } = require("@playwright/test");

exports.dB_SignUp_Page = class dB_SignUP_Page{
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    
    this.loc_signUp_lnk = page.locator("#signin2");
    this.loc_signUp_userName_fld = page.locator("#sign-username");
    this.loc_signUp_password_fld = page.locator("#sign-password");
    this.loc_signUp_btn = page.getByRole('button', { name: 'Sign up' });
  }

  async goto() {
    await this.page.goto("/");
  }

  async login(userName, password) {
    await this.loc_signUp_lnk.click();
    await this.loc_signUp_userName_fld.fill(userName);
    await this.loc_signUp_password_fld.fill(password);
    await this.expectDialog(["Sign up successful.", "This user already exist."]);
  }

  async expectDialog(expectedMessages) {
    const [dialog] = await Promise.all([
      this.page.waitForEvent('dialog'),
      this.loc_signUp_btn.click()
    ]);
  
    console.log(`Dialog message: ${dialog.message()}`);
    expect(expectedMessages).toContain(dialog.message());
    await dialog.dismiss();
  }

};
