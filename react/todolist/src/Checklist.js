import React, { useState } from "react";

import "../App.css";

function CheckList() {
  // State with list of all checked item
  const [checked, setChecked] = useState([]);

  const checkList = ["Iphone", "Samsung", "Oppo", "Nokia"];

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    alert('inside');
    var checkedList = [...checked];
    //get the checkbox
    var checkboxChanged = event.target;
    if (checkboxChanged.checked) {
        checkedList = [...checked, checkboxChanged.value];
    } else {
        checkedList.splice(checked.indexOf(checkboxChanged.value), 1);
    }
    setChecked(checkedList);
    console.log('********');
    console.log(checked);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((final, item) => {
        return final + ", " + item;
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "item-not-checked";

  return (
      <div className="container">
        <div className="title">My CheckList:</div>
        <div className="list-container">
          {checkList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </div>
      <div>
        {`My checked items are: ${checkedItems}`}
      </div>
    </div>
  );
}

export default CheckList;