import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	products : [],
	selectedProduct : null,
}

const productsSlice = createSlice({
	name : "products",
	initialState,
	reducers : {
		setProducts(state, action) {
			state.products = action.payload;
		},
		setSelectedProduct(state, action) {
			state.selectedProduct = action.payload;
		},
		clearSelectedProduct(state) {
			state.selectedProduct = null;
		},
	},
});

export const { setProducts, setSelectedProduct , clearSelectedProduct } = productsSlice.actions;

export default productsSlice.reducer;
