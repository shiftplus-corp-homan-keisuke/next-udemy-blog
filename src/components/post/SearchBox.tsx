"use client";
import React, { useEffect } from "react";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [query, setQuery] = React.useState("");
  const [debouncedQuery, setDebouncedQuery] = React.useState(query);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [query, router]);

  useEffect(() => {
    if (debouncedQuery.trim()) {
      router.push(`/?search=${debouncedQuery.trim()}`);
    } else {
      router.push("/");
    }
  }, [debouncedQuery]);

  return (
    <Input
      placeholder="記事を検索"
      className="bg-white w-[200px] lg:x-[300px]"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
