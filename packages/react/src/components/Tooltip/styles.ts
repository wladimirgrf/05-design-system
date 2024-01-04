import * as Tooltip from '@radix-ui/react-tooltip'

import { styled, keyframes } from '../../styles'

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(10px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-10px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(10px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-10px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

export const Content = styled(Tooltip.Content, {
  color: '$white',
  fontFamily: '$default',
  padding: '$3 $4',
  backgroundColor: '$gray900',
  borderRadius: 5,
  animationDuration: '400ms',
  willChange: 'transform, opacity',

  '&[data-state="delayed-open"][data-side="top"]': {
    animationName: slideDownAndFade,
  },
  '&[data-state="delayed-open"][data-side="right"]': {
    animationName: slideLeftAndFade,
  },
  '&[data-state="delayed-open"][data-side="bottom"]': {
    animationName: slideUpAndFade,
  },
  '&[data-state="delayed-open"][data-side="left"]': {
    animationName: slideRightAndFade,
  },
})

export const Arrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
