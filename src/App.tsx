import React from "react";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './redux/userSlice.ts';
import { AppDispatch } from "./redux/store.ts";
import FilteredItems from "./components/filterItems.tsx";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  const { users, loading, error } = useSelector((state: any) => state.users);
  

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <>
      <FilteredItems />
      <table className="table" id="myTable">
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        </thead>
        <tbody>
        {users.map((name, index) => (
          <tr key={index}>
            <td>{name.id}</td>
            <td>{name.name}</td>
            <td>{name.username}</td>
            <td>{name.email}</td>
            <td>{name.phone}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
