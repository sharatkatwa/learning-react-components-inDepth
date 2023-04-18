import { useEffect } from 'react'
import ReactDOM from 'react-dom'

function Modal({ onClose, children, actionBar }) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden')
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [])

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className='fixed inset-0 bg-black opacity-50'
      ></div>
      <div className='fixed p-10 bg-white inset-y-28 inset-x-10 sm:inset-40 md:inset-x-60'>
        <div className='flex flex-col justify-between h-full'>
          {children}
          <div onClick={onClose} className='flex justify-end'>
            {actionBar}
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container')
  )
}

export default Modal
