import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Hero from "@/components/Hero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Uses from "@/components/Uses";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";


export default function PageTabs({ params }: { params?: { tab: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-3xl">
        <Hero />
        <Tabs defaultValue={params?.tab || "about"}>
          <TabsList className="bg-transparent p-0">
            <TabsTrigger value="about">
              <Link href="/">About</Link>
            </TabsTrigger>
            <TabsTrigger value="experience">
              <Link href="/experience">Experience</Link>
            </TabsTrigger>
            {/* <TabsTrigger value="projects">
              <Link href="/projects">Projects</Link>
            </TabsTrigger> */}
            <TabsTrigger value="uses">
              <Link href="/uses">Uses</Link>
            </TabsTrigger>
            <TabsTrigger value="resume">
              <Link href="/resume">Resume</Link>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <About />
          </TabsContent>
          <TabsContent value="experience">
            <Experience />
          </TabsContent>
          {/* <TabsContent value="projects">
            <Projects />
          </TabsContent> */}
          <TabsContent value="uses">
            <Uses />
          </TabsContent>
          <TabsContent value="resume">
            <Resume />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
