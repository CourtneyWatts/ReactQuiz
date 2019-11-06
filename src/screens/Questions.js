import React from 'react'
import quizDatabase from '../questionDatabase.js'
import Timer from '../components/Timer.js'

class Questions extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      questionNumber: 1,
      correctStreak: 0,
      timeRemaining: null,
      correctTotal: 0,
      points: null,
      stopCounter: false,
      timeLeft: 10,
      buttonsDisabled: false
    }
    this.handleAnswerClick = this.handleAnswerClick.bind(this)
    this.outOfTime = this.outOfTime.bind(this)
  }

  // Clicking an answer
  handleAnswerClick (s, a) {
    if (this.state.buttonsDisabled) {
      return
    }
    const selected = s
    const answer = a
    let newCorrectStreak
    let newCorrectTotal
    const newQuestionNumber = this.state.questionNumber + 1
    let verdict
    if (selected === answer) {
      newCorrectTotal = this.state.correctTotal + 1
      newCorrectStreak = this.state.correctStreak + 1
      verdict = 'correct'
    } else {
      newCorrectTotal = this.state.correctTotal
      newCorrectStreak = 0
      verdict = 'incorrect'
    }
    // stop timer and give verdict
    this.setState({ stopCounter: true, verdict: verdict, buttonsDisabled: true })
    setTimeout(() => {
      if (this.state.questionNumber === 10) {
        const r = {
          numberOfQuestions: this.state.questionNumber,
          correctStreak: newCorrectStreak,
          correctTotal: newCorrectTotal,
          ranking: newCorrectTotal / 2
        }
        this.props.onClick(r)
      } else {
        this.setState({ questionNumber: newQuestionNumber, correctStreak: newCorrectStreak, correctTotal: newCorrectTotal, stopCounter: false, timeLeft: 10, buttonsDisabled: false })
      }
    }, 3000)
  }

  // When the timer runs out
  outOfTime () {
    this.setState({ stopCounter: true, verdict: 'outoftime', buttonsDisabled: true })
    setTimeout(() => {
      if (this.state.questionNumber === 10) {
        const r = {
          numberOfQuestions: this.state.questionNumber,
          correctStreak: this.state.correctStreak,
          correctTotal: this.state.correctTotal,
          ranking: this.state.correctTotal / 2
        }
        this.props.onClick(r)
      } else {
        this.setState({ questionNumber: this.state.questionNumber + 1, correctStreak: 0, stopCounter: false, timeLeft: 10, buttonsDisabled: false })
      }
    }, 3000)
  }

  render () {
    // Setting variables to display in the questions page layout
    const questionIndexNumber = this.state.questionNumber - 1
    const question = quizDatabase[this.props.category].questionLibrary[questionIndexNumber]
    const questionText = question.question
    const answerOptions = question.options
    const a = question.answer
    const newImage = quizDatabase[this.props.category].accolades[questionIndexNumber][3]

    return (
      <div>
        <div>
          <div className='status d-flex justify-content-around align-items-center'>
            <p>{this.props.category}</p>
            <div>
              <p>{questionIndexNumber + 1}</p>
              <p>of</p>
              <p>10</p>
            </div>
          </div>
          <Timer stopCounter={this.state.stopCounter} timeLeft={this.state.timeLeft} outOfTime={this.outOfTime} verdict={this.state.verdict} />
          <div className='question d-flex align-items-center justify-content-center'>
            <p>{questionText}</p>
          </div>
          <div className='options d-flex flex-wrap'>
            <div
              className='option' disabled={this.state.buttonsDisabled} onClick={() => { this.handleAnswerClick(answerOptions[0], a) }}
            >{answerOptions[0]}
            </div>
            <div
              className='option' disabled={this.state.buttonsDisabled} onClick={() => { this.handleAnswerClick(answerOptions[1], a) }}
            >{answerOptions[1]}
            </div>
            <div
              className='option' disabled={this.state.buttonsDisabled} onClick={() => { this.handleAnswerClick(answerOptions[2], a) }}
            >{answerOptions[2]}
            </div>
            <div
              className='option' disabled={this.state.buttonsDisabled} onClick={() => { this.handleAnswerClick(answerOptions[3], a) }}
            >{answerOptions[3]}
            </div>
          </div>
          <div>
            <img src={newImage} />
            <div>+ time</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Questions
