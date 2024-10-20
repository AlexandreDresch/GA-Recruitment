import { Component } from "./component";
import axios from "axios";

interface BlameSectionProps {
  title: string;
}

export class BlameSection extends Component {
  mangaContent: string;

  constructor(props: BlameSectionProps) {
    super(props);
    this.mangaContent = "<p>Loading...</p>";
    this.fetchMangaData();
  }

  async fetchMangaData(): Promise<void> {
    const baseUrl = "https://api.jikan.moe/v4";

    try {
      const resp = await axios({
        method: "GET",
        url: `${baseUrl}/manga`,
        params: {
          q: this.props.title,
          limit: 1,
        },
      });

      const mangaData = resp.data.data[0];

      if (!mangaData) {
        this.mangaContent = "<p>No manga data found.</p>";
      } else {
        this.mangaContent = /*html*/ `
          <div class="manga-item">
            <img src="${mangaData.images.jpg.large_image_url}" alt="${
              mangaData.title
            }" />
            <div class="manga-item-details">
              <p><strong>Score:</strong> ${mangaData.score || "N/A"}</p>
              <p><strong>Status:</strong> ${mangaData.status}</p>
              <p><strong>Chapters:</strong> ${mangaData.chapters || "Unknown"}</p>
              <p><strong>Volumes:</strong> ${mangaData.volumes || "Unknown"}</p>
              <p><strong>Published:</strong> ${mangaData.published.string}</p>
              <p><strong>Authors:</strong> ${mangaData.authors
                .map((author: any) => author.name)
                .join(", ")}</p>
              <p><strong>Synopsis:</strong> ${
                mangaData.synopsis || "No description available."
              }</p>
              <p><strong>Genres:</strong> ${mangaData.genres
                .map((genre: any) => genre.name)
                .join(", ")}</p>
              <a href="${mangaData.url}" class="glitch-button" data-text="View on MyAnimeList" target="_blank">View on MyAnimeList</a>
            </div>
          </div>
        `;
      }

      this.updateContent();
    } catch (error) {
      console.error(error);
      this.mangaContent = "<p>Error loading manga data.</p>";
      this.updateContent();
    }
  }

  render(): string {
    return /*html*/ `
      <section id="blame-section">
        <h2 class="section-title" data-text="ABOUT BLAME!">About ${this.props.title}</h2>
        <div class="manga-list" id="manga-container">
          ${this.mangaContent}
        </div>
      </section>
    `;
  }

  updateContent(): void {
    const target = document.getElementById("manga-container");
    if (target) {
      target.innerHTML = this.mangaContent;
    }
  }
}
