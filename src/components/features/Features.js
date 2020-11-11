import React from 'react'
import FeatureItem from './Item/FeatureItem'

import * as S from './styled'
const Features = ({header}) => {
    return (
        <section id="features">
            <div className="container">
                <header>
                    <h2>{header ? header : 'Conheça nossos planos e seja voçê tambem'}  <strong>Ubinet</strong>!</h2>
                </header>
                <div className="row aln-center">
                    <FeatureItem img="images/banner1.jpg"/>
                    <FeatureItem />
                    <FeatureItem img="images/banner2.jpg"/>
                    <div className="col-12">
                        <ul className="actions">
                            <li><S.CustomButton>Saiba Mais <S.IconNext /></S.CustomButton></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features