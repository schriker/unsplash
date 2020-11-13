export type searchQueryType = {
  query: string;
  page?: number;
  per_page?: number;
};

export type Autocomplete = {
  query: string;
  priority: number;
};
