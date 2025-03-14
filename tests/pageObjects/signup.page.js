class SignupPage {
    async enterUsername(page, username) {
      await page.locator('input[placeholder="Enter your username"]').fill(username);
    }
  
    async enterPassword(page, password) {
      await page.locator('input[placeholder="Create a password"]').fill(password);
    }
  
    async confirmPassword(page, password) {
      await page.locator('input[placeholder="Confirm your password"]').fill(password);
    }
  
    async clickSignup(page) {
      await page.locator('button:has-text("Create Account")').click();
    }
  }
  
  export default new SignupPage();
  