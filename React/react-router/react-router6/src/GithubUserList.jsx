import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

function GithubUserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://api.github.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="hubList">
        <div className="out">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
                <li key={0}>
                    <Link to={`/users/JSter91`}>JSter91</Link>
                  </li>
              {users.map((user) => {
                return (
                  <li key={user.id}>
                    <Link to={`/users/${user.login}`}>{user.login}</Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default GithubUserList;
