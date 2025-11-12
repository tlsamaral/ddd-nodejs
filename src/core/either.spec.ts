import { type Either, left, right } from "./either"

function doSomething(shouldSccesss: boolean): Either<string, string> {
  if (shouldSccesss) {
    return right('success')
  }

  return left('error')
}

test("Success result", () => {
  const result = doSomething(true)

  expect(result.isRight()).toEqual(true)
  expect(result.isLeft()).toEqual(false)
})

test("Error result", () => {
  const result = doSomething(false)

  expect(result.isRight()).toEqual(false)
  expect(result.isLeft()).toEqual(true)
})
