import { render, screen } from '@testing-library/react'
import React from 'react'
import { Picture } from '../Picture';

describe('Picture', () => {
    it('should show text if loading', () => {
        render(<Picture isLoading={true} />);
        expect(screen.getByText('Loading picture...')).toBeInTheDocument();
    });

    it('should show image if url', () => {
        render(<Picture isLoading={false} imageUrl={'test_1'} />);
        expect(screen.queryByText('Loading picture...')).not.toBeInTheDocument();
        expect(screen.getByRole('img')).toBeInTheDocument();
    });
});
