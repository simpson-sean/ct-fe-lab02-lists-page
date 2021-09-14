import dotenv from 'dotenv';
dotenv.config();

import React from 'react';
import { render, screen } from '@testing-library/react';
import RickAndMortyContainer from './RickAndMortyContainer';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
    rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
        return res(
            ctx.json({
                results: [
                    {
                        id: 1,
                        name: 'Rick Sanchez (From API)',
                        status: 'alive',
                        image: 'example.com/image.png',
                    },                
                ],
            })
        );
    })
);

describe('RickAndMortyContainer', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('renders a list of characters', async () => {
        render(
        <MemoryRouter>
            <RickAndMortyContainer />
        </MemoryRouter>
        );
        screen.getByAltText('loading spinner')

        const ul = await screen.findByRole('list', { name: 'characters' }, {timeout: 3000});

        expect(ul).toMatchSnapshot();
    })
}
)