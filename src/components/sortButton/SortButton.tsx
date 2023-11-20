import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import './SortButton.scss'

interface FavoriteButtonProps {
  increasedOrder: boolean
  onClick: ({ sortBy, orderAsc }: { sortBy: string; orderAsc: boolean }) => void
  sortBy: string
}
export default function SortButton({
  increasedOrder,
  onClick,
  sortBy
}: FavoriteButtonProps) {
  const [orderAsc, setOrderAsc] = useState(increasedOrder)

  const handleClick = () => {
    setOrderAsc(!orderAsc)
    onClick({ sortBy, orderAsc })
  }

  return (
    <>
      <div className="sort-button-container" onClick={handleClick}>
        {orderAsc ? (
          <FontAwesomeIcon className="sort-button" icon={faArrowUp} />
        ) : (
          <FontAwesomeIcon className="sort-button" icon={faArrowDown} />
        )}
      </div>
    </>
  )
}
