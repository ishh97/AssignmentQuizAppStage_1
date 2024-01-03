import './QuizComponent.css'
import React from 'react'

function QuizComponent() {
  return (
    <div className='main'>
      <div className='content'>
        <h2 className='question-heading'>Question</h2>

        <p className='outOf'>1 of 15</p>
        <h3 className='question'>Which is the Only mammal can jump ?</h3>
        <div className='options'>
          <p className='option'>Dog</p>
          <p className='option'>Elelphant</p>
        </div>
        <div className='options'>
          <p className='option'>Goat</p>
          <p className='option'>Lion</p>
        </div>
        <div className='buttons'>
          <button className='previous'>Previous</button>
          <button className='next'>Next</button>
          <button className='quit'>Quit</button>
        </div>

      </div>

    </div>
  )
}

export default QuizComponent