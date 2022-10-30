import React from 'react'

const styleFromName = (name: string) => {
  const colors = [{
    color: 'rgb(91 91 255)',
    backgroundColor: '#f0f8ff'
  },
  {
    color: 'rgb(65 138 22)',
    backgroundColor: '#f0fff1'
  },{
    color: 'rgb(174 70 70)',
    backgroundColor: '#fff6f0'
  },{
    color: '#535353',
    backgroundColor: '#f0f0f0'
  }]
  return colors[name.length % colors.length]
}

export const OrgName = ({ name, onClick, styles }: { name: string, onClick: () => void, styles?: object }) => (<div
    style={{
      height: 250,
      width: '100%',
      cursor: 'pointer',
      fontSize: 100,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      ...styleFromName(name),
      textAlign: 'center',
      ...styles
    }}
    onClick={onClick}
  >
    {name.split(' ').map(a => a.substring(0, 1).toUpperCase()).filter((_, i) => i < 2).join('')}
  </div>
)