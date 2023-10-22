const podcastsTemplate = [
  {
    id: "1",
    title: "Rock Music Podcast",
    artist: "Artist 1",
    images: [
      {
        attributes: { height: "100" },
        label: "Image 1-1",
      },
      {
        attributes: { height: "200" },
        label: "Image 1-2",
      },
      {
        attributes: { height: "300" },
        label: "https://images.app.goo.gl/Dv267aTz5oi7XRXg7",
      },
    ],
  },
  {
    id: "2",
    title: "Cooking Talks",
    artist: "Artist 2",
    images: [
      {
        attributes: { height: "150" },
        label: "Image 2-1",
      },
      {
        attributes: { height: "250" },
        label: "Image 2-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 3 jeje",
      },
    ],
  },
  {
    id: "3",
    title: "Mystery Stories",
    artist: "Artist 3",
    images: [
      {
        attributes: { height: "120" },
        label: "Image 3-1",
      },
      {
        attributes: { height: "220" },
        label: "Image 3-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 3 jeje",
      },
    ],
  },
  {
    id: "4",
    title: "Science Talks",
    artist: "Artist 4",
    images: [
      {
        attributes: { height: "130" },
        label: "Image 4-1",
      },
      {
        attributes: { height: "230" },
        label: "Image 4-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 3 jeje",
      },
    ],
  },
  {
    id: "5",
    title: "Tech News Updates",
    artist: "Artist 5",
    images: [
      {
        attributes: { height: "110" },
        label: "Image 5-1",
      },
      {
        attributes: { height: "210" },
        label: "Image 5-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 3 jeje",
      },
    ],
  },
  {
    id: "6",
    title: "Business Success Stories",
    artist: "Artist 6",
    images: [
      {
        attributes: { height: "100" },
        label: "Image 6-1",
      },
      {
        attributes: { height: "200" },
        label: "Image 6-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 3 jeje",
      },
    ],
  },
  {
    id: "7",
    title: "Travel Adventures",
    artist: "Artist 7",
    images: [
      {
        attributes: { height: "150" },
        label: "Image 7-1",
      },
      {
        attributes: { height: "250" },
        label: "Image 7-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 3 jeje",
      },
    ],
  },
  {
    id: "8",
    title: "History Uncovered",
    artist: "Artist 8",
    images: [
      {
        attributes: { height: "120" },
        label: "Image 8-1",
      },
      {
        attributes: { height: "220" },
        label: "Image 8-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 3 jeje",
      },
    ],
  },
  {
    id: "9",
    title: "Health and Wellness Tips",
    artist: "Artist 9",
    images: [
      {
        attributes: { height: "130" },
        label: "Image 9-1",
      },
      {
        attributes: { height: "230" },
        label: "Image 9-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 3 jeje",
      },
    ],
  },
  {
    id: "10",
    title: "Comedy Hour",
    artist: "Artist 10",
    images: [
      {
        attributes: { height: "110" },
        label: "Image 10-1",
      },
      {
        attributes: { height: "210" },
        label: "Image 10-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 3 jeje",
      },
    ],
  },
];

const podcastsLongTemplate = [
  {
    id: "1",
    title: "Rock Music Podcast",
    artist: "John Smith",
    images: [
      {
        attributes: { height: "100" },
        label: "Image 1-1",
      },
      {
        attributes: { height: "200" },
        label: "Image 1-2",
      },
      {
        attributes: { height: "300" },
        label: "https://images.app.goo.gl/Dv267aTz5oi7XRXg7",
      },
    ],
  },
  {
    id: "2",
    title: "Cooking Talks",
    artist: "Emily Johnson",
    images: [
      {
        attributes: { height: "150" },
        label: "Image 2-1",
      },
      {
        attributes: { height: "250" },
        label: "Image 2-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 3 jeje",
      },
    ],
  },
  {
    id: "3",
    title: "Mystery Stories",
    artist: "David Brown",
    images: [
      {
        attributes: { height: "120" },
        label: "Image 3-1",
      },
      {
        attributes: { height: "220" },
        label: "Image 3-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 3 jeje",
      },
    ],
  },
  {
    id: "4",
    title: "Science Talks",
    artist: "Sophia Miller",
    images: [
      {
        attributes: { height: "130" },
        label: "Image 4-1",
      },
      {
        attributes: { height: "230" },
        label: "Image 4-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 3 jeje",
      },
    ],
  },
  {
    id: "5",
    title: "Tech News Updates",
    artist: "Michael Johnson",
    images: [
      {
        attributes: { height: "110" },
        label: "Image 5-1",
      },
      {
        attributes: { height: "210" },
        label: "Image 5-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 3 jeje",
      },
    ],
  },
  {
    id: "6",
    title: "Business Success Stories",
    artist: "Jennifer Davis",
    images: [
      {
        attributes: { height: "100" },
        label: "Image 6-1",
      },
      {
        attributes: { height: "200" },
        label: "Image 6-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 3 jeje",
      },
    ],
  },
  {
    id: "7",
    title: "Travel Adventures",
    artist: "Robert Wilson",
    images: [
      {
        attributes: { height: "150" },
        label: "Image 7-1",
      },
      {
        attributes: { height: "250" },
        label: "Image 7-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 3 jeje",
      },
    ],
  },
  {
    id: "8",
    title: "History Uncovered",
    artist: "Sophia Lee",
    images: [
      {
        attributes: { height: "120" },
        label: "Image 8-1",
      },
      {
        attributes: { height: "220" },
        label: "Image 8-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 3 jeje",
      },
    ],
  },
  {
    id: "9",
    title: "Health and Wellness Tips",
    artist: "Daniel Anderson",
    images: [
      {
        attributes: { height: "130" },
        label: "Image 9-1",
      },
      {
        attributes: { height: "230" },
        label: "Image 9-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 3 jeje",
      },
    ],
  },
  {
    id: "10",
    title: "Comedy Hour",
    artist: "Sophia Hernandez",
    images: [
      {
        attributes: { height: "110" },
        label: "Image 10-1",
      },
      {
        attributes: { height: "210" },
        label: "Image 10-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 3 jeje",
      },
    ],
  },
  {
    id: "11",
    title: "Home Improvement",
    artist: "Emily Parker",
    images: [
      {
        attributes: { height: "150" },
        label: "Image 11-1",
      },
      {
        attributes: { height: "250" },
        label: "Image 11-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 11-3",
      },
    ],
  },
  {
    id: "12",
    title: "Gardening Tips",
    artist: "William Thomas",
    images: [
      {
        attributes: { height: "120" },
        label: "Image 12-1",
      },
      {
        attributes: { height: "220" },
        label: "Image 12-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 12-3",
      },
    ],
  },
  {
    id: "13",
    title: "Motivational Talks",
    artist: "Samantha White",
    images: [
      {
        attributes: { height: "130" },
        label: "Image 13-1",
      },
      {
        attributes: { height: "230" },
        label: "Image 13-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 13-3",
      },
    ],
  },
  {
    id: "14",
    title: "Wildlife Encounters",
    artist: "Matthew Green",
    images: [
      {
        attributes: { height: "110" },
        label: "Image 14-1",
      },
      {
        attributes: { height: "210" },
        label: "Image 14-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 14-3",
      },
    ],
  },
  {
    id: "15",
    title: "Space Explorations",
    artist: "Olivia Moore",
    images: [
      {
        attributes: { height: "100" },
        label: "Image 15-1",
      },
      {
        attributes: { height: "200" },
        label: "Image 15-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 15-3",
      },
    ],
  },
  {
    id: "16",
    title: "Finance Insights",
    artist: "William Clark",
    images: [
      {
        attributes: { height: "150" },
        label: "Image 16-1",
      },
      {
        attributes: { height: "250" },
        label: "Image 16-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 16-3",
      },
    ],
  },
  {
    id: "17",
    title: "Art and Creativity",
    artist: "Sophia Adams",
    images: [
      {
        attributes: { height: "120" },
        label: "Image 17-1",
      },
      {
        attributes: { height: "220" },
        label: "Image 17-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 17-3",
      },
    ],
  },
  {
    id: "18",
    title: "Healthy Living",
    artist: "Daniel Harris",
    images: [
      {
        attributes: { height: "130" },
        label: "Image 18-1",
      },
      {
        attributes: { height: "230" },
        label: "Image 18-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 18-3",
      },
    ],
  },
  {
    id: "19",
    title: "Travel Diaries",
    artist: "Oliver Smith",
    images: [
      {
        attributes: { height: "110" },
        label: "Image 19-1",
      },
      {
        attributes: { height: "210" },
        label: "Image 19-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 19-3",
      },
    ],
  },
  {
    id: "20",
    title: "Science Experiments",
    artist: "Emma Lewis",
    images: [
      {
        attributes: { height: "100" },
        label: "Image 20-1",
      },
      {
        attributes: { height: "200" },
        label: "Image 20-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 20-3",
      },
    ],
  },
  {
    id: "21",
    title: "Technology Trends",
    artist: "Jacob Wilson",
    images: [
      {
        attributes: { height: "110" },
        label: "Image 21-1",
      },
      {
        attributes: { height: "210" },
        label: "Image 21-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 21-3",
      },
    ],
  },
  {
    id: "22",
    title: "Nature Explorations",
    artist: "Ava Martin",
    images: [
      {
        attributes: { height: "120" },
        label: "Image 22-1",
      },
      {
        attributes: { height: "220" },
        label: "Image 22-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 22-3",
      },
    ],
  },
  {
    id: "23",
    title: "Business Insights",
    artist: "Ethan Turner",
    images: [
      {
        attributes: { height: "130" },
        label: "Image 23-1",
      },
      {
        attributes: { height: "230" },
        label: "Image 23-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 23-3",
      },
    ],
  },
  {
    id: "24",
    title: "Healthy Cooking",
    artist: "Olivia Robinson",
    images: [
      {
        attributes: { height: "140" },
        label: "Image 24-1",
      },
      {
        attributes: { height: "240" },
        label: "Image 24-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 24-3",
      },
    ],
  },
  {
    id: "25",
    title: "Space Chronicles",
    artist: "Lucas Parker",
    images: [
      {
        attributes: { height: "150" },
        label: "Image 25-1",
      },
      {
        attributes: { height: "250" },
        label: "Image 25-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 25-3",
      },
    ],
  },
  {
    id: "26",
    title: "Adventure Time",
    artist: "Sophie Davis",
    images: [
      {
        attributes: { height: "160" },
        label: "Image 26-1",
      },
      {
        attributes: { height: "260" },
        label: "Image 26-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 26-3",
      },
    ],
  },
  {
    id: "27",
    title: "World History",
    artist: "Liam White",
    images: [
      {
        attributes: { height: "170" },
        label: "Image 27-1",
      },
      {
        attributes: { height: "270" },
        label: "Image 27-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 27-3",
      },
    ],
  },
  {
    id: "28",
    title: "Fashion Trends",
    artist: "Mia Evans",
    images: [
      {
        attributes: { height: "180" },
        label: "Image 28-1",
      },
      {
        attributes: { height: "280" },
        label: "Image 28-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 28-3",
      },
    ],
  },
  {
    id: "29",
    title: "Science Discoveries",
    artist: "Aiden Clark",
    images: [
      {
        attributes: { height: "190" },
        label: "Image 29-1",
      },
      {
        attributes: { height: "290" },
        label: "Image 29-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 29-3",
      },
    ],
  },
  {
    id: "30",
    title: "Travel Journals",
    artist: "Zoe Smith",
    images: [
      {
        attributes: { height: "200" },
        label: "Image 30-1",
      },
      {
        attributes: { height: "300" },
        label: "Image 30-2",
      },
      {
        attributes: { height: "300" },
        label: "Image 30-3",
      },
    ],
  },
];

export { podcastsTemplate, podcastsLongTemplate };
