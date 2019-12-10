Feature: validating json

  Scenario: I should be able to see "hello world"
    Given I am looking at my screen
    When I launch this test
    Then "hello-world" should be printed