import { Container } from '@chakra-ui/react'

import Main from './components/Main'
import Navbar from './components/Navbar'
import './index.css'

const testCountry = {
  name: 'Afghanistan',
  topLevelDomain: ['.af'],
  alpha2Code: 'AF',
  alpha3Code: 'AFG',
  callingCodes: ['93'],
  capital: 'Kabul',
  altSpellings: ['AF', 'Afġānistān'],
  subregion: 'Southern Asia',
  region: 'Asia',
  population: 40218234,
  latlng: [33.0, 65.0],
  demonym: 'Afghan',
  area: 652230.0,
  timezones: ['UTC+04:30'],
  borders: ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN'],
  nativeName: 'افغانستان',
  numericCode: '004',
  flags: {
    svg: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
    png: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png',
  },
  currencies: [{ code: 'AFN', name: 'Afghan afghani', symbol: '؋' }],
  languages: [
    { iso639_1: 'ps', iso639_2: 'pus', name: 'Pashto', nativeName: 'پښتو' },
    { iso639_1: 'uz', iso639_2: 'uzb', name: 'Uzbek', nativeName: 'Oʻzbek' },
    { iso639_1: 'tk', iso639_2: 'tuk', name: 'Turkmen', nativeName: 'Türkmen' },
  ],
  translations: {
    br: 'Afghanistan',
    pt: 'Afeganistão',
    nl: 'Afghanistan',
    hr: 'Afganistan',
    fa: 'افغانستان',
    de: 'Afghanistan',
    es: 'Afganistán',
    fr: 'Afghanistan',
    ja: 'アフガニスタン',
    it: 'Afghanistan',
    hu: 'Afganisztán',
  },
  flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
  regionalBlocs: [
    { acronym: 'SAARC', name: 'South Asian Association for Regional Cooperation' },
  ],
  cioc: 'AFG',
  independent: true,
}

function App() {
  //   const [countries, setCountries] = useState([testCountry])
  //   const [searchName, setSearchName] = useState('')
  //   const [weather, setWeather] = useState(null)

  //   const filterCountries = countries.filter((country) =>
  //     country.name.toLowerCase().includes(searchName.toLowerCase())
  //   )

  return (
    <>
      <Container maxW="container.xl">
        <Navbar />
        <Main />
      </Container>
    </>
  )
}

export default App
