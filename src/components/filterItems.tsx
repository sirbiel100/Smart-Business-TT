import { useState } from "react";
import "./filteredItems.css";
import email from "../assets/email.svg";
import id from "../assets/id.svg";
import name from "../assets/name.svg";
import phone from "../assets/phone.svg";
import username from "../assets/username.svg";
import search from "../assets/search.svg";

interface InputValue {
  id: number | undefined,
  name: string,
  username: string,
  email: string,
  phone: string | number
}

export default function FilteredItems() {
  const [indexOfItem, setIndexOfItem] = useState<number>();
  const [typeOfInput, setTypeOfInput] = useState<string>("");
  const [showItems, setShowItems] = useState<boolean | undefined>(undefined);
  const [placeholder, setPlaceholder] = useState<string>("");

  const filterTable = () => {
    // Declare variables
    // Get the input element and its value
    const inputElement = document.querySelector(`#${typeOfInput}`) as HTMLInputElement;
    if (!inputElement) return;

    const filterValue = inputElement.value.toUpperCase();
    const table = document.getElementById("myTable") as HTMLTableElement;
    if (!table) return;

    const rows = Array.from(table.getElementsByTagName("tr"));

    // Loop through all table rows, and hide those who don't match the search query
    rows.forEach(row => {
      const cell = row.getElementsByTagName("td")[indexOfItem];
      if (cell) {
        const cellText = cell.textContent || cell.innerText;
        row.style.display = cellText.toUpperCase().includes(filterValue) ? "" : "none";
      }
    });
  };

  const changeInputType = (index: number, type: string, placeholder: string) => {
    setIndexOfItem(index);
    setTypeOfInput(type);
    setPlaceholder(placeholder);
    setShowItems(false)
  };

  const removeOnBlur = (e : HTMLInputElement) => {
    e.style.display = "none";
  }

  return (

    <main className="filteredSection">

      <section onClick={() => setShowItems(!showItems)}>
        <img src={search} alt="Filter The Item" />
        <small>Search</small>
      </section>

      <div className={showItems ? "animatedDiv" : ""} onClick={() => changeInputType(0, "idInput", "Search for an ID")}>
        <img src={id} alt="Search for an ID" />
        <p>ID</p>
      </div>

      <div className={showItems ? "animatedDiv" : ""} onClick={() => changeInputType(1, "nameInput", "Search for a Name")}>
        <img src={name} alt="Search for a name" />
        <p>Name</p>
      </div>

      <div className={showItems ? "animatedDiv" : ""} onClick={() => changeInputType(2, "usernameInput", "Search for an Username")}>
        <img src={username} alt="Search for an username" />
        <p>Username</p>
      </div>

      <div className={showItems ? "animatedDiv" : ""} onClick={() => changeInputType(3, "emailInput", "Search for an Email")}>
        <img src={email} alt="Search for an email" />
        <p>Email</p>
      </div>

      <div className={showItems ? "animatedDiv" : ""} onClick={() => changeInputType(4, "phoneInput", "Search for a Phone")}>
        <img src={phone} alt="Search for a phone" />
        <p>Phone</p>
      </div>


      {!(showItems === undefined || showItems === true) &&
        <input
          type="text"
          id={typeOfInput}
          onKeyUp={() => filterTable()}
          onBlur={(e) => removeOnBlur(e.target)}
          placeholder={placeholder}
        />}
    </main>




  );
}
