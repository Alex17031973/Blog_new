*** Settings ***
Library  SeleniumLibrary
Resource  ../Resources/keywords.robot

*** Test Cases ***
Login Test
    [Documentation]  Перевірка авторизації користувача
    Open Browser To Login Page
    Input Username  Alex1973
    Input Password  Alex1973!
    Click Element    xpath=//input[@type='submit'][@value='Log In']
    Verify Successful Login