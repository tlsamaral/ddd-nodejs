import type { Answer } from '../../enterprise/entities/answer'
import type { AnswersRepository } from '../repositories/answers-repository'
import { AnswerQuestionUseCase } from './answer-question'

const fakeAnswersRepository: AnswersRepository = {
  create: async (_answer: Answer) => {},
}

test('create answer question', async () => {
  const answerQuestionUseCase = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await answerQuestionUseCase.execute({
    instructorId: '1',
    questionId: '1',
    content: 'content',
  })

  expect(answer.content).toEqual('content')
})
