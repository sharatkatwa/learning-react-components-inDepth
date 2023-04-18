import { useState } from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'

function ModalPage() {
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => {
    setShowModal(!showModal)
  }

  const actionBar = (
    <div>
      <Button primary>Accept</Button>
    </div>
  )
  const modal = (
    <Modal onClose={handleClick} actionBar={actionBar}>
      Here is the important agreement for you to accept.
    </Modal>
  )
  return (
    <div>
      <Button primary onClick={handleClick}>
        Show Modal
      </Button>
      {showModal && modal}
    </div>
  )
}

export default ModalPage
