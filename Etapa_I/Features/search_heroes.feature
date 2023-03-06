Feature: Search Heroes
Description: This feature allows users to search your favorite heroes.

Scenario: Search using valid string
    Given that a user is logged on app
    And   go to the heroes session
    When  user search by a valid string like "Spider"
    Then  the app should return all heroes that related to this string

Scenario: Search using invalid string
    Given that a user is logged on app
    And   go to the heroes session
    When  user search by a ivalid string like "Soccer"
    Then  the app should not return any result

Scenario: Search using empty string
    Given that a user is logged on app
    And   go to heroes session
    When  user search by a empty string 
    Then  the app should not return any result

Scenario: Search using string that contain spaces
    Given that a user is logged on app
    And   go to heroes session
    When  user search by a valid string that contain spaces like "Spider Man" 
    Then  the app should return all heroes that related to this string

Scenario: Search return response dynamically
    Given that a user is logged on app
    And   go to the heroes session
    And   user search by a valid string like "Marvel"
    When  user change search by other valid string like "Spider"
    Then  response should updated dynamically without any action by user
