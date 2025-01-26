import './index.css'

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatchComponent from '../LatestMatch'
import MatchCardComponent from '../MatchCard'

class TeamMatchComponent extends Component {
  state = {isLoader: true, idBaseBackgroud: '', teamMatchList: {}}

  componentDidMount() {
    this.teamMatchListFunction()
  }

  snakeToCamel = each => ({
    competingTeam: each.competing_team,
    competingTeamLogo: each.competing_team_logo,
    date: each.date,
    firstInnings: each.first_innings,
    id: each.id,
    manOfTheMatch: each.man_of_the_match,
    matchStatus: each.match_status,
    result: each.result,
    secondInnings: each.second_innings,
    umpires: each.umpires,
    venue: each.venue,
  })

  teamMatchListFunction = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/ipl/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    const recentMatches = data.recent_matches.map(each =>
      this.snakeToCamel(each),
    )
    const formatData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.snakeToCamel(data.latest_match_details),
      recentMatches,
    }

    this.setState({
      idBaseBackgroud: id,
      teamMatchList: formatData,
      isLoader: false,
    })
  }

  renderMatchCard = recentMatches => (
    <ul className="small-match-card-container">
      {recentMatches.map(each => (
        <MatchCardComponent key={each.id} matchCardData={each} />
      ))}
    </ul>
  )

  renderLatestMatch = () => {
    const {teamMatchList} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchList
    console.log(teamMatchList)
    console.log(teamBannerUrl)
    return (
      <>
        <img alt="team banner" className="team-banner" src={teamBannerUrl} />
        <LatestMatchComponent latestMatchDetail={latestMatchDetails} />

        {this.renderMatchCard(recentMatches)}
      </>
    )
  }

  backgroundChangeFuntion = () => {
    const {idBaseBackgroud} = this.state
    switch (idBaseBackgroud) {
      case 'RCB':
        return 'rcb'

      case 'KKR':
        return 'kkr'

      case 'KXP':
        return 'k11'

      case 'CSK':
        return 'csk'

      case 'RR':
        return 'rr'

      case 'MI':
        return 'mi'

      case 'SH':
        return 'srh'

      case 'DC':
        return 'dc'
      default:
        return null
    }
  }

  render() {
    const {isLoader} = this.state
    const backgroundClass = this.backgroundChangeFuntion()
    return (
      <div className={`team-main-container ${backgroundClass}`}>
        {isLoader ? (
          <div testid="loader" className="loader-style">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderLatestMatch()
        )}
      </div>
    )
  }
}
export default TeamMatchComponent
