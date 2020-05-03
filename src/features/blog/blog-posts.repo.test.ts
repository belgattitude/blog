import { BlogPostsRepository } from './blog-posts.repo';

describe('BlogPosts Repo', () => {
  it('should do something', () => {
    const blogRepo = new BlogPostsRepository();
    expect(blogRepo.findAllFiles().length).toBeGreaterThan(0);

    expect(1).toBe(1);
  });
});
