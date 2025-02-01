import iconQuestionMarkRhombus from '@iconify/icons-mdi/question-mark-rhombus'
import { describe, expect, it } from 'vitest'
import getTag from './get-tag'

describe('get-tag', () => {
  it('Returns a valid tag', () => {
    const tag = getTag('go')

    expect(tag.title).toEqual('Go')
  })

  it("Returns a fallback tag when the tag doesn't exist", () => {
    const tag = getTag('bogus')

    expect(tag).toStrictEqual({
      title: 'Unknown tag',
      icon: iconQuestionMarkRhombus,
      classes: '',
    })
  })
})
