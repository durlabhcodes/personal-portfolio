import BlogCard from "@/app/blog/blog-card/BlogCard";
import { ApolloQueryResult, gql } from "@apollo/client";
import { getClient } from "@/app/lib/apollo-client";
import User from "@/app/blog/HashnodeTypes";
import { use } from "react";
import { json } from "stream/consumers";

export default function Blog() {
  const articles = [
    {
      title: "Blog Title",
      desc: "Hello I am a badass blog article description with a lots and lots of content that'll overflow to next line",
      timestamp: "24th Aug",
      image: "/project.jpeg",
    },
    {
      title: "Blog Title",
      desc: "Hello I am a badass blog article description with a lots and lots of content that'll overflow to next line",
      timestamp: "24th Aug",
      image: "/project.jpeg",
    },
    {
      title: "Blog Title",
      desc: "Hello I am a badass blog article description with a lots and lots of content that'll overflow to next line",
      timestamp: "24th Aug",
      image: "/project.jpeg",
    },
  ];
  const GET_USER_ARTICLES = gql`
    query {
      user(username: "durlabhcodes") {
        publications(first: 1) {
          edges {
            node {
              posts(first: 10) {
                edges {
                  node {
                    title
                    url
                    coverImage {
                      url
                    }
                    publishedAt
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  async function getPosts() {
    const { data } = await getClient().query({
      query: GET_USER_ARTICLES,
      context: {
        fetchOptions: {
          next: {
            revalidate: 5,
          },
        },
      },
    });
    return data;
  }

  let user = use<User>(getPosts().then((result) => result.user));
  console.log(
    user.publications.edges.map((edge) =>
      edge.node.posts.edges.map((edge) => edge.node)
    )
  );

  return (
    <section className="blog flex flex-col items-center">
      <div className="blog-section-title py-5 font-bold text-3xl">
        Latest Blog & Articles
      </div>
      <div className="text-[#8493a6]">
        Obviously I&apos;m a Web Designer. Experienced with all stages of the
        development cycle for dynamic web projects.
      </div>
      <div className="blog-posts grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-24 my-5 w-[70vw]">
        {articles.map((article) => (
          <BlogCard
            key={article.title}
            image={article.image}
            title={article.title}
            desc={article.desc}
            timestamp={article.timestamp}
          />
        ))}
      </div>
    </section>
  );
}
