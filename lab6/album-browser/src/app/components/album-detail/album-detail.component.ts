import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div *ngIf="loading">Loading...</div>
    <div *ngIf="album">
      <p>ID: {{ album.id }}</p>
      <p>User ID: {{ album.userId }}</p>
      <p>Title: <input [(ngModel)]="editedTitle" /></p>
      <button (click)="save()">Save</button>
      <a [routerLink]="['/albums', album.id, 'photos']">View Photos</a>
      <a routerLink="/albums">Back</a>
    </div>
  `,
  styles: [`
    div { max-width: 600px; margin: 2rem auto; padding: 1rem; }
    input { width: 100%; padding: 0.5rem; margin: 1rem 0; }
    button { margin-right: 1rem; padding: 0.5rem 1rem; }
    a { margin-right: 1rem; }
  `]
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editedTitle = '';
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.albumService.getAlbum(+id).subscribe(data => {
        this.album = data;
        this.editedTitle = data.title;
        this.loading = false;
      });
    }
  }

  save(): void {
    if (this.album) {
      const updated = { ...this.album, title: this.editedTitle };
      this.albumService.updateAlbum(updated).subscribe(data => {
        this.album = data;
      });
    }
  }
}
