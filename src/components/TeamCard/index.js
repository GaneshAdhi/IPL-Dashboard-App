import './index.css'
import {Link} from 'react-router-dom'

const TeamCardComponent = props => {
  const {teamCardData} = props
  const {id, name, teamImageUrl} = teamCardData
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="team-small-card">
        <img className="team-logo" alt={name} src={teamImageUrl} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCardComponent
