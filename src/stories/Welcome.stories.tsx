import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
    title: 'Welcome',
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj;

export const Intro: Story = {
    render: () => (
        <div style={{ textAlign: 'center', padding: '40px' }}>
            <h1>👋 Welcome to Henaket Design System</h1>
            <p style={{ fontSize: '18px', marginTop: '1rem' }}>
                Select a component from the sidebar to explore UI elements.
            </p>
        </div>
    ),
};
