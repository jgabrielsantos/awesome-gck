import React from "react";
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Button } from ".";

describe('Button Component Content', () => {
  it ('Should be rendered', () => {
    render (
      <Button role="renderTest">
        button rendered
      </Button>
    )

    expect(screen.getByRole('renderTest')).toBeInTheDocument(); // render component
  })
  it ('Should be of type button', () => {
    render(
      <Button role="typeTest">
        type test
      </Button>
    )

    expect(screen.getByRole('typeTest').getAttribute('type')).toBe('button')
  })
  it ('Should display children', () => {
    render(
      <Button role="contentTest">
        content test
      </Button>
    )

    expect(screen.getByRole('contentTest').innerHTML).toBe('content test')
  })
  it ('Default button size should be medium', () => {
    render(
      <Button>
        default size button
      </Button>
    )
  })
  it ('Default button size should have 10px 20px padding values', () => {
    const { container } = render(
      <Button>
        default size button
      </Button>
    )

    expect(container.firstChild).toHaveStyle('padding: 10px 20px')
  })
  it ('Large button should have 12px 24px padding values', () => {
    const { container } = render(
      <Button size="large">
        large size button
      </Button>
    )

    expect(container.firstChild).toHaveStyle('padding: 12px 24px')
  })
  it ('Small button should have 8px 12px padding values', () => {
    const { container } = render(
      <Button size="small">
        small size button
      </Button>
    )

    expect(container.firstChild).toHaveStyle('padding: 8px 12px')
  })
})