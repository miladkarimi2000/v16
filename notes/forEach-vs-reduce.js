// in cart-icon.js
const mapStateToProps = ({ cart: { cartItems } }) => {

    // This was my solution
    /*
    let itemCount = 0;
    cartItems.forEach(({ quantity }) => itemCount += quantity);
    return { itemCount }
    */


    // This is provided solution by course's instructor
    return {
        itemCount: cartItems.reduce(
            (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
            0
        )
    }
}