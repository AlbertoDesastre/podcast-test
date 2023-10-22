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

const podcastEpisodes = [
  {
    id: "1",
    title: "Rock Music Podcast",
    artist: "John Smith",
    episodes: [
      {
        episodeTitle: "Episode 1",
        date: "2023-10-01",
        duration: "45:30",
      },
      {
        episodeTitle: "Episode 2",
        date: "2023-10-05",
        duration: "50:15",
      },
      {
        episodeTitle: "Episode 3",
        date: "2023-10-10",
        duration: "48:55",
      },
    ],
  },
  {
    id: "2",
    title: "Cooking Talks",
    artist: "Emily Johnson",
    episodes: [
      {
        episodeTitle: "Episode 1",
        date: "2023-09-15",
        duration: "42:20",
      },
      {
        episodeTitle: "Episode 2",
        date: "2023-09-20",
        duration: "48:10",
      },
      {
        episodeTitle: "Episode 3",
        date: "2023-09-25",
        duration: "51:30",
      },
    ],
  },
  {
    id: "3",
    title: "Mystery Stories",
    artist: "David Brown",
    episodes: [
      {
        episodeTitle: "Episode 1",
        date: "2023-09-05",
        duration: "47:45",
      },
      {
        episodeTitle: "Episode 2",
        date: "2023-09-10",
        duration: "53:00",
      },
      {
        episodeTitle: "Episode 3",
        date: "2023-09-15",
        duration: "46:25",
      },
    ],
  },
  {
    id: "4",
    title: "Science Talks",
    artist: "Sophia Miller",
    episodes: [
      {
        episodeTitle: "Episode 1",
        date: "2023-08-20",
        duration: "39:30",
      },
      {
        episodeTitle: "Episode 2",
        date: "2023-08-25",
        duration: "44:20",
      },
      {
        episodeTitle: "Episode 3",
        date: "2023-08-30",
        duration: "41:15",
      },
    ],
  },
  {
    id: "5",
    title: "Tech News Updates",
    artist: "Michael Johnson",
    episodes: [
      {
        episodeTitle: "Episode 1",
        date: "2023-08-10",
        duration: "35:55",
      },
      {
        episodeTitle: "Episode 2",
        date: "2023-08-15",
        duration: "40:40",
      },
      {
        episodeTitle: "Episode 3",
        date: "2023-08-20",
        duration: "38:50",
      },
    ],
  },
  {
    id: "6",
    title: "Business Success Stories",
    artist: "Jennifer Davis",
    episodes: [
      {
        episodeTitle: "Episode 1",
        date: "2023-11-01",
        duration: "42:20",
      },
      {
        episodeTitle: "Episode 2",
        date: "2023-11-05",
        duration: "45:15",
      },
      {
        episodeTitle: "Episode 3",
        date: "2023-11-10",
        duration: "48:55",
      },
    ],
  },
  {
    id: "7",
    title: "Travel Adventures",
    artist: "Robert Wilson",
    episodes: [
      {
        episodeTitle: "Episode 1",
        date: "2023-10-01",
        duration: "39:30",
      },
      {
        episodeTitle: "Episode 2",
        date: "2023-10-05",
        duration: "41:45",
      },
      {
        episodeTitle: "Episode 3",
        date: "2023-10-10",
        duration: "44:30",
      },
    ],
  },
  {
    id: "8",
    title: "History Uncovered",
    artist: "Sophia Lee",
    episodes: [
      {
        episodeTitle: "Episode 1",
        date: "2023-10-15",
        duration: "37:50",
      },
      {
        episodeTitle: "Episode 2",
        date: "2023-10-20",
        duration: "40:20",
      },
      {
        episodeTitle: "Episode 3",
        date: "2023-10-25",
        duration: "38:10",
      },
    ],
  },
  {
    id: "9",
    title: "Health and Wellness Tips",
    artist: "Daniel Anderson",
    episodes: [
      {
        episodeTitle: "Episode 1",
        date: "2023-09-15",
        duration: "35:55",
      },
      {
        episodeTitle: "Episode 2",
        date: "2023-09-20",
        duration: "37:40",
      },
      {
        episodeTitle: "Episode 3",
        date: "2023-09-25",
        duration: "36:50",
      },
    ],
  },
  {
    id: "10",
    title: "Comedy Hour",
    artist: "Sophia Hernandez",
    episodes: [
      {
        episodeTitle: "Episode 1",
        date: "2023-09-05",
        duration: "31:45",
      },
      {
        episodeTitle: "Episode 2",
        date: "2023-09-10",
        duration: "34:20",
      },
      {
        episodeTitle: "Episode 3",
        date: "2023-09-15",
        duration: "32:30",
      },
    ],
  },
  {
    id: "11",
    title: "Home Improvement",
    artist: "Emily Parker",
    episodes: [
      {
        episodeTitle: "Episode 1",
        date: "2023-11-01",
        duration: "39:45",
      },
      {
        episodeTitle: "Episode 2",
        date: "2023-11-05",
        duration: "42:10",
      },
      {
        episodeTitle: "Episode 3",
        date: "2023-11-10",
        duration: "38:30",
      },
    ],
  },
  {
    id: "12",
    title: "Gardening Tips",
    artist: "William Thomas",
    episodes: [
      {
        episodeTitle: "Episode 1",
        date: "2023-10-01",
        duration: "36:20",
      },
      {
        episodeTitle: "Episode 2",
        date: "2023-10-05",
        duration: "37:40",
      },
      {
        episodeTitle: "Episode 3",
        date: "2023-10-10",
        duration: "35:15",
      },
    ],
  },
  {
    id: "13",
    title: "Motivational Talks",
    artist: "Samantha White",
    episodes: [
      {
        episodeTitle: "Episode 1",
        date: "2023-09-01",
        duration: "32:50",
      },
      {
        episodeTitle: "Episode 2",
        date: "2023-09-05",
        duration: "34:25",
      },
      {
        episodeTitle: "Episode 3",
        date: "2023-09-10",
        duration: "31:15",
      },
    ],
  },
  {
    id: "14",
    title: "Wildlife Encounters",
    artist: "Matthew Green",
    episodes: [
      {
        episodeTitle: "Episode 1",
        date: "2023-08-01",
        duration: "28:40",
      },
      {
        episodeTitle: "Episode 2",
        date: "2023-08-05",
        duration: "30:20",
      },
      {
        episodeTitle: "Episode 3",
        date: "2023-08-10",
        duration: "29:15",
      },
    ],
  },
  {
    id: "15",
    title: "Space Explorations",
    artist: "Olivia Moore",
    episodes: [
      {
        episodeTitle: "Episode 1",
        date: "2023-07-01",
        duration: "27:30",
      },
      {
        episodeTitle: "Episode 2",
        date: "2023-07-05",
        duration: "28:50",
      },
      {
        episodeTitle: "Episode 3",
        date: "2023-07-10",
        duration: "26:40",
      },
    ],
  },
  {
    id: "16",
    title: "Finance Insights",
    artist: "William Clark",
    episodes: [
      {
        episodeTitle: "Episode 1",
        date: "2023-11-15",
        duration: "42:30",
      },
      {
        episodeTitle: "Episode 2",
        date: "2023-11-20",
        duration: "45:10",
      },
      {
        episodeTitle: "Episode 3",
        date: "2023-11-25",
        duration: "39:20",
      },
    ],
  },
  {
    id: "17",
    title: "Art and Creativity",
    artist: "Sophia Adams",
    episodes: [
      {
        episodeTitle: "Episode 1",
        date: "2023-10-15",
        duration: "37:40",
      },
      {
        episodeTitle: "Episode 2",
        date: "2023-10-20",
        duration: "40:05",
      },
      {
        episodeTitle: "Episode 3",
        date: "2023-10-25",
        duration: "36:50",
      },
    ],
  },
  {
    id: "18",
    title: "Healthy Living",
    artist: "Daniel Harris",
    episodes: [
      {
        episodeTitle: "Episode 1",
        date: "2023-09-15",
        duration: "34:25",
      },
      {
        episodeTitle: "Episode 2",
        date: "2023-09-20",
        duration: "36:50",
      },
      {
        episodeTitle: "Episode 3",
        date: "2023-09-25",
        duration: "33:15",
      },
    ],
  },
  {
    id: "19",
    title: "Travel Diaries",
    artist: "Oliver Smith",
    episodes: [
      {
        episodeTitle: "Episode 1",
        date: "2023-08-15",
        duration: "29:45",
      },
      {
        episodeTitle: "Episode 2",
        date: "2023-08-20",
        duration: "32:10",
      },
      {
        episodeTitle: "Episode 3",
        date: "2023-08-25",
        duration: "28:30",
      },
    ],
  },
  {
    id: "20",
    title: "Science Experiments",
    artist: "Emma Lewis",
    episodes: [
      {
        episodeTitle: "Episode 1",
        date: "2023-07-15",
        duration: "26:20",
      },
      {
        episodeTitle: "Episode 2",
        date: "2023-07-20",
        duration: "28:45",
      },
      {
        episodeTitle: "Episode 3",
        date: "2023-07-25",
        duration: "25:50",
      },
    ],
  },
  {
    id: "21",
    title: "Technology Trends",
    artist: "Jacob Wilson",
    episodes: [
      {
        episodeTitle: "Episode 1",
        date: "2023-11-15",
        duration: "42:30",
      },
      {
        episodeTitle: "Episode 2",
        date: "2023-11-20",
        duration: "45:10",
      },
      {
        episodeTitle: "Episode 3",
        date: "2023-11-25",
        duration: "39:20",
      },
    ],
  },
  {
    id: "22",
    title: "Nature Explorations",
    artist: "Ava Martin",
    episodes: [
      {
        episodeTitle: "Episode 1",
        date: "2023-10-15",
        duration: "37:40",
      },
      {
        episodeTitle: "Episode 2",
        date: "2023-10-20",
        duration: "40:05",
      },
      {
        episodeTitle: "Episode 3",
        date: "2023-10-25",
        duration: "36:50",
      },
    ],
  },
  {
    id: "23",
    title: "Business Insights",
    artist: "Ethan Turner",
    episodes: [
      {
        episodeTitle: "Episode 1",
        date: "2023-09-15",
        duration: "34:25",
      },
      {
        episodeTitle: "Episode 2",
        date: "2023-09-20",
        duration: "36:50",
      },
      {
        episodeTitle: "Episode 3",
        date: "2023-09-25",
        duration: "33:15",
      },
    ],
  },
  {
    id: "24",
    title: "Healthy Cooking",
    artist: "Olivia Robinson",
    episodes: [
      {
        episodeTitle: "Episode 1",
        date: "2023-08-15",
        duration: "29:45",
      },
      {
        episodeTitle: "Episode 2",
        date: "2023-08-20",
        duration: "32:10",
      },
      {
        episodeTitle: "Episode 3",
        date: "2023-08-25",
        duration: "28:30",
      },
    ],
  },
  {
    id: "25",
    title: "Space Chronicles",
    artist: "Lucas Parker",
    episodes: [
      {
        episodeTitle: "Episode 1",
        date: "2023-07-15",
        duration: "26:20",
      },
      {
        episodeTitle: "Episode 2",
        date: "2023-07-20",
        duration: "28:45",
      },
      {
        episodeTitle: "Episode 3",
        date: "2023-07-25",
        duration: "25:50",
      },
    ],
  },
  {
    id: "26",
    title: "Adventure Time",
    artist: "Sophie Davis",
    episodes: [
      {
        episodeTitle: "Episode 1",
        date: "2023-12-15",
        duration: "31:45",
      },
      {
        episodeTitle: "Episode 2",
        date: "2023-12-20",
        duration: "34:20",
      },
      {
        episodeTitle: "Episode 3",
        date: "2023-12-25",
        duration: "29:10",
      },
    ],
  },
  {
    id: "27",
    title: "World History",
    artist: "Liam White",
    episodes: [
      {
        episodeTitle: "Episode 1",
        date: "2023-11-15",
        duration: "36:30",
      },
      {
        episodeTitle: "Episode 2",
        date: "2023-11-20",
        duration: "39:05",
      },
      {
        episodeTitle: "Episode 3",
        date: "2023-11-25",
        duration: "35:20",
      },
    ],
  },
  {
    id: "28",
    title: "Fashion Trends",
    artist: "Mia Evans",
    episodes: [
      {
        episodeTitle: "Episode 1",
        date: "2023-10-15",
        duration: "32:15",
      },
      {
        episodeTitle: "Episode 2",
        date: "2023-10-20",
        duration: "34:50",
      },
      {
        episodeTitle: "Episode 3",
        date: "2023-10-25",
        duration: "30:40",
      },
    ],
  },
  {
    id: "29",
    title: "Science Discoveries",
    artist: "Aiden Clark",
    episodes: [
      {
        episodeTitle: "Episode 1",
        date: "2023-09-15",
        duration: "27:55",
      },
      {
        episodeTitle: "Episode 2",
        date: "2023-09-20",
        duration: "30:20",
      },
      {
        episodeTitle: "Episode 3",
        date: "2023-09-25",
        duration: "26:40",
      },
    ],
  },
  {
    id: "30",
    title: "Travel Journals",
    artist: "Zoe Smith",
    episodes: [
      {
        episodeTitle: "Episode 1",
        date: "2023-08-15",
        duration: "24:50",
      },
      {
        episodeTitle: "Episode 2",
        date: "2023-08-20",
        duration: "27:15",
      },
      {
        episodeTitle: "Episode 3",
        date: "2023-08-25",
        duration: "23:30",
      },
    ],
  },
];

export { podcastsTemplate, podcastsLongTemplate, podcastEpisodes };
