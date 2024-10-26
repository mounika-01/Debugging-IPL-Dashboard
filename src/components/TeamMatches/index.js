// Write your code here
import './index.css'

import Loader from 'react-loader-spinner'

import {PieChart, Pie, Legend, Tooltip, Cell} from 'recharts'

import {Component} from 'react'

import {Link} from 'react-router-dom'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    latestteamData: [],
    recentMatchData: [],
    isLoader: true,
    id: '',
  }

  componentDidMount = () => {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    // console.log(this.props)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const latestData = {
      teamBannerUrl: data.team_banner_url,
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
    }

    const recentMatches = data.recent_matches.map(each => ({
      result: each.result,
      id: each.id,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))
    this.setState({
      latestteamData: latestData,
      recentMatchData: recentMatches,
      id,
      isLoader: false,
    })
  }

  findStats = (data, type) => {
    const contOf = data.filter(each => each.matchStatus === type).length
    return contOf
  }

  renderPieChart = () => {
    const {recentMatchData} = this.state

    const winsCount = this.findStats(recentMatchData, 'Won')
    const lostCount = this.findStats(recentMatchData, 'Lost')
    const drawCount = this.findStats(recentMatchData, 'Draw')
    const data = [
      {name: 'Won', value: winsCount},
      {name: 'Lost', value: lostCount},
      {name: 'Drawn', value: drawCount},
    ]

    return (
      <div className="pie-chart-container">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            <Cell key="cell-0" fill="#34cc09" />
            <Cell key="cell-1" fill="#c20404" />
            <Cell key="cell-2" fill="#0bf3d0" />
          </Pie>
          <Legend
            iconType="circle"
            iconSize={18}
            wrapperStyle={{top: '50px'}}
          />

          <Tooltip />
        </PieChart>
      </div>
    )
  }

  render() {
    const {latestteamData, recentMatchData, id, isLoader} = this.state

    const {teamBannerUrl} = latestteamData
    const background = id.toLowerCase()
    return (
      <div className={`team-matches-container ${background}`}>
        {isLoader ? (
          <div className="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <>
            <img
              className="each-team-img"
              src={teamBannerUrl}
              alt="team banner"
            />
            <div className="stats-container">
              <h className="stats-heading">Statistics</h>
              {this.renderPieChart()}
            </div>
            <div className="hed-div">
              <h1 className="heading-2">Latest Matches</h1>
            </div>
            <LatestMatch latestData={latestteamData} />
            <ul className="recent-match-container">
              {recentMatchData.map(each => (
                <MatchCard key={each.id} recentMatchData={each} />
              ))}
            </ul>
          </>
        )}

        <Link to="/" className="link">
          <button type="button" className="back-btn">
            Back
          </button>
        </Link>
      </div>
    )
  }
}

export default TeamMatches