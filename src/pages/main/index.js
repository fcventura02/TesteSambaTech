import React, { Component } from 'react'
import api from '../../services/api';
import renderSearch from './search'
import searchIcon from '../../img/icons/icons8-pesquisar-50.png'
import './styles.css'

export class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [{
                "char_id": 1,
                "name": "Walter White",
                "birthday": "09-07-1958",
                "occupation": [
                    "High School Chemistry Teacher",
                    "Meth King Pin"
                ],
                "img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
                "status": "Presumed dead",
                "nickname": "Heisenberg",
                "appearance": [
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                "portrayed": "Bryan Cranston",
                "category": "Breaking Bad",
                "better_call_saul_appearance": [

                ]
            },
            {
                "char_id": 2,
                "name": "Jesse Pinkman",
                "birthday": "09-24-1984",
                "occupation": [
                    "Meth Dealer"
                ],
                "img": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jesse_Pinkman2.jpg/220px-Jesse_Pinkman2.jpg",
                "status": "Alive",
                "nickname": "Cap n' Cook",
                "appearance": [
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                "portrayed": "Aaron Paul",
                "category": "Breaking Bad",
                "better_call_saul_appearance": [

                ]
            },
            {
                "char_id": 3,
                "name": "Skyler White",
                "birthday": "08-11-1970",
                "occupation": [
                    "House wife",
                    "Book Keeper",
                    "Car Wash Manager",
                    "Taxi Dispatcher"
                ],
                "img": "https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg",
                "status": "Alive",
                "nickname": "Sky",
                "appearance": [
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                "portrayed": "Anna Gunn",
                "category": "Breaking Bad",
                "better_call_saul_appearance": [

                ]
            },
            {
                "char_id": 4,
                "name": "Walter White Jr.",
                "birthday": "07-08-1993",
                "occupation": [
                    "Teenager"
                ],
                "img": "https://media1.popsugar-assets.com/files/thumbor/WeLUSvbAMS_GL4iELYAUzu7Bpv0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/fb758e62b5daf3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg",
                "status": "Alive",
                "nickname": "Flynn",
                "appearance": [
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                "portrayed": "RJ Mitte",
                "category": "Breaking Bad",
                "better_call_saul_appearance": [

                ]
            },
            {
                "char_id": 5,
                "name": "Henry Schrader",
                "birthday": "Unknown",
                "occupation": [
                    "DEA Agent"
                ],
                "img": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Hank_Schrader2.jpg/220px-Hank_Schrader2.jpg",
                "status": "Deceased",
                "nickname": "Hank",
                "appearance": [
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                "portrayed": "Dean Norris",
                "category": "Breaking Bad",
                "better_call_saul_appearance": [

                ]
            },
            {
                "char_id": 6,
                "name": "Marie Schrader",
                "birthday": "Unknown",
                "occupation": [
                    "Housewife",
                    "Clepto"
                ],
                "img": "https://vignette.wikia.nocookie.net/breakingbad/images/1/10/Season_2_-_Marie.jpg/revision/latest?cb=20120617211645",
                "status": "Alive",
                "nickname": "Marie",
                "appearance": [
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                "portrayed": "Betsy Brandt",
                "category": "Breaking Bad",
                "better_call_saul_appearance": [

                ]
            },
            {
                "char_id": 7,
                "name": "Mike Ehrmantraut",
                "birthday": "Unknown",
                "occupation": [
                    "Hitman",
                    "Private Investigator",
                    "Ex-Cop"
                ],
                "img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_mike-ehrmantraut-lg.jpg",
                "status": "Deceased",
                "nickname": "Mike",
                "appearance": [
                    2,
                    3,
                    4,
                    5
                ],
                "portrayed": "Jonathan Banks",
                "category": "Breaking Bad, Better Call Saul",
                "better_call_saul_appearance": [
                    1,
                    2,
                    3,
                    4
                ]
            },
            {
                "char_id": 8,
                "name": "Saul Goodman",
                "birthday": "Unknown",
                "occupation": [
                    "Lawyer"
                ],
                "img": "https://vignette.wikia.nocookie.net/breakingbad/images/1/16/Saul_Goodman.jpg/revision/latest?cb=20120704065846",
                "status": "Alive",
                "nickname": "Jimmy McGill",
                "appearance": [
                    2,
                    3,
                    4,
                    5
                ],
                "portrayed": "Bob Odenkirk",
                "category": "Breaking Bad, Better Call Saul",
                "better_call_saul_appearance": [
                    1,
                    2,
                    3,
                    4
                ]
            },
            {
                "char_id": 9,
                "name": "Gustavo Fring",
                "birthday": "Unknown",
                "occupation": [
                    "Los-Pollos co-Founder",
                    "Philanthropist",
                    "Cartel Leader"
                ],
                "img": "https://vignette.wikia.nocookie.net/breakingbad/images/1/1f/BCS_S4_Gustavo_Fring.jpg/revision/latest?cb=20180824195925",
                "status": "Deceased",
                "nickname": "Gus",
                "appearance": [
                    2,
                    3,
                    4
                ],
                "portrayed": "Giancarlo Esposito",
                "category": "Breaking Bad, Better Call Saul",
                "better_call_saul_appearance": [
                    3,
                    4
                ]
            },
            {
                "char_id": 10,
                "name": "Hector Salamanca",
                "birthday": "Unknown",
                "occupation": [
                    "Former Senior Cartel Leader"
                ],
                "img": "https://vignette.wikia.nocookie.net/breakingbad/images/b/b4/Hector_BCS.jpg/revision/latest?cb=20170810091606",
                "status": "Deceased",
                "nickname": "Don Hector",
                "appearance": [
                    1,
                    2,
                    3,
                    4
                ],
                "portrayed": "Mark Margolis",
                "category": "Breaking Bad, Better Call Saul",
                "better_call_saul_appearance": [
                    2,
                    3,
                    4
                ]
            },
            {
                "char_id": 11,
                "name": "Domingo Molina",
                "birthday": "Unknown",
                "occupation": [
                    "Meth Distributor"
                ],
                "img": "https://vignette.wikia.nocookie.net/breakingbad/images/e/e7/Krazy8.png/revision/latest?cb=20130208041554",
                "status": "Deceased",
                "nickname": "Krazy-8",
                "appearance": [
                    1
                ],
                "portrayed": "Maximino Arciniega",
                "category": "Breaking Bad",
                "better_call_saul_appearance": [

                ]
            },
            {
                "char_id": 12,
                "name": "Tuco Salamanca",
                "birthday": "Unknown",
                "occupation": [
                    "Meth Distributor"
                ],
                "img": "https://vignette.wikia.nocookie.net/breakingbad/images/a/a7/Tuco_BCS.jpg/revision/latest?cb=20170810082445",
                "status": "Deceased",
                "nickname": "Tuco",
                "appearance": [
                    1,
                    2
                ],
                "portrayed": "Raymond Cruz",
                "category": "Breaking Bad, Better Call Saul",
                "better_call_saul_appearance": [
                    1,
                    2
                ]
            },
            {
                "char_id": 13,
                "name": "Marco & Leonel Salamanca",
                "birthday": "Unknown",
                "occupation": [
                    "Cartel Hitman"
                ],
                "img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_the-cousins-lg.jpg",
                "status": "Deceased",
                "nickname": "The Cousins",
                "appearance": [
                    3
                ],
                "portrayed": "Luis & Daniel Moncada",
                "category": "Breaking Bad",
                "better_call_saul_appearance": [

                ]
            },
            {
                "char_id": 14,
                "name": "Lydia Rodarte-Quayle",
                "birthday": "Unknown",
                "occupation": [
                    "Executive at Madrigal"
                ],
                "img": "https://media1.popsugar-assets.com/files/thumbor/wERDST0TUb-iHCSb2r5ZpsvaZLo/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2013/07/17/675/n/1922283/fae2f583f04bb80f_Laura-Fraser-is-back-as-Lydia-Rodarte-Quayle_gallery_primary/i/Laura-Fraser-Lydia-Rodarte-Quayle.jpg",
                "status": "Alive",
                "nickname": "Lydia",
                "appearance": [
                    5
                ],
                "portrayed": "Laura Fraser",
                "category": "Breaking Bad",
                "better_call_saul_appearance": [

                ]
            },
            {
                "char_id": 15,
                "name": "Todd Alquist",
                "birthday": "Unknown",
                "occupation": [
                    "Lab Assistant",
                    "Enforcer",
                    "Math Cook"
                ],
                "img": "https://vignette.wikia.nocookie.net/breakingbad/images/9/95/Todd_brba5b.png/revision/latest?cb=20130717134303",
                "status": "Deceased",
                "nickname": "Ricky Hitler",
                "appearance": [
                    5
                ],
                "portrayed": "Jesse Plemons",
                "category": "Breaking Bad",
                "better_call_saul_appearance": [

                ]
            },
            {
                "char_id": 16,
                "name": "Jane Margolis",
                "birthday": "Unknown",
                "occupation": [
                    "Tattoo Artist",
                    "Landlord"
                ],
                "img": "https://vignette.wikia.nocookie.net/breakingbad/images/b/b4/Jane.jpg/revision/latest?cb=20090621233653",
                "status": "Deceased",
                "nickname": "Apology Girl",
                "appearance": [
                    2
                ],
                "portrayed": "Krysten Ritter",
                "category": "Breaking Bad",
                "better_call_saul_appearance": [

                ]
            },
            {
                "char_id": 17,
                "name": "Skinny Pete",
                "birthday": "Unknown",
                "occupation": [
                    "Low-level meth distributer"
                ],
                "img": "https://vignette.wikia.nocookie.net/breaking-bad-tv/images/c/ce/Sp.png/revision/latest?cb=20121016143623",
                "status": "Alive",
                "nickname": "Skinny",
                "appearance": [
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                "portrayed": "Charles Baker",
                "category": "Breaking Bad",
                "better_call_saul_appearance": [

                ]
            }],
            currentPage: 1,
            quantityPerPage: 8,
            searchCharacters: '',
            saveCharacters: [{
                "char_id": 1,
                "name": "Walter White",
                "birthday": "09-07-1958",
                "occupation": [
                    "High School Chemistry Teacher",
                    "Meth King Pin"
                ],
                "img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
                "status": "Presumed dead",
                "nickname": "Heisenberg",
                "appearance": [
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                "portrayed": "Bryan Cranston",
                "category": "Breaking Bad",
                "better_call_saul_appearance": [

                ]
            },
            {
                "char_id": 2,
                "name": "Jesse Pinkman",
                "birthday": "09-24-1984",
                "occupation": [
                    "Meth Dealer"
                ],
                "img": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jesse_Pinkman2.jpg/220px-Jesse_Pinkman2.jpg",
                "status": "Alive",
                "nickname": "Cap n' Cook",
                "appearance": [
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                "portrayed": "Aaron Paul",
                "category": "Breaking Bad",
                "better_call_saul_appearance": [

                ]
            },
            {
                "char_id": 3,
                "name": "Skyler White",
                "birthday": "08-11-1970",
                "occupation": [
                    "House wife",
                    "Book Keeper",
                    "Car Wash Manager",
                    "Taxi Dispatcher"
                ],
                "img": "https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg",
                "status": "Alive",
                "nickname": "Sky",
                "appearance": [
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                "portrayed": "Anna Gunn",
                "category": "Breaking Bad",
                "better_call_saul_appearance": [

                ]
            },
            {
                "char_id": 4,
                "name": "Walter White Jr.",
                "birthday": "07-08-1993",
                "occupation": [
                    "Teenager"
                ],
                "img": "https://media1.popsugar-assets.com/files/thumbor/WeLUSvbAMS_GL4iELYAUzu7Bpv0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/fb758e62b5daf3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg",
                "status": "Alive",
                "nickname": "Flynn",
                "appearance": [
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                "portrayed": "RJ Mitte",
                "category": "Breaking Bad",
                "better_call_saul_appearance": [

                ]
            },
            {
                "char_id": 5,
                "name": "Henry Schrader",
                "birthday": "Unknown",
                "occupation": [
                    "DEA Agent"
                ],
                "img": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Hank_Schrader2.jpg/220px-Hank_Schrader2.jpg",
                "status": "Deceased",
                "nickname": "Hank",
                "appearance": [
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                "portrayed": "Dean Norris",
                "category": "Breaking Bad",
                "better_call_saul_appearance": [

                ]
            },
            {
                "char_id": 6,
                "name": "Marie Schrader",
                "birthday": "Unknown",
                "occupation": [
                    "Housewife",
                    "Clepto"
                ],
                "img": "https://vignette.wikia.nocookie.net/breakingbad/images/1/10/Season_2_-_Marie.jpg/revision/latest?cb=20120617211645",
                "status": "Alive",
                "nickname": "Marie",
                "appearance": [
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                "portrayed": "Betsy Brandt",
                "category": "Breaking Bad",
                "better_call_saul_appearance": [

                ]
            },
            {
                "char_id": 7,
                "name": "Mike Ehrmantraut",
                "birthday": "Unknown",
                "occupation": [
                    "Hitman",
                    "Private Investigator",
                    "Ex-Cop"
                ],
                "img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_mike-ehrmantraut-lg.jpg",
                "status": "Deceased",
                "nickname": "Mike",
                "appearance": [
                    2,
                    3,
                    4,
                    5
                ],
                "portrayed": "Jonathan Banks",
                "category": "Breaking Bad, Better Call Saul",
                "better_call_saul_appearance": [
                    1,
                    2,
                    3,
                    4
                ]
            },
            {
                "char_id": 8,
                "name": "Saul Goodman",
                "birthday": "Unknown",
                "occupation": [
                    "Lawyer"
                ],
                "img": "https://vignette.wikia.nocookie.net/breakingbad/images/1/16/Saul_Goodman.jpg/revision/latest?cb=20120704065846",
                "status": "Alive",
                "nickname": "Jimmy McGill",
                "appearance": [
                    2,
                    3,
                    4,
                    5
                ],
                "portrayed": "Bob Odenkirk",
                "category": "Breaking Bad, Better Call Saul",
                "better_call_saul_appearance": [
                    1,
                    2,
                    3,
                    4
                ]
            },
            {
                "char_id": 9,
                "name": "Gustavo Fring",
                "birthday": "Unknown",
                "occupation": [
                    "Los-Pollos co-Founder",
                    "Philanthropist",
                    "Cartel Leader"
                ],
                "img": "https://vignette.wikia.nocookie.net/breakingbad/images/1/1f/BCS_S4_Gustavo_Fring.jpg/revision/latest?cb=20180824195925",
                "status": "Deceased",
                "nickname": "Gus",
                "appearance": [
                    2,
                    3,
                    4
                ],
                "portrayed": "Giancarlo Esposito",
                "category": "Breaking Bad, Better Call Saul",
                "better_call_saul_appearance": [
                    3,
                    4
                ]
            },
            {
                "char_id": 10,
                "name": "Hector Salamanca",
                "birthday": "Unknown",
                "occupation": [
                    "Former Senior Cartel Leader"
                ],
                "img": "https://vignette.wikia.nocookie.net/breakingbad/images/b/b4/Hector_BCS.jpg/revision/latest?cb=20170810091606",
                "status": "Deceased",
                "nickname": "Don Hector",
                "appearance": [
                    1,
                    2,
                    3,
                    4
                ],
                "portrayed": "Mark Margolis",
                "category": "Breaking Bad, Better Call Saul",
                "better_call_saul_appearance": [
                    2,
                    3,
                    4
                ]
            },
            {
                "char_id": 11,
                "name": "Domingo Molina",
                "birthday": "Unknown",
                "occupation": [
                    "Meth Distributor"
                ],
                "img": "https://vignette.wikia.nocookie.net/breakingbad/images/e/e7/Krazy8.png/revision/latest?cb=20130208041554",
                "status": "Deceased",
                "nickname": "Krazy-8",
                "appearance": [
                    1
                ],
                "portrayed": "Maximino Arciniega",
                "category": "Breaking Bad",
                "better_call_saul_appearance": [

                ]
            },
            {
                "char_id": 12,
                "name": "Tuco Salamanca",
                "birthday": "Unknown",
                "occupation": [
                    "Meth Distributor"
                ],
                "img": "https://vignette.wikia.nocookie.net/breakingbad/images/a/a7/Tuco_BCS.jpg/revision/latest?cb=20170810082445",
                "status": "Deceased",
                "nickname": "Tuco",
                "appearance": [
                    1,
                    2
                ],
                "portrayed": "Raymond Cruz",
                "category": "Breaking Bad, Better Call Saul",
                "better_call_saul_appearance": [
                    1,
                    2
                ]
            },
            {
                "char_id": 13,
                "name": "Marco & Leonel Salamanca",
                "birthday": "Unknown",
                "occupation": [
                    "Cartel Hitman"
                ],
                "img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_the-cousins-lg.jpg",
                "status": "Deceased",
                "nickname": "The Cousins",
                "appearance": [
                    3
                ],
                "portrayed": "Luis & Daniel Moncada",
                "category": "Breaking Bad",
                "better_call_saul_appearance": [

                ]
            },
            {
                "char_id": 14,
                "name": "Lydia Rodarte-Quayle",
                "birthday": "Unknown",
                "occupation": [
                    "Executive at Madrigal"
                ],
                "img": "https://media1.popsugar-assets.com/files/thumbor/wERDST0TUb-iHCSb2r5ZpsvaZLo/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2013/07/17/675/n/1922283/fae2f583f04bb80f_Laura-Fraser-is-back-as-Lydia-Rodarte-Quayle_gallery_primary/i/Laura-Fraser-Lydia-Rodarte-Quayle.jpg",
                "status": "Alive",
                "nickname": "Lydia",
                "appearance": [
                    5
                ],
                "portrayed": "Laura Fraser",
                "category": "Breaking Bad",
                "better_call_saul_appearance": [

                ]
            },
            {
                "char_id": 15,
                "name": "Todd Alquist",
                "birthday": "Unknown",
                "occupation": [
                    "Lab Assistant",
                    "Enforcer",
                    "Math Cook"
                ],
                "img": "https://vignette.wikia.nocookie.net/breakingbad/images/9/95/Todd_brba5b.png/revision/latest?cb=20130717134303",
                "status": "Deceased",
                "nickname": "Ricky Hitler",
                "appearance": [
                    5
                ],
                "portrayed": "Jesse Plemons",
                "category": "Breaking Bad",
                "better_call_saul_appearance": [

                ]
            },
            {
                "char_id": 16,
                "name": "Jane Margolis",
                "birthday": "Unknown",
                "occupation": [
                    "Tattoo Artist",
                    "Landlord"
                ],
                "img": "https://vignette.wikia.nocookie.net/breakingbad/images/b/b4/Jane.jpg/revision/latest?cb=20090621233653",
                "status": "Deceased",
                "nickname": "Apology Girl",
                "appearance": [
                    2
                ],
                "portrayed": "Krysten Ritter",
                "category": "Breaking Bad",
                "better_call_saul_appearance": [

                ]
            },
            {
                "char_id": 17,
                "name": "Skinny Pete",
                "birthday": "Unknown",
                "occupation": [
                    "Low-level meth distributer"
                ],
                "img": "https://vignette.wikia.nocookie.net/breaking-bad-tv/images/c/ce/Sp.png/revision/latest?cb=20121016143623",
                "status": "Alive",
                "nickname": "Skinny",
                "appearance": [
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                "portrayed": "Charles Baker",
                "category": "Breaking Bad",
                "better_call_saul_appearance": [

                ]
            }],
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    /*
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
    
    */
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
        const str = searchCharacters.split(',').map(word => word.trim())
        const arr = renderSearch(str, saveCharacters)
        this.setState({
            characters: arr
        })
        e.preventDefault()
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
        const currentAll = characters.slice(indexOfFirstAll, indexOfLastAll);

        //Renderiza todos os personagens da página
        const renderCurrentAll = currentAll.map((character, index) => {
            let status = 'Vivo'
            let backgroundColor = '#009933'
            if (character.status === 'Deceased' || character.status === 'Presumed dead') {
                status = 'Morto'
                backgroundColor = '#ff8c1a'
            }
            else {
                status = 'Vivo'
                backgroundColor = '#009933'
            }
            return <div className='perfil' key={index}>
                <img src={character.img} />
                <div className='descricao'>
                    <h2>{character.name}</h2>
                    <p>{character.birthday}</p>
                    <p>{character.occupation}</p>
                </div>
                <div className='status' style={{ background: backgroundColor }} id={index}>
                    <p>{status}</p>
                </div>
            </div>
        })



        //renderizando paginação 
        const renderPage = pageNumber.map(number => {
            return <a href='#void' id={number} key={number} onClick={this.handleClick}>{number}</a>
        })

        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type='text'
                            onChange={this.handleChange}
                            value={this.state.searchCharacters}
                            placeholder='Procure os personagens' />
                        <input
                            className='btn'
                            type="image" src={searchIcon} alt="Submit"
                        ></input>
                    </div>
                </form>

                <div className="lista">
                    <h1>Personagens</h1>
                    <div className="personagens">
                        {renderCurrentAll}
                    </div>
                    <div className="pag">

                        {renderPage}

                    </div>
                </div>
            </>
        )
    }
}

export default index
