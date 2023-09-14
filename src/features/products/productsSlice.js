import { createSlice } from "@reduxjs/toolkit";
import {TIERS} from "../../app/shared/TIERS";

const initialState = {
    productsArray: TIERS
};

const productsSlice = createSlice({
    name: 'products',
    initialState
});

export const productsReducer = productsSlice.reducer;

export const selectAllTiers = (state) => {
    return state.products.productsArray;
};

export const selectProductById = (id) => (state) => {
    return state.products.productsArray.find(
        (product) => product.id === parseInt(id)
    );
};

export const selectFeaturedProduct = (state) => {
    return state.products.productsArray.find((product) => product.featured);
};