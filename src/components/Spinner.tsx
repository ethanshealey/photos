import React from 'react'

type SpinnerType = {
    width?: string
}

const Spinner = ({ width }: SpinnerType) => {
  return (
    <div className="dot-spinner" style={{ width: width ? width : '5em', height: width ? width : '5em' }}>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
    </div>
  )
}

export default Spinner