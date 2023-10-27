export class posts {
  id: string;
  title: string;
  body: string;
  userId: string;
}

export class TableData {
  limit: number;
  posts: posts[];
  skip: number;
  total: number;
}
