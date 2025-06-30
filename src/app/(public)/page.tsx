import PostCard from "@/components/post/PostCard";
import { getPosts, searchPosts } from "@/lib/post";
import { Post } from "@/types/post";

type SearchProps = {
  searchParams?: Promise<{
    search?: string;
  }>;
};

export default async function PostsPage({ searchParams }: SearchProps) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams?.search;
  console.log(query);

  const posts = query
    ? ((await searchPosts(query)) as Post[])
    : ((await getPosts()) as Post[]);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
