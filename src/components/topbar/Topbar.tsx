import './Topbar.scss'

interface TopbarProps {
  title: string
}

export default function Topbar({ title }: TopbarProps): JSX.Element {
  return (
    <>
      <div className="topbar-container">
        <div className="topbar-title-container">
          <h1 className="topbar-title">{title}</h1>
        </div>
      </div>
    </>
  )
}
