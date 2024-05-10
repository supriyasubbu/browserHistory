import './App.css'
import {Component} from 'react'
import HistoryItem from './components/HistoryItem'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {
    inputSearch: '',
    historyList: initialHistoryList,
  }

  inputHistory = event => {
    this.setState({inputSearch: event.target.value})
  }

  onDeleteHistory = id => {
    const {historyList} = this.state

    const filterList = historyList.filter(each => each.id !== id)
    this.setState({historyList: filterList})
  }

  render() {
    const {inputSearch, historyList} = this.state

    const userHistory = historyList.filter(each =>
      each.title.toLowerCase().includes(inputSearch.toLowerCase()),
    )

    let browserHistory

    if (userHistory.length !== 0) {
      browserHistory = (
        <ul className="history-items-container">
          {userHistory.map(each => (
            <HistoryItem
              historyDetails={each}
              key={each.id}
              onDeleteHistory={this.onDeleteHistory}
            />
          ))}
        </ul>
      )
    } else {
      browserHistory = (
        <div className="no-history-container">
          <p className="history-text">There is no history to show</p>
        </div>
      )
    }

    return (
      <div className="browser-history-bg">
        <div className="browser-history-nav-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="image"
            alt="app logo"
          />
          <div className="browser-his-input-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search"
              alt="search"
            />
            <input
              type="search"
              placeholder="Search History"
              onChange={this.inputHistory}
              className="history-input"
            />
          </div>
        </div>
        <div className="browser-body">{browserHistory}</div>
      </div>
    )
  }
}

export default App
