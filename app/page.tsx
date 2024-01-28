import Block from "@/components/Block";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import { H1, H2, P } from "@/components/Typography";
import type { Metadata } from "next";
import Image from "next/image";
import { Categories } from "./types";
import { getCategories, getTags } from "./actions";

export const metadata: Metadata = {
  title: "User Experience and Web Developer - Jake Jenkins",
};

export default async function Home() {
  const categories: Categories = await getCategories();

  return (
    <>
      <Hero>
        <H1 xL>
          Delivering awesome <br />
          web experiences.
        </H1>
      </Hero>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {categories.map((category: any) => (
          <Card link={category.slug} key={category.slug}>
            {category.name}
          </Card>
        ))}
      </div>

      <div className="my-8">
        <div className="mb-4">
          <H2>Jake Jenkins, User Experience Designer & Web Developer</H2>
        </div>
        <Block>
          <H2>Welcome</H2>
          <P>
            Jake is a Frontend Lead Developer with a range of skills and
            expertise to help businesses transform their online presence to help
            become market leaders. Jake has proven experience of delivering
            excellent user experience and meeting complex business challenges to
            deliver cutting edge services.
          </P>
          <div className="mt-8 mb-4">
            <H2>Expertise</H2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <ul className="text-lg list-disc list-inside ml-2 mb-4">
              <li>Front end architecture and frameworks</li>
              <li>NextJs</li>
              <li>Node</li>
              <li>HTML, CSS and JavaScript</li>
              <li>Web API</li>
            </ul>
            <ul className="text-lg list-disc list-inside ml-2">
              <li>Search engine optimisation</li>
              <li>Authentication</li>
              <li>Content management systems</li>
              <li>Multi-lingual support</li>
              <li>Deployment</li>
            </ul>
          </div>
          <H2>Industries</H2>

          <p>List</p>
        </Block>
      </div>

      <div className="mt-16 mb-4">
        <H2>Production code trusted by</H2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Block>
          <div className="flex justify-center items-center h-16">
            <Image src="/logos/GovUK.svg" width={46} height={50} alt="Gov UK" />
          </div>
        </Block>
        <Block>
          <div className="flex justify-center items-center h-16">
            <Image src="/logos/NHS.svg" width={99} height={40} alt="NHS" />
          </div>
        </Block>
        <Block>
          <div className="flex justify-center items-center h-16">
            <Image
              src="/logos/P2U.svg"
              width={177}
              height={25}
              alt="Pharmacy2U"
            />
          </div>
        </Block>
        <Block>
          <div className="flex justify-center items-center h-16">
            <Image
              src="/logos/USW.svg"
              width={58}
              height={60}
              alt="University of South Wales"
            />
          </div>
        </Block>
      </div>
    </>
  );
}
