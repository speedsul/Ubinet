import React from 'react'
const FeatureItem = ({ link, img, img_desc, header, description }) => {
    return (
        <div className="col-4 col-6-medium col-12-small">
            <section>
                <a href={link ? link : "/teste"} className="image featured"><img src={img ? img : "images/banner3.jpg"} alt={img_desc ? img_desc : "Sem Titulo"} /></a>
                <header>
                    <h3>{header ? header : "Adicione um título"}</h3>
                </header>
                <p>{description ? description : "Adicione uma descrição"}
                    <a href={link ? link : "/teste"} alt="clique aqui"> Saiba mais</a>.</p>
            </section>
        </div>
    )
}
export default FeatureItem