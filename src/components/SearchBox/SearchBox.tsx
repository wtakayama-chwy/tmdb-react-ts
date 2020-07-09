import React, { FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { SearchContainer } from './styles';
import { useState } from 'react';
import { ChangeEvent } from 'react';

const SearchBox: React.FC = () => {

    const [query, setQuery] = useState<string>('')
    const history = useHistory()

    const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        history.push(`/search/${query}`)
    }

    return (
        <SearchContainer>
            <div className="img-wrapper">
                <h1>Bem-vindo</h1>
                <h2>Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.</h2>

                <form
                    className="search-bar"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        name="name"
                        onChange={handleInputValue}
                        placeholder="Procurando por qual filme?"
                        required
                    />
                    <button type="submit">Buscar</button>
                </form>
            </div>
        </SearchContainer>
    );
}

export default SearchBox;