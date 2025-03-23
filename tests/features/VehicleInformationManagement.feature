@vehicle @quote-flow
Feature: Vehicle Information Management
  As a customer
  I want to provide my personal and vehicle details
  So that I can receive an accurate insurance quote

  Background:
    Given I am logged into the insurance portal
    And I navigate to the main dashboard
    And I click on the "Get a Quote" option
    And I am on the vehicle information page

  @smoke @critical @happy-path
  Scenario: Submit valid vehicle details
    When I enter "Toyota" as the make
    And I enter "Corolla" as the model
    And I enter "2020" as the year
    And I enter "AB12 XYZ" as the registration number
    And I click the Next button
    Then I should be taken to the vehicle usage page
    And my vehicle details should be saved in the system

  @smoke @happy-path
  Scenario: Submit valid vehicle usage information
    Given I have entered my vehicle details
    When I select "10000" as the annual mileage
    And I select "Commuting" as the primary purpose
    And I select "Private Driveway" as the overnight parking location
    And I click the Next button
    Then I should be taken to the driver information page
    And my vehicle usage details should be saved in the system

  @regression @edit-flow
  Scenario: Return to and update vehicle information
    Given I have provided my vehicle information
    And I have advanced to the driver information page
    When I click the back button to return to vehicle details
    And I change the model to "Camry"
    And I click the Next button
    Then my vehicle model should be updated to "Camry" in the system
    And I should be returned to the driver information page

  @regression @validation
  Scenario: Validate required vehicle fields
    When I leave the make field empty
    And I click the Next button
    Then I should see "Make is required" as an error message
    And I should remain on the vehicle details page

  @regression @validation @boundary
  Scenario Outline: Verify year validation rules
    When I enter "<year>" as the year
    And I click the Next button
    Then I should see "<message>"

    Examples:
      | year | message                                |
      | 1899 | Vehicle year must be 1900 or later     |
      | 2030 | Vehicle year cannot be in the future   |
      | abc  | Year must be a valid number            |
      | 2019 | Valid                                  |

  @happy-path @critical
  Scenario: Provide valid driving history information
    Given I have entered my vehicle details
    When I provide the following driving history:
      | License Duration | Claims History               |
      | 5+ years        | No claims in the past 5 years |
    And I proceed to the next step
    Then I should be taken to the coverage selection page
    And my driving history should be saved for the quotation process

  @happy-path @critical
  Scenario: Select coverage options and receive premium estimate
    Given I have entered my vehicle details and driving history
    When I choose the following coverage options:
      | Coverage Type  | Add-ons           |
      | Comprehensive  | Roadside Assistance |
    And I proceed to the quotation summary page
    Then I should see an estimated premium calculated based on my selections
    And I should have the option to save my quote

  @regression @user-flow
  Scenario: Compare different coverage options
    Given I have entered my vehicle details and driving history
    When I select "Third-party only" as my coverage type
    And I choose "No add-ons" for my quote
    And I compare with "Comprehensive with Roadside Assistance"
    Then I should see a side-by-side comparison of the premium costs and benefits

  @happy-path @business-goal
  Scenario: Proceed to policy application after obtaining a quote
    Given I have completed the quotation process
    When I choose to proceed with my selected coverage
    Then I should be taken to the policy application page
    And my quote details should be pre-filled in the application form
