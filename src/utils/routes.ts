import {
  BookOpenIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HomeIcon,
  NewspaperIcon,
  RocketLaunchIcon,
  Square3Stack3DIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid'
import { FC, SVGProps } from 'react'

export type Route =
  | {
      key: string
      href: string
      keywords: string
      routes?: never
      icon: FC<SVGProps<SVGSVGElement>>
    }
  | {
      key: string
      href?: never
      keywords?: never
      routes: Route[]
      icon?: never
    }

export const allRoutes: { homeRoute: Route; otherRoutes: Route[] } = {
  homeRoute: {
    key: 'home',
    href: '/',
    keywords: 'kezdőlap, home, főoldal, start, kir-dev',
    icon: HomeIcon,
  },
  otherRoutes: [
    {
      key: 'blog',
      href: '/blog',
      keywords:
        'blog, cikk, cikkek, posztok, articles, posts, tutorials, news, updates',
      icon: NewspaperIcon,
    },
    {
      key: 'about',
      routes: [
        {
          key: 'history',
          href: '/about/history',
          keywords:
            'történelem, history, about, rólunk, kir-dev, kirdev, kultúra, culture, vision',
          icon: BookOpenIcon,
        },
        {
          key: 'members',
          href: '/about/members',
          keywords:
            'csapatunk, members, team, tagok, tag, member, senior, developer',
          icon: UserGroupIcon,
        },
        {
          key: 'projects',
          href: '/about/projects',
          keywords:
            'projektjeink, projects, projektek, project, open-source, nyílt forráskódú, open source, nyílt forráskód',
          icon: Square3Stack3DIcon,
        },
        {
          key: 'contact',
          href: '/about/contact',
          keywords: 'elérhetőségeink, contact, kapcsolat, email, phone',
          icon: ChatBubbleOvalLeftEllipsisIcon,
        },
      ],
    },
    {
      key: 'courses',
      href: '/courses',
      keywords:
        'tanfolyam, courses, kurzus, mentor, course, tanfolyamok, tanulás, learning, education, oktatás, oktatási',
      icon: RocketLaunchIcon,
    },
  ],
}
