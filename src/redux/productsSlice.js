import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	products : [],
	selectedProduct : null,
	BlogProducts : [],
	selectedBlogProduct:null,

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

		setBlogProducts(state, action) {
			state.BlogProducts = action.payload;
		},
		setSelectedBlogProduct(state, action) {
      state.selectedBlogProduct = action.payload;
    },
    clearSelectedBlogProduct(state) {
      state.selectedBlogProduct = null;
    },
	},
});

export const { setProducts, setSelectedProduct , clearSelectedProduct ,   setBlogProducts,     
  setSelectedBlogProduct,    
  clearSelectedBlogProduct,  } = productsSlice.actions;

export default productsSlice.reducer;
