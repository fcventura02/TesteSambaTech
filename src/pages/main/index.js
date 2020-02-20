import React, { Component } from 'react'
import api from '../../services/api';

export class index extends Component {
    constructor() {
        super();
        this.state = {
            characters: [],
            currentPage: 1,
            quantityPerPage: 8,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.loadCharacters()
    }

    loadCharacters = async () => {
        const response = await api.get(`/characters`)
        this.setState({ characters: response.data });
    }


    //Função para mudar de pagina
    handleClick(e) {
        this.setState({
            currentPage: Number(e.target.id)
        })
        
    }


    render() {
        const { characters, currentPage, quantityPerPage } = this.state

        //paginando personagens
        const pageNumber = [];
        for (let i = 1; i <= Math.ceil(characters.length / quantityPerPage); i++)
            pageNumber.push(i)
        //Separando os personagens por paginas
        const indexOfLastAll = currentPage * quantityPerPage;
        const indexOfFirstAll = indexOfLastAll - quantityPerPage;
        const currentAll = characters.slice(indexOfFirstAll, indexOfLastAll)

        //Renderiza todos os personagens da página
        const renderCurrentAll = currentAll.map((character, index) => {
            return <li id={character.char_id} key={index}>{character.name}</li>
        })

        //renderizando paginação 
        const renderPage = pageNumber.map(number => {
            return <li id={number} key={number} onClick={this.handleClick}>{number}</li>
        })

        return (
            <div>
                <ul>
                    {renderCurrentAll}
                </ul>
                <ul id="page-numbers">
                    {renderPage}
                </ul>
            </div>
        )
    }
}

export default index
