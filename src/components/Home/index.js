import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCardComponent from '../TeamCard'

class HomePage extends Component {
  state = {isLoader: true, teamCardList: []}

  componentDidMount() {
    this.teamCardDetailsGetFuntions()
  }

  teamCardDetailsGetFuntions = async () => {
    const url = 'https://apis.ccbp.in/ipl'
    const response = await fetch(url)
    const data = await response.json()
    const teamsDataList = data.teams
    const formatData = teamsDataList.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({isLoader: false, teamCardList: formatData})
  }

  renderFuntion = () => {
    const {teamCardList} = this.state
    return (
      <ul className="team-card-list-container">
        {teamCardList.map(each => (
          <TeamCardComponent key={each.id} teamCardData={each} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoader} = this.state
    return (
      <div className="main-container">
        <div className="heaing-container">
          <img
            className="ipl-logo-style"
            alt="ipl logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="heading-style">IPL Dashboard</h1>
        </div>
        {isLoader ? (
          <div testid="loader" className="loader-style">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderFuntion()
        )}
      </div>
    )
  }
}
export default HomePage
