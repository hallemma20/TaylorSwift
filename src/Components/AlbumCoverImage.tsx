import React from 'react'
import '../Styles/AllPageStyles.css'

const AlbumCover: React.FC<any> = ({name, image}) => {
  return (
    <div>
      <div className="cover" style={{backgroundImage: `url(${image})`}}> </div>
    </div>
  )
}

export default AlbumCover

