import { Entity } from "../../core/entities/entity"
import { UniqueEntityId } from "../../core/entities/unique-entity-id"

interface InstructorProps {
  name: string
}

export class Instructor extends Entity<InstructorProps> {
  static create(
    props: InstructorProps, 
    id?: UniqueEntityId
  ) {
    const answer = new Instructor(props, id)

    return answer
  }
}