import { useState } from "react";
import "./filteredItems.css";
import email from "../assets/email.svg";
import id from "../assets/id.svg";
import name from "../assets/name.svg";
import phone from "../assets/phone.svg";
import username from "../assets/username.svg";

interface InputValue {
  id : number | undefined,
  name: string,
  username: string,
  email: string,
  phone: string | number
}

export default function FilteredItems() {
  const [indexOfItem, setIndexOfItem] = useState<number>();
  const [typeOfInput, setTypeOfInput] = useState<string>("");
  const [valueOfInput, setValueOfInput] = useState<InputValue>({
    id: undefined,
    name: "",
    username: "",
    email: "",
    phone: ""
  })

  const filterTable = () => {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.querySelector(`#${typeOfInput}`);
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[indexOfItem];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  };

  const changeInputType = (index: number, type: string) => {
    setIndexOfItem(index);
    setTypeOfInput(type);
    setValueOfInput({
      id: undefined,
      name: "",
      username: "",
      email: "",
      phone: ""
    })
  };

  const verifyID = (e) =>{
    const value = e.target.value;

    if (value === "") {
      setValueOfInput({ ...valueOfInput, id: undefined });
    } else if (isNaN(value)) {
      alert("Please enter a valid number.");
      e.target.value = "";
    } else {
      setValueOfInput({ ...valueOfInput, id: Number(value) });
    }
  }

  return (
    <section className="filteredSection">

      <div title="ID">
        <img src={id} alt="Search for an ID" />
        <input
          type="number"
          id="idInput"
          onClick={() => changeInputType(0, "idInput")}
          onKeyUp={() => filterTable()}
          value={valueOfInput.id ?? ""}
          onChange={(e) => verifyID(e)}
          placeholder="Search for an ID"
        />
      </div>

      <div title="Name">
        <img src={name} alt="Search for an name" />
        <input
          type="text"
          id="nameInput"
          onClick={() => changeInputType(1, "nameInput")}
          onKeyUp={filterTable}
          value={valueOfInput.name}
          onChange={(e) => setValueOfInput({...valueOfInput, name: e.target.value})}
          placeholder="Search for a name"
        />
      </div>

      <div title="Username">
        <img src={username} alt="Search for an username" />
        <input
          type="text"
          id="usernameInput"
          onClick={() => changeInputType(2, "usernameInput")}
          onKeyUp={filterTable}
          value={valueOfInput.username}
          onChange={(e) => setValueOfInput({...valueOfInput, username: e.target.value})}
          placeholder="Search for an username"
        />
      </div>

      <div title="E-mail">
        <img src={email} alt="Search for an email" />
        <input
          type="text"
          id="emailInput"
          onClick={() => changeInputType(3, "emailInput")}
          onKeyUp={filterTable}
          value={valueOfInput.email}
          onChange={(e) => setValueOfInput({...valueOfInput, email: e.target.value})}
          placeholder="Search for an email"
        />
      </div>

      <div title="Phone">
        <img src={phone} alt="Search for a phone" />
        <input
          type="text"
          id="phoneInput"
          onClick={() => changeInputType(4, "phoneInput")}
          onKeyUp={filterTable}
          value={valueOfInput.phone}
          onChange={(e) => setValueOfInput({...valueOfInput, phone: e.target.value})}
          placeholder="Search for a phone"
        />
      </div>
    </section>
  );
}
