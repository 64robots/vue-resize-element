import ResizeElement from './ResizeElement'

test('exports a valid component', () => {
  expect(ResizeElement).toBeAComponent()
})

test('adds a "extendable" class on the root element', () => {
  const { element } = shallowMount(ResizeElement)
  expect(element.classList.contains('extendable')).toBe(true)
})
