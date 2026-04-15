'use client'

import { useEffect, useState } from 'react'
import { Cloud, CloudRain, Sun, Loader2 } from 'lucide-react'

export function WeatherWidget() {
  const [weatherCode, setWeatherCode] = useState<number | null>(null)
  const [temperature, setTemperature] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-6.5944&longitude=106.7892&current_weather=true')
        const data = await res.json()
        if (data && data.current_weather) {
          setWeatherCode(data.current_weather.weathercode)
          setTemperature(data.current_weather.temperature)
        }
      } catch (error) {
        console.error('Failed to fetch weather', error)
      } finally {
        setLoading(false)
      }
    }
    fetchWeather()
  }, [])

  if (loading) {
    return (
      <div className="fixed bottom-20 md:bottom-6 left-4 z-50 glass-dark bg-black/40 backdrop-blur-xl border border-white/20 p-3 rounded-2xl shadow-2xl flex items-center justify-center w-40 h-16">
        <Loader2 className="h-5 w-5 text-emerald-400 animate-spin" />
      </div>
    )
  }

  if (weatherCode === null || temperature === null) return null

  // WMO Weather interpretation codes (simplified)
  const isRain = [51,53,55,56,57,61,63,65,66,67,80,81,82,95,96,99].includes(weatherCode)
  const isCloudy = [1,2,3,45,48].includes(weatherCode)
  const isClear = [0].includes(weatherCode)

  let Icon = Sun
  let iconColor = 'text-amber-400'
  if (isRain) {
    Icon = CloudRain
    iconColor = 'text-blue-400'
  } else if (isCloudy) {
    Icon = Cloud
    iconColor = 'text-gray-300'
  }

  return (
    <div className="fixed bottom-20 md:bottom-6 left-4 z-50 group">
      <div className="glass-dark bg-black/60 backdrop-blur-xl border border-white/20 p-3 rounded-2xl shadow-2xl hover:bg-black/80 transition-all duration-300 transform hover:scale-105 cursor-pointer">
        <div className="flex items-center gap-3">
          <div className={`p-2 bg-white/5 rounded-xl ${iconColor}`}>
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black text-sm">{temperature}°C Bogor</span>
            <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-wider">Debit Sungai: AMAN</span>
          </div>
        </div>
      </div>
    </div>
  )
}
