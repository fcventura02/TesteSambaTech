import React, { Component } from 'react'

export class Characters extends Component {
    currentAll = (currentPage, quantityPerPage, characters) => {
        const indexOfLastAll = currentPage * quantityPerPage;
        const indexOfFirstAll = indexOfLastAll - quantityPerPage;
        const currentAll = characters.slice(indexOfFirstAll, indexOfLastAll);
        return currentAll
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
                                <img src={character.img} alt={character.name} />
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
                    }
                </div>
            </>
        )
    }
}

export default Characters
