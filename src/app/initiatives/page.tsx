"use client";
import Initiatives from "@/components/shared/initiatives";
import { INITIATIVES } from "@/lib/const";

export default function InitiativesPage() {
  return (
    <div className="bg-[#F6F5FB] min-h-screen">
      <div className=" text-black py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Initiatives</h1>
          <p className="text-xl">
            At the Black Economic Improvement Corporation (BEIC), our
            initiatives are designed to address the immediate needs of our
            community while fostering long-term sustainable development. Each
            initiative aligns with our mission to empower individuals, promote
            economic growth, and improve the living environment. Here are some
            of our key initiatives:
          </p>
        </div>
      </div>
      <main className=" flex gap-3 flex-col">
        {INITIATIVES.map((initiative, k) => (
          <Initiatives
            key={k}
            serial={initiative.serial}
            order={initiative.order}
            mainTitle={initiative.mainTitle}
            mainDescription={initiative.mainDescription}
            subInfo={initiative.subInfo}
          />
        ))}
      </main>
    </div>
  );
}
