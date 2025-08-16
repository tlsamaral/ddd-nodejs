import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { CreateQuestionUseCase } from './create-question'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: CreateQuestionUseCase

describe('Create question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new CreateQuestionUseCase(inMemoryQuestionsRepository)
  })

  // sut = system under test

  it('should be able to create a new question', async () => {
    const { question } = await sut.execute({
      authorId: '1',
      title: 'title',
      content: 'content',
    })

    expect(question.id).toBeTruthy()
  })
})
