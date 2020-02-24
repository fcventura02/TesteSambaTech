import React, { Component } from 'react'
import api from '../../services/api';
import renderSearch from './search'
import RenderCurrentAll from './Characters'
import Paginacao from './Paginacao'
import searchIcon from '../../img/icons/icons8-pesquisar-50.png'
import './styles.css'

export class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            currentPage: 1,
            quantityPerPage: 8,
            searchCharacters: '',
            saveCharacters: []
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
        this.setState({
            characters: response.data,
            saveCharacters: response.data
        });
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
        const { saveCharacters, searchCharacters } = this.state
        //Separando palavras para pesquisa
        const str = searchCharacters.split(',').map(word => word.trim())
        const arr = renderSearch(str, saveCharacters)
        //descrição de pesquisa de personagens
        if (str != "") {
            document.querySelector('.title').style.display = 'none'
            document.querySelector('.busca').style.display = 'block'
        }else{
            document.querySelector('.title').style.display = 'block'
            document.querySelector('.busca').style.display = 'none'
        }
        this.setState({
            characters: arr
        })
        e.preventDefault()
    }

    //renderiza pesquisa
    subTitle = (searchCharacters) => {
        if (searchCharacters.length > 1)
            return searchCharacters
        return searchCharacters
    }

    render() {
        const { characters, currentPage, quantityPerPage, searchCharacters } = this.state
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type='text'
                            onChange={this.handleChange}
                            value={searchCharacters}
                            placeholder='Procure os personagens' />
                        <input
                            className='btn'
                            type="image" src={searchIcon} alt="Submit"
                        ></input>
                    </div>
                </form>

                <div className="lista">
                    <h1 className='title'>Personagens</h1>
                    <h1 className='busca hide'>Você pesquisou por "{
                        this.subTitle(searchCharacters)
                    }"</h1>
                    <RenderCurrentAll
                        currentPage={currentPage}
                        quantityPerPage={quantityPerPage}
                        characters={characters}
                    />
                </div>
                <div className="pag">

                    <Paginacao
                        quantityPerPage={quantityPerPage}
                        characters={characters}
                        currentPage={currentPage}
                        handleClick={this.handleClick}
                    />

                </div>

            </>
        )
    }
}

export default index
