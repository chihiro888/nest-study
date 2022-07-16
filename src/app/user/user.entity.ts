import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("_user", { schema: "study" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id", comment: "番号" })
  id: number;

  @Column("varchar", {
    name: "account",
    nullable: true,
    comment: "アカウント",
    length: 255,
  })
  account: string | null;

  @Column("varchar", {
    name: "password",
    nullable: true,
    comment: "パスワード",
    length: 255,
  })
  password: string | null;

  @Column("varchar", {
    name: "username",
    nullable: true,
    comment: "ユーサー名",
    length: 255,
  })
  username: string | null;

  @Column("varchar", {
    name: "gender",
    nullable: true,
    comment: "性別",
    length: 30,
  })
  gender: string | null;

  @Column("datetime", {
    name: "created_at",
    nullable: true,
    comment: "作成日付",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("datetime", {
    name: "updated_at",
    nullable: true,
    comment: "修正日付",
  })
  updatedAt: Date | null;

  @Column("datetime", {
    name: "deleted_at",
    nullable: true,
    comment: "削除日付",
  })
  deletedAt: Date | null;
}
