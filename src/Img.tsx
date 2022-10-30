import React, { useEffect, useState } from 'react'

export const Img = ({ src, styles, onClick = () => {} }: { src: string, styles: any, onClick?: any }) => {
  const [image, setImage] = useState<string>()
  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      setImage(src)
    }
  }, [])
  return <div style={{ backgroundColor: 'rgb(242, 242, 242)', ...styles }}>{image && <img onClick={onClick} className='fadeIn' src={image} style={{ backgroundColor: 'rgb(240,240,240)', ...styles }} />}</div>
}
