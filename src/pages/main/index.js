import React, { Component } from 'react'
import api from '../../services/api';

export class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            currentPage: 1,
            quantityPerPage: 3,
            searchCharacters: '',
            loadSearchCharcter: [],
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
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

    handleChange(e) {
        this.setState({
            searchCharacters: e.target.value
        });
    }

    handleSubmit(e) {
        const str = this.state.searchCharacters.split(', ')
        this.renderSearch(str)
        e.preventDefault()
    }

    renderSearch = (str) => {
        const { characters } = this.state
        const arr = [];
        let i = 0;
        str.map(string => characters.map((character, index) => {
            if (character.name.search(string) === 0) {
                i = i + 1;
                return arr.push(character)
            }
            return arr
        })
        )
        this.setState({
            loadSearchCharcter: arr
        })
    }


    render() {
        const { characters, currentPage, quantityPerPage, loadSearchCharcter } = this.state
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
            return <li key={index}>{character.name}</li>
        })

        //renderizando paginação 
        const renderPage = pageNumber.map(number => {
            return <li id={number} key={number} onClick={this.handleClick}>{number}</li>
        })

        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type='text'
                            onChange={this.handleChange}
                            value={this.state.searchCharacters}
                            placeholder='Procure os personagens' />
                        <input type='submit' value='Enviar' />
                    </form>
                    <ul>
                        {
                            loadSearchCharcter.map(
                                (character, index) => <li key={index}>{character.name}</li>
                            )
                        }
                    </ul>
                </div>

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
