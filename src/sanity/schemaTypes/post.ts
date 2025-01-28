import { defineField, defineType } from "sanity";

const post = defineType({
  name: "post",
  title: "Post",
  type: "document", // document | reference
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "This is your blog post title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      description:
        "Make this description brief so the visitor can get a blog post preview",
      type: "string",
      validation: (rule) => rule.min(50).max(250).required(),
      // Todo: Validation to make sure that the user doesn't write more than 250 characters
    }),
    defineField({
      type: "reference",
      to: [{ type: "author" }],
      name: "author",
      title: "Author",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image", // Include images in the block editor
          options: { hotspot: true }, // Enable image cropping
        },
      ],
    }),
  ],
});
export default post;
