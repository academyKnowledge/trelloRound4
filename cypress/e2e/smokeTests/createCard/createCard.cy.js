/// <reference types ="cypress" />

import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import dataUtiles from "../../../support/datautiles.cy";
import createCardActions from "../../../pageObjects/createCard/Actions.cy";

const datautiles = new dataUtiles()
const cardAction = new createCardActions();

let boardId , boardUrl; 

before(()=>{
    datautiles.createBoard("RazanBoard").then((resp)=>{
        boardUrl = resp.body.url;
        boardId = resp.body.id
    })
    cy.loginToTrello()
})

Given('The user navigated to board',()=>{
    cardAction.openBoard(boardUrl)
})

after(()=>{
    datautiles.deleteBoard(boardId)
})