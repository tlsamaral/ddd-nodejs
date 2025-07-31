import { expect, test } from "vitest"
import { AnswerQuestionUseCase } from "./answer-question"

test('create answer question', () => {
  const answerQuestionUseCase = new AnswerQuestionUseCase()
  
  const answer = answerQuestionUseCase.execute({
    instructorId: '1',
    questionId: '1',
    content: 'content'
  })

  expect(answer.content).toEqual('content')
})