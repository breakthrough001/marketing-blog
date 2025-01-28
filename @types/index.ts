import { SanityImageAssetDocument } from "next-sanity";

// This file helps TypeScript ensure that the fetched data matches the expected structure.

// eslint-disable-next-line
export namespace SanityTypes {
  export interface Post {
    _id: string;
    createdAt: Date;
    _updatedAt: Date;
    title: string;
    description: string;
    slug: {
      current: string;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: any;
    author: Author<SanityImageAssetDocument | undefined>;
  }

  export interface Author<T> {
    _id: string;
    name: string;
    image: T;
  }
}
