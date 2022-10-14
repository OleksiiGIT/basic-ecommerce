import { render, fireEvent } from 'setupTests';
import { useBasket } from 'contexts/BasketContext';
import { BasketCard } from './BasketCard';
import { BasketProductType } from '../../pages/Basket';

const testProduct: BasketProductType = {
    id: 1,
    name: 'Dress',
    colour: 'black',
    price: 10,
    img: '',
    quantity: 1,
};

describe('Basket Card', () => {
    it('renders props correct', () => {
        const { getByText } = render(<BasketCard {...testProduct} />);

        expect(getByText(testProduct.name)).toBeInTheDocument();
        expect(getByText(`Color: ${testProduct.colour}`)).toBeInTheDocument();
        expect(getByText(`Price: ${testProduct.price}£`)).toBeInTheDocument();
    });
    it('increases basket', () => {
        const TestComponent = () => {
            const { productsIds } = useBasket();
            return (
                <>
                    <BasketCard {...testProduct} />
                    <div data-testid="test-value">{productsIds}</div>
                </>
            );
        };
        const { getByText, getByTestId } = render(<TestComponent />);

        fireEvent.click(getByText('Increase'));

        expect(getByTestId('test-value')).toHaveTextContent('1');
    });
});
