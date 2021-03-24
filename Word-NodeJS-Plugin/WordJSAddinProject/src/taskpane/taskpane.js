/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

// images references in the manifest
import "../../assets/icon-16.png";
import "../../assets/icon-32.png";
import "../../assets/icon-80.png";

/* global document, Office, Word */

Office.onReady(info => {
  if (info.host === Office.HostType.Word) {
    // Determine if the user's version of Office supports all the Office.js APIs that are used in the tutorial.
    if (!Office.context.requirements.isSetSupported('WordApi', '1.3')) {
      console.log('Sorry, Not supported.');
    }
    document.getElementById("sideload-msg").style.display = "none";
    document.getElementById("app-body").style.display = "flex";
    document.getElementById("insert-paragraph").onclick = insertParagraph;
  }
});
function insertParagraph(){
  Word.run(function(context){
    var docBody = context.document.body;
    docBody.insertParagraph("Anil is THOPE!!!!", "Start");
    return context.sync();
  })
  .catch(function (error){
    console.log("Error: "+error);
    if(error instanceof OfficeExtension.Error){
      console.log("Debug info: "+JSON.stringify(error.debugInfo));
    }
  });
}