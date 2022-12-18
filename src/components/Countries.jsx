import { Button } from '@chakra-ui/react'

const Countries = ({ countries, setFilter, submit }) => {
  if (countries.length > 10) {
    return
  }

  if (countries.length === 0) {
    return
  }

  const getSelectedName = (event) => {
    console.log(event.target.firstChild.data)
    setFilter(event.target.firstChild.data)
    submit()
  }

  return (
    <div>
      {countries.map(({ name }) => (
        <div key={name}>
          <Button
            ml={3}
            mt={3}
            colorScheme="blue"
            onClick={getSelectedName}
          >
            {name}
          </Button>
        </div>
      ))}
    </div>
  )
}

export default Countries
