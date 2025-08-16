import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Question } from '../../enterprise/entities/question'
import { Slug } from '../../enterprise/entities/value-objects/slug'
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
    const newQuestoin = Question.create({
      title: 'title',
      slug: Slug.create('example-title'),
      authorId: new UniqueEntityId('1'),
      content: 'content',
    })

    await inMemoryQuestionsRepository.create(newQuestoin)

    const { question } = await sut.execute({
      slug: 'example-title',
    })

    expect(question.id).toBeTruthy()
    expect(question.title).toEqual(newQuestoin.title)
  })
})
