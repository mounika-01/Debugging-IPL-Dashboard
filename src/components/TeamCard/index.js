// Write your code here
import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamsList} = props
  const {id, name, teamImageUrl} = teamsList
  const background = id.toLowerCase()
  return (
    <Link
      to={`/team-matches/${id}`}
      className={`TeamCard nav-link ${background}`}
    >
      <li className="list">
        <img className="team-img" src={teamImageUrl} alt={name} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard