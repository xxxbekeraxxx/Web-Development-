import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 15 128Gb черный',
      description: '6.1" Super Retina XDR, чип A16 Bionic, двойная камера 48 Мп, Ceramic Shield, iOS 17.',
      price: 398550,
      rating: 4.8,
      image: 'https://c.dns-shop.kz/thumb/st1/fit/320/250/723323ab3c049717688ed5891bba7963/8db273f27cca57e55f1ee81d8df0f0719b036d1421d114d01684881a1d2b7ce4.jpg',
      images: [
        'https://c.dns-shop.kz/thumb/st1/fit/320/250/723323ab3c049717688ed5891bba7963/8db273f27cca57e55f1ee81d8df0f0719b036d1421d114d01684881a1d2b7ce4.jpg',
        'https://c.dns-shop.kz/thumb/st1/fit/320/250/723323ab3c049717688ed5891bba7963/8db273f27cca57e55f1ee81d8df0f0719b036d1421d114d01684881a1d2b7ce4.jpg',
        'https://c.dns-shop.kz/thumb/st1/fit/320/250/723323ab3c049717688ed5891bba7963/8db273f27cca57e55f1ee81d8df0f0719b036d1421d114d01684881a1d2b7ce4.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113788474/?c=750000000'
    },
    {
      id: 2,
      name: 'Ноутбук Apple MacBook Air 13" M1 8GB/256GB серый',
      description: '13.3" Retina, Apple M1, RAM 8 ГБ, SSD 256 ГБ, macOS, цвет серый космос.',
      price: 335500,
      rating: 4.9,
      image: 'https://c.dns-shop.kz/thumb/st1/fit/500/500/b0d0d7cf9ef6a88765bbffa11e8a2a65/bc1311aa320af2e639161b8f6b03f01d7f1d915c9186421f8472626fcad1195a.jpg.webp',
      images: [
        'https://c.dns-shop.kz/thumb/st1/fit/500/500/b0d0d7cf9ef6a88765bbffa11e8a2a65/bc1311aa320af2e639161b8f6b03f01d7f1d915c9186421f8472626fcad1195a.jpg.webp',
        'https://c.dns-shop.kz/thumb/st1/fit/500/500/b0d0d7cf9ef6a88765bbffa11e8a2a65/bc1311aa320af2e639161b8f6b03f01d7f1d915c9186421f8472626fcad1195a.jpg.webp',
        'https://c.dns-shop.kz/thumb/st1/fit/500/500/b0d0d7cf9ef6a88765bbffa11e8a2a65/bc1311aa320af2e639161b8f6b03f01d7f1d915c9186421f8472626fcad1195a.jpg.webp'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m1-8gb-256gb-seryi-100797576/?c=750000000'
    },
    {
      id: 3,
      name: 'Холодильник LG GA-B459SQGL',
      description: 'Двухкамерный, объем 384 л, No Frost, инверторный компрессор, серебристый.',
      price: 249990,
      rating: 4.7,
      image: 'https://c.dns-shop.kz/thumb/st1/fit/320/250/d4dcd10f01129ed9075d489eb762fb06/22f033bd4ea77ec21b19c868bef80a0499de808386590da395a44f229f394cce.jpg',
      images: [
        'https://c.dns-shop.kz/thumb/st1/fit/320/250/d4dcd10f01129ed9075d489eb762fb06/22f033bd4ea77ec21b19c868bef80a0499de808386590da395a44f229f394cce.jpg',
        'https://c.dns-shop.kz/thumb/st1/fit/320/250/d4dcd10f01129ed9075d489eb762fb06/22f033bd4ea77ec21b19c868bef80a0499de808386590da395a44f229f394cce.jpg',
        'https://c.dns-shop.kz/thumb/st1/fit/320/250/d4dcd10f01129ed9075d489eb762fb06/22f033bd4ea77ec21b19c868bef80a0499de808386590da395a44f229f394cce.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/lg-ga-b459sqgl-3601172/?c=750000000'
    },
    {
      id: 4,
      name: 'Телевизор Samsung UE43T5300AUXCE',
      description: '43" (108 см), ЖК, HD, Smart TV, Wi-Fi, черный.',
      price: 139990,
      rating: 4.6,
      image: 'https://c.dns-shop.kz/thumb/st1/fit/500/500/58c58c4322cf7d801557bd9912f870b6/b2ed8b99c44b53340294770d3c7b3faadfbb32942289cf3f5a5a0c5ab55022a0.jpg.webp',
      images: [
        'https://c.dns-shop.kz/thumb/st1/fit/500/500/58c58c4322cf7d801557bd9912f870b6/b2ed8b99c44b53340294770d3c7b3faadfbb32942289cf3f5a5a0c5ab55022a0.jpg.webp',
        'https://c.dns-shop.kz/thumb/st1/fit/500/500/58c58c4322cf7d801557bd9912f870b6/b2ed8b99c44b53340294770d3c7b3faadfbb32942289cf3f5a5a0c5ab55022a0.jpg.webp',
        'https://c.dns-shop.kz/thumb/st1/fit/500/500/58c58c4322cf7d801557bd9912f870b6/b2ed8b99c44b53340294770d3c7b3faadfbb32942289cf3f5a5a0c5ab55022a0.jpg.webp'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-ue43t5300auxce-100168353/?c=750000000'
    },
    {
      id: 5,
      name: 'Фен Dyson Supersonic HD07 никель/медь',
      description: 'Ионизация, 4 режима нагрева, 3 скорости, магнитные насадки, мощный цифровой мотор.',
      price: 169990,
      rating: 4.9,
      image: 'https://c.dns-shop.kz/thumb/st4/fit/320/250/e5f117f48c4e7ad1f6a6de024a0f7c4f/5313d3d9197d818f90388759cb74098a530cc60270c9ce9447b13843e63442ba.jpg',
      images: [
        'https://c.dns-shop.kz/thumb/st4/fit/320/250/e5f117f48c4e7ad1f6a6de024a0f7c4f/5313d3d9197d818f90388759cb74098a530cc60270c9ce9447b13843e63442ba.jpg',
        'https://c.dns-shop.kz/thumb/st4/fit/320/250/e5f117f48c4e7ad1f6a6de024a0f7c4f/5313d3d9197d818f90388759cb74098a530cc60270c9ce9447b13843e63442ba.jpg',
        'https://c.dns-shop.kz/thumb/st4/fit/320/250/e5f117f48c4e7ad1f6a6de024a0f7c4f/5313d3d9197d818f90388759cb74098a530cc60270c9ce9447b13843e63442ba.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/dyson-supersonic-hd07-nikel-med-101647758/?c=750000000'
    },
    {
      id: 6,
      name: 'Пылесос Karcher VC 3',
      description: 'Циклонный фильтр, без мешка, 700 Вт, объем 0.9 л, для сухой уборки, желтый/черный.',
      price: 29990,
      rating: 4.5,
      image: 'https://c.dns-shop.kz/thumb/st1/fit/500/500/1b281f7b32f857bfe1c67b7b5a0b3cd8/550236c2ff240ae6274787bedda347cf2c3d929695c1a589abf2b0e9bd0af47c.jpg.webp',
      images: [
        'https://c.dns-shop.kz/thumb/st1/fit/500/500/1b281f7b32f857bfe1c67b7b5a0b3cd8/550236c2ff240ae6274787bedda347cf2c3d929695c1a589abf2b0e9bd0af47c.jpg.webp',
        'https://c.dns-shop.kz/thumb/st1/fit/500/500/1b281f7b32f857bfe1c67b7b5a0b3cd8/550236c2ff240ae6274787bedda347cf2c3d929695c1a589abf2b0e9bd0af47c.jpg.webp',
        'https://c.dns-shop.kz/thumb/st1/fit/500/500/1b281f7b32f857bfe1c67b7b5a0b3cd8/550236c2ff240ae6274787bedda347cf2c3d929695c1a589abf2b0e9bd0af47c.jpg.webp'
      ],
      link: 'https://kaspi.kz/shop/p/karcher-vc-3-100287802/?c=750000000'
    },
    {
      id: 7,
      name: 'Стиральная машина LG F2J3HS0W',
      description: 'Фронтальная загрузка до 7 кг, 1200 об/мин, инвертор, белый.',
      price: 159990,
      rating: 4.7,
      image: 'https://c.dns-shop.kz/thumb/st1/fit/320/250/ab1b4d0f058572952de5bbfb40097d0e/6a32003466ffd54eacc4b1be9599bc632a44076e9c4248ec845487ff6774bba7.jpg',
      images: [
        'https://c.dns-shop.kz/thumb/st1/fit/320/250/ab1b4d0f058572952de5bbfb40097d0e/6a32003466ffd54eacc4b1be9599bc632a44076e9c4248ec845487ff6774bba7.jpg',
        'https://c.dns-shop.kz/thumb/st1/fit/320/250/ab1b4d0f058572952de5bbfb40097d0e/6a32003466ffd54eacc4b1be9599bc632a44076e9c4248ec845487ff6774bba7.jpg',
        'https://c.dns-shop.kz/thumb/st1/fit/320/250/ab1b4d0f058572952de5bbfb40097d0e/6a32003466ffd54eacc4b1be9599bc632a44076e9c4248ec845487ff6774bba7.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/lg-f2j3hs0w-3601077/?c=750000000'
    },
    {
      id: 8,
      name: 'Планшет Samsung Galaxy Tab A8 10.5" 64GB серый',
      description: '10.5" TFT, 1920x1200, 64 ГБ, Android 11, аккумулятор 7040 мАч.',
      price: 89990,
      rating: 4.6,
      image: 'https://c.dns-shop.kz/thumb/st1/fit/320/250/81f8c03f08e8b3ec49c5ef20768ef4dd/1acc237c1ffe1df70ef812f4b9c1cde9b6e94e7ced1f0fcfd2ab98ed9680144e.jpg',
      images: [
        'https://c.dns-shop.kz/thumb/st1/fit/320/250/81f8c03f08e8b3ec49c5ef20768ef4dd/1acc237c1ffe1df70ef812f4b9c1cde9b6e94e7ced1f0fcfd2ab98ed9680144e.jpg',
        'https://c.dns-shop.kz/thumb/st1/fit/320/250/81f8c03f08e8b3ec49c5ef20768ef4dd/1acc237c1ffe1df70ef812f4b9c1cde9b6e94e7ced1f0fcfd2ab98ed9680144e.jpg',
        'https://c.dns-shop.kz/thumb/st1/fit/320/250/81f8c03f08e8b3ec49c5ef20768ef4dd/1acc237c1ffe1df70ef812f4b9c1cde9b6e94e7ced1f0fcfd2ab98ed9680144e.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a8-10-5-64gb-seryi-105948122/?c=750000000'
    },
    {
      id: 9,
      name: 'Наушники Apple AirPods Pro (2nd generation) белый',
      description: 'Активное шумоподавление, пространственное аудио, беспроводная зарядка, MagSafe.',
      price: 119950,
      rating: 4.9,
      image: 'https://c.dns-shop.kz/thumb/st1/fit/320/250/96aba08f6734c0cfe68dfa36ca64b0fc/313c94e5085fa534b5afa8c9af2c45d36bf847fa53e577853ecd7ee1d25b38eb.jpg',
      images: [
        'https://c.dns-shop.kz/thumb/st1/fit/320/250/96aba08f6734c0cfe68dfa36ca64b0fc/313c94e5085fa534b5afa8c9af2c45d36bf847fa53e577853ecd7ee1d25b38eb.jpg',
        'https://c.dns-shop.kz/thumb/st1/fit/320/250/96aba08f6734c0cfe68dfa36ca64b0fc/313c94e5085fa534b5afa8c9af2c45d36bf847fa53e577853ecd7ee1d25b38eb.jpg',
        'https://c.dns-shop.kz/thumb/st1/fit/320/250/96aba08f6734c0cfe68dfa36ca64b0fc/313c94e5085fa534b5afa8c9af2c45d36bf847fa53e577853ecd7ee1d25b38eb.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/?c=750000000'
    },
    {
      id: 10,
      name: 'Кофемашина DeLonghi Magnifica S ECAM 22.110.B',
      description: 'Автоматическая, для зерен, давление 15 бар, капучинатор, черный.',
      price: 239990,
      rating: 4.8,
      image: 'https://c.dns-shop.kz/thumb/st4/fit/500/500/18442a6f4f39f72b9c347f323cda1b52/b18949bf510764664be7310816df3bfb6e7475d76f5fa7295baf61394214c1f1.jpg.webp',
      images: [
        'https://c.dns-shop.kz/thumb/st4/fit/500/500/18442a6f4f39f72b9c347f323cda1b52/b18949bf510764664be7310816df3bfb6e7475d76f5fa7295baf61394214c1f1.jpg.webp',
        'https://c.dns-shop.kz/thumb/st4/fit/500/500/18442a6f4f39f72b9c347f323cda1b52/b18949bf510764664be7310816df3bfb6e7475d76f5fa7295baf61394214c1f1.jpg.webp',
        'https://c.dns-shop.kz/thumb/st4/fit/500/500/18442a6f4f39f72b9c347f323cda1b52/b18949bf510764664be7310816df3bfb6e7475d76f5fa7295baf61394214c1f1.jpg.webp'
      ],
      link: 'https://kaspi.kz/shop/p/delonghi-magnifica-s-ecam-22-110-b-3601098/?c=750000000'
    }
  ];
}
