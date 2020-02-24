import React, { Component } from 'react'

export class Paginacao extends Component {
    paginate = (quantityPerPage, characters) =>{
        const pageNumber = [];
        for (let i = 1; i <= Math.ceil(characters.length / quantityPerPage); i++)
            pageNumber.push(i)

       
        return pageNumber;
    }
    render() {
        const {quantityPerPage, characters, handleClick} = this.props
        const renderPage = this.paginate(quantityPerPage, characters)

        //renderizando paginação 
        
        return (
            <>
                {
                    renderPage.map(number => {
                        let active = 'none'
                        if(this.props.currentPage === number)
                            active = 'active'
                        return <a className={active} href='#void' id={number} key={number} onClick={handleClick}>{number}</a>
                    })
                }
            </>
        )
    }
}

export default Paginacao
