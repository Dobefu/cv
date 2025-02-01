import { describe, expect, it } from 'vitest'
import getProjects from './get-projects'

describe('get-projects', () => {
  it('Returns the projects', () => {
    const projects = getProjects('en')

    expect(Object.keys(projects).length).toBeGreaterThan(0)
  })
})
