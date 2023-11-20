import { useState } from 'react'
import './Card.scss'
import Modal from '../modal/Modal'

interface CardProps {
  title: string
  info: string[]
  removeCard: () => void
}

export default function Card({
  title,
  info,
  removeCard
}: CardProps): JSX.Element {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }

  const closeModal = () => {
    setOpen(false)
  }

  return (
    <div className="card-container">
      <div className="card-header">
        <div>
          <h1>{title}</h1>
        </div>
        <div className="card-remove-button" onClick={handleOpen}>
          <span>X</span>
        </div>
      </div>
      <div className="card-image">
        <img src="OIG.jpeg" alt="Card" />
        <div className="card-info-container">
          {info?.map((i, index) => (
            <div className="card-field" key={index}>
              {/* <label>{i}</label> */}
              <span>{i}</span>
            </div>
          ))}
        </div>
      </div>
      {open && (
        <Modal
          message={`Planet ${title} will be removed from favorites`}
          onSubmit={removeCard}
          closeModal={closeModal}
        />
      )}
    </div>
  )
}
