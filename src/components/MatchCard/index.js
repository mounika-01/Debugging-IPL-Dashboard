// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatchData} = props
  const {
    result,
    competingTeam,
    competingTeamLogo,
    matchStatus,
  } = recentMatchData
  const statusColor = matchStatus === 'Won' ? 'won-status' : 'lost-status'
  return (
    <li className="recent-teams-card">
      <img
        className="recent-team-img"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="recent-team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`result-status ${statusColor}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard