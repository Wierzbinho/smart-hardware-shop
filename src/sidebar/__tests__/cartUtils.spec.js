import { calculateTotalItemQty } from "../cartUtils";

describe("calculateTotalItemQty", () => {
  it('should return 0 if there are no items in the cart', () => {
    const actual = calculateTotalItemQty([]);
    expect(actual).toBe(0);
  });

  it('should return 1 if there is only one item in cart', () => {
    const items = [{qty: 1, product: {id: 1}}];
    
    const actual = calculateTotalItemQty(items);

    expect(actual).toBe(1);
  });

  it('should return 2 if there are two items of the same type in the cart', () => {
    const items = [{qty: 2, product: {id: 1}}];
    
    const actual = calculateTotalItemQty(items);

    expect(actual).toBe(2);
  });

  it('should return 2 if there are two items of different types in the cart', () => {
    const items = [
      { qty: 1, product: { id: 1 } },
      { qty: 1, product: { id: 2 } },
    ];
    
    const actual = calculateTotalItemQty(items);

    expect(actual).toBe(2);
  });

  it('should sum up quantities of items of different types in the cart', () => {
    const items = [
      { qty: 3, product: { id: 1 } },
      { qty: 1, product: { id: 2 } },
      { qty: 2, product: { id: 3 } },
    ];
    
    const actual = calculateTotalItemQty(items);

    expect(actual).toBe(6);
  });
});
