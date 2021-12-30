import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Offer extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    company: string;

    @Column()
    jobTitle: string;

    @Column({ type: 'decimal', precision: 2})
    baseSalary: number;

    @Column({type: 'decimal', precision: 2})
    signingBonus: string;

    @Column({type: 'decimal', precision: 2})
    cashBonus: string;

    @Column({type: 'decimal', precision: 2})
    stockBonus: string;

    @Column()
    retirementMatch: boolean;

    @Column()
    timeOff: number;

    @Column()
    remoteDays: number;

    @Column()
    location: string;

    @Column({ type: 'timestamp' })
    created: Date;
}