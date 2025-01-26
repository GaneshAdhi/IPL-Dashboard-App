import './index.css'

const LatestMatchComponent = props => {
  const {latestMatchDetail} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetail
  return (
    <div className="main-latest-container">
      <h1 className="heading-latest">Latest Matches</h1>
      <div className="latest-match-container">
        <div className="upper-container">
          <div>
            <p className="competing-team">{competingTeam}</p>
            <p className="date-style">{date}</p>
            <p className="para-common-stlye">{venue}</p>
            <p className="para-common-stlye">{result}</p>
          </div>
          <img
            className="competing-team-logo"
            alt={`latest match ${competingTeam}`}
            src={competingTeamLogo}
          />
        </div>
        <hr />
        <div className="down-container">
          <p className="date-style">First Innings</p>
          <p className="para-common-stlye">{firstInnings}</p>
          <p className="date-style">Second Innings</p>
          <p className="para-common-stlye">{secondInnings}</p>
          <p className="date-style">Man Of The Match</p>
          <p className="para-common-stlye">{manOfTheMatch}</p>
          <p className="date-style">Umpires</p>
          <p className="para-common-stlye">{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatchComponent
