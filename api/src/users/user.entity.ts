import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
	
	@Column()
  email: string;

	@Column()
  password: string;

  @Column({ nullable: true })
  location: string;

  @Column({ type: 'timestamp' })
  created: Date;
}