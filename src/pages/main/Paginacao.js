import React, { Component } from 'react'

export class Paginacao extends Component {
    paginate = (quantityPerPage, characters) =>{
        const pageNumber = [];
        for (let i = 1; i <= Math.ceil(characters.length / quantityPerPage); i++)
            pageNumber.push(i)
        return pageNumber;
    }
    render() {
        const {quantityPerPage, characters} = this.props
        const renderPage = this.paginate(quantityPerPage, characters)

        //renderizando paginação 
        
        return (
            <>
                {
                    renderPage.map(number => {
                        return <a href='#void' id={number} key={number} onClick={this.handleClick}>{number}</a>
                    })
                }
            </>
        )
    }
}

export default Paginacao
