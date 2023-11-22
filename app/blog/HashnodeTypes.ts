export default interface User {
  publications: Publication;
}

export interface Publication {
  edges: PublicationEdge[];
}

interface PublicationEdge {
  node: PublicationNode;
}

interface PublicationNode {
  posts: Post;
}

interface Post {
  edges: PostEdge[];
}

interface PostEdge {
  node: PostNode;
}

export interface PostNode {
  title: string;
  url: string;
  brief: string;
  publishedAt: string;
  coverImage: CoverImage;
}

interface CoverImage {
  url: string;
}
