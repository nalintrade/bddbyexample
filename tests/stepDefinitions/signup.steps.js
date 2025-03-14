import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import SignupPage from '../pageObjects/signup.page.js';
import world from '../support/world.js';

Given('I am on the signup page', async () => {
  await world.navigateTo('/signup');
});

When('I enter {string} as the signup username', async (username) => {
  await SignupPage.enterUsername(world.page, username);
});

When('I enter {string} as the signup password', async (password) => {
  await SignupPage.enterPassword(world.page, password);
});

When('I confirm {string} as the signup password', async (password) => {
  await SignupPage.confirmPassword(world.page, password);
});

When('I click the "Create Account" button', async () => {
  await SignupPage.clickSignup(world.page);
});

Then('I should be redirected to the login page', async () => {
  expect(await world.page.url()).to.include('/login');
});
