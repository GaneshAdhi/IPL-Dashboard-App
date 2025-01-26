import './index.css'

const MatchCardComponent = props => {
  const {matchCardData} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = matchCardData
  const statusClassName = matchStatus === 'Won' ? 'win-style' : 'lost-style'
  console.log(matchStatus)
  return (
    <li className="match-small-card">
      <img
        className="logo-small"
        alt={`competing team ${competingTeam}`}
        src={competingTeamLogo}
      />
      <p className="small-heading">{competingTeam}</p>
      <p className="result-contant">{result}</p>
      <p className={statusClassName}>{matchStatus}</p>
    </li>
  )
}
export default MatchCardComponent
