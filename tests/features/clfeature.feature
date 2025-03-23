Feature: Vehicle Insurance Quotation Process
  As a potential customer
  I want to request a personalized vehicle insurance quotation online
  So that I can evaluate coverage options and pricing without needing to speak with an agent

  Background:
    Given I am on the insurance quotation landing page
    And I have chosen to start a new quote

  @smoke @critical
  Scenario: Complete vehicle insurance quote journey
    When I enter my vehicle details
      | make     | model    | year | registration |
      | Toyota   | Corolla  | 2021 | AB21 XYZ     |
    And I click "Continue"
    Then I should be taken to the vehicle usage page
    When I enter my vehicle usage details
      | annualMileage | primaryUse | parkingLocation |
      | 12000         | Commuting  | Garage          |
    And I click "Continue"
    Then I should be taken to the driver information page
    When I enter my driver information
      | licenseYears | claimsInLastFiveYears |
      | 10           | 0                     |
    And I click "Continue"
    Then I should be taken to the coverage selection page
    When I select my desired coverage options
      | coverageType   | selected |
      | Comprehensive  | yes      |
      | ThirdParty     | yes      |
      | GlassCoverage  | no       |
      | RoadSideAssist | yes      |
    And I click "Get Quote"
    Then I should see my quote summary
    And the quote should display the correct premium calculation
    And the quote should include my selected vehicle and coverage details

  @regression
  Scenario Outline: Premium calculation with different coverage combinations
    Given I have provided my vehicle details
    And I have provided my vehicle usage information
    And I have provided my driver information
    When I select the following coverage options
      | coverageType   | selected   |
      | Comprehensive  | <comprehensive> |
      | ThirdParty     | <thirdParty>    |
      | GlassCoverage  | <glassCoverage> |
      | RoadSideAssist | <roadside>      |
    And I click "Get Quote"
    Then I should see my quote summary
    And the premium calculation should reflect my selected coverage options

    Examples:
      | comprehensive | thirdParty | glassCoverage | roadside |
      | yes           | yes        | yes           | yes      |
      | yes           | yes        | no            | no       |
      | no            | yes        | no            | yes      |
      | no            | yes        | no            | no       |

  @regression
  Scenario: Save quotation for future reference
    Given I have completed my quote
    When I click "Save Quote"
    Then I should see a confirmation message
    And I should receive a quote reference number
    And I should receive instructions for retrieving my saved quote

  @regression
  Scenario: Return to previous steps in the quote process
    Given I have provided my vehicle details
    And I have provided my vehicle usage information
    And I have advanced to the driver information page
    When I click "Back"
    Then I should be returned to the vehicle usage page
    And my previously entered vehicle usage information should be preserved
    When I click "Back"
    Then I should be returned to the vehicle details page
    And my previously entered vehicle details should be preserved

  @negative
  Scenario: Validation for missing vehicle information
    When I try to continue without entering vehicle make
    Then I should see an error message "Please enter the vehicle make"
    And I should remain on the vehicle details page

  @negative
  Scenario: Validation for invalid driver information
    Given I have provided my vehicle details
    And I have provided my vehicle usage information
    When I enter invalid license years "-1"
    And I click "Continue"
    Then I should see an error message "Please enter a valid license duration"
    And I should remain on the driver information page

  @regression
  Scenario: Compare different coverage combinations
    Given I have completed my quote
    When I modify my coverage selection
    Then I should see an updated premium calculation
    And I should see a comparison between my original and updated quotes

  @regression
  Scenario: Proceed from quote to application
    Given I have completed my quote
    When I click "Proceed to Application"
    Then I should be directed to the policy application form
    And my quote information should be pre-populated in the application