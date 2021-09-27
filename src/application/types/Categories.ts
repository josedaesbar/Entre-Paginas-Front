type SubCategories = {
  title: string;
};

export interface Categories {
  id: number;
  title: string;
  subCategories: SubCategories[];
}
