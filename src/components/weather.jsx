import { Heading, Image } from '@chakra-ui/react'

const Weather = ({ weather }) => {
  if (weather === null) return null

  const {
    name,
    weather: [{ icon, description: iconDescription }],
    main: { temp, feels_like, humidity, temp_max },
    wind: { speed },
    sys: { country },
  } = weather

  const weatherIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`
  const countryFlag = `https://flagcdn.com/${country.toLowerCase()}.svg`

  return (
    <div>
      <Heading mt={3}>Weather in {name}</Heading>
      <div>{iconDescription}</div>
      <Image
        boxSize={150}
        objectFit="scale-down"
        src={weatherIcon}
        alt={`icon for ${iconDescription}`}
      />
      <div>wind {speed} m/s</div>
      <div>temperature {temp} Celcius</div>
      <div>feels like {feels_like} Celcius</div>
      <div>humidity {humidity}%</div>
      <div>max temp {temp_max} Celcius </div>
      <Image
        boxSize={150}
        objectFit="scale-down"
        src={countryFlag}
        alt={`flag of ${name}`}
      />
    </div>
  )
}

export default Weather
