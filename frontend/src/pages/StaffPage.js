import React, { useState } from 'react';
import StaffRow from "../components/StaffRow.js"   

function StaffPage(){
  const [results, setResults] = useState([]);
  const fetchStaff = () => {
    fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(response => setResults(response.results))
    .catch(() => alert("Yo, I don't know what is going on but something isn't working. Please try again later."));
  }
    return(
      <>
      <h2>Meet Our Staff</h2>
        <article>
            <p>
                Choose your method to import our randomly generated team member data. Data courtesy of Random User Generator API.
            </p>
            <button id="generate_users" onClick={fetchStaff}>Import 10 Team Members</button>
            <table>
              <caption>
                Our team of randomly generated people is here to help!
              </caption>
                <thead>
                    <th>Portrait</th>
                    <th>Name/Email</th>
                    <th>Telephone</th>
                    <th>City</th>
                </thead>
                <tbody id="tablebody">
                      {results.map((person, index) => <StaffRow person={person} key={index} />)}
                </tbody>
            </table>
        </article>
      </>
    );
}
export default StaffPage;