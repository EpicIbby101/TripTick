import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Header } from "@/components/Header";
import CurrencyConverter from "@/components/CurrencyConverter";
import HomeButton from "@/components/HomeButton";
import Image from "next/image";
import { object } from "prop-types";

function CurrencyConversion() {
  // State variables using useState
  // amount1 and amount2 represent the amounts to be converted in currency1 and currency2 respectively
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  // currency1 and currency2 represent the currencies for the conversion, and they are initialized with USD and EUR
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("EUR");
  // rates will hold the exchange rates fetched from the API and is initialized as an empty array
  const [rates, setRates] = useState([]);

  // Setting up the HTTP, request configuration and fetching exchange rates using useEffect
  // The options object holds the configuration for the HTTP GET request to the API. It includes the method, URL and headers required to make the request.
  const options = {
    method: "GET",
    url: "https://exchangerate-api.p.rapidapi.com/rapid/latest/USD",
    headers: {
      "X-RapidAPI-Key": "8403cb6857msh4e494b01da34267p1a13cajsn19f45d944f8c",
      "X-RapidAPI-Host": "exchangerate-api.p.rapidapi.com",
    },
  };

  // The useEffect hook is used to perform side effects in functional components. In this case, it fetches the exchange rates data when the component mounts (empty dependency array). The empty dependency array ensures that this effect runs only once when the component is mounted.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        setRates(response.data.rates);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!!rates) {
      handleAmount1Change(1);
    }
  }, [rates]);

  // Formatting helper function: The format function takes a number as input and returns the number formatted with four decimal places using the 'toFixed' method.
  function format(number) {
    return number.toFixed(4);
  }

  // Event handler functions for handling changes in amounts and currencies:
  // These event handler functions are used to update the state variables when users interact with the currency converter UI components.
  function handleAmount1Change(amount1) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setCurrency2(currency2);
  }
  // For example, handleAmount1Change is called when the user changes the value of amount1. It updates amount1, recalculates amount2 using the selected currencies' exchange rates, and updates amount2 accordingly.

  // Render the component
  return (
    <Fragment>
      <Header title="Quick Currency Converter" />
      <div className="relative min-h-screen">
        <div className="absolute top-5 left-5 z-20">
          <HomeButton />
        </div>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/flags-of-the-world.png"
            alt="Background"
            fill
            objectFit="cover"
          />
        </div>
        <div className="flex justify-center items-center relative z-10 min-h-screen">
          <div className="bg-gray-700 bg-opacity-90 text-white py-11 px-6 rounded-lg">
            <h1 className="text-center text-3xl font-bold mb-5">
              Convert Your Money
            </h1>
            <div className="flex flex-col items-center">
              <CurrencyConverter
                onAmountChange={handleAmount1Change}
                onCurrencyChange={handleCurrency1Change}
                currencies={Object.keys(rates)}
                amount={amount1}
                currency={currency1}
              />
              <CurrencyConverter
                onAmountChange={handleAmount2Change}
                onCurrencyChange={handleCurrency2Change}
                currencies={Object.keys(rates)}
                amount={amount2}
                currency={currency2}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CurrencyConversion;
