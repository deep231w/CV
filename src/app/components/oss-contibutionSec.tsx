'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ProjectLinkProps {
  title: string;
  link?: string;
}

function OssLink({ title, link }: ProjectLinkProps) {
  if (!link) {
    return <span>{title}</span>;
  }

  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 hover:underline"
        aria-label={`${title} project (opens in new tab)`}
      >
        {title}
        <span
          className="size-1 rounded-full bg-green-500"
          title="Active project indicator"
          aria-hidden="true"
        />
      </a>
      <div
        className="hidden font-mono text-xs underline print:visible"
        aria-hidden="true"
      >
        {link.replace("https://", "").replace("www.", "").replace("/", "")}
      </div>
    </>
  );
}

interface OssCardProps {
  title: string;
  description: string;
  link?: string;
  coverImg:string;
  type:string
}

function OssCrd({title  ,link , description ,coverImg ,type}:OssCardProps){
    return (
        <Card  
            className={`flex h-full flex-col overflow-hidden border p-3`}  
        >
            <CardHeader>
                <div className="space-y-1">
                    <CardTitle className="text-base">
                        <OssLink title={title} link={link} />
                    </CardTitle>
                </div>
            </CardHeader>
            <div
              className="flex flex-row md:flex-col"
            >
              <CardContent className="mt-auto flex hidden md:block">
                <Image 
                  height={180} 
                  width={210} 
                  alt={"cover image"} 
                  src={coverImg}
                  // className="h-auto w-full"
                />
              </CardContent>
              <CardDescription
                  className="text-pretty font-mono text-xs print:text-[10px]"
                  aria-label="Project description"
              >
                  {description}
              </CardDescription>
            </div>
        </Card>
    )
}

interface OsssProps {
  ossConstributions: (typeof RESUME_DATA)["ossConstributions"];
}

type OSSContribution = {
  title: string;
  type: string;
  description: string;
  coverImg: string;
  link?: {
    href: string;
  };
};

export default function OssContributions({ossConstributions}:OsssProps){
  let [ossCons, setOssCons] = useState<OSSContribution[]>([])
  const [limit, setLimit]= useState(3)
  useEffect(()=>{
    setOssCons(ossConstributions.slice(0, limit))
  },[ossConstributions, limit])
  
  function handleOssRender (){
    if(limit == 3){
      setLimit(ossConstributions.length)
    }else {
      setLimit(3)
    }
  }
    return(
        <Section className="scroll-mb-16 print:space-y-">
          <h2 className="text-xl font-bold" id="side-projects">
              Oss Contributions
          </h2>
          <div
            className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2 "
            role="feed"
            aria-labelledby="side-projects"
          >
            {ossCons.map((project:any) => (
                <article
                key={project.title}
                className="h-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm print:hover:translate-y-0 print:hover:shadow-none"
                >
                <OssCrd
                    title={project.title}
                    description={project.description}
                    link={project.link?.href}
                    coverImg={project.coverImg}
                    type={project.type}
                />
                </article>
            ))}
          </div>
          <div className="flex justify-center pt-5">
            <button
              type="button"
              onClick={handleOssRender}
              aria-expanded={limit > 3}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium shadow-sm transition-all duration-200 hover:border-foreground/30 hover:bg-muted hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.98]"
            >
              {limit > 3 ? (
                <>
                  Show fewer contributions
                  <ChevronUp
                    size={16}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5"
                  />
                </>
              ) : (
                <>
                  Show all contributions
                  <span className="text-muted-foreground">
                    ({ossConstributions.length})
                  </span>
                  <ChevronDown
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-y-0.5"
                  />
                </>
              )}
            </button>
          </div>
        </Section>
    )
}