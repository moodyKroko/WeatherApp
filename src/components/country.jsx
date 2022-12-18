import { Heading, Image } from '@chakra-ui/react'

const Country = ({ country }) => {
  if (!country) return null

  const { capital, name, alpha2Code, flag } = country[0]

  return (
    <div>
      <Heading size="md">
        {name} ({alpha2Code})
      </Heading>
      <Image
        boxSize="150px"
        objectFit="scale-down"
        src={flag}
        alt={`Flag of ${name}`}
      />
      <div>capital {capital}</div>
    </div>
  )
}

export default Country
