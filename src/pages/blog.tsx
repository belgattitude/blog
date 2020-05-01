import { Container } from '_components/container';
import { MoreStories } from '_components/more-stories';
import { HeroPost } from '_components/hero-post';
import { Intro } from '_components/intro';
import { Layout } from '_components/layout';
import { getAllPosts } from '_features/blog/blog-posts.repo';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';

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
          <title>Next.js Blog Example with {CMS_NAME}</title>
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
