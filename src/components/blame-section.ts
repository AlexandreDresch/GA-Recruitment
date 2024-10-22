import { Component } from "./component";
import { fetchMangaData } from "../services/api/manga-api";
import { BlameSectionProps } from "../types";

export class BlameSection extends Component {
  mangaContent: string;

  constructor(props: BlameSectionProps) {
    super(props);
    this.mangaContent = "<p class='overview' aria-live='polite'>Loading...</p>";
    this.loadMangaData();
  }

  async loadMangaData(): Promise<void> {
    try {
      const mangaData = await fetchMangaData(this.props.title);

      if (!mangaData) {
        this.mangaContent = `<p class='overview' aria-live='polite'>No manga data found.</p>`;
      } else {
        this.mangaContent = /*html*/ `
          <div class="manga-item" role="article">
            <img 
              src="${mangaData.images.jpg.large_image_url}" 
              alt="${mangaData.title} manga cover" 
              role="img" 
              aria-label="${mangaData.title} cover image" 
            />
            <div class="manga-item-details">
              <p><strong>Score:</strong> ${mangaData.score || "N/A"}</p>
              <p><strong>Status:</strong> ${mangaData.status}</p>
              <p><strong>Chapters:</strong> ${
                mangaData.chapters || "Unknown"
              }</p>
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
              <a 
                href="${
                  mangaData.url
                }" 
                class="glitch-button" 
                data-text="View on MyAnimeList" 
                target="_blank" 
                aria-label="View ${mangaData.title} on MyAnimeList"
              >View on MyAnimeList</a>
            </div>
          </div>
        `;
      }

      this.updateContent();
    } catch (error) {
      this.mangaContent = "<p class='overview' aria-live='assertive'>Error loading manga data.</p>";
      this.updateContent();
    }
  }

  render(): string {
    return /*html*/ `
      <section id="blame-section" aria-labelledby="blame-section-title">
        <h2 id="blame-section-title" class="section-title" data-text="ABOUT BLAME!">About ${this.props.title}</h2>
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
