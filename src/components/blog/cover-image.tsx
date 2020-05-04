import cn from 'classnames';
import Link from 'next/link';

type Props = {
  title: string;
  src: string;
  slug: string;
  children?: never;
};

export const CoverImage: React.FC<Props> = ({ title, src, slug }) => {
  const image = (
    <img
      src={src}
      alt={`Cover for ${title}`}
      className={cn('rounded-lg object-cover h-64 w-full shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  );
  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};
