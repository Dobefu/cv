'use client'

import { Link as NextLink } from 'next-view-transitions'
import { LinkProps } from 'next/link'
import React, { useContext } from 'react'
import { LocaleContext } from '../layout/providers.client'

const LocaleLink: React.FC<
  LinkProps &
    React.HTMLProps<HTMLAnchorElement> &
    Readonly<{ localeOverride?: string }>
> = (props) => {
  const { locale } = useContext(LocaleContext)

  const newProps = {
    ...props,
    href: `/${props.localeOverride || locale?.code}${props.href}`,
  }

  delete newProps.localeOverride

  return <NextLink {...newProps}>{newProps.children}</NextLink>
}

export default LocaleLink
