import { render, fireEvent } from 'setupTests';
import { useBasket } from 'contexts/BasketContext';
import { ProductCard } from './ProductCard';

const testProduct = {
    id: 1,
    name: 'Dress',
    colour: 'black',
    price: 10,
    img: '',
};

describe('Product Card', () => {
    it('renders props correct', () => {
        const { getByText } = render(<ProductCard {...testProduct} />);

        expect(getByText(testProduct.name)).toBeInTheDocument();
        expect(getByText(`Color: ${testProduct.colour}`)).toBeInTheDocument();
        expect(getByText(`Price: ${testProduct.price}£`)).toBeInTheDocument();
    });
    it('increases basket', () => {
        const TestComponent = () => {
            const { productsIds } = useBasket();
            return (
                <>
                    <ProductCard {...testProduct} />
                    <div data-testid="test-value">{productsIds}</div>
                </>
            );
        };
        const { getByText, getByTestId } = render(<TestComponent />);

        fireEvent.click(getByText('Add to basket'));

        expect(getByTestId('test-value')).toHaveTextContent('1');
    });
});
