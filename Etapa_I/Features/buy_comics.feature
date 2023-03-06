Feature: Buy Comics
Description: This feature allows users to buy your favorite comics.

Scenario: Buy a comic
    Given that a user is logged on app
    And   go to the comics session
    And   user search by a valid string like "Spider"
    And   select any item 
    And   user add at least 1 unit
    And   user input valid payment data
    When  user confirm
    Then  the order should be completed succefuly


Scenario: Buy a comic with no units
    Given that a user is logged on app
    And   go to the comics session
    And   user search by a valid string like "Spider"
    And   select any item 
    And   user add set to 0 units
    When  user confirm
    Then  the app should not allow the user to proceed


Scenario: Make payment with invalid data
    Given that a user is logged on app
    And   go to the comics session
    And   user search by a valid string like "Spider"
    And   select any item 
    And   user add at least 1 unit
    And   user input invalid payment data
    When  user confirm
    Then  the app should inform that payment data is invalid
    And   the app should not allow the user to proceed


Scenario: Make payment with empty data
    Given that a user is logged on app
    And   go to the comics session
    And   user search by a valid string like "Spider"
    And   select any item 
    And   user add at least 1 unit
    And   user input invalid payment data
    When  user confirm
    Then  the app should inform that all fields are required
    And   the app should not allow the user to proceed