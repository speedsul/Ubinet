import React from 'react'

const Header = () => {
    return (
        

            <section id="header">
                <div className="container">

            
                        <h1 id="logo"><a href="/teste">Ubinet Provedor</a></h1>
                        <p>aqui nos conectamos.</p>

            
                        <nav id="nav">
                            <ul>
                                <li><a className="icon solid fa-home" href="/teste"><span>Home</span></a></li>
                                <li>
                                    <a href="/teste" className="icon fa-chart-bar"><span>Empresa</span></a>
                                    <ul>
                                        <li><a href="/teste">Produtos</a></li>
                                        <li><a href="/teste">Serviços</a></li>
                                        <li><a href="/teste">Sobre</a></li>
                                        <li>
                                            <a href="/teste">Tecnologia</a>
                                            <ul>
                                                <li><a href="/teste">Via Rádio</a></li>
                                                <li><a href="/teste">Fibra Optica</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/teste">Contato</a></li>
                                    </ul>
                                </li>
                                <li><a className="icon solid fa-cog" href="left-sidebar.html"><span>Cobertura</span></a></li>
                                <li><a className="icon solid fa-retweet" href="right-sidebar.html"><span>Planos</span></a></li>
                                <li><a className="icon solid fa-sitemap" href="no-sidebar.html"><span>Contato</span></a></li>
                            </ul>
                        </nav>

                </div>
            </section>
    )
}

export default Header