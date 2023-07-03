"use client";
import { type User } from "@clerk/nextjs/dist/types/server/clerkClient";
import type { FC } from "react";

interface inputProps {
  user: User;
}

const input: FC<inputProps> = ({ user }) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // get tweet value
    const tweet = e.currentTarget.tweet.value;

    // send tweet to server
    await fetch("/api/tweet", {
      method: "POST",
      body: JSON.stringify({
        tweet,
        authorName: user.firstName + " " + user.lastName,
        username: user.username,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // reload server component
    window.location.reload();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='border border-zinc-800 hover:bg-neutral-950 w-[500px] min-h-[50px] transition-colors p-4'
    >
      <div className='flex gap-4'>
        <input
          type='text'
          name='tweet'
          placeholder="What's happening?"
          className='bg-transparent outline-none text-white w-full'
        />
        <button type='submit'>➡️</button>
      </div>
    </form>
  );
};
export default input;
