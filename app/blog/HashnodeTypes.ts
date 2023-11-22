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

interface PostNode {
  title: string;
  url: string;
  publishedAt: string;
}
