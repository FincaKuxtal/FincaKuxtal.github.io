

const estimate = [
  ['Basic',  40000],
  [],
  [],
  [],
  []
]



document.getElementById('appliances').addEventListener('click',updateAppliances);

document.getElementById('bath').addEventListener('click',updateBath);

document.getElementById('ac').addEventListener('click',updateAC);

document.getElementById('solar').addEventListener('click',updateSolar);

function updateAppliances(e) {
  estimate.splice(1,1,appliances(e))
  displayEstimate();
};

function appliances(e) {
  switch (e.target.selectedIndex) {
    case 0:
      return []
    case 1:
      return['Electric appliances', 1000]
    case 2:
      return['Gas appliances', 1200]
    case 3:
      return['Buy your own appliances', 0]
    default:
      return[]
  }
}

function updateBath(e) {
  estimate.splice(2,1,bath(e));
  displayEstimate();
}

function bath(e) {
  if (e.target.checked) {
    return ['Whirlpool Bath', 500]
  } else {
    return []
  }
}

function updateAC(e) {
  estimate.splice(3,1,ac(e))
  displayEstimate()
}

function ac(e) {
  switch (e.target.selectedIndex) {
    case 0:
      return []
    case 1:
      return['9000 BTU Split Unit', 1000]
    case 2:
      return['12000 BTU Split Unit', 1500]
    case 3:
      return['Ceiling Fans', 200]
  }
}

function updateSolar(e) {
  estimate.splice(4,1,solar(e))
  displayEstimate()
}

function solar(e){
  if (document.getElementById('flexRadioDefault1').checked) {
    return []
  }
  if (document.getElementById('flexRadioDefault2').checked) {
    return ['Solar Backup', 1500]
  }
  if (document.getElementById('flexRadioDefault3').checked) {
    return ['Offgrid Solar', 5000]
  }

}

function displayEstimate() {
  document.getElementById('table-body').innerHTML=""
  total = 0;
  let table='<tr>'
  estimate.forEach(function(item){
    if (item.length != 0){
      table += `<td>${item[0]}</td><td>${item[1]}</td>`
      total += item[1]
      table += '</tr>'
    }

  })
  document.getElementById('table-body').innerHTML=table
  document.getElementById('table-total').textContent = total

}