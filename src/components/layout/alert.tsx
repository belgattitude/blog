import { Container } from './container';
import cn from 'classnames';

type Props = {
  preview?: boolean;
};

export const Alert: React.FC<Props> = (props) => {
  const { preview = false } = props;
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This is page is a preview.{' '}
              <a href="/api/exit-preview" className="underline hover:text-cyan duration-200 transition-colors">
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is{' '}
              <a
                href={`https://github.com/unsorted/skunkies`}
                className="underline hover:text-success duration-200 transition-colors"
              >
                available on GitHub
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  );
};
