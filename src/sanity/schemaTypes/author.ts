import { defineField, defineType } from "sanity";

const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "name" }, // Generates slug from the name field
    }),
    defineField({
      name: "image",
      title: "Profile",
      type: "image",
      options: { hotspot: true }, // Allows image cropping
    }),
  ],
});

export default author;
