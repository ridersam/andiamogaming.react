import {TIERS} from "../../app/shared/TIERS"

export const selectAllTiers = () => {
    return TIERS;
};

export const selectProductById = (id) => {
    return TIERS.find((product) => product.id === id);
}