import React from 'react'
import * as S from './styled'
const Banner = ({titulo}) => {
    return (
        <S.Banner img="../../images/social-media-3758364.jpg">
            <div className="container">
               {titulo ? titulo : "adicione um titulo! "} 
                    <a href="./cobertura.html" className="link-cobertura" title="Clique aqui e confira nossa cobertura">cobertura</a> .<br />
                
            </div>
        </S.Banner>
    )
}

export default Banner