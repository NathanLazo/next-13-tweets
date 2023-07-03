import { UserButton, currentUser } from "@clerk/nextjs";
import Tweet from "../components/tweet";
import Input from "../components/input";

import { SignUp } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();
  if (!user) return <SignUp />;
  return (
    <>
      <div className='bg-zinc-900 flex justify-end px-8 py-2'>
        <UserButton />
      </div>
      <div className='flex flex-col items-center justify-center mt-10'>
        <Input user={user} />
        <Tweet />
      </div>
    </>
  );
}
