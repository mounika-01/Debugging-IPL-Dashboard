// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestData} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestData
  return (
    <div className="latest-match-container">
      <div className="latest-match-card">
        <div className="team-details-card">
          <div className="team-details">
            <p className="sub-heading">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="stadium-name">{venue}</p>
            <p className="status">{result}</p>
          </div>
          <img
            className="opp-team-img"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <hr className="h-line" />
        <div className="bottom-container">
          <p className="para-1">First Innings</p>
          <p className="para-2">{firstInnings}</p>
          <p className="para-1">Second Innings</p>
          <p className="para-2">{secondInnings}</p>
          <p className="para-1">Man Of The Match</p>
          <p className="para-2">{manOfTheMatch}</p>
          <p className="para-1">Umpires</p>
          <p className="para-2">{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch