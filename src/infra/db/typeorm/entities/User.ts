import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";
import { UserEvent, UserRole } from "../../../../domain/models/User";

@Entity("users")
export default class User extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column({ name: "first_name" })
  firstName: string;

  @Column({ name: "last_name" })
  lastName: string;

  @Column({ name: "email" })
  email: string;

  @Column({ name: "phone_number" })
  phoneNumber: string;

  @Column({ name: "password" })
  password: string;

  @Column({ name: "role", type: "enum", enum: UserRole })
  role: UserRole;

  @Column({ name: "created_at" })
  creationDate: Date;

  @Column({ name: "current_event", type: "enum", enum: UserEvent })
  currentEvent: UserEvent;
}