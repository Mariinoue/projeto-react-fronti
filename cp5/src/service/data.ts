import type { Article } from "../interfaces/article.interface";

export const data: Article[] = [
  {
    id: 1,
    title: "Artigo 1",
    content: "Descrição do artigo 1.",
    date: new Date("2024-09-01"),
    img: "https://robohash.org/1.png",
    categories: ["Tech"],
    comments: [
      {
        id: 1,
        name: "Comentador 1",
        text: "Comentário 1",
      }
    ]
  },
  {
    id: 2,
    title: "Artigo 2",
    content: "Descrição do artigo 2.",
    date: new Date("2024-09-02"),
    img: "https://robohash.org/2.png",
    categories: ["Science"],
    comments: [
      {
        id: 2,
        name: "Comentador 2",
        text: "Comentário 2",
      }
    ]
  },
  {
    id: 3,
    title: "Artigo 3",
    content: "Descrição do artigo 3.",
    date: new Date("2024-09-03"),
    img: "https://robohash.org/3.png",
    categories: ["Health"],
    comments: [
      {
        id: 3,
        name: "Comentador 3",
        text: "Comentário 3",
      }
    ]
  },
  {
    id: 4,
    title: "Artigo 4",
    content: "Descrição do artigo 4.",
    date: new Date("2024-09-04"),
    img: "https://robohash.org/4.png",
    categories: ["Politics"],
    comments: [
      {
        id: 4,
        name: "Comentador 4",
        text: "Comentário 4",
      }
    ]
  },
  {
    id: 5,
    title: "Artigo 5",
    content: "Descrição do artigo 5.",
    date: new Date("2024-09-05"),
    img: "https://robohash.org/5.png",
    categories: ["Education"],
    comments: [
      {
        id: 5,
        name: "Comentador 5",
        text: "Comentário 5",
      }
    ]
  },
  {
    id: 6,
    title: "Artigo 6",
    content: "Descrição do artigo 6.",
    date: new Date("2024-09-06"),
    img: "https://robohash.org/6.png",
    categories: ["Tech", "Science"],
    comments: [
      {
        id: 6,
        name: "Comentador 6",
        text: "Comentário 6",
      }
    ]
  },
  {
    id: 7,
    title: "Artigo 7",
    content: "Descrição do artigo 7.",
    date: new Date("2024-09-07"),
    img: "https://robohash.org/7.png",
    categories: ["Health", "Politics"],
    comments: [
      {
        id: 7,
        name: "Comentador 7",
        text: "Comentário 7",
      }
    ]
  },
  {
    id: 8,
    title: "Artigo 8",
    content: "Descrição do artigo 8.",
    date: new Date("2024-09-08"),
    img: "https://robohash.org/8.png",
    categories: ["Education", "Tech"],
    comments: [
      {
        id: 8,
        name: "Comentador 8",
        text: "Comentário 8",
      }
    ]
  },
  {
    id: 9,
    title: "Artigo 9",
    content: "Descrição do artigo 9.",
    date: new Date("2024-09-09"),
    img: "https://robohash.org/9.png",
    categories: ["Science", "Health"],
    comments: [
      {
        id: 9,
        name: "Comentador 9",
        text: "Comentário 9",
      }
    ]
  },
  {
    id: 10,
    title: "Artigo 10",
    content: "Descrição do artigo 10.",
    date: new Date("2024-09-10"),
    img: "https://robohash.org/10.png",
    categories: ["Politics", "Education"],
    comments: [
      {
        id: 10,
        name: "Comentador 10",
        text: "Comentário 10",
      }
    ]
  }
]