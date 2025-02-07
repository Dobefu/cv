import { describe, expect, it } from 'vitest'
import getProjectFromUrl from './get-project-from-url'

describe('get-project-from-url', () => {
  it('Returns a valid project', () => {
    const { project } = getProjectFromUrl('http://localhost/projects/cv', 'en')

    expect(project).toBeDefined()
  })
})
