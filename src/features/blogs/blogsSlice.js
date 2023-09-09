import { BLOGS } from "../../app/shared/BLOGS";

export const selectAllBlogs = () => {
    return BLOGS;
};

export const selectBlogById = (id) => {
    return BLOGS.find((blog) => blog.id === parseInt(id));
};

export const selectFeaturedBlog = () => {
    return BLOGS.find((blog) => blog.featured);
};