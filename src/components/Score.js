import React from 'react'
import PropTypes from 'prop-types'

const Score = ({ score = 0 }) => (
  <div>
    <strong>{`Score: ${score}`}</strong>
  </div>
)

Score.displayName = 'Score'
Score.propTypes = {
  score: PropTypes.number,
}

export default Score
