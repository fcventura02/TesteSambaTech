import React, { Component } from 'react'

export class Characters extends Component {
    currentAll = (currentPage, quantityPerPage, characters) => {
        const indexOfLastAll = currentPage * quantityPerPage;
        const indexOfFirstAll = indexOfLastAll - quantityPerPage;
        const currentAll = characters.slice(indexOfFirstAll, indexOfLastAll);
        return currentAll
    }

    vivoMorto = (character) => {
        let status = 'Vivo'
        let nasceu = 'block'
        let backgroundColor = '#009933'
        if (character.status === 'Deceased' || character.status === 'Presumed dead') {
            status = 'Morto'
            backgroundColor = '#ff8c1a'
        }
        else {
            status = 'Vivo'
            backgroundColor = '#009933'
        }

        if(character.birthday === 'Unknown')
            nasceu = 'none'
        return [status, backgroundColor, nasceu]
    }

    render() {
        const { currentPage, quantityPerPage, characters } = this.props
        //Renderiza todos os personagens da página
        const renderCurrentAll = this.currentAll(currentPage, quantityPerPage, characters)

        return (
            <>

                <div className="personagens">
                    {
                        renderCurrentAll.map((character, index) => {
                            let status = this.vivoMorto(character)
                            return <div className='perfil' key={index}>
                                <img src={character.img} alt={character.name} />
                                <div className='descricao'>
                                    <h2>{character.name}</h2>
                                    <p style={{ display: status[2] }}>{character.birthday}</p>
                                    <p>{character.occupation}</p>
                                </div>
                                <div className='status' style={{ background: status[1] }} id={index}>
                                    <p>{status[0]}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </>
        )
    }
}

export default Characters
