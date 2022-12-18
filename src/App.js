import { useEffect, useState } from 'react'
import {
  Box,
  useToast,
  Heading,
  Button,
  Text,
  Container,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  Icon,
  Flex,
  ModalBody,
  Center,
  chakra,
  filter,
} from '@chakra-ui/react'

import WeatherSearchForm from './components/searchForm'
import Weather from './components/weather'

import Services from './services/getServices'
import Countries from './components/Countries'
import ToggleSwitch from './components/ToggleSwitch'

import { IoSearchSharp } from 'react-icons/io5'

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
  const [countries, setCountries] = useState([testCountry])
  const [searchName, setSearchName] = useState('')
  const [weather, setWeather] = useState(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  //   useEffect(() => {
  //     Services.getAllCountry().then((countries) => {
  //       setCountries(countries)
  //     })
  //   }, [])
  //   console.log(countries)
  console.log('country loaded', countries)

  const toast = useToast({
    position: 'top',
  })

  const search = (event) => {
    event.preventDefault()

    Services.getWeather(searchName)
      .then((returnedData) => {
        setWeather(returnedData)
        setSearchName('')
        console.log(returnedData)
      })
      .catch((error) => {
        toast({
          title: `couldn't find city with name '${searchName}'`,
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
        setWeather(null)
      })
  }

  const handleNameChange = (event) => setSearchName(event.target.value)

  const filterCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchName.toLowerCase())
  )

  const menu = useDisclosure()

  const open = menu.isOpen && countries.length > 0

  console.log(filterCountries)

  return (
    // <Box
    //   p={4}
    //   display="flex"
    //   justifyContent="space-around"
    //   alignContent="center"
    // >
    // </Box>
    <Container maxW="container.md">
      <Box>
        <ToggleSwitch />
        <Box>
          <Heading as="h1" size="lg" mb={2}>
            Get Weather for a city
          </Heading>
          <Button
            py={3}
            size="lg"
            width="full"
            variant="outline"
            onClick={onOpen}
            justifyContent="left"
            sx={{
              bg: 'white',
              '.chakra-ui-dark &': { bg: 'gray.700' },
            }}
          >
            <Icon as={IoSearchSharp} w={4} h={4} />
            <Text flex={1} textAlign="left" ml={3} color="gray.400">
              Search for city
            </Text>
          </Button>

          {/* Modal pop up */}
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
              aria-expanded="true"
              aria-haspopup="listbox"
              rounded="lg"
              overflow="hidden"
              bg="transparent"
              top="8vh"
              shadow="lg"
              maxW="600px"
            >
              <Flex pos="relative" align="stretch">
                <chakra.input
                  aria-autocomplete="list"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck="false"
                  pl={68}
                  placeholder="Search for city"
                  value={searchName}
                  onChange={(e) => {
                    setSearchName(e.target.value)
                    menu.onOpen()
                  }}
                  sx={{
                    w: '100%',
                    h: '68px',
                    pl: '68px',
                    fontWeight: 'medium',
                    outline: 'transparent solid 2px',
                    bg: 'white',
                    '.chakra-ui-dark &': { bg: 'gray.700' },
                  }}
                />
                <Center position="absolute" left="7" h="68">
                  <Icon as={IoSearchSharp} w={5} h={5} />
                </Center>
              </Flex>
              <ModalBody maxH="66vh" p="0">
                {open && (
                  <Box>
                    <Box as="ul" borderTopWidth="1px" pt={2} pb={4}>
                      {filterCountries.map((country) => {
                        return (
                          <>
                            <p>{country.name}</p>
                            <p>{country.alpha2Code}</p>
                          </>
                        )
                      })}
                    </Box>
                  </Box>
                )}
              </ModalBody>
            </ModalContent>
          </Modal>

          {/* <WeatherSearchForm
            name={searchName}
            countries={countries}
            handleChange={handleNameChange}
            submit={search}
          /> */}
          {/* <Countries
            countries={filterCountries}
            setFilter={setSearchName}
            submit={search}
          /> */}

          <Weather weather={weather} />
        </Box>
      </Box>
    </Container>
  )
}

export default App
