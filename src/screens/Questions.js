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
      correctTotal: null,
      points: null,
      timeLeft: 10
    }
    this.handleAnswerClick = this.handleAnswerClick.bind(this)
    this.outOfTime = this.outOfTime.bind(this)
  }

  handleAnswerClick (s, a) {
    const selected = s
    const answer = a
    let newCorrectStreak
    let newCorrectTotal
    const newQuestionNumber = this.state.questionNumber + 1
    console.log(selected)
    console.log(answer)
    if (selected === answer) {
      newCorrectTotal = this.state.correctTotal + 1
      newCorrectStreak = this.state.correctStreak + 1
      console.log('correct')
    } else {
      newCorrectTotal = this.state.correctTotal
      newCorrectStreak = 0
    }
    if (this.state.questionNumber === 10) {
      const r = {
        numberOfQuestions: this.state.questionNumber,
        correctStreak: newCorrectStreak,
        correctTotal: newCorrectTotal
      }
      console.log('booo')
      this.props.onClick(r)
    } else {
      this.setState({ questionNumber: newQuestionNumber, correctStreak: newCorrectStreak, correctTotal: newCorrectTotal })
    }
  }

  outOfTime () {
    if (this.state.questionNumber === 10) {
      const r = {
        numberOfQuestions: this.state.questionNumber,
        correctStreak: this.state.correctStreak,
        correctTotal: this.state.correctTotal
      }
      this.props.onClick(r)
    } else {
      this.setState({ questionNumber: this.state.questionNumber + 1, correctStreak: 0 })
    }
  }

  // fields for tsConstructSignatureDeclaration
  // totalQuestions:
  render () {
    const questionIndexNumber = this.state.questionNumber - 1
    const question = quizDatabase[this.props.category].questionLibrary[questionIndexNumber]
    const questionText = question.question
    const answerOptions = question.options
    const a = question.answer

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
          <Timer timeLeft={this.state.timeLeft} outOfTime={this.outOfTime} />
          <div className='question d-flex align-items-center justify-content-center'>
            <p>{questionText}</p>
          </div>
          <div className='options d-flex flex-wrap'>
            <div
              className='option' onClick={() => { this.handleAnswerClick(answerOptions[0], a) }}
            >{answerOptions[0]}
            </div>
            <div
              className='option' onClick={() => { this.handleAnswerClick(answerOptions[1], a) }}
            >{answerOptions[1]}
            </div>
            <div
              className='option' onClick={() => { this.handleAnswerClick(answerOptions[2], a) }}
            >{answerOptions[2]}
            </div>
            <div
              className='option' onClick={() => { this.handleAnswerClick(answerOptions[3], a) }}
            >{answerOptions[3]}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Questions
