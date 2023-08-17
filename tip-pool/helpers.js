
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

// creates delete button for table row it belongs to with click handler
function appendDeleteBtn(tr) {
  let newBtn = document.createElement('td');
  newBtn.innerText = 'X';

  newBtn.addEventListener('click', function(e) {
    let del = e.target.closest('tr');

    delete allServers[del.id];

    del.parentNode.removeChild(del);
    updateServerTable();
  });

  tr.append(newBtn);
}