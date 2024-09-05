import { auth } from "@/auth";
import Image from "next/image";

export default async function Home() {  
  const session = await auth();
  return (
    <main className="flex h-full items-center justify-center flex-col gap-20">
      {session?.user &&
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="font-bold text-3xl">Welcome {session?.user?.name}</h1>
        <h2 className="font-semibold text-xl">{session?.user?.email}</h2>
      </div>
      }
      {session?.user?.image && 
      <Image className="rounded-full" src={session?.user?.image} height={200} width={200} alt="image"/>
      }
      
      <h1 className="text-3xl">Home Page</h1>
    </main>
  );
}
