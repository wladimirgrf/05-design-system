import * as Toast from '@radix-ui/react-toast'

import { styled } from '../../styles'

export const ToastContainer = styled(Toast.Root, {
  width: '22.5rem',
  padding: '$3 $5',
  borderRadius: 6,
  backgroundColor: '$gray600',
  boxShadow: '0 0 0 1px $colors$gray800',

  display: 'grid',
  gridTemplateAreas: "'title action' 'description action'",
  gridTemplateColumns: 'auto max-content',
})

export const Title = styled(Toast.Title, {
  gridArea: 'title',
  fontFamily: '$default',
  color: '$white',
  lineHeight: 0,
  fontSize: '$xl',
})

export const CloseButton = styled(Toast.Close, {
  gridArea: 'action',
  all: 'unset',
  cursor: 'pointer',

  color: '$gray200',

  '&:hover': {
    color: '$gray100',
  },
})

export const Message = styled(Toast.Description, {
  gridArea: 'description',
  fontFamily: '$default',
  color: '$gray200',
  lineHeight: '$shorter',
  fontSize: '$sm',
  marginTop: '$1',
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: '$8',
  right: '$8',
  display: 'flex',
  flexDirection: 'column',
})
