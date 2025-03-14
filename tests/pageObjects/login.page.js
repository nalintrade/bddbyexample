class LoginPage {
    async enterUsername(page, username) {
      await page.locator('input[type="text"]').fill(username);
    }
  
    async enterPassword(page, password) {
      await page.locator('input[type="password"]').fill(password);
    }
  
    async clickSignIn(page) {
      await page.locator('button:has-text("Sign In")').click();
    }
  }
  
  export default new LoginPage();
  