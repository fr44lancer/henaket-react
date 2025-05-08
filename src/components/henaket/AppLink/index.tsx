import React, { ReactNode } from 'react'
import NextLink, { LinkProps } from 'next/link'
import {AppIcon} from "../AppIcon";

export type IAppLinkProps = {
  children?: ReactNode
  className?: string
  target?: string
  external?: boolean
  type?: 'default' | 'footer' | 'light' | 'disabled'
} & LinkProps

const typeClassMap: Record<NonNullable<IAppLinkProps['type']>, string> = {
  default:
    'text-link-main hover:text-link-active focus:text-white active:text-white visited:text-link-visited underline decoration-[1px] inline',
  footer:
    'text-800 hover:text-link-active focus:text-white active:text-white visited:text-link-visited underline' +
    ' decoration-[1px]',
  light: 'text-white hover:text-link-visited underline decoration-[1px]',
  disabled: 'text-700 cursor-not-allowed no-underline pointer-events-none'
}

export const AppLink = ({
  children,
  className = '',
  target,
  external,
  type = 'default',
  ...props
}: IAppLinkProps) => {
  const typeClasses = typeClassMap[type] || typeClassMap.default
  return (
    <NextLink
      {...props}
      target={target}
      className={`${typeClasses} inline ${className}`}
    >
      {children}
      {external && (
        <AppIcon
          icon={'open_in_new'}
          size={'12'}
          className="ml-1 inline-block"
        />
      )}
    </NextLink>
  )
}
