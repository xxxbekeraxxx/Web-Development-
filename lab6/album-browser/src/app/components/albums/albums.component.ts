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
    <h2>Albums</h2>
    <div *ngIf="loading">Loading...</div>
    <ul>
      <li *ngFor="let album of albums">
        <a [routerLink]="['/albums', album.id]">{{ album.id }}. {{ album.title }}</a>
        <button (click)="deleteAlbum(album.id)">Delete</button>
      </li>
    </ul>
  `,
  styles: [`
    ul { list-style: none; padding: 0; }
    li { margin: 10px 0; padding: 10px; border: 1px solid #ddd; display: flex; justify-content: space-between; }
    a { text-decoration: none; color: #007bff; }
    button { background: #dc3545; color: white; border: none; padding: 5px 10px; cursor: pointer; }
  `]
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe(data => {
      this.albums = data;
      this.loading = false;
    });
  }

  deleteAlbum(id: number): void {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }
}
