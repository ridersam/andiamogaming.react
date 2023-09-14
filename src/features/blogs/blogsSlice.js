import { createSlice } from "@reduxjs/toolkit";
import { BLOGS } from "../../app/shared/BLOGS";

const initialState = {
    blogsArray: BLOGS
};

const blogsSlice = createSlice({
    name: 'blogs',
    initialState
});

export const blogsReducer = blogsSlice.reducer;

export const selectAllBlogs = (state) => {
    return state.blogs.blogsArray;
};

export const selectBlogById = (id) => (state) => {
    return state.blogs.blogsArray.find(
        (blog) => blog.id === parseInt(id)
    );
};

export const selectFeaturedBlog = (state) => {
    return state.blogs.blogsArray.find((blog) => blog.featured);
};