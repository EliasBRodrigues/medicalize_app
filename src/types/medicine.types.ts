export type BulaItem = {
  Descrição: string;
};

export type BulaProps = {
  bula: Record<string, BulaItem>;
};

export type BulaItemProps = {
  item: {
    title: string;
    description: string;
  };
};
