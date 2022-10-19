import React from 'react'

const Paginate = ({ postPerPage, totalPost, paginates, prevPage, nextPage }) => {
    const pageNumber = []
    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <>
            <nav className='paginateNav'>
                <ul>
                    <li> <a onClick={() => prevPage()} href="#"> Prev </a>  </li>
                    {pageNumber.map(numbers => (
                    <li key={numbers}>
                        <a onClick={() => paginates(numbers)} href="#">
                            {numbers}
                            </a>
                        </li>
                        
                        ))}
           <li> <a onClick={() => nextPage()} href="#"> Next </a>  </li>
                </ul>
            </nav>
        </>

    )
}

export default Paginate