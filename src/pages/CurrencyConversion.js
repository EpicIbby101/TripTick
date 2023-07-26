import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Header } from "@/components/Header";
import CurrencyConverter from "@/components/CurrencyConverter";
import Image from "next/image";
import { object } from "prop-types";

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

  function format(number) {
    return number.toFixed(4);
  }

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

  return (
<Fragment>
  <Header />
  <div className="relative min-h-screen">
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
