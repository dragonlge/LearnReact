import React, { useEffect, useState } from 'react'
import './index.css'

const CirclePie = (props) => {
  const [offset, setOffset] = useState(0)

  const {
    size,
    progressArray,
    strokeWidth,
    circleOneStroke,
    circleTwoStroke,
    progress,
  } = props
  const center = size / 2
  const radius = size / 2 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    const progressOffset1 = progressArray[1] / progressArray[0]
    console.log(progressOffset1)
    const progressOffset = ((100 - progress) / 100) * circumference

    console.log(progressOffset)
    setOffset(progressOffset)
  }, [setOffset, circumference, offset, progress])

  return (
    <>
      <svg className='svg' width={size} height={size}>
        <circle
          className='svg-circle-bg'
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className='svg-circle'
          stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform='rotate(-90,60,60)'
        />
        <text x={`${center}`} y={`${center}`} className='svg-circle-text'>
          {progressArray[0]}%
        </text>
      </svg>
    </>
  )
}

export { CirclePie }
