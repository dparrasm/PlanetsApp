import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as filledStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'
import './FavoriteButton.scss'

interface FavoriteButtonProps {
  isFavorite: boolean
  onClick: () => void
}
export default function FavoriteButton({
  isFavorite,
  onClick
}: FavoriteButtonProps) {
  return (
    <>
      {isFavorite ? (
        <FontAwesomeIcon
          data-testid="favorite-button-filled-star"
          className="favorite-button"
          icon={filledStar}
          onClick={onClick}
        />
      ) : (
        <FontAwesomeIcon
          data-testid="favorite-button-empty-star"
          className="favorite-button"
          icon={emptyStar}
          onClick={onClick}
        />
      )}
    </>
  )
}
