import { addToCart, incrementQuantity, decrementQuantity } from "../cartActions";

describe("add to cart", () => {
  const assertCartItem = ({item, expectedQty, expectedId}) => {
    expect(item.qty).toBe(expectedQty);
    expect(item.product.id).toBe(expectedId);
  };

  it("should add first item to cart purely", () => {
    const state = [];
    const product = { id: 1 };

    const newState = addToCart(state, product);

    expect(state.length).toBe(0);
    expect(newState.length).toBe(1);
    assertCartItem({item: newState[0], expectedQty: 1, expectedId: 1});
  });

  it("should add item with different id cart purely", () => {
    const state = [
      {
        qty: 1,
        product: { id: 1 },
      },
    ];
    const newProduct = { id: 2 };

    const newState = addToCart(state, newProduct);

    expect(state.length).toBe(1);
    expect(newState.length).toBe(2);
    assertCartItem({item: newState[0], expectedQty: 1, expectedId: 1});
    assertCartItem({item: newState[1], expectedQty: 1, expectedId: 2});
  });

  it("should increment the quantity of an added item if it already exists in cart", () => {
    const state = [
      {
        qty: 1,
        product: { id: 1 },
      },
    ];
    const newProduct = { id: 1 };

    const newState = addToCart(state, newProduct);

    expect(state.length).toBe(1);
    expect(newState.length).toBe(1);
    assertCartItem({item: newState[0], expectedQty: 2, expectedId: 1});
  });
});

describe("incrementQuantity", () => {
  it("should increment quantity of an item in cart", () => {
    const state = [
      {
        product: { name: "foo" },
        qty: 1,
      },
      {
        product: { name: "bar" },
        qty: 3,
      },
    ];

    const newState = incrementQuantity(state, 1);

    expect(state.length).toBe(2);
    expect(state[0].product.name).toBe("foo");
    expect(state[0].qty).toBe(1);
    expect(state[1].product.name).toBe("bar");
    expect(state[1].qty).toBe(3);
    expect(newState.length).toBe(2);
    expect(newState[0].product.name).toBe("foo");
    expect(newState[0].qty).toBe(1);
    expect(newState[1].product.name).toBe("bar");
    expect(newState[1].qty).toBe(4);
  });
});

describe("decrement quantity", () => {
  const state = [
    {
      product: { name: "foo" },
      qty: 1,
    },
    {
      product: { name: "bar" },
      qty: 3,
    },
  ];

  it('should decrement quantity of an item in cart if quantity greater than 1', () => {
    const newState = decrementQuantity(state, 1);

    expect(state.length).toBe(2);
    expect(state[0].product.name).toBe("foo");
    expect(state[0].qty).toBe(1);
    expect(state[1].product.name).toBe("bar");
    expect(state[1].qty).toBe(3);
    expect(newState.length).toBe(2);
    expect(newState[0].product.name).toBe("foo");
    expect(newState[0].qty).toBe(1);
    expect(newState[1].product.name).toBe("bar");
    expect(newState[1].qty).toBe(2);
  });

  it('should remove item from cart if quantity is 1', () => {
    const newState = decrementQuantity(state, 0);
    
    expect(newState.length).toBe(1);
    expect(newState[0].product.name).toBe("bar");
    expect(newState[0].qty).toBe(3);
  });
});
