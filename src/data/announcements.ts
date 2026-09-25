export interface Announcement {
  id: string;
  text: string;
  textHi: string;
  date: string;
  type: 'info' | 'important' | 'update';
}

export const announcements: Announcement[] = [
  {
    id: 'a1',
    text: 'Team registration for APL Season 5 is available through the official registration portal.',
    textHi: 'APL Season 5 के लिए टीम पंजीकरण आधिकारिक पंजीकरण पोर्टल के माध्यम से करें।',
    date: '2025-01-15',
    type: 'important',
  },
];
