import React, { useState, useEffect } from 'react'
import Layout from '../../Layout'
import Cards from '../Premieres/Cards'
import { apiSearch } from '../../api/axios'
import './style.css'
import { useHistory } from 'react-router-dom'
import Form from 'react-bootstrap/Form'

const Search = () => {
    const [data, setData] = useState([])
    const [query, setQuery] = useState('undefined');
    const endpoint = `search/movie?`;
    const history = useHistory();

    useEffect(() => {     
        history.push(`?=${query}`);
        apiSearch.get(endpoint, {
            params: {
                query: query
            }
        }).then(response => setData(response.data.results))
    }, [endpoint, query, history]);

    return(
        <div className="search-container">
            <Layout>
                <h2 className="search-title">Busca tu Pelicula</h2>
                <Form>
                    <Form.Group className="form-container">
                        <Form.Control className="input"
                        type="text"
                        placeholder=""
                        onChange={e => setQuery(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            {(query.length > 0) ? <Cards source={data} /> : setQuery('undefined')}
            </Layout>
        </div>
    )
}

export default Search
