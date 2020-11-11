import Styled from 'styled-components'

export const Banner = Styled.section`
        position: relative;
        overflow: hidden;
        background: #fff;
        color: #fff;
        text-align: center;
        border-top: solid 2px #e5e5e5;
        border-bottom: solid 2px #e5e5e5;
        box-shadow: inset 0px -8px 0px 0px #fff, inset 0px 8px 0px 0px #fff;
        position: relative;
        text-transform: uppercase;
        background: url(${props => props.img ? props.img : '../../images/banner.jpg'});
        background-size: cover;
        padding: 10em 0;
`