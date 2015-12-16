# Javascript/JQuery Github User Search

## Installation

In your terminal type the following:

```bash
$ git clone -b jquery-branch https://github.com/giusepped/JuniorFrontendTest
$ cd JuniorFrontendTest
$ python -m SimpleHTTPServer 1337
```

Visit http://localhost:1337/

## View tests

* In order to view both unit tests and feature tests, type the following:

```bash
$ open SpecRunner.html
```

## Approach

* The objective of this branch is to abstract and separate the logic from the DOM so that unit testing with Jasmine is easier and the code is more solid and readable.
* Also, where the logic is still in pure javascript, the event and DOM handling is done through JQuery this time since it is included for Bootstrap anyway.


## SCREENSHOTS OF MY APP

#### First Screen

The user can search a username of GitHub

![](https://github.com/giusepped/JuniorFrontendTest/blob/master/images/First-Screen.png)

#### Success Screen

If the searched username does exist: The searched user profile is displayed with all his repositories

![](https://github.com/giusepped/JuniorFrontendTest/blob/master/images/Success-screen.png)

#### Error Screen

If the searched username does not exist: An error is shown

![](https://github.com/giusepped/JuniorFrontendTest/blob/master/images/Error-screen.png)




