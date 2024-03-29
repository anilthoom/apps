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
    document.getElementById("insert-paragraph").onclick = insertParagraph;
    document.getElementById("apply-style").onclick = applyStyle;
    document.getElementById("apply-custom-style").onclick = applyCustomStyle;
    document.getElementById("change-font").onclick = changeFont;
    document.getElementById("insert-text-into-range").onclick = insertTextIntoRange;
    document.getElementById("insert-text-outside-range").onclick = insertTextBeforeRange;
    document.getElementById("replace-text").onclick = replaceText;
    document.getElementById("insert-image").onclick = insertImage;
    document.getElementById("insert-html").onclick = insertHTML;
    document.getElementById("insert-table").onclick = insertTable;
    document.getElementById("create-content-control").onclick = createContentControl;
    document.getElementById("replace-content-in-control").onclick = replaceContentInControl;
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
  insertHTML();
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


function replaceContentInControl() {
  Word.run(function (context) {
    var serviceNameContentControl = context.document.contentControls.getByTag("serviceName").getFirst();
    serviceNameContentControl.insertText("Fabrikam Online Productivity Suite", "Replace");
    return context.sync();
  })
  .catch(function (error) {
      console.log("Error: " + error);
      if (error instanceof OfficeExtension.Error) {
          console.log("Debug info: " + JSON.stringify(error.debugInfo));
      }
  });
}
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
function insertTable() {
  Word.run(function (context) {
  var secondParagraph = context.document.body.paragraphs.getFirst().getNext();
  var tableData = [
      ["Name", "ID", "Birth City"],
      ["Bob", "434", "Chicago"],
      ["Sue", "719", "Havana"],
  ];
  secondParagraph.insertTable(3, 3, "After", tableData);
  return context.sync();
  })
  .catch(function (error) {
      console.log("Error: " + error);
      if (error instanceof OfficeExtension.Error) {
          console.log("Debug info: " + JSON.stringify(error.debugInfo));
      }
  });
}
function insertHTML() {
  Word.run(function (context) {
    var blankParagraph = context.document.body.paragraphs.getLast().insertParagraph("", "After");
    blankParagraph.insertHtml('<p style="font-family: verdana;">ANIL HTML.</p><p> This is another paragraph</p>', "End");
    //blankParagraph.insertHtml('Just a text','End');
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
function replaceText() {
  Word.run(function (context) {
    var doc = context.document;
    var originalRange = doc.getSelection();
    originalRange.insertText("many", "Replace");
    return context.sync();
  })
  .catch(function (error) {
      console.log("Error: " + error);
      if (error instanceof OfficeExtension.Error) {
          console.log("Debug info: " + JSON.stringify(error.debugInfo));
      }
  });
}
function insertTextBeforeRange() {
  Word.run(function (context) {
    var doc = context.document;
    var originalRange = doc.getSelection();
    originalRange.insertText("Office 2019, ", "Before");

    originalRange.load("text");
    return context.sync()
       .then(function() {
        doc.body.insertParagraph("Current text of original range: " + originalRange.text, "End");
       })
       .then(context.sync);
  })
  .catch(function (error) {
      console.log("Error: " + error);
      if (error instanceof OfficeExtension.Error) {
          console.log("Debug info: " + JSON.stringify(error.debugInfo));
      }
  });
}
function insertTextIntoRange() {
  Word.run(function (context) {
      var doc = context.document;
      var originalRange = doc.getSelection();
      originalRange.insertText(" (C2R)", "End");

      originalRange.load("text");
      return context.sync()
          .then(function() {
              doc.body.insertParagraph("Current text of original range: " + originalRange.text, "End");
          })
          .then(context.sync);
  })
  .catch(function (error) {
      console.log("Error: " + error);
      if (error instanceof OfficeExtension.Error) {
          console.log("Debug info: " + JSON.stringify(error.debugInfo));
      }
  });
}
function changeFont() {
  Word.run(function (context) {
    var secondParagraph = context.document.body.paragraphs.getFirst().getNext();
    secondParagraph.font.set({
            name: "Courier New",
            bold: true,
            size: 18
        });
    return context.sync();
  })
  .catch(function (error) {
      console.log("Error: " + error);
      if (error instanceof OfficeExtension.Error) {
          console.log("Debug info: " + JSON.stringify(error.debugInfo));
      }
  });
}
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
function applyStyle() {
  Word.run(function (context) {
    var firstParagraph = context.document.body.paragraphs.getFirst();
    firstParagraph.styleBuiltIn = Word.Style.intenseReference;
    return context.sync();
  })
  .catch(function (error) {
      console.log("Error: " + error);
      if (error instanceof OfficeExtension.Error) {
          console.log("Debug info: " + JSON.stringify(error.debugInfo));
      }
  });
}
function applyCustomStyle() {
  Word.run(function (context) {
    var lastParagraph = context.document.body.paragraphs.getLast();
    lastParagraph.style = "MyCustomStyle";
    return context.sync();
  })
  .catch(function (error) {
      console.log("Error: " + error);
      if (error instanceof OfficeExtension.Error) {
          console.log("Debug info: " + JSON.stringify(error.debugInfo));
      }
  });
}