import { Avatar } from '_components/blog/avatar';
import { DateFormater } from '_components/blog/date-formater';
import { CoverImage } from './cover-image';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: {
    name: string;
    picture: string;
  };
  slug: string;
  children?: never;
};

export const PostPreview: React.FC<Props> = ({ title, coverImage, date, excerpt, author, slug }) => {
  return (
    <div>
      <div className="mb-5">
        <LazyLoad>
          <CoverImage slug={slug} title={title} src={coverImage} />
        </LazyLoad>
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormater dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
};
