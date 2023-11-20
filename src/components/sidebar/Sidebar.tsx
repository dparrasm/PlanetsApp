import { Link } from 'react-router-dom'
import './Sidebar.scss'

interface SidebarProps {
  options: string[]
}

export default function Sidebar({ options }: SidebarProps): JSX.Element {
  return (
    <aside className="sidebar-container">
      <h1 className="sidebar-title">PlanetsApp</h1>
      <div className="sidebar-menu">
        {options.map((option, index) => (
          <Link to={`${option.toLowerCase()}`} key={index}>
            <div className="sidebar-option">{option}</div>
          </Link>
        ))}
      </div>
    </aside>
  )
}
