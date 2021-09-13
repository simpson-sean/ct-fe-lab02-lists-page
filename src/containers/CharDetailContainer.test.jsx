import React from 'react';
import { render, screen } from '@testing-library/react';
import CharDetailContainer from './CharDetailContainer';


describe('CharDetailContainer', () => {
    it('renders a single character', () => {
        render(
         <CharDetailContainer />
        );

        const test = screen.getByTestId('testing-div')

        expect(test).toEqual("testing-div");
    });
})