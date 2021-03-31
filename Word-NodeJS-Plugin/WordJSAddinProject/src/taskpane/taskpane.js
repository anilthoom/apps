/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

// images references in the manifest
import "../../assets/icon-16.png";
import "../../assets/icon-32.png";
import "../../assets/icon-80.png";
import { base64Image } from "../../base64Image";

/* global document, Office, Word */

Office.onReady(info => {
  if (info.host === Office.HostType.Word) {
    // Determine if the user's version of Office supports all the Office.js APIs that are used in the tutorial.
    if (!Office.context.requirements.isSetSupported('WordApi', '1.3')) {
      console.log('Sorry, Not supported.');
    }
    document.getElementById("sideload-msg").style.display = "none";
    document.getElementById("app-body").style.display = "flex";
    /*document.getElementById("insert-paragraph").onclick = insertParagraph;
    document.getElementById("apply-style").onclick = applyStyle;
    document.getElementById("apply-custom-style").onclick = applyCustomStyle;
    document.getElementById("change-font").onclick = changeFont;
    document.getElementById("insert-text-into-range").onclick = insertTextIntoRange;
    document.getElementById("insert-text-outside-range").onclick = insertTextBeforeRange;
    document.getElementById("replace-text").onclick = replaceText;
    document.getElementById("insert-image").onclick = insertImage;
    document.getElementById("insert-html").onclick = insertHTML;
    document.getElementById("insert-table").onclick = insertTable;
    document.getElementById("replace-content-in-control").onclick = replaceContentInControl;*/
    document.getElementById("create-content-control").onclick = createContentControl;
  }
});
/** Content Control Change Events Code Starts Here */
async function wrapRangeWithContentControl(contentControl) {
  await Word.run(async (context) => {
    // grabs the first paragraph and inserts a content control
    await context.sync();
    createBinding(contentControl.title);
  });
}
function createBinding(ccTitle) {
  // this method creates a Binding and Subscribes to DataChanged Event.
  Office.context.document.bindings.addFromNamedItemAsync(ccTitle, Office.BindingType.Text, { id: ccTitle }, function(
    result
  ) {
    if (result.status == Office.AsyncResultStatus.Succeeded){
      // binding created! lets subscribe to the event.
      result.value.addHandlerAsync(Office.EventType.BindingDataChanged, handler);
      result.value.removeHandlerAsync}
    else 
    console.log(result.error.message);
  });
}
function handler() {
  insertImage();
  console.log("data changed happened");
}
/*function getBinding() {
  Office.context.document.bindings.getByIdAsync("GUID", {}, function(result) {
    if (result.status == Office.AsyncResultStatus.Succeeded) console.log(result.value.id);
    else console.log(result.error);
  });
}
async function changeCCContent() {
  await Word.run(async (context) => {
    //grabs the first paragraph and inserts a content control
    let cc = context.document.contentControls
      .getByTitle("GUID")
      .getFirst()
      .insertText("Juan", "replace");
    await context.sync();
  });
}*/
/** Default helper for invoking an action and handling errors. */
// async function tryCatch(callback) {
//   try {
//     await callback();
//   } catch (error) {
//     OfficeHelpers.UI.notify(error);
//     OfficeHelpers.Utilities.log(error);
//   }
// }
/** Content Control Change Events Code Ends Here */

function gerRandomNumber(){
  return new Date().getMilliseconds();
}
function createContentControl() {
  Word.run(function (context) {
    var serviceNameRange = context.document.getSelection();
    var serviceNameContentControl = serviceNameRange.insertContentControl();
    serviceNameContentControl.title = "ServiceName_"+gerRandomNumber();
    serviceNameContentControl.tag = "serviceName_"+gerRandomNumber();
    serviceNameContentControl.appearance = "Hidden";
    serviceNameContentControl.color = "blue";
    serviceNameContentControl.insertHtml("<p style=\"font-family: verdana;\">Inserted NEW HTML.</p>", "End");
    wrapRangeWithContentControl(serviceNameContentControl);
    return context.sync();
  })
  .catch(function (error) {
      console.log("Error: " + error);
      if (error instanceof OfficeExtension.Error) {
          console.log("Debug info: " + JSON.stringify(error.debugInfo));
      }
  });
}
function insertImage() {
  Word.run(function (context) {
    context.document.body.insertInlinePictureFromBase64(base64Image, "End");
    return context.sync();
  })
  .catch(function (error) {
      console.log("Error: " + error);
      if (error instanceof OfficeExtension.Error) {
          console.log("Debug info: " + JSON.stringify(error.debugInfo));
      }
  });
}