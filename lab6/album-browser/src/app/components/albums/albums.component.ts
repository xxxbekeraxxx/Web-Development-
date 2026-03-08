import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div style="max-width: 1200px; margin: 2rem auto; padding: 0 1rem;">
      <h2>Albums</h2>
      <div *ngIf="albums.length === 0">Loading albums...</div>
      <ul style="list-style: none; padding: 0;">
        <li *ngFor="let album of albums" style="margin: 10px 0; padding: 10px; border: 1px solid #ddd; display: flex; justify-content: space-between;">
          <a [routerLink]="['/albums', album.id]" style="text-decoration: none; color: #007bff;">{{ album.id }}. {{ album.title }}</a>
          <button (click)="deleteAlbum(album.id)" style="background: #dc3545; color: white; border: none; padding: 5px 10px; cursor: pointer;">Delete</button>
        </li>
      </ul>
    </div>
  `
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(private albumService: AlbumService) {
    console.log('AlbumsComponent created');
  }

  ngOnInit(): void {
    console.log('AlbumsComponent loading albums...');
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        console.log('Albums loaded:', data);
        this.albums = data;
      },
      error: (error) => {
        console.error('Error loading albums:', error);
      }
    });
  }

  deleteAlbum(id: number): void {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }
}
