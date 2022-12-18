import { Input, FormControl  } from '@chakra-ui/react'

const WeatherSearchForm = ({ name, handleChange, submit }) => {
  return (
    <form onSubmit={submit}>
      <FormControl>
        <Input
          mt={2}
          value={name}
          onChange={handleChange}
          placeholder="Enter name of a city"
        />
      </FormControl>
    </form>
  )
}

export default WeatherSearchForm
