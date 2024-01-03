import React from 'react'
import './ResultComponent.css'

function ResultComponent() {
    return (
        <div className='result'>
            <h2 className='result-heading'>Result</h2>
            <div className='result-content'>
                <h3 className='practice'>You Need more Practice</h3>
                <h3 className='yourScore'>Your Score is 20%</h3>
                <div className="flex">
                    <div className="details">
                        <h5>Totol number of quesions</h5>
                        <h5>Number of attempted questions</h5>
                        <h5>Number of correct answers</h5>
                        <h5>Number of wrong answers</h5>
                    </div>
                    <div className="number">
                        <h5>15</h5>
                        <h5>9</h5>
                        <h5>3</h5>
                        <h5>6</h5>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <button className="play">Play Again</button>
                <button className="home">Back to home</button>
            </div>
        </div>
    )
}

export default ResultComponent