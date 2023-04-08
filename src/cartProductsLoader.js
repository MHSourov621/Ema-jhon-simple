import { getShoppingCart } from "./utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProduct = await fetch('products.json');
    const products = await loadedProduct.json();
    
    const storedCart = getShoppingCart();
        let saveCart = [];

        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;

                saveCart.push(addedProduct);
            }
        }


    return saveCart
}

export default cartProductsLoader;