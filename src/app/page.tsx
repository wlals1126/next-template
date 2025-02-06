import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Next.js Template</h1>
      <p className="text-gray-600 mt-2">Next.js + Tailwind CSS + shadcn/ui</p>
      <Button className="mt-4">Click Me</Button>
    </div>
  );
}

