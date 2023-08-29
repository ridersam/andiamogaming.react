import {TIERS} from "../../app/shared/TIERS"

export const selectAllTiers = () => {
    return TIERS;
};

export const selectProductById = (id) => {
    return TIERS.find((product) => product.id === parseInt(id));
};

export const selectFeaturedProduct = () => {
    return TIERS.find((product) => product.featured);
};