import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <a [routerLink]="['/albums', albumId]">Back to Album</a>
    <h2>Photos</h2>
    <div *ngIf="loading">Loading...</div>
    <div class="grid">
      <div *ngFor="let photo of photos" class="photo">
        <img [src]="photo.thumbnailUrl" [alt]="photo.title" />
        <p>{{ photo.title }}</p>
      </div>
    </div>
  `,
  styles: [`
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem; padding: 1rem; }
    .photo { text-align: center; }
    .photo img { width: 150px; height: 150px; object-fit: cover; border-radius: 4px; }
    .photo p { font-size: 0.8rem; margin: 0.5rem 0; }
  `]
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  loading = true;
  albumId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.albumId = +id;
      this.albumService.getAlbumPhotos(this.albumId).subscribe(data => {
        this.photos = data;
        this.loading = false;
      });
    }
  }
}
