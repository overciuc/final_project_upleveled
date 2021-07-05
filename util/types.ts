export type User = {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
};

export type UserWithPasswordHash = User & {
  passwordHash: string;
};

export type Session = {
  id: number;
  token: string;
  expiry: Date;
  userId: number;
};

export type District = {
  zip: number;
  district_name: string;
};

export type ApplicationError = { message: string };

export type Review = {
  user_id: number;
  district: number;
  safety_score: number;
  safety_comment: string;
  parks_score: number;
  parks_comment: string;
  shopping_score: number;
  shopping_comment: string;
  kids_friendly_score: number;
  kids_friendly_comment: string;
  public_transport_score: number;
  public_transport_comment: string;
  dining_score: number;
  dining_comment: string;
  entertainment_score: number;
  entertainment_comment: string;
  noise_level_score: number;
  noise_level_comment: string;
  street_name: string;
  house_number: string;
  date_string: string;
  id: number;
  district_name: string;
  average_score: number;
};
