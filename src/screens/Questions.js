import React from 'react'
import quizDatabase from '../questionDatabase.js'
import Timer from '../components/Timer.js'
import { ReactComponent as MoreTime } from '../images/icons/moreTime.svg'
import { ReactComponent as Fifty } from '../images/icons/fifty.svg'
import { ReactComponent as Clue } from '../images/icons/clue.svg'

// import { ReactComponent as HalfChance } from '../images/icons/halfChance.svg'

class Questions extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      questionNumber: 1,
      correctStreak: 0,
      longestCorrectStreak: 0,
      timeRemaining: null,
      correctTotal: 0,
      points: null,
      stopCounter: false,
      timeLeft: 30,
      timeBonus: false,
      fiftyFiftyUsed: false,
      lifesRemaining: 6,
      buttonsDisabled: false,
      timeBanked: 0

    }
    this.handleAnswerClick = this.handleAnswerClick.bind(this)
    this.outOfTime = this.outOfTime.bind(this)
    this.handleMoreTimeClick = this.handleMoreTimeClick.bind(this)
    this.handle5050Click = this.handle5050Click.bind(this)
    this.handleClueClick = this.handleClueClick.bind(this)
  }

  // Clicking an answer
  handleAnswerClick (s, a) {
    if (this.state.buttonsDisabled || document.getElementById(s).classList.contains('ruled-out')) {
      return
    }
    const timeBanked = document.getElementById('timer').innerText
    let newTimeBanked
    const selected = s
    const answer = a
    let newCorrectStreak
    let newCorrectTotal
    let newLongestCorrectStreak = this.state.longestCorrectStreak
    const newQuestionNumber = this.state.questionNumber + 1
    // let newTimeBanked = this.state.timeBanked
    let verdict
    if (selected === answer) {
      newCorrectTotal = this.state.correctTotal + 1
      newCorrectStreak = this.state.correctStreak + 1
      newTimeBanked = parseInt(timeBanked) + this.state.timeBanked
      console.log(newTimeBanked)
      verdict = 'correct'
      if (newCorrectStreak > this.state.longestCorrectStreak) {
        console.log('its longer')
        newLongestCorrectStreak = newCorrectStreak
      }
    } else {
      newCorrectTotal = this.state.correctTotal
      newCorrectStreak = 0
      newTimeBanked = this.state.timeBanked
      verdict = 'incorrect'
    }
    // stop timer and give verdict
    this.setState({ stopCounter: true, verdict: verdict, buttonsDisabled: true })
    setTimeout(() => {
      if (this.state.questionNumber === 10) {
        let timeBankedPoints = this.state.timeBanked
        if (timeBankedPoints > 200) {
          timeBankedPoints = 4
        } else if (timeBankedPoints >= 150) {
          timeBankedPoints = 2
        } else {
          timeBankedPoints = 0
        }
        const r = {
          numberOfQuestions: this.state.questionNumber,
          correctStreak: newCorrectStreak,
          longestCorrectStreak: newLongestCorrectStreak,
          correctTotal: newCorrectTotal,
          lifesRemaining: this.state.lifesRemaining,
          timeBanked: newTimeBanked,
          ranking: Math.floor((newCorrectTotal + this.state.lifesRemaining + timeBankedPoints) / 2) / 2
        }
        this.props.onClick(r)
      } else {
        // wipes formatting on timer
        var timer = document.getElementById('timer-div')
        timer.className = 'timer d-flex align-items-center justify-content-center'
        // wipes 50/50 formating & clue display
        const optionDivs = document.querySelectorAll('.option')
        for (let i = 0; i < optionDivs.length; i++) {
          optionDivs[i].classList.remove('ruled-out')
        }
        document.getElementById('clue').classList.remove('show')

        this.setState({
          questionNumber: newQuestionNumber,
          correctStreak: newCorrectStreak,
          correctTotal: newCorrectTotal,
          longestCorrectStreak: newLongestCorrectStreak,
          stopCounter: false,
          timeLeft: 30,
          timeBonus: false,
          fiftyFifty: false,
          buttonsDisabled: false,
          timeBanked: newTimeBanked
        })
      }
    }, 3000)
  }

  // When the timer runs out
  outOfTime () {
    this.setState({ stopCounter: true, verdict: 'outoftime', buttonsDisabled: true })
    setTimeout(() => {
      if (this.state.questionNumber === 10) {
        let timeBankedPoints = this.state.timeBanked
        if (timeBankedPoints > 200) {
          timeBankedPoints = 4
        } else if (timeBankedPoints >= 150) {
          timeBankedPoints = 2
         } else {
          timeBankedPoints = 0
        }

        const r = {
          numberOfQuestions: this.state.questionNumber,
          correctStreak: this.state.correctStreak,
          longestCorrectStreak: this.state.longestCorrectStreak,
          correctTotal: this.state.correctTotal,
          lifesRemaining: this.state.lifesRemaining,
          timeBanked: this.state.timeBanked,
          ranking: Math.floor((this.state.correctTotal + this.state.lifesRemaining + timeBankedPoints) / 2) / 2
        }
        this.props.onClick(r)
      } else {
        // wipes formatting on timer
        var timer = document.getElementById('timer-div')
        timer.className = 'timer d-flex align-items-center justify-content-center'
        // wipes 50/50 formatting
        const optionDivs = document.querySelectorAll('.option')
        for (let i = 0; i < optionDivs.length; i++) {
          optionDivs[i].classList.remove('ruled-out')
        }
        document.getElementById('clue').classList.remove('show')

        this.setState({
          questionNumber: this.state.questionNumber + 1,
          correctStreak: 0,
          stopCounter: false,
          timeLeft: 30,
          timeBonus: false,
          fiftyFifty: false,
          buttonsDisabled: false
        })
      }
    }, 3000)
  }

  handleMoreTimeClick () {
    if (this.state.moreTimeUsed) {
      return
    }
    this.setState({
      timeBonus: true,
      moreTimeUsed: true,
      lifesRemaining: this.state.lifesRemaining - 2
    })
  }

  handle5050Click () {
    if (this.state.fiftyFiftyUsed) {
      return
    }
    const questionIndexNumber = this.state.questionNumber - 1
    const question = quizDatabase[this.props.category].questionLibrary[questionIndexNumber]
    const incorrectArray = question.options.slice()
    incorrectArray.splice(question.options.indexOf(question.answer), 1)
    incorrectArray.splice((Math.floor(Math.random() * 3)), 1)
    let i
    for (i = 0; i < incorrectArray.length; i++) {
      document.getElementById(incorrectArray[i]).className += ' ruled-out'
    }
    this.setState({
      fiftyFifty: true,
      fiftyFiftyUsed: true,
      lifesRemaining: this.state.lifesRemaining - 2
    })
  }

  handleClueClick () {
    if (this.state.clueUsed) {
      return
    }
    document.getElementById('clue').className += ' show'
    this.setState({
      clueUsed: true,
      lifesRemaining: this.state.lifesRemaining - 2
    })
  }

  render () {
    // Setting variables to display in the questions page layout
    const questionIndexNumber = this.state.questionNumber - 1
    const question = quizDatabase[this.props.category].questionLibrary[questionIndexNumber]
    const questionText = question.question
    const answerOptions = question.options
    const chosenCategory = this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
    const a = question.answer
    const clue = question.clue
    const newImage = question.supportingImage

    return (
      <div>
        <div>
          <div className='status d-flex justify-content-between align-items-center'>
            <p className='chosenCategory'>{chosenCategory}
            </p>
            <div className='numberGroup text-center'>
              <p className='questionNumber'>{questionIndexNumber + 1}</p>
              <p className='of'>of</p>
              <p className='total'>10</p>
            </div>
          </div>
          <Timer stopCounter={this.state.stopCounter} timeBonus={this.state.timeBonus} timeLeft={this.state.timeLeft} outOfTime={this.outOfTime} verdict={this.state.verdict} />
          <div className='question d-flex align-items-center justify-content-center'>
            <p>{questionText}</p>
          </div>
          <div className='supportingImageContainer' style={{ backgroundImage: `url(${newImage})`, backgroundSize: 'cover' }}>
            <div id='clue' className='clue-overlay'><p className='clue-text'>{clue}</p></div>
            {/* <img src={newImage} /> */}
          </div>
          <div className='lifesContainer d-flex justify-content-around'>
            <div className={`life ${this.state.moreTimeUsed}`}><MoreTime onClick={() => { this.handleMoreTimeClick() }} /></div>
            <div className={`life ${this.state.fiftyFiftyUsed}`}><Fifty onClick={() => { this.handle5050Click() }} /></div>
            <div className={`life ${this.state.clueUsed}`}><Clue onClick={() => { this.handleClueClick() }} /></div>
          </div>
          <div className='options d-flex flex-wrap'>
            <div
              id={answerOptions[0]} className='option' disabled={this.state.buttonsDisabled} onClick={() => { this.handleAnswerClick(answerOptions[0], a) }}
            >{answerOptions[0]}
            </div>
            <div
              id={answerOptions[1]} className='option' disabled={this.state.buttonsDisabled} onClick={() => { this.handleAnswerClick(answerOptions[1], a) }}
            >{answerOptions[1]}
            </div>
            <div
              id={answerOptions[2]} className='option' disabled={this.state.buttonsDisabled} onClick={() => { this.handleAnswerClick(answerOptions[2], a) }}
            >{answerOptions[2]}
            </div>
            <div
              id={answerOptions[3]} className='option' disabled={this.state.buttonsDisabled} onClick={() => { this.handleAnswerClick(answerOptions[3], a) }}
            >{answerOptions[3]}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Questions
