import React, { useState, useEffect } from 'react'
import Layout from '../../Layout'
import Cards from './Cards'
import { api } from '../../api/axios'
import './style.css'
import { useHistory } from 'react-router-dom'
import ReactPaginate from 'react-paginate'


const Premieres = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [lastest, setLastest] = useState([])
    const [totalPages, setTotalPages] = useState([])
    
    useEffect(() => {
        api.get('/upcoming/', {params: {
            page: currentPage
            }
        })
            .then(response => {
            setLastest(response.data.results)
            setTotalPages(response.data.total_pages)
            })        
    }, [])
    
    const per_page = 20;
    const offset = currentPage * per_page;

    const currentPageData = lastest
    .slice(offset, offset + per_page);
    
    const pageCount = Math.ceil(lastest.length / per_page);
    
    function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
}

    return(
        <Layout>
            <h2 className="premiere-title">Ultimos Lanzamientos</h2>
            <Cards source={lastest} />
            <ReactPaginate
                previousLabel={"← Previous"}
                nextLabel={"Next →"}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={totalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                activeClassName={"pagination__link--active"}
                disabledClassName={"pagination__link--disabled"}
            />
        </Layout>
    )
}

export default Premieres

