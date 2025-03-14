import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import LoginPage from '../pageObjects/login.page.js';
import world from '../support/world.js';

Given('I am on the login page', async () => {
  await world.navigateTo('/login'); // Use full URL
});

When('I enter {string} as username', async (username) => {
  await LoginPage.enterUsername(world.page, username);
});

When('I enter {string} as password', async (password) => {
  await LoginPage.enterPassword(world.page, password);
});

When('I click the "Sign In" button', async () => {
  await LoginPage.clickSignIn(world.page);
});

Then('I should be redirected to the dashboard', async () => {
  expect(await world.page.url()).to.include('/dashboard');
});
