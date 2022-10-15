import React from 'react'

const Paginate = ({ postPerPage, totalPost, paginates }) => {
    const pageNumber = []
    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <>
            <nav className='paginateNav'>
                <ul>
                    {pageNumber.map(numbers => (
                    <li key={numbers}>
                        <a onClick={() => paginates(numbers)} href="#">
                            {numbers}
                            </a>
                        </li>
                        ))}
                </ul>
            </nav>
        </>

    )
}

export default Paginate