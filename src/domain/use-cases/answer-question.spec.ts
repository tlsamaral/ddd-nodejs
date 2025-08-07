import { AnswerQuestionUseCase } from "./answer-question"
import { AnswersRepository } from "../repositories/answers-repository"
import { Answer } from "../entities/answer"

const fakeAnswersRepository: AnswersRepository = {
  create: async (answer: Answer) => {}
}

test('create answer question', async () => {
  const answerQuestionUseCase = new AnswerQuestionUseCase(fakeAnswersRepository)
  
  const answer = await answerQuestionUseCase.execute({
    instructorId: '1',
    questionId: '1',
    content: 'content'
  })

  expect(answer.content).toEqual('content')
})