// Write your code here
import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {
    teamsList: [],
    isLoader: true,
  }

  componentDidMount = () => {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updatedData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({teamsList: updatedData, isLoader: false})
  }

  render() {
    const {teamsList, isLoader} = this.state
    return (
      <div className="bg-container">
        <div className="logo">
          <img
            className="logo-img"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        {isLoader ? (
          <div className="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul className="team-card-item">
            {teamsList.map(each => (
              <TeamCard teamsList={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home