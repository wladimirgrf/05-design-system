import { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { Box, Button, Toast, ToastProps } from '@ignite-ui/react'

export default {
  title: 'Data Display/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: {
    open: true,
    title: 'Scheduled: Catch up',
    message: 'Wednesday, January 10, 2024 at 5:30 PM',
  },
} as Meta<ToastProps>

const TemplateWithState: React.FC<ToastProps> = ({
  title,
  message,
}: ToastProps) => {
  const [open, setOpen] = useState(false)

  return (
    <Box>
      <Button onClick={() => setOpen((state) => !state)}>
        Add to calendar
      </Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        title={title}
        message={message}
      />
    </Box>
  )
}

export const Primary: StoryObj<ToastProps> = {}

export const WithActionButton: React.FC<ToastProps> = TemplateWithState.bind({
  title: 'Scheduled: Catch up',
  message: 'Wednesday, January 10, 2024 at 5:30 PM',
})
