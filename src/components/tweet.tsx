import type { FC } from "react";
import Avatar from "boring-avatars";
import { User } from "@clerk/nextjs/dist/types/server";
import { PrismaClient } from "@prisma/client";

interface tweetProps {
  user: User;
}

const tweet: FC<tweetProps> = async ({ user }) => {
  const prisma = new PrismaClient();

  const tweets = await prisma.message.findMany();

  return (
    <>
      {tweets.map((tweet) => (
        <div
          key={tweet.id}
          className='border border-zinc-800 hover:bg-neutral-950 w-[500px] min-h-[100px] transition-colors p-4'
        >
          <div className='flex gap-4'>
            <Avatar
              size={40}
              name='Maria Mitchell'
              variant='marble'
              colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
            />
            <div>
              <var className='font-bold'>
                {`${tweet.authorName} `}
                <span className='font-light text-zinc-500'>
                  @{tweet.username}
                </span>
              </var>
              <p>{tweet.content}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default tweet;
