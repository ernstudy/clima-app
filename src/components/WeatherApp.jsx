import React, { useEffect, useState } from "react";
import WeatherTitle from "./WeatherTitle";
import WeatherForm from "./WeatherForm";
import WeatherData from "./WeatherData";
import NotFound from "./NotFound";

export default function WeatherApp() {
  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temp: "",
    condition: "",
    icon: "",
    conditionText: "",
  });

  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const syncSessiontorage = (data) => {
    sessionStorage.setItem("city", JSON.stringify(data));
  };

  // console.log(jsonData);

  useEffect(() => {
    const item = sessionStorage.getItem("city");
    const jsonData = JSON.parse(item);

    if (jsonData) {
      console.log(jsonData);
      setWeather((preValue) => {
        return {
          ...preValue,
          city: jsonData.location.name,
          country: jsonData.location.country,
          temp: jsonData.current.temp_c,
          condition: jsonData.current.condition.code,
          icon: jsonData.current.condition.icon,
          conditionText: jsonData.current.condition.text,
        };
      });
      return;
    }
    searchCity();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather.city}`;
  }, [weather]);

  const searchCity = async (city = "hinche") => {
    try {
      if (!city.trim()) {
        throw { message: "El campo ciudad es obligatorio" };
        return;
      }
      const KEY = import.meta.env.VITE_API_KEY;
      const URL = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no
      `;
      const response = await fetch(URL);
      const data = await response.json();

      if (data.error) {
        throw { message: "La ciudad no es valida" };
        return;
      }

      setWeather((prevValue) => {
        return {
          ...prevValue,
          city: data.location.name,
          country: data.location.country,
          temp: data.current.temp_c,
          condition: data.current.condition.code,
          icon: data.current.condition.icon,
          conditionText: data.current.condition.text,
        };
      });

      syncSessiontorage(data);

      setError({
        error: false,
        message: "",
      });
    } catch (error) {
      console.log(error);
      setError({
        error: true,
        message: error.message,
      });
    }
  };

  const loadInfo = (city) => {
    searchCity(city);
  };

  return (
    <>
      <WeatherTitle />

      <WeatherForm loadInfo={loadInfo} error={error} />

      {error.error ? <NotFound /> : <WeatherData weather={weather} />}
    </>
  );
}
