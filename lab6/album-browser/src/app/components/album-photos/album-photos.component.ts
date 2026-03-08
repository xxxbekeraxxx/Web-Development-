import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div style="max-width: 1400px; margin: 2rem auto; padding: 0 1rem;">
      <div style="display: flex; align-items: center; gap: 2rem; margin-bottom: 2rem;">
        <a [routerLink]="['/albums', albumId]" style="color: #007bff; text-decoration: none; padding: 0.5rem 1rem; background: #f0f0f0; border-radius: 4px;">← Back to Album</a>
        <h2 style="color: #333; margin: 0;">Album Photos</h2>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 2rem;">
        <div *ngFor="let photo of photos" style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <img [src]="photo.url" style="width: 100%; height: 200px; object-fit: cover;">
          <div style="padding: 1rem; text-align: center;">{{ photo.title }}</div>
        </div>
      </div>
    </div>
  `
})
export class AlbumPhotosComponent implements OnInit {
  albumId: number | null = null;
  photos: any[] = [];

  private allPhotos = [
    {
      id: 1,
      title: 'B-25 Mitchell Bombers in Formation',
      url: 'https://media.gettyimages.com/id/1461924859/photo/ww2-mitchell-b-25-medium-bombers-flying-in-v-formation.jpg?s=1024x1024&w=gi&k=20&c=1lBh_ORvcDZRIU5g5XxqBGEMntadHdwIQfoKZ0Cyn8U='
    },
    {
      id: 2,
      title: 'WWII M4 Sherman Tank Crew on D-Day',
      url: 'https://media.gettyimages.com/id/1458877007/photo/wwii-m4-sherman-tank-crew-on-d-day.jpg?s=1024x1024&w=gi&k=20&c=_ySZxRsJX3mftCfWMImBZPhY0CThatGwea2t_pPsKSQ='
    },
    {
      id: 3,
      title: 'American Troops in France, 1944',
      url: 'https://media.gettyimages.com/id/10158911/photo/american-troops-france-august-29-1944.jpg?s=1024x1024&w=gi&k=20&c=TIkgA8IgtDbB_deymN3GbrzFPE7VgsGg_uKjj4eDTOs='
    },
    {
      id: 4,
      title: 'War-weary WWII Soldier',
      url: 'https://media.gettyimages.com/id/143176308/photo/war-weary-wwii-soldier-during-a-retrospective-moment.jpg?s=1024x1024&w=gi&k=20&c=yHdJy7-_ADoqXvNPNfxWpfzxFgxVJXzPAQ4X6MXlG9o='
    },
    {
      id: 5,
      title: 'HMS Centurion Battleship',
      url: 'https://media.gettyimages.com/id/172236926/photo/hms-centurion.jpg?s=1024x1024&w=gi&k=20&c=glyDBukju0LJhtS3EebOGQ6M1659uI9AL61zPxiBVkU='
    },
    {
      id: 6,
      title: 'P-51 Mustang Fighter',
      url: 'https://media.gettyimages.com/id/2154032605/photo/person-dressed-as-a-soldier-holds-a-motorcycle-helmet-with-goggles.jpg?s=1024x1024&w=gi&k=20&c=-_XvBh4sidbcXG4FnaTQ1icqXgm5JCQpqrDKS_V3M_o='
    },
    {
      id: 7,
      title: 'German Tiger Tank',
      url: 'https://media.gettyimages.com/id/135456144/photo/sherman-firefly-tank.jpg?s=1024x1024&w=gi&k=20&c=vJu4eCtqfV72BXCAYzbPJOmHUWGb_n3ZVmoakQYMASc='
    },
    {
      id: 8,
      title: 'Sokviet T-34 Tan',
      url: 'https://media.gettyimages.com/id/598085662/photo/world-war-2-armored-tank-on-beach.jpg?s=1024x1024&w=gi&k=20&c=PP9T66WJZlhjS4eAJeGoBaYDDVeTwIOx4PVEg2m3j8I='
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.albumId = idParam ? +idParam : null;
    
    // Просто показываем все фото (без загрузки)
    this.photos = this.allPhotos;
  }
}
