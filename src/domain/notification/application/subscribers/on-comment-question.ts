import { DomainEvents } from '@/core/events/domain-events'
import type { EventHandler } from '@/core/events/event-handler'
import type { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { NewQuestionCommentEvent } from '@/domain/forum/enterprise/events/new-question-comment'
import type { SendNotificationUseCase } from '../use-cases/send-notification'

export class OnCommentQuestion implements EventHandler {
  constructor(
    private questionsRepository: QuestionsRepository,
    private sendNotification: SendNotificationUseCase,
  ) {
    this.setupSubscriptions()
  }

  setupSubscriptions(): void {
    DomainEvents.register(
      this.sendNewQuestionCommentNotification.bind(this),
      NewQuestionCommentEvent.name,
    )
  }

  private async sendNewQuestionCommentNotification({
    questionComment,
  }: NewQuestionCommentEvent) {
    const question = await this.questionsRepository.findById(
      questionComment.questionId.toString(),
    )

    if (question) {
      await this.sendNotification.execute({
        recipientId: question.authorId.toString(),
        title: 'Novo comentário na pergunta',
        content: `Você recebeu um novo comentário em "${question.title.substring(0, 20).concat('...')}"`,
      })
    }
  }
}
