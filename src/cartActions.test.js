import { addToCart, incrementQuantity, decrementQuantity } from "./cartActions";

describe("add to cart", () => {
  const assertCartItem = (cartItem, expectedQty, expectedName) => {
    expect(cartItem.qty).toBe(expectedQty);
    expect(cartItem.product.name).toBe(expectedName);
  };

  it("should add first item to cart purely", () => {
    const state = [];
    const product = { name: "foo" };

    const newState = addToCart(state, product);

    expect(state.length).toBe(0);
    expect(newState.length).toBe(1);
    assertCartItem(newState[0], 1, "foo");
  });

  it("should add subsequent item to cart purely", () => {
    const state = [
      {
        qty: 1,
        product: { name: "foo" },
      },
    ];
    const newProduct = { name: "bar" };

    const newState = addToCart(state, newProduct);

    expect(state.length).toBe(1);
    expect(newState.length).toBe(2);
    assertCartItem(newState[0], 1, "foo");
    assertCartItem(newState[1], 1, "bar");
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
