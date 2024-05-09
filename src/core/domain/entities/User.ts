export class User {
  user_id: number;
  name: string;
  surname: string;
  email: string;
  photo: string;
  native_language: string;
  learning: string;
  description: string;
  ratingAvg: number;
  createdAt: Date;
  updatedAt: Date;

  static create(newUser: User): User {
    const {
      name,
      surname,
      email,
      photo,
      native_language,
      learning,
      description,
    } = newUser;
    const user = new User();
    user.name = name;
    user.surname = surname;
    user.email = email;
    user.photo = photo;
    user.native_language = native_language;
    user.learning = learning;
    user.description = description;

    return user;
  }
}
