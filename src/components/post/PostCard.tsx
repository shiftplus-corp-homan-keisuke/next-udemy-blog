import { formatDistanceToNow } from "date-fns";
import { ja } from "date-fns/locale";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PostCardProps } from "@/types/post";
import Link from "next/link";

import React from "react";
import Image from "next/image";

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow pt-0">
      <Link href={`/posts/${post.id}`}>
        {post.topImage && (
          <div className="relative w-hull h-48">
            <Image
              src={post.topImage}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              className="object-cover rounded-t-md"
            />
          </div>
        )}

        <CardHeader>
          <CardTitle className="line-clamp-2 mt-2 text-2xl">
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 line-clamp-2">{post.content}</p>
          <div className="flex items-center my-2 justify-between text-sm text-gray-500">
            <span className="">{post.author.name}</span>
            <time className="text-sm">
              {formatDistanceToNow(new Date(post.createdAt), {
                addSuffix: true,
                locale: ja,
              })}
            </time>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
