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
      
      el("atelectasis").innerHTML = ` ${response["Atelectasis"].toFixed(3)}`;
      var at = parseFloat(response["Atelectasis"])
      if( at > 0.1200000000)
      {  document.getElementById('a').innerHTML = 'YES';}
      else
      {  document.getElementById('a').innerHTML = 'NO';}

      el("cardiomegaly").innerHTML = ` ${response["Cardiomegaly"].toFixed(3)}`;
      at = parseFloat(response["Cardiomegaly"])
      if( at > 0.1200000000)
      {  document.getElementById('b').innerHTML = 'YES';}
      else
      {  document.getElementById('b').innerHTML = 'NO';}

      el("consolidation").innerHTML = ` ${response["Consolidation"].toFixed(3)}`;
      at = parseFloat(response["Consolidation"])
      if( at > 0.1200000000)
      {  document.getElementById('c').innerHTML = 'YES';}
      else
      {  document.getElementById('c').innerHTML = 'NO';}

      el("edema").innerHTML = ` ${response["Edema"].toFixed(3)}`;
      at = parseFloat(response["Edema"])
      if( at > 0.1200000000)
      {  document.getElementById('d').innerHTML = 'YES';}
      else
      {  document.getElementById('d').innerHTML = 'NO';}

      el("effusion").innerHTML = ` ${response["Effusion"].toFixed(3)}`;
      at = parseFloat(response["Effusion"])
      if( at > 0.1200000000)
      {  document.getElementById('e').innerHTML = 'YES';}
      else
      {  document.getElementById('e').innerHTML = 'NO';}

      el("emphysema").innerHTML = ` ${response["Emphysema"].toFixed(3)}`;
      at = parseFloat(response["Emphysema"])
      if( at > 0.1200000000)
      {  document.getElementById('f').innerHTML = 'YES';}
      else
      {  document.getElementById('f').innerHTML = 'NO';}

      el("fibrosis").innerHTML = ` ${response["Fibrosis"].toFixed(3)}`;
      at = parseFloat(response["Fibrosis"])
      if( at > 0.1200000000)
      {  document.getElementById('g').innerHTML = 'YES';}
      else
      {  document.getElementById('g').innerHTML = 'NO';}

      el("hernia").innerHTML = ` ${response["Hernia"].toFixed(3)}`;
      at = parseFloat(response["Hernia"])
      if( at > 0.1200000000)
      {  document.getElementById('h').innerHTML = 'YES';}
      else
      {  document.getElementById('h').innerHTML = 'NO';}

      el("infiltration").innerHTML = ` ${response["Infiltration"].toFixed(3)}`;
      at = parseFloat(response["Infiltration"])
      if( at > 0.1200000000)
      {  document.getElementById('i').innerHTML = 'YES';}
      else
      {  document.getElementById('i').innerHTML = 'NO';}

      el("mass").innerHTML = ` ${response["Mass"].toFixed(3)}`;
      at = parseFloat(response["Mass"])
      if( at > 0.1200000000)
      {  document.getElementById('j').innerHTML = 'YES';}
      else
      {  document.getElementById('j').innerHTML = 'NO';}

      el("nodule").innerHTML = ` ${response["Nodule"].toFixed(3)}`;
      at = parseFloat(response["Nodule"])
      if( at > 0.1200000000)
      {  document.getElementById('l').innerHTML = 'YES';}
      else
      {  document.getElementById('l').innerHTML = 'NO';}

      el("pleural_Thickening").innerHTML = ` ${response["Pleural_Thickening"].toFixed(3)}`;
      at = parseFloat(response["Pleural_Thickening"])
      if( at > 0.1200000000)
      {  document.getElementById('m').innerHTML = 'YES';}
      else
      {  document.getElementById('m').innerHTML = 'NO';}

      el("pneumonia").innerHTML = ` ${response["Pneumonia"].toFixed(3)}`;
      at = parseFloat(response["Pneumonia"])
      if( at > 0.1200000000)
      {  document.getElementById('n').innerHTML = 'YES';}
      else
      {  document.getElementById('n').innerHTML = 'NO';}

      el("pneumothorax").innerHTML = ` ${response["Pneumothorax"].toFixed(3)}`;
      at = parseFloat(response["Pneumothorax"])
      if( at > 0.1200000000)
      {  document.getElementById('o').innerHTML = 'YES';}
      else
      {  document.getElementById('o').innerHTML = 'NO';}

    }
    el("analyze-button").innerHTML = "Analyze";
  };

  var fileData = new FormData();
  fileData.append("file", uploadFiles[0]);
  xhr.send(fileData);
}

