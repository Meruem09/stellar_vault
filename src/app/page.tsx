import dayjs from "dayjs";
import type { ProfilePage as PageSchema, WithContext } from "schema-dts";

import { About } from "@/src/features/profile/components/about";
import { Awards } from "@/src/features/profile/components/awards";
import { Blog } from "@/src/features/profile/components/blog";
import { Brand } from "@/src/features/profile/components/brand";
import { Certifications } from "@/src/features/profile/components/certifications";
import { Experiences } from "@/src/features/profile/components/experiences";
import { GitHubContributions } from "@/src/features/profile/components/github-contributions";
import { Overview } from "@/src/features/profile/components/overview";
import { ProfileCover } from "@/src/features/profile/components/profile-cover";
import { ProfileHeader } from "@/src/features/profile/components/profile-header";
import { Projects } from "@/src/features/profile/components/projects";
import { SocialLinks } from "@/src/features/profile/components/social-links";
import { TeckStack } from "@/src/features/profile/components/teck-stack";
import { USER } from "@/src/features/profile/data/user";
import { cn } from "@/src/lib/utils";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto md:max-w-3xl">
        <ProfileCover />
        <ProfileHeader />
        <Separator />

        <Overview />
        <Separator />

        <SocialLinks />
        <Separator />

        <About />
        <Separator />

        <GitHubContributions />
        <Separator />

        <TeckStack />
        <Separator />

        <Blog />
        <Separator />

        <Experiences />
        <Separator />

        <Projects />
        <Separator />

        <Awards />
        <Separator />

        <Certifications />
        <Separator />

        <Brand />
        <Separator />
      </div>
    </>
  );
}

function getPageJsonLd(): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: dayjs(USER.dateCreated).toISOString(),
    dateModified: dayjs().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: USER.avatar,
    },
  };
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x border-edge",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  );
}