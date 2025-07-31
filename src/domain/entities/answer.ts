import { Entity } from "../../core/entities/entity"
interface AnswerProps {
  content: string
}

export class Answer extends Entity {
  public content: string

  constructor(props: AnswerProps, id?: string) {
    super(id)
    this.content = props.content
  }
}