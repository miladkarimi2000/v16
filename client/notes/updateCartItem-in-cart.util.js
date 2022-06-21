// in cart reducer
const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_ITEM:
            const currentCartItems = state.cartItems;
            const passedItem = action.payload;
            const UpdatedCartItems = updateCartItems(currentCartItems, passedItem);
            return {
                ...state,
                cartItems: [...UpdatedCartItems]
            };
    }
};


// in cart.util.js
export const updateCartItems = (currentCartItems, passedItem) => {
    const ids = currentCartItems.map(item => item.id);

    const UpdatedCartItems = [...currentCartItems];

    if (!ids.includes(passedItem.id)) {
        UpdatedCartItems.push({ ...passedItem, qty: 1 })
    }
    else {
        currentCartItems.forEach((currentItem, i) => {
            if (currentItem.id === passedItem.id) {
                UpdatedCartItems[i] = { ...currentItem, qty: currentItem.qty + 1 }
            }
        });
    }
    return UpdatedCartItems;
}