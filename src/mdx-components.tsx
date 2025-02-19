import type { MDXComponents } from 'mdx/types'
import LocaleLink from './components/utils/locale-link.client'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: ({ children, href }) => (
      <LocaleLink
        className="text-sky-700 hover:underline dark:text-sky-500"
        href={href}
      >
        {children}
      </LocaleLink>
    ),
  }
}
