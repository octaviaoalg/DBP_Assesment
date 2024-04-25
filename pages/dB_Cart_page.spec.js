const { expect } = require("@playwright/test");

exports.dB_Cart_Page = class dB_Cart_Page{
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    
    this.loc_productName_lnk = page.getByRole('link', { name: 'Samsung galaxy s6' });
    this.loc_addToCart_lnk = page.getByRole('link', { name: 'Add to cart' });
    this.loc_cart_lnk = page.getByRole('link', { name: 'Cart', exact: true });
    this.loc_placeOrder_btn = page.getByRole('button', { name: 'Place Order' });
    this.loc_name_txtFld = page.locator("#name");
    // this.loc_name_lbl = page.getByLabel('Total:');
    this.loc_country_lbl = page.getByLabel('Country:');
    this.loc_city_lbl = page.getByLabel('City:');
    this.loc_card_lbl = page.getByLabel('Credit card:');
    this.loc_month_lbl = page.getByLabel('Month:');
    this.loc_year_lbl = page.getByLabel('Year:');
    this.loc_purchase_btn = page.getByRole('button', { name: 'Purchase' });
    this.loc_ok_btn = page.getByRole('button', { name: 'OK' });
   
  }

  async goto() {
    await this.page.goto("/");
  }

  async purchaseProduct(cartName, cartCountry, cartCity, cartCard, cartMonth, cartYear) {
    await this.loc_productName_lnk.click();
    this.okDialog();
    await this.loc_addToCart_lnk.click();
    await this.loc_cart_lnk.click();
    await this.loc_placeOrder_btn.click();
    await this.loc_name_txtFld.fill(cartName);
    // await this.loc_name_lbl.fill('cartName');
    await this.loc_country_lbl.fill(cartCountry);
    await this.loc_city_lbl.fill(cartCity);
    await this.loc_card_lbl.fill(cartCard);
    await this.loc_month_lbl.fill(cartMonth);
    await this.loc_year_lbl.fill(cartYear);
    await this.loc_purchase_btn.click();
    await this.loc_ok_btn.click();
  }

  okDialog() {
    this.page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => { });
    });
  }
};
