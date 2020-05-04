import { Container } from '_components/layout/container';
import { MoreStories } from '_components/blog/more-stories';
import { HeroPost } from '_components/blog/hero-post';
import { Intro } from '_components/blog/intro';
import { Layout } from '_components/layout/layout';
import { getAllPosts } from '_features/blog/blog-posts.repo';
import Head from 'next/head';

type Props = {
  allPosts: any[];
};

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Thoughtless mind blog</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);

  return {
    props: { allPosts },
  };
}
