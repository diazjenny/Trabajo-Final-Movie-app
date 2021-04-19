import React, { useState, useEffect } from 'react'
import Layout from '../../Layout'
import Cards from '../Premieres/Cards'
import { api } from '../../api/axios'
import './style.css'
import { useHistory } from 'react-router-dom'
import ReactPaginate from 'react-paginate'

const Popular = () => {
    const [playing, setPlaying] = useState([])
    const history = useHistory() 
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState([])
    const endpoint = `/popular/?page=${page}`;

    useEffect(() => {
        api.get(endpoint, {params: {
            page: page
        }}).then(response => {
            setPlaying(response.data.results)
            setTotalPages(response.data.total_pages)
        })
        history.push(endpoint);

        }, [page, endpoint, history])
    return(
        <Layout>
            <h2 className="popular-title">Peliculas Populares</h2>
            <Cards source={playing}/>
            
            <div className="pagination-container">
                {<ReactPaginate
                    previousLabel="Previous"
                    nextLabel="Next"
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={totalPages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={(actualPage) => {
                        history.push(`${endpoint}${actualPage.selected + 1}`)
                        setPage(actualPage.selected + 1)
                    }}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    breakLinkClassName="pagination-link"
                    pageLinkClassName="pagination-link"
                    activeLinkClassName="pagination-link"
                    nextLinkClassName="pagination-link"
                    previousLinkClassName="pagination-link"
                />}
            </div>
        </Layout>
    )
}

export default Popular
