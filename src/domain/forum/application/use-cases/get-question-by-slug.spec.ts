import { makeQuestion } from 'test/factories/make-question'
import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { GetQuestionBySlugUseCase } from './get-question-by-slug'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: GetQuestionBySlugUseCase

describe('Get question by slug', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionsRepository)
  })

  // sut = system under test

  it('should be able to get a question by slug', async () => {
    const newQuestoin = makeQuestion()

    await inMemoryQuestionsRepository.create(newQuestoin)

    const { question } = await sut.execute({
      slug: 'example-title',
    })

    expect(question.id).toBeTruthy()
    expect(question.title).toEqual(newQuestoin.title)
  })
})
