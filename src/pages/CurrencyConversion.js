import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "@/components/Header";
import CurrencyConverter from "@/components/CurrencyConverter";

function CurrencyConversion() {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("EUR");
  const [rates, setRates] = useState([]);

  const options = {
    method: "GET",
    url: "https://exchangerate-api.p.rapidapi.com/rapid/latest/USD",
    headers: {
      "X-RapidAPI-Key": "8403cb6857msh4e494b01da34267p1a13cajsn19f45d944f8c",
      "X-RapidAPI-Host": "exchangerate-api.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setRates(Object.keys(response.data.rates));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  function handleAmount1Change(amount1) {
    setAmount2((amount1 * rates[currency2]) / rates[currency1]);
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2((amount1 * rates[currency2]) / rates[currency1]);
    setCurrency1(currency1)
  }

  return (
    <div>
      <Header />
      <CurrencyConverter
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={rates}
        amount={amount1}
        currency={currency1}
      />
      <CurrencyConverter
        onAmountChange={setAmount2}
        onCurrencyChange={setCurrency2}
        currencies={rates}
        amount={amount2}
        currency={currency2}
      />
    </div>
  );
}

export default CurrencyConversion;
