import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import { UserButton, SignInButton, useUser } from "@clerk/nextjs";

export default function Home() {
  // const { data } = api.post.hello.useQuery({text: "hi"})
  const { data } = api.post.getAll.useQuery();
  const user = useUser();

  // console.log(data);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div>
          {user.isSignedIn && <UserButton afterSignOutUrl="/" />}
          {!user.isSignedIn && <SignInButton />}
        </div>
        <div>
          {data?.map((post) => <div key={post.id}>{post.content}</div>)}
        </div>
      </main>
    </>
  );
}
