import { Meta, StoryObj } from '@storybook/react'

import { Box, Text, Tooltip, TooltipProps } from '@ignite-ui/react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    content: 'January 22 - Available',
    children: (
      <Box css={{ display: 'inline-block' }}>
        <Text>22</Text>
      </Box>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
