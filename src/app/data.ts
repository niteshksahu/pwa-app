
export interface ContentItem {
  id: number;
  title: string;
  description: string;
  thumbnail: string; // URL to image
  category: string;
}

export const fakeContent: ContentItem[] = [
  {
    id: 1,
    title: 'Movie 1',
    description: 'A thrilling adventure.',
    thumbnail: 'https://i.ytimg.com/vi/kpiM9_P-hkQ/maxresdefault.jpg',
    category: 'Popular'
  },
  {
    id: 2,
    title: 'Show 1',
    description: 'Comedy series.',
    thumbnail: 'https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg',
    category: 'Trending'
  },
  {
    id: 3,
    title: 'Movie 2',
    description: 'Sci-fi epic.',
    thumbnail: 'https://i.ytimg.com/vi/kpiM9_P-hkQ/maxresdefault.jpg',
    category: 'Popular'
  },
  {
    id: 4,
    title: 'Show 2',
    description: 'Drama.',
    thumbnail: 'https://i.ytimg.com/vi/kpiM9_P-hkQ/maxresdefault.jpg',
    category: 'Trending'
  },
  {
    id: 5,
    title: 'Movie 3',
    description: 'Action packed.',
    thumbnail: 'https://i.ytimg.com/vi/kpiM9_P-hkQ/maxresdefault.jpg',
    category: 'Popular'
  },
  {
    id: 6,
    title: 'Show 3',
    description: 'Mystery.',
    thumbnail: 'https://i.ytimg.com/vi/kpiM9_P-hkQ/maxresdefault.jpg',
    category: 'New'
  },
  {
    id: 7,
    title: 'Movie 4',
    description: 'Romance.',
    thumbnail: 'https://i.ytimg.com/vi/kpiM9_P-hkQ/maxresdefault.jpg',
    category: 'New'
  },
  {
    id: 8,
    title: 'Show 4',
    description: 'Horror.',
    thumbnail: 'https://i.ytimg.com/vi/kpiM9_P-hkQ/maxresdefault.jpg',
    category: 'Trending'
  }
];

// export const fakeContent: ContentItem[] = [
//   { id: 1, title: 'Movie 1', description: 'A thrilling adventure.', thumbnail: 'https://www.google.com/imgres?q=movie%20thumbnail&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FkpiM9_P-hkQ%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DkpiM9_P-hkQ&docid=MD7-S63MZXIHyM&tbnid=cOgldtEOv786LM&vet=12ahUKEwjKp4GYieqQAxUtTGwGHcF7JBIQM3oECBsQAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjKp4GYieqQAxUtTGwGHcF7JBIQM3oECBsQAA', category: 'Popular' },
//   { id: 2, title: 'Show 1', description: 'Comedy series.', thumbnail: 'https://www.google.com/imgres?q=movie%20thumbnail&imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FkpiM9_P-hkQ%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DkpiM9_P-hkQ&docid=MD7-S63MZXIHyM&tbnid=cOgldtEOv786LM&vet=12ahUKEwjKp4GYieqQAxUtTGwGHcF7JBIQM3oECBsQAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjKp4GYieqQAxUtTGwGHcF7JBIQM3oECBsQAA', category: 'Trending' },
//   { id: 3, title: 'Movie 2', description: 'Sci-fi epic.', thumbnail: 'https://via.placeholder.com/200x300?text=Movie2', category: 'Popular' },
//   { id: 4, title: 'Show 2', description: 'Drama.', thumbnail: 'https://via.placeholder.com/200x300?text=Show2', category: 'Trending' },
//   // Add more (10-20 items) for rows
//   { id: 5, title: 'Movie 3', description: 'Action packed.', thumbnail: 'https://via.placeholder.com/200x300?text=Movie3', category: 'Popular' },
//   { id: 6, title: 'Show 3', description: 'Mystery.', thumbnail: 'https://via.placeholder.com/200x300?text=Show3', category: 'New' },
//   { id: 7, title: 'Movie 4', description: 'Romance.', thumbnail: 'https://via.placeholder.com/200x300?text=Movie4', category: 'New' },
//   { id: 8, title: 'Show 4', description: 'Horror.', thumbnail: 'https://via.placeholder.com/200x300?text=Show4', category: 'Trending' },
// ];