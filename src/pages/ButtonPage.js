import Button from '../components/Button'
import { GoBeaker, GoHeart, GoSearch } from 'react-icons/go'

function ButtonPage() {
  return (
    <div>
      <div>
        <Button
          success
          rounded
          outline
          onClick={() => {
            console.log('clicked....')
          }}
        >
          <GoBeaker />
          Hi There!
        </Button>
        <Button secondary outline>
          Bye There!
        </Button>
        <Button primary outline rounded>
          <GoSearch />
          Click Here!
        </Button>
        <Button danger rounded>
          Add To Cart!
        </Button>
        <Button warning>
          <GoHeart />
          Hurry Up!
        </Button>
      </div>
    </div>
  )
}

export default ButtonPage
