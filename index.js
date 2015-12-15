"use strict";

var searchResultContainer = document.getElementsByClassName("searchUserResult")[0],
    errorMessageContainer = document.getElementsByClassName("errorMessage")[0],
    searchButton = document.getElementById("searchButton"),
    userSearched = document.getElementById("userSearched"),
    avatar = document.getElementById("avatar"),
    username = document.getElementById("username"),
    fullname = document.getElementById("fullname"),
    userBio = document.getElementById("bio"),
    tableReposBody = document.getElementsByTagName("tbody")[0];