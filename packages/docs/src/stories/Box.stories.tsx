import { Meta, StoryObj } from '@storybook/react'

import { Box, BoxProps } from '@ignite-ui/react'

export default {
  tittle: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Testing the Box element</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
