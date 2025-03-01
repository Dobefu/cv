import type { MDXComponents } from 'mdx/types'
import LocaleLink from './components/utils/locale-link.client'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: ({ children, href }) => (
      <LocaleLink
        className="font-medium text-sky-700 hover:underline dark:text-sky-400"
        href={href}
      >
        {children}
      </LocaleLink>
    ),
    p: ({ children }) => <p className="pb-4">{children}</p>,
    hr: () => <hr />,
    ul: ({ children }) => <ul>{children}</ul>,
  }
}
