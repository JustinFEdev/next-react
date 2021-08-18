import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <>
      <div style={{ height: "100%" }}>
        <h1>Welcome to My Blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
// Serverside render방식으로 서버에서 html파일을 만들어준다.
// export const getServerSideProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`);
//   const posts = await res.json();
//   return {
//     props: {
//       posts,
//     },
//   };
// };

// Static
export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`
  );
  const posts = await res.json();
  return {
    props: {
      posts,
    },
    revalidate: 20,
  };
};
