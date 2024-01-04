import { ComponentProps } from 'react'
import * as ToastComponent from '@radix-ui/react-toast'
import { X } from '@phosphor-icons/react'

import {
  CloseButton,
  Message,
  Title,
  ToastContainer,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  open: boolean
  title: string
  message?: string
}

export function Toast({ title, message, open, ...props }: ToastProps) {
  return (
    <ToastComponent.Provider swipeDirection="right">
      <ToastContainer open={open} {...props}>
        <Title as="h2">{title}</Title>
        <Message as="span">{message}</Message>

        <CloseButton>
          <X size={20} />
        </CloseButton>
      </ToastContainer>

      <ToastViewport />
    </ToastComponent.Provider>
  )
}

Toast.displayName = 'Toast'
