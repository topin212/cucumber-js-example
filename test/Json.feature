Feature: validating json

  Scenario: I should be able to validate a potato
    Given I get a json
    """
      {
        "id": 1,
        "weight": 123
      }

    """
    When I try to validate it
    Then result should be a valid potato