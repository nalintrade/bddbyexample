# Language: English

@vehicle @insurance @quotation
Feature: Vehicle Insurance Quotation
  As a potential customer,
  I want to request a personalized vehicle insurance quotation online
  So that I can evaluate coverage options and pricing without needing to speak with an agent.

  Background:
    Given I am on the vehicle insurance quotation page

  @happy-path @critical
  Scenario: Submit valid vehicle details for quotation
    When I provide the following vehicle details:
      | Make   | Model   | Year | Usage     |
      | Toyota | Corolla | 2020 | Commuting |
    And I proceed to the next step
    Then I should be taken to the driving history page
    And my vehicle details should be saved for the quotation process

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

  @regression @validation
  Scenario: Validate required fields for vehicle details
    When I leave the make field empty
    And I proceed to the next step
    Then I should see an error message "Vehicle make is required"
    And I should remain on the vehicle details page

  @regression @validation
  Scenario: Validate required fields for driving history
    Given I have entered my vehicle details
    When I do not select a license duration
    And I proceed to the next step
    Then I should see an error message "License duration is required"
    And I should remain on the driving history page

  @regression @boundary
  Scenario Outline: Validate vehicle year input constraints
    When I enter "<year>" as the vehicle year
    And I proceed to the next step
    Then I should see "<message>"

    Examples:
      | year | message                                |
      | 1899 | Vehicle year must be 1900 or later     |
      | 2035 | Vehicle year cannot be in the future   |
      | abc  | Year must be a valid number            |
      | 2019 | Valid                                  |

  @smoke @happy-path
  Scenario: Save a quote for future reference
    Given I have completed the quotation process
    When I choose to save my quote
    Then my quote should be stored in the system
    And I should see a confirmation message with a reference number

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


