import * as React from "react"
import { profile } from "../../data/profile"
import { tools } from "../../data/tool/tools"
import { ActionLink } from "../actions/ActionLink"
import { PageShell } from "../layout/PageShell"
import { MenuToggle } from "../navigation/MenuToggle"
import { ThemeToggle, type ColorTheme } from "../preferences/ThemeToggle"
import { ProfileActions } from "../profile/ProfileActions"
import { ProfileAvatar } from "../profile/ProfileAvatar"
import { ProfileIdentity } from "../profile/ProfileIdentity"
import { ProfileMeta } from "../profile/ProfileMeta"
import { type ProjectGridItem, ProjectGrid } from "../projects/ProjectGrid"
import { SectionHeader } from "../sections/SectionHeader"
import { ToolGrid } from "../tools/ToolGrid"

export interface HomePageProps {
  projects: readonly ProjectGridItem[]
}

interface MobileNavigationProps {
  onClose: () => void
  onThemeChange: (theme: ColorTheme) => void
  theme: ColorTheme
}

const profileActions = {
  email: profile.email,
  github: profile.github,
  linkedin: profile.linkedin,
}

const MobileNavigation = ({ onClose, onThemeChange, theme }: MobileNavigationProps) => (
  <div className="absolute inset-0 z-20 flex flex-col bg-background px-5 pt-5 pb-10 md:hidden" id="mobile-navigation">
    <div className="flex items-start justify-between">
      <ThemeToggle onThemeChange={onThemeChange} theme={theme} />
      <MenuToggle controls="mobile-navigation" onClick={onClose} open />
    </div>
    <nav aria-label="Primary navigation" className="my-auto flex flex-col items-start gap-8 self-center">
      <a className="type-heading-1-caps text-foreground no-underline" href="/about">
        About
      </a>
      <a className="type-heading-1-caps text-foreground no-underline" href="/tools">
        Tools
      </a>
      <a className="type-heading-1-caps text-foreground no-underline" href="/projects">
        Works
      </a>
    </nav>
    <ProfileActions {...profileActions} variant="icons" />
  </div>
)

export const HomePage = ({ projects }: HomePageProps) => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [theme, setTheme] = React.useState<ColorTheme>("dark")

  return (
    <PageShell
      className="relative flex min-h-dvh flex-col md:grid md:h-dvh md:grid-cols-[27.5rem_minmax(0,1fr)] md:grid-rows-[5.75rem_minmax(0,1fr)]"
      data-testid="home-page"
      data-theme={theme}
    >
      <header className="order-1 flex h-20 items-start justify-between px-5 pt-5 md:col-start-2 md:row-start-1 md:h-auto md:items-center md:border-b md:border-border md:px-[3.75rem] md:pt-0">
        <div className="md:hidden">
          <ThemeToggle onThemeChange={setTheme} theme={theme} variant="compact" />
        </div>
        <p className="m-0 hidden type-caption tracking-[0.08em] text-foreground-muted uppercase md:block">
          Welcome to my portfolio =)
        </p>
        <div className="hidden md:block">
          <ThemeToggle onThemeChange={setTheme} theme={theme} />
        </div>
        <MenuToggle
          className="md:hidden"
          controls="mobile-navigation"
          onClick={() => setMenuOpen(true)}
          open={menuOpen}
        />
      </header>

      <div className="contents md:col-start-1 md:row-span-2 md:row-start-1 md:flex md:min-h-0 md:flex-col md:border-r md:border-border">
        <section className="order-2 flex flex-col items-center px-5 md:px-[3.75rem] md:pt-10" aria-label="Profile">
          <ProfileAvatar
            alt={`Portrait of ${profile.name}`}
            className="md:hidden"
            size="compact"
            src={profile.avatar}
          />
          <ProfileAvatar
            alt={`Portrait of ${profile.name}`}
            className="hidden md:block"
            size="large"
            src={profile.avatar}
          />
          <ProfileIdentity className="mt-5" name={profile.name} role={profile.role} summary={profile.summary} />
          <ProfileMeta className="mt-4" languages={profile.languages} location={profile.location} />
          <ProfileActions className="mt-8 w-full" {...profileActions} />
        </section>

        <section aria-labelledby="tools-heading" className="order-3 mt-8 px-5 md:mt-16 md:px-[3.75rem]">
          <SectionHeader
            action={
              <ActionLink className="md:hidden" href="/tools" variant="compact">
                View all
              </ActionLink>
            }
            headingId="tools-heading"
          >
            Tools
          </SectionHeader>
          <div className="mt-5 -mr-5 overflow-x-auto pr-5 md:mr-0 md:overflow-visible md:pr-0">
            <ToolGrid aria-label="Selected tools" className="w-max md:w-auto" tools={tools} />
          </div>
        </section>

        <footer className="order-5 mt-20 pb-6 text-center type-caption text-foreground-muted md:mt-auto md:pb-5">
          © 2024 Copyright
        </footer>
      </div>

      <main className="order-4 px-5 pt-8 md:col-start-2 md:row-start-2 md:min-h-0 md:overflow-y-auto md:px-[3.75rem] md:pt-8 md:pb-12">
        <h1 className="sr-only">
          {profile.name} — {profile.role}
        </h1>

        <section aria-labelledby="about-heading" className="hidden md:block">
          <SectionHeader headingId="about-heading">About</SectionHeader>
          <div className="mt-5 space-y-2.5 type-body text-foreground">
            <p className="m-0">
              I am a Software Engineer with more than 10 years of overall experience in the field of IT technology.
            </p>
            <p className="m-0">
              I have experience in design of spatial data storage for the production needs. Custom extensions
              development for the GIS software. Spatial related web-applications design, development, and deployment.
              Unique expertise on developing software tools for geospatial data manipulation. Hands-on experience with
              design and development of services for the geodata aggregation and modification processes. 9+ years&apos;
              experience in GIS projects.
            </p>
            <p className="m-0">
              Strong knowledge in Python and spatial databases. Experience with different versions of Python as well as
              their features. Skilled in web-scraping and data manipulation. Strong technical and communication skills.
              Great at working in high-pressure situations. Good problem-solving skills.
            </p>
          </div>
        </section>

        <section aria-labelledby="works-heading" className="mt-8 md:mt-16">
          <SectionHeader
            action={
              <ActionLink className="md:hidden" href="/projects" variant="compact">
                View all
              </ActionLink>
            }
            headingId="works-heading"
          >
            Works
          </SectionHeader>
          <ProjectGrid
            aria-label="Selected projects"
            className="mt-5 -mr-5 pr-5 md:mr-0 md:pr-0"
            layout="preview"
            projects={projects}
          />
        </section>
      </main>

      {menuOpen && <MobileNavigation onClose={() => setMenuOpen(false)} onThemeChange={setTheme} theme={theme} />}
    </PageShell>
  )
}
