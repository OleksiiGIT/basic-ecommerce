import { render, fireEvent } from 'setupTests';
import { BasketContextProvider, useBasket } from './BasketContext';

const Component = ({ testId = 1 }) => {
    const { productsIds, onAdd, onRemove } = useBasket();

    return (
        <div>
            <button onClick={() => onAdd(testId)}>Add</button>
            <button onClick={() => onRemove(testId)}>Remove</button>
            <p>{productsIds.length ? 'exist' : 'empty'}</p>
        </div>
    );
};

describe('BasketContext', () => {
    it('item added to the basket', () => {
        const { getByText } = render(
            <BasketContextProvider>
                <Component />
            </BasketContextProvider>
        );

        fireEvent.click(getByText('Add'));

        expect(getByText('exist')).not.toEqual(null);
    });

    it('item removed from the basket', () => {
        const { getByText } = render(
            <BasketContextProvider>
                <Component />
            </BasketContextProvider>
        );

        fireEvent.click(getByText('Add'));
        fireEvent.click(getByText('Remove'));

        expect(getByText('empty')).not.toEqual(null);
    });
});