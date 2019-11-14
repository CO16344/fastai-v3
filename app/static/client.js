var el = x => document.getElementById(x);

function showPicker() {
  el("file-input").click();
}

function showPicked(input) {
  el("upload-label").innerHTML = input.files[0].name;
  var reader = new FileReader();
  reader.onload = function(e) {
    el("image-picked").src = e.target.result;
    el("image-picked").className = "";
  };
  reader.readAsDataURL(input.files[0]);
}

function analyze() {
  var uploadFiles = el("file-input").files;
  if (uploadFiles.length !== 1) alert("Please select a file to analyze!");

  el("analyze-button").innerHTML = "Analyzing...";
  var xhr = new XMLHttpRequest();
  var loc = window.location;
  xhr.open("POST", `${loc.protocol}//${loc.hostname}:${loc.port}/analyze`,
    true);
  xhr.onerror = function() {
    alert(xhr.responseText);
  };
  xhr.onload = function(e) {
    if (this.readyState === 4) {
      var response = JSON.parse(e.target.responseText);
      el("result-label").innerHTML = `Result = ${response["result"]}`;
      
      el("atelectasis").innerHTML = `Result = ${response["Atelectasis"]}`;
      document.getElementById('a').innerHTML = 'yes';
      el("cardiomegaly").innerHTML = `Result = ${response["Cardiomegaly"]}`;
      el("consolidation").innerHTML = `Result = ${response["Consolidation"]}`;
      el("edema").innerHTML = `Result = ${response["Edema"]}`;
      el("effusion").innerHTML = `Result = ${response["Effusion"]}`;
      el("emphysema").innerHTML = `Result = ${response["Emphysema"]}`;
      el("fibrosis").innerHTML = `Result = ${response["Fibrosis"]}`;
      el("hernia").innerHTML = `Result = ${response["Hernia"]}`;
      el("infiltration").innerHTML = `Result = ${response["Infiltration"]}`;
      el("mass").innerHTML = `Result = ${response["Mass"]}`;
      el("no_Finding").innerHTML = `Result = ${response["No Finding"]}`;
      el("nodule").innerHTML = `Result = ${response["Nodule"]}`;
      el("pleural_Thickening").innerHTML = `Result = ${response["Pleural_Thickening"]}`;
      el("pneumonia").innerHTML = `Result = ${response["Pneumonia"]}`;
      el("pneumothorax").innerHTML = `Result = ${response["Pneumothorax"]}`;
    }
    el("analyze-button").innerHTML = "Analyze";
  };

  var fileData = new FormData();
  fileData.append("file", uploadFiles[0]);
  xhr.send(fileData);
}

