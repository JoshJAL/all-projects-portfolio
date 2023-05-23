'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './weatherApp.module.css';
import LoadingSpinner from '@/components/loadingSpinner/LoadingSpinner';

export default function WeatherHome() {
  const baseURL = 'http://api.weatherapi.com/v1';

  type WeatherData = {
    cloud: number;
    condition: { text: string; icon: string; code: number };
    feelslike_c: number;
    feelslike_f: number;
    gust_kph: number;
    gust_mph: number;
    humidity: number;
    is_day: number;
    last_updated: string;
    last_updated_epoch: number;
    precip_in: number;
    precip_mm: number;
    pressure_in: number;
    pressure_mb: number;
    temp_c: number;
    temp_f: number;
    uv: number;
    vis_km: number;
    vis_miles: number;
    wind_degree: number;
    wind_dir: string;
    wind_kph: number;
    wind_mph: number;
  };

  type LocationData = {
    country: string;
    lat: number;
    localtime: string;
    localtime_epoch: number;
    lon: number;
    name: string;
    region: string;
    tz_id: string;
  };

  const [data, setData] = useState<WeatherData>();
  const [locationData, setLocationData] = useState<LocationData>();
  const [tempType, setTempType] = useState('F');
  const [currentLat, setCurrentLat] = useState<number>();
  const [currentLong, setCurrentLong] = useState<number>();
  const [random, setRandom] = useState(false);

  function generateRandomLongLat() {
    return (Math.random() * (180 - -180) + -180).toFixed(4);
  }

  async function handleRandomLocation(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    let long = generateRandomLongLat();
    let lat = generateRandomLongLat();
    let res = await axios.get(
      `${baseURL}/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${lat},${long}&aqi=no`
    );
    setRandom(true);

    setData(res.data.current);
    setLocationData(res.data.location);
  }

  async function handleReset(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    let res = await axios.get(
      `${baseURL}/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${currentLat},${currentLong}&aqi=no`
    );

    setRandom(false);
    setData(res.data.current);
    setLocationData(res.data.location);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      setCurrentLat(position.coords.latitude);
      setCurrentLong(position.coords.longitude);
      let res = await axios.get(
        `${baseURL}/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${position.coords.latitude},${position.coords.longitude}&aqi=no`
      );

      setData(res.data.current);
      setLocationData(res.data.location);
    });
  }, []);

  if (!data || !locationData) return <LoadingSpinner />;

  let currentTime = locationData.localtime.split(' ')[1];
  let currentHour = parseInt(currentTime.split(':')[0]);

  currentHour > 12
    ? (currentTime = `${currentHour - 12}:${currentTime.split(':')[1]} PM`)
    : currentHour === 0
    ? (currentTime = `12:${currentTime.split(':')[1]} AM`)
    : (currentTime += ' AM');

  function handleTempType(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setTempType(tempType === 'F' ? 'C' : 'F');
  }

  const tempTypes = ['F', 'C'];

  return (
    <div className='flex justify-center'>
      <div className={`${styles.glass} text-center gap-3`}>
        <div className='flex items-center gap-2 mb-2 ml-auto'>
          <div className='inline-flex items-center p-[1px] rounded-3xl bg-yellow-400'>
            {tempTypes.map((type) => {
              const checked = tempType === type;
              return (
                <button
                  key={type}
                  onClick={(e) => handleTempType(e)}
                  className={`${checked ? 'bg-white text-black' : ''} cursor-pointer rounded-3xl p-2`}
                >
                  {type === 'F' ? '°F' : '°C'}
                </button>
              );
            })}
          </div>
        </div>
        <h1 className='text-3xl'>{locationData.name}</h1>
        <p className='text-2xl'>{currentTime}</p>

        <img src={data.condition.icon} className='w-auto h-28' height={64} width={64} alt='Weather Icon' />
        <p className='text-xl underline underline-offset-2'>Weather Condition:</p>
        <p className='text-xl'>{data.condition.text}</p>
        <p className='text-xl underline underline-offset-2'>Current Temperature:</p>
        <p className='text-xl'>{tempType === 'F' ? `${data.temp_f}°F` : `${data.temp_c}°C`}</p>
        <p className='text-lg underline underline-offset-2'>Feels like: </p>
        <p className='text-lg'>{tempType === 'F' ? `${data.feelslike_f}°F` : `${data.feelslike_c}°C`}</p>
        <div className='flex gap-3'>
          <button
            type='button'
            onClick={(e) => handleRandomLocation(e)}
            className='px-3 py-2 text-lg transition-all bg-yellow-400 rounded-lg hover:bg-yellow-500'
          >
            Randomize
          </button>
          {random && (
            <button
              type='button'
              onClick={(e) => handleReset(e)}
              className='px-3 py-2 text-lg transition-all bg-yellow-400 rounded-lg hover:bg-yellow-500'
            >
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
