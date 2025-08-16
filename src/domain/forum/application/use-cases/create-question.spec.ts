import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { CreateQuestionUseCase } from './create-question'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let createQuestion: CreateQuestionUseCase

describe('Create question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    createQuestion = new CreateQuestionUseCase(inMemoryQuestionsRepository)
  })

  it('should be able to create a new question', async () => {
    const { question } = await createQuestion.execute({
      authorId: '1',
      title: 'title',
      content: 'content',
    })

    expect(question.id).toBeTruthy()
  })
})
