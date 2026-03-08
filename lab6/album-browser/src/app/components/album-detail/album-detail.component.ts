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
    <div style="max-width: 600px; margin: 2rem auto; padding: 1rem;">
      <div *ngIf="album">
        <p>ID: {{ album.id }}</p>
        <p>User ID: {{ album.userId }}</p>
        <p>Title: <input [(ngModel)]="editedTitle" style="width: 100%; padding: 0.5rem; margin: 1rem 0;" /></p>
        <button (click)="save()" style="margin-right: 1rem; padding: 0.5rem 1rem;">Save</button>
        <a [routerLink]="['/albums', album.id, 'photos']" style="margin-right: 1rem;">View Photos</a>
        <a routerLink="/albums">Back</a>
      </div>
    </div>
  `
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editedTitle = '';

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
      });
    }
  }

  save(): void {
    if (this.album) {
      const updated = { ...this.album, title: this.editedTitle };
      this.albumService.updateAlbum(updated).subscribe(data => this.album = data);
    }
  }
}
