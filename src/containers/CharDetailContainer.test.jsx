import React from 'react';
import { render, screen } from '@testing-library/react';
import CharDetailContainer from './CharDetailContainer';
import { MemoryRouter } from 'react-router-dom';


describe('CharDetailContainer', () => {
    it('renders a single character', () => {
        render(
        <MemoryRouter>    
            <CharDetailContainer match={{ params: {id: '1',},}} />
        </MemoryRouter>
        );

        const test = screen.getByTestId("testing-div")

        expect(test).toMatchSnapshot();
    });
})