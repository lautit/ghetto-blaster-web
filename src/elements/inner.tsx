/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

const Inner = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => (
  <div
    className={className}
    sx={{
      width: `full`,
      textAlign: `left`,
    }}
  >
    {children}
  </div>
)

export default Inner
