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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien commodo, convallis turpis efficitur, lacinia dui. Maecenas pharetra vestibulum velit, et dictum dolor.",
    episodes: [
      {
        id: "1",
        episodeTitle: "Episode 1",
        date: "2023-10-01",
        duration: "45:30",
      },
      {
        id: "2",
        episodeTitle: "Episode 2",
        date: "2023-10-05",
        duration: "50:15",
      },
      {
        id: "3",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien commodo, convallis turpis efficitur, lacinia dui. Maecenas pharetra vestibulum velit, et dictum dolor.",
    episodes: [
      {
        id: "4",
        episodeTitle: "Episode 1",
        date: "2023-09-15",
        duration: "42:20",
      },
      {
        id: "5",
        episodeTitle: "Episode 2",
        date: "2023-09-20",
        duration: "48:10",
      },
      {
        id: "6",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien commodo, convallis turpis efficitur, lacinia dui. Maecenas pharetra vestibulum velit, et dictum dolor.",
    episodes: [
      {
        id: "7",
        episodeTitle: "Episode 1",
        date: "2023-09-05",
        duration: "47:45",
      },
      {
        id: "8",
        episodeTitle: "Episode 2",
        date: "2023-09-10",
        duration: "53:00",
      },
      {
        id: "9",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien commodo, convallis turpis efficitur, lacinia dui. Maecenas pharetra vestibulum velit, et dictum dolor.",
    episodes: [
      {
        id: "10",
        episodeTitle: "Episode 1",
        date: "2023-08-20",
        duration: "39:30",
      },
      {
        id: "11",
        episodeTitle: "Episode 2",
        date: "2023-08-25",
        duration: "44:20",
      },
      {
        id: "12",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien commodo, convallis turpis efficitur, lacinia dui. Maecenas pharetra vestibulum velit, et dictum dolor.",
    episodes: [
      {
        id: "13",
        episodeTitle: "Episode 1",
        date: "2023-08-10",
        duration: "35:55",
      },
      {
        id: "14",
        episodeTitle: "Episode 2",
        date: "2023-08-15",
        duration: "40:40",
      },
      {
        id: "15",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien commodo, convallis turpis efficitur, lacinia dui. Maecenas pharetra vestibulum velit, et dictum dolor.",
    episodes: [
      {
        id: "16",
        episodeTitle: "Episode 1",
        date: "2023-11-01",
        duration: "42:20",
      },
      {
        id: "17",
        episodeTitle: "Episode 2",
        date: "2023-11-05",
        duration: "45:15",
      },
      {
        id: "18",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien commodo, convallis turpis efficitur, lacinia dui. Maecenas pharetra vestibulum velit, et dictum dolor.",
    episodes: [
      {
        id: "19",
        episodeTitle: "Episode 1",
        date: "2023-10-01",
        duration: "39:30",
      },
      {
        id: "20",
        episodeTitle: "Episode 2",
        date: "2023-10-05",
        duration: "41:45",
      },
      {
        id: "21",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien commodo, convallis turpis efficitur, lacinia dui. Maecenas pharetra vestibulum velit, et dictum dolor.",
    episodes: [
      {
        id: "22",
        episodeTitle: "Episode 1",
        date: "2023-10-15",
        duration: "37:50",
      },
      {
        id: "23",
        episodeTitle: "Episode 2",
        date: "2023-10-20",
        duration: "40:20",
      },
      {
        id: "24",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien commodo, convallis turpis efficitur, lacinia dui. Maecenas pharetra vestibulum velit, et dictum dolor.",
    episodes: [
      {
        id: "25",
        episodeTitle: "Episode 1",
        date: "2023-09-15",
        duration: "35:55",
      },
      {
        id: "26",
        episodeTitle: "Episode 2",
        date: "2023-09-20",
        duration: "37:40",
      },
      {
        id: "27",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien commodo, convallis turpis efficitur, lacinia dui. Maecenas pharetra vestibulum velit, et dictum dolor.",
    episodes: [
      {
        id: "28",
        episodeTitle: "Episode 1",
        date: "2023-09-05",
        duration: "31:45",
      },
      {
        id: "29",
        episodeTitle: "Episode 2",
        date: "2023-09-10",
        duration: "34:20",
      },
      {
        id: "30",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien commodo, convallis turpis efficitur, lacinia dui. Maecenas pharetra vestibulum velit, et dictum dolor.",
    episodes: [
      {
        id: "31",
        episodeTitle: "Episode 1",
        date: "2023-11-01",
        duration: "39:45",
      },
      {
        id: "32",
        episodeTitle: "Episode 2",
        date: "2023-11-05",
        duration: "42:10",
      },
      {
        id: "33",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien commodo, convallis turpis efficitur, lacinia dui. Maecenas pharetra vestibulum velit, et dictum dolor.",
    episodes: [
      {
        id: "34",
        episodeTitle: "Episode 1",
        date: "2023-10-01",
        duration: "36:20",
      },
      {
        id: "35",
        episodeTitle: "Episode 2",
        date: "2023-10-05",
        duration: "37:40",
      },
      {
        id: "36",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien commodo, convallis turpis efficitur, lacinia dui. Maecenas pharetra vestibulum velit, et dictum dolor.",
    episodes: [
      {
        id: "37",
        episodeTitle: "Episode 1",
        date: "2023-09-01",
        duration: "32:50",
      },
      {
        id: "38",
        episodeTitle: "Episode 2",
        date: "2023-09-05",
        duration: "34:25",
      },
      {
        id: "39",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien commodo, convallis turpis efficitur, lacinia dui. Maecenas pharetra vestibulum velit, et dictum dolor.",
    episodes: [
      {
        id: "40",
        episodeTitle: "Episode 1",
        date: "2023-08-01",
        duration: "28:40",
      },
      {
        id: "41",
        episodeTitle: "Episode 2",
        date: "2023-08-05",
        duration: "30:20",
      },
      {
        id: "42",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien commodo, convallis turpis efficitur, lacinia dui. Maecenas pharetra vestibulum velit, et dictum dolor.",
    episodes: [
      {
        id: "43",
        episodeTitle: "Episode 1",
        date: "2023-07-01",
        duration: "27:30",
      },
      {
        id: "44",
        episodeTitle: "Episode 2",
        date: "2023-07-05",
        duration: "28:50",
      },
      {
        id: "45",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien commodo, convallis turpis efficitur, lacinia dui. Maecenas pharetra vestibulum velit, et dictum dolor.",
    episodes: [
      {
        id: "46",
        episodeTitle: "Episode 1",
        date: "2023-11-15",
        duration: "42:30",
      },
      {
        id: "47",
        episodeTitle: "Episode 2",
        date: "2023-11-20",
        duration: "45:10",
      },
      {
        id: "48",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien commodo, convallis turpis efficitur, lacinia dui. Maecenas pharetra vestibulum velit, et dictum dolor.",
    episodes: [
      {
        id: "49",
        episodeTitle: "Episode 1",
        date: "2023-10-15",
        duration: "37:40",
      },
      {
        id: "50",
        episodeTitle: "Episode 2",
        date: "2023-10-20",
        duration: "40:05",
      },
      {
        id: "51",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien commodo, convallis turpis efficitur, lacinia dui. Maecenas pharetra vestibulum velit, et dictum dolor.",
    episodes: [
      {
        id: "52",
        episodeTitle: "Episode 1",
        date: "2023-09-15",
        duration: "34:25",
      },
      {
        id: "53",
        episodeTitle: "Episode 2",
        date: "2023-09-20",
        duration: "36:50",
      },
      {
        id: "54",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien commodo, convallis turpis efficitur, lacinia dui. Maecenas pharetra vestibulum velit, et dictum dolor.",
    episodes: [
      {
        id: "55",
        episodeTitle: "Episode 1",
        date: "2023-08-15",
        duration: "29:45",
      },
      {
        id: "56",
        episodeTitle: "Episode 2",
        date: "2023-08-20",
        duration: "32:10",
      },
      {
        id: "57",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien commodo, convallis turpis efficitur, lacinia dui. Maecenas pharetra vestibulum velit, et dictum dolor.",
    episodes: [
      {
        id: "58",
        episodeTitle: "Episode 1",
        date: "2023-07-15",
        duration: "26:20",
      },
      {
        id: "59",
        episodeTitle: "Episode 2",
        date: "2023-07-20",
        duration: "28:45",
      },
      {
        id: "60",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien commodo, convallis turpis efficitur, lacinia dui. Maecenas pharetra vestibulum velit, et dictum dolor.",
    episodes: [
      {
        id: "61",
        episodeTitle: "Episode 1",
        date: "2023-11-15",
        duration: "42:30",
      },
      {
        id: "62",
        episodeTitle: "Episode 2",
        date: "2023-11-20",
        duration: "45:10",
      },
      {
        id: "63",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien commodo, convallis turpis efficitur, lacinia dui. Maecenas pharetra vestibulum velit, et dictum dolor.",
    episodes: [
      {
        id: "64",
        episodeTitle: "Episode 1",
        date: "2023-10-15",
        duration: "37:40",
      },
      {
        id: "65",
        episodeTitle: "Episode 2",
        date: "2023-10-20",
        duration: "40:05",
      },
      {
        id: "66",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien commodo, convallis turpis efficitur, lacinia dui. Maecenas pharetra vestibulum velit, et dictum dolor.",
    episodes: [
      {
        id: "67",
        episodeTitle: "Episode 1",
        date: "2023-09-15",
        duration: "34:25",
      },
      {
        id: "68",
        episodeTitle: "Episode 2",
        date: "2023-09-20",
        duration: "36:50",
      },
      {
        id: "69",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien commodo, convallis turpis efficitur, lacinia dui. Maecenas pharetra vestibulum velit, et dictum dolor.",
    episodes: [
      {
        id: "70",
        episodeTitle: "Episode 1",
        date: "2023-08-15",
        duration: "29:45",
      },
      {
        id: "71",
        episodeTitle: "Episode 2",
        date: "2023-08-20",
        duration: "32:10",
      },
      {
        id: "72",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien commodo, convallis turpis efficitur, lacinia dui. Maecenas pharetra vestibulum velit, et dictum dolor.",
    episodes: [
      {
        id: "73",
        episodeTitle: "Episode 1",
        date: "2023-07-15",
        duration: "26:20",
      },
      {
        id: "74",
        episodeTitle: "Episode 2",
        date: "2023-07-20",
        duration: "28:45",
      },
      {
        id: "75",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien commodo, convallis turpis efficitur, lacinia dui. Maecenas pharetra vestibulum velit, et dictum dolor.",
    episodes: [
      {
        id: "76",
        episodeTitle: "Episode 1",
        date: "2023-12-15",
        duration: "31:45",
      },
      {
        id: "77",
        episodeTitle: "Episode 2",
        date: "2023-12-20",
        duration: "34:20",
      },
      {
        id: "78",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien commodo, convallis turpis efficitur, lacinia dui. Maecenas pharetra vestibulum velit, et dictum dolor.",
    episodes: [
      {
        id: "79",
        episodeTitle: "Episode 1",
        date: "2023-11-15",
        duration: "36:30",
      },
      {
        id: "80",
        episodeTitle: "Episode 2",
        date: "2023-11-20",
        duration: "39:05",
      },
      {
        id: "81",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien commodo, convallis turpis efficitur, lacinia dui. Maecenas pharetra vestibulum velit, et dictum dolor.",
    episodes: [
      {
        id: "82",
        episodeTitle: "Episode 1",
        date: "2023-10-15",
        duration: "32:15",
      },
      {
        id: "83",
        episodeTitle: "Episode 2",
        date: "2023-10-20",
        duration: "34:50",
      },
      {
        id: "84",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien commodo, convallis turpis efficitur, lacinia dui. Maecenas pharetra vestibulum velit, et dictum dolor.",
    episodes: [
      {
        id: "85",
        episodeTitle: "Episode 1",
        date: "2023-09-15",
        duration: "27:55",
      },
      {
        id: "86",
        episodeTitle: "Episode 2",
        date: "2023-09-20",
        duration: "30:20",
      },
      {
        id: "87",
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sapien commodo, convallis turpis efficitur, lacinia dui. Maecenas pharetra vestibulum velit, et dictum dolor.",
    episodes: [
      {
        id: "88",
        episodeTitle: "Episode 1",
        date: "2023-08-15",
        duration: "24:50",
      },
      {
        id: "89",
        episodeTitle: "Episode 2",
        date: "2023-08-20",
        duration: "27:15",
      },
      {
        id: "90",
        episodeTitle: "Episode 3",
        date: "2023-08-25",
        duration: "23:30",
      },
    ],
  },
];

const episodesDetail = [
  {
    id: "1",
    title: "Rock Music Podcast",
    summary: "Un emocionante episodio sobre la evolución del rock 'n' roll.",
    audio: "",
  },
  {
    id: "2",
    title: "Rock Music Podcast",
    summary: "Descubre las leyendas del rock en este episodio especial.",
    audio: "",
  },
  {
    id: "3",
    title: "Rock Music Podcast",
    summary: "Rockea con las canciones más icónicas de todos los tiempos.",
    audio: "",
  },

  {
    id: "4",
    title: "Cooking Talks",
    summary: "Aprende a cocinar deliciosos platos en este episodio de cocina.",
    audio: "",
  },
  {
    id: "5",
    title: "Cooking Talks",
    summary: "Secretos de chefs revelados en este episodio exclusivo.",
    audio: "",
  },
  {
    id: "6",
    title: "Cooking Talks",
    summary: "Sabores y aromas que despiertan tus sentidos en este episodio.",
    audio: "",
  },

  {
    id: "7",
    title: "Mystery Stories",
    summary: "Resuelve misterios oscuros en este episodio intrigante.",
    audio: "",
  },
  {
    id: "8",
    title: "Mystery Stories",
    summary: "Misterios sobrenaturales y detectives en este episodio especial.",
    audio: "",
  },
  {
    id: "9",
    title: "Mystery Stories",
    summary: "Noche de misterio y suspense en este emocionante episodio.",
    audio: "",
  },

  {
    id: "10",
    title: "Science Talks",
    summary: "Exploración de la ciencia y sus maravillas en este episodio.",
    audio: "",
  },
  {
    id: "11",
    title: "Science Talks",
    summary: "Descubre los avances científicos más recientes en este episodio.",
    audio: "",
  },
  {
    id: "12",
    title: "Science Talks",
    summary:
      "Charlas y discusiones sobre la ciencia en este episodio especial.",
    audio: "",
  },

  {
    id: "13",
    title: "Tech News Updates",
    summary: "Noticias y actualizaciones tecnológicas en este episodio.",
    audio: "",
  },
  {
    id: "14",
    title: "Tech News Updates",
    summary: "Novedades tecnológicas y gadgets en este emocionante episodio.",
    audio: "",
  },
  {
    id: "15",
    title: "Tech News Updates",
    summary:
      "Las últimas tendencias tecnológicas se discuten en este episodio.",
    audio: "",
  },

  {
    id: "16",
    title: "Business Success Stories",
    summary: "Emprendedores exitosos comparten sus historias en este episodio.",
    audio: "",
  },
  {
    id: "17",
    title: "Business Success Stories",
    summary:
      "Secretos del éxito empresarial revelados en este episodio especial.",
    audio: "",
  },
  {
    id: "18",
    title: "Business Success Stories",
    summary:
      "Aprende de los líderes empresariales en este episodio inspirador.",
    audio: "",
  },

  {
    id: "19",
    title: "Travel Adventures",
    summary: "Viajes épicos y aventuras asombrosas en este episodio de viaje.",
    audio: "",
  },
  {
    id: "20",
    title: "Travel Adventures",
    summary: "Descubre destinos impresionantes en este emocionante episodio.",
    audio: "",
  },
  {
    id: "21",
    title: "Travel Adventures",
    summary: "Consejos de viaje y experiencias increíbles en este episodio.",
    audio: "",
  },

  {
    id: "22",
    title: "History Uncovered",
    summary: "Descubre eventos históricos y misterios en este episodio.",
    audio: "",
  },
  {
    id: "23",
    title: "History Uncovered",
    summary:
      "Revelaciones sorprendentes de la historia en este episodio especial.",
    audio: "",
  },
  {
    id: "24",
    title: "History Uncovered",
    summary: "Grandes personajes de la historia se exploran en este episodio.",
    audio: "",
  },

  {
    id: "25",
    title: "Health and Wellness Tips",
    summary: "Consejos para una vida saludable y bienestar en este episodio.",
    audio: "",
  },
  {
    id: "26",
    title: "Health and Wellness Tips",
    summary: "Bienestar mental y físico en este episodio especial.",
    audio: "",
  },
  {
    id: "27",
    title: "Health and Wellness Tips",
    summary: "Secretos para mantenerte saludable en este episodio informativo.",
    audio: "",
  },

  {
    id: "28",
    title: "Comedy Hour",
    summary: "Risas y diversión en este episodio de comedia.",
    audio: "",
  },
  {
    id: "29",
    title: "Comedy Hour",
    summary: "Actuaciones cómicas y bromas en este episodio especial.",
    audio: "",
  },
  {
    id: "30",
    title: "Comedy Hour",
    summary: "Comedia que te hará reír a carcajadas en este episodio.",
    audio: "",
  },
  {
    id: "31",
    title: "Home Improvement",
    summary:
      "Discover the latest trends and tips for transforming your home in this insightful episode. Our experts guide you through DIY projects and home decor ideas.",
    audio: "",
  },
  {
    id: "32",
    title: "Home Improvement",
    summary:
      "Revamp your living spaces with expert advice in this home improvement episode. From small changes to major renovations, we cover it all.",
    audio: "",
  },
  {
    id: "33",
    title: "Home Improvement",
    summary:
      "Unleash your inner interior designer with creative home improvement ideas in this special episode. Get ready to beautify your surroundings.",
    audio: "",
  },
  {
    id: "34",
    title: "Gardening Tips",
    summary:
      "Nurture your green thumb with gardening secrets in this episode. Learn how to grow and care for a variety of plants, from flowers to vegetables.",
    audio: "",
  },
  {
    id: "35",
    title: "Gardening Tips",
    summary:
      "Join us in a green adventure and explore gardening in-depth in this special episode. Cultivate your gardening skills with expert guidance.",
    audio: "",
  },
  {
    id: "36",
    title: "Gardening Tips",
    summary:
      "Dig deep into the world of gardening and horticulture in this gardening episode. Discover the joys of planting and watch your garden bloom.",
    audio: "",
  },
  {
    id: "37",
    title: "Motivational Talks",
    summary:
      "Ignite your inner drive and find inspiration in this motivational episode. Our speakers share stories of determination and success to motivate you.",
    audio: "",
  },
  {
    id: "38",
    title: "Motivational Talks",
    summary:
      "Empower your spirit and boost your confidence in this special motivational episode. Dive into personal development and self-improvement with us.",
    audio: "",
  },
  {
    id: "39",
    title: "Motivational Talks",
    summary:
      "Transform your life with motivational insights and personal growth strategies in this episode. Get ready to become the best version of yourself.",
    audio: "",
  },
  {
    id: "40",
    title: "Wildlife Encounters",
    summary:
      "Embark on wildlife adventures and discover fascinating creatures in this thrilling episode. Join us on safaris and explorations around the world.",
    audio: "",
  },
  {
    id: "41",
    title: "Wildlife Encounters",
    summary:
      "Explore the wonders of nature and wildlife in this wildlife episode. Get up close with animals and ecosystems you've only dreamed of.",
    audio: "",
  },
  {
    id: "42",
    title: "Wildlife Encounters",
    summary:
      "Get ready for a wild ride in this special wildlife episode. From the jungles to the savannah, we bring the beauty of nature to your ears.",
    audio: "",
  },
  {
    id: "43",
    title: "Space Explorations",
    summary:
      "Embark on an interstellar journey and explore the mysteries of the cosmos in this space exploration episode. Join us in unraveling the universe.",
    audio: "",
  },
  {
    id: "44",
    title: "Space Explorations",
    summary:
      "Discover the latest advancements in space exploration and astronomy in this space episode. Journey beyond Earth and into the depths of the universe.",
    audio: "",
  },
  {
    id: "45",
    title: "Space Explorations",
    summary:
      "Engage with cosmic wonders and astronomical discoveries in this special space episode. Prepare for an odyssey to the stars and galaxies.",
    audio: "",
  },
  {
    id: "46",
    title: "Finance Insights",
    summary:
      "Unlock the secrets of financial success and wealth management in this finance episode. Expert advice to help you achieve your financial goals.",
    audio: "",
  },
  {
    id: "47",
    title: "Finance Insights",
    summary:
      "Navigate the world of finance and investments with ease in this finance episode. From stocks to real estate, we decode the world of money.",
    audio: "",
  },
  {
    id: "48",
    title: "Finance Insights",
    summary:
      "Get financially savvy with valuable tips and insights in this special finance episode. Take control of your money and secure your future.",
    audio: "",
  },
  {
    id: "49",
    title: "Art and Creativity",
    summary:
      "Unleash your artistic potential and creativity in this episode. Explore various art forms and find inspiration for your next masterpiece.",
    audio: "",
  },
  {
    id: "50",
    title: "Art and Creativity",
    summary:
      "Dive into the world of art, design, and creative expression in this special episode. Get inspired by the works of renowned artists and creators.",
    audio: "",
  },
  {
    id: "51",
    title: "Art and Creativity",
    summary:
      "Experience the magic of creativity in this artistic episode. Join us in celebrating the beauty and innovation of human imagination.",
    audio: "",
  },
  {
    id: "52",
    title: "Healthy Living",
    summary:
      "Discover the path to a healthier and more balanced life in this episode. We cover physical, mental, and emotional well-being for a better you.",
    audio: "",
  },
  {
    id: "53",
    title: "Healthy Living",
    summary:
      "Enhance your health and well-being with expert guidance in this special episode. Learn the secrets to living a long and fulfilling life.",
    audio: "",
  },
  {
    id: "54",
    title: "Healthy Living",
    summary:
      "Empower your health journey with insights and knowledge in this healthy living episode. Take charge of your well-being and vitality.",
    audio: "",
  },
  {
    id: "55",
    title: "Travel Diaries",
    summary:
      "Explore the world through the eyes of intrepid travelers in this travel episode. From exotic destinations to hidden gems, we share travel tales.",
    audio: "",
  },
  {
    id: "56",
    title: "Travel Diaries",
    summary:
      "Get ready for remarkable adventures and travel tales in this special episode. We take you to breathtaking places and share unforgettable experiences.",
    audio: "",
  },
  {
    id: "57",
    title: "Travel Diaries",
    summary:
      "Wanderlust and wanderlust-inducing stories await you in this travel episode. Join us on epic journeys and discover the beauty of our planet.",
    audio: "",
  },
  {
    id: "58",
    title: "Science Experiments",
    summary:
      "Unlock the wonders of science through hands-on experiments in this science episode. Join us in exploring scientific concepts in a fun and engaging way.",
    audio: "",
  },
  {
    id: "59",
    title: "Science Experiments",
    summary:
      "Get ready to be amazed by the world of scientific discovery in this special science episode. Dive into experiments that make learning fun and fascinating.",
    audio: "",
  },
  {
    id: "60",
    title: "Science Experiments",
    summary:
      "Experiment, explore, and expand your knowledge in this exciting science episode. Discover the fascinating world of physics, chemistry, and biology.",
    audio: "",
  },
  {
    id: "61",
    title: "Technology Trends",
    summary:
      "Stay up-to-date with the ever-changing world of technology in this episode. We explore the latest innovations and trends shaping the future.",
    audio: "",
  },
  {
    id: "62",
    title: "Technology Trends",
    summary:
      "Embark on a journey through the tech landscape and uncover groundbreaking developments in this special technology episode.",
    audio: "",
  },
  {
    id: "63",
    title: "Technology Trends",
    summary:
      "Experience the fast-paced world of technology in this episode. From gadgets to AI, we delve into the tech that's changing our lives.",
    audio: "",
  },
  {
    id: "64",
    title: "Nature Explorations",
    summary:
      "Immerse yourself in the beauty of the natural world in this episode. Join us on hikes, safaris, and adventures to explore Earth's wonders.",
    audio: "",
  },
  {
    id: "65",
    title: "Nature Explorations",
    summary:
      "Discover the hidden treasures of the great outdoors with our nature explorations in this special episode. Connect with the wilderness and wildlife.",
    audio: "",
  },
  {
    id: "66",
    title: "Nature Explorations",
    summary:
      "Get ready for an ecological journey and connect with Mother Nature in this nature exploration episode. Explore diverse ecosystems and landscapes.",
    audio: "",
  },
  {
    id: "67",
    title: "Business Insights",
    summary:
      "Navigate the complex world of business with insights and strategies in this episode. From startups to corporations, we cover it all.",
    audio: "",
  },
  {
    id: "68",
    title: "Business Insights",
    summary:
      "Uncover the secrets of successful entrepreneurship and business leadership in this special business episode. Learn from industry experts.",
    audio: "",
  },
  {
    id: "69",
    title: "Business Insights",
    summary:
      "Gain the knowledge and skills needed to thrive in the world of commerce with valuable business insights in this episode.",
    audio: "",
  },
  {
    id: "70",
    title: "Healthy Cooking",
    summary:
      "Delight your taste buds and nourish your body with healthy cooking in this episode. We share delicious and nutritious recipes for all.",
    audio: "",
  },
  {
    id: "71",
    title: "Healthy Cooking",
    summary:
      "Explore the art of cooking and nutrition in this special episode. From farm to table, we bring you the best in healthy and tasty dishes.",
    audio: "",
  },
  {
    id: "72",
    title: "Healthy Cooking",
    summary:
      "Enhance your culinary skills and embrace a healthier lifestyle in this healthy cooking episode. Discover the joys of mindful eating.",
    audio: "",
  },
  {
    id: "73",
    title: "Space Chronicles",
    summary:
      "Embark on a cosmic journey and unravel the mysteries of the universe in this space chronicles episode. Join us in exploring the cosmos.",
    audio: "",
  },
  {
    id: "74",
    title: "Space Chronicles",
    summary:
      "Experience the wonders of space and astronomy in this special space episode. Venture beyond our world and gaze into the infinite cosmos.",
    audio: "",
  },
  {
    id: "75",
    title: "Space Chronicles",
    summary:
      "Prepare for a celestial adventure and cosmic discoveries in this space episode. Traverse galaxies and uncover the beauty of the cosmos.",
    audio: "",
  },
  {
    id: "76",
    title: "Adventure Time",
    summary:
      "Get ready for thrilling adventures and extraordinary journeys in this episode. We take you to the world's most exciting and daring escapades.",
    audio: "",
  },
  {
    id: "77",
    title: "Adventure Time",
    summary:
      "Join us on adrenaline-pumping expeditions and adventures in this special episode. Experience heart-pounding moments and remarkable feats.",
    audio: "",
  },
  {
    id: "78",
    title: "Adventure Time",
    summary:
      "Embrace your inner adventurer and explore the unknown in this adventure time episode. From mountain peaks to deep oceans, the world is your playground.",
    audio: "",
  },
  {
    id: "79",
    title: "World History",
    summary:
      "Dive into the annals of history and unravel the stories of our world in this episode. Explore the events and figures that shaped our past.",
    audio: "",
  },
  {
    id: "80",
    title: "World History",
    summary:
      "Discover the richness of our shared history in this special history episode. From ancient civilizations to modern revolutions, we journey through time.",
    audio: "",
  },
  {
    id: "81",
    title: "World History",
    summary:
      "Travel through time and across continents in this history episode. The past comes alive as we recount the tales of human civilization.",
    audio: "",
  },
  {
    id: "82",
    title: "Fashion Trends",
    summary:
      "Step into the glamorous world of fashion and style in this episode. Get the latest fashion insights and trends from the runways of the world.",
    audio: "",
  },
  {
    id: "83",
    title: "Fashion Trends",
    summary:
      "Celebrate the art of dressing and self-expression with our fashion trends in this special episode. From haute couture to street style, we cover it all.",
    audio: "",
  },
  {
    id: "84",
    title: "Fashion Trends",
    summary:
      "Experience the beauty of fashion and design in this fashion trends episode. Discover the designers, trends, and styles that define our culture.",
    audio: "",
  },
  {
    id: "85",
    title: "Science Discoveries",
    summary:
      "Witness the wonders of scientific discovery in this episode. Dive into groundbreaking experiments and research that reshape our understanding of the world.",
    audio: "",
  },
  {
    id: "86",
    title: "Science Discoveries",
    summary:
      "Explore the frontiers of scientific knowledge and innovation in this special science episode. From physics to biology, we delve into the mysteries of the universe.",
    audio: "",
  },
  {
    id: "87",
    title: "Science Discoveries",
    summary:
      "Embrace the scientific spirit and curiosity in this science discovery episode. Be part of the journey to uncover the hidden truths of the universe.",
    audio: "",
  },
  {
    id: "88",
    title: "Travel Journals",
    summary:
      "Get lost in the pages of travel journals and embark on epic voyages in this episode. Join us on captivating journeys to the world's most incredible destinations.",
    audio: "",
  },
  {
    id: "89",
    title: "Travel Journals",
    summary:
      "Immerse yourself in the adventures of globe-trotters and travel enthusiasts in this special travel journal episode. Experience cultures, sights, and sounds from around the globe.",
    audio: "",
  },
  {
    id: "90",
    title: "Travel Journals",
    summary:
      "Journey across the world and savor the tales of travel in this travel journal episode. From remote villages to bustling cities, every destination has a story.",
    audio: "",
  },
];

export {
  podcastsTemplate,
  podcastsLongTemplate,
  podcastEpisodes,
  episodesDetail,
};
