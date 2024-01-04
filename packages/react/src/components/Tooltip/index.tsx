import { ComponentProps, ReactNode } from 'react'
import * as TooltipComponent from '@radix-ui/react-tooltip'

import { Arrow, Content } from './styles'

export interface TooltipProps
  extends ComponentProps<typeof TooltipComponent.Root> {
  content: string
  children: ReactNode
}

export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <TooltipComponent.Provider>
      <TooltipComponent.Root {...props}>
        <TooltipComponent.Trigger asChild>{children}</TooltipComponent.Trigger>
        <TooltipComponent.Portal>
          <Content>
            {content}
            <Arrow />
          </Content>
        </TooltipComponent.Portal>
      </TooltipComponent.Root>
    </TooltipComponent.Provider>
  )
}
