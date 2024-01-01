import { Meta, StoryObj } from '@storybook/react'

import { Box, BoxProps, Text } from '@ignite-ui/react'

export default {
  tittle: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testing the Box element</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
