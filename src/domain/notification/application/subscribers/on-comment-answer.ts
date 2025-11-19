import { DomainEvents } from '@/core/events/domain-events'
import type { EventHandler } from '@/core/events/event-handler'
import type { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'
import { NewAnswerCommentEvent } from '@/domain/forum/enterprise/events/new-answer-comment'
import type { SendNotificationUseCase } from '../use-cases/send-notification'

export class OnCommentAnswer implements EventHandler {
  constructor(
    private answersRepository: AnswersRepository,
    private sendNotification: SendNotificationUseCase,
  ) {
    this.setupSubscriptions()
  }

  setupSubscriptions(): void {
    DomainEvents.register(
      this.sendNewAnswerCommentNotification.bind(this),
      NewAnswerCommentEvent.name,
    )
  }

  private async sendNewAnswerCommentNotification({
    answerComment,
  }: NewAnswerCommentEvent) {
    const answer = await this.answersRepository.findById(
      answerComment.answerId.toString(),
    )

    if (answer) {
      await this.sendNotification.execute({
        recipientId: answer.authorId.toString(),
        title: 'Novo comentário na resposta',
        content: `Você recebeu um novo comentário em "${answer.content.substring(0, 20).concat('...')}"`,
      })
    }
  }
}
