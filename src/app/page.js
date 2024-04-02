"use client";

import Image from "next/image";
import Navbar from "./navbar";
import styles from "./page.module.css";
import { FormEvent } from "react";
import { useState } from "react";
import Footer from "./footer";

export default function Home() {
  const [formData, setFormData] = useState({
    url: "",
  });

  const [shortenedLink, setShortenedLink] = useState("");

  const [copiedText, setCopiedText] = useState("Copy");

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.url]: event.target.value,
    });
  };

  function copyText(txt){
    navigator.clipboard.writeText(txt);
    setCopiedText("Copied");
  }

  const api_token = process.env.REACT_APP_API_KEY;

  console.log('api key: ' + api_token);

  const submitShortenForm = async (e) => {
    
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("Submitting form...");
    // Extract the values of the "name" and "email" inputs from the form
    const data = {
      url: e.target.url.value,
    };

    //console.log("sending: " + data);
    console.log("json: " + JSON.stringify(data));

    // Define the API endpoint where the form data will be sent
    const endpoint = "https://api.tinyurl.com/create/";
    // Set up options for the fetch request
    const options = {
      
      //'Access-Control-Allow-Origin':'*',
      method: "POST", // Use the POST method to send data
      body: JSON.stringify(data), // Set the request body to the JSON data
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${api_token}`,
      },
    };

    // Send the form data to the API endpoint using fetch
    const response = await fetch(
      endpoint,
      options
    );

    try {
      // Analyse the response data as JSON
      const result = await response.json();

      const json_result = JSON.stringify(result);
      const dat = JSON.parse(json_result);
      console.log("result: " + json_result + " tiny: " + dat.data.tiny_url);
      setShortenedLink(dat.data.tiny_url);
      setCopiedText("Copy");

    } catch (error) {
      console.error(error);
    }
    
    //alert("result:" + result);
    // Display an alert with the result data (in this case, the submitted email)
    //alert(`Please recheck Your Link ${result.data}`);
  };

  return (
    <div className={styles.body}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.description}>
          <form className={styles.form} onSubmit={async (e) => {await submitShortenForm(e)}}>
            <label htmlFor="url">URL:</label>
            <span>
              <input
                type="text"
                id="url"
                name="url"
                defaultValue="https://www.youtube.com/watch?v=oswjtLwCUqg"
                onChange={handleInputChange}
              />
            </span>
            <button
              className={styles.button}
              type="submit"
            >
              Shorten
            </button>
            <br />
            <span className={styles.link}>{shortenedLink}</span>
            {shortenedLink && <button
              className={styles.button}
              type="button"
              onClick={() => copyText(shortenedLink ? shortenedLink : "nothing")}
            >
              {copiedText}
            </button>}
          </form>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
