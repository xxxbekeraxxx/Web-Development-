import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    // ========== Смартфоны (categoryId: 1) ==========
    {
      id: 1,
      name: 'Смартфон Apple iPhone 15 128Gb черный',
      description: '6.1" Super Retina XDR, чип A16 Bionic, двойная камера 48 Мп, Ceramic Shield, iOS 17.',
      price: 398550,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?srsltid=AfmBOorQsH3_PK932QmpEsvoc7-zhIdgINVj6VHgnj_x6KrMG6K1qu3x',
      categoryId: 1
    },
    {
      id: 2,
      name: 'Смартфон Samsung Galaxy S24 Ultra 256GB черный',
      description: '6.8" Dynamic AMOLED 2X, 120 Гц, чип Snapdragon 8 Gen 3, камера 200 Мп, S Pen.',
      price: 499990,
      rating: 4.9,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd1/h74/84963524706334.png?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-512-gb-chernyi-116044201/?c=750000000',
      categoryId: 1
    },
    {
      id: 3,
      name: 'Смартфон Xiaomi Redmi Note 13 Pro 8/256GB черный',
      description: '6.67" AMOLED, 120 Гц, чип Snapdragon 7s Gen 2, камера 200 Мп, батарея 5000 мАч.',
      price: 149990,
      rating: 4.7,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p1d/p7b/67214880.png?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-8-gb-256-gb-chernyi-133574875/?c=750000000',
      categoryId: 1
    },
    {
      id: 4,
      name: 'Смартфон Google Pixel 8 Pro 128GB черный',
      description: '6.7" LTPO OLED, 120 Гц, чип Google Tensor G3, камера 50 Мп, Android 14.',
      price: 349990,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8f/hae/86037204336670.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/google-pixel-7-8-gb-128-gb-chernyi-106971937/?c=750000000',
      categoryId: 1
    },
    {
      id: 5,
      name: 'Смартфон OnePlus 12 16/512GB черный',
      description: '6.82" LTPO AMOLED, 120 Гц, чип Snapdragon 8 Gen 3, камера Hasselblad 50 Мп.',
      price: 399990,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p48/pa8/54233333.png?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/oneplus-nord-5-12-gb-512-gb-seryi-142846291/?c=750000000',
      categoryId: 1
    },
    {
      id: 6,
      name: 'Смартфон Apple iPhone 14 128Gb голубой',
      description: '6.1" Super Retina XDR, чип A15 Bionic, двойная камера 12 Мп, Ceramic Shield.',
      price: 299990,
      rating: 4.7,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6a/h15/86042945683486.png?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-goluboi-106363150/?c=750000000',
      categoryId: 1
    },

    // ========== Ноутбуки (categoryId: 2) ==========
    {
      id: 7,
      name: 'Ноутбук Apple MacBook Air 13" M1 8GB/256GB серый',
      description: '13.3" Retina, Apple M1, RAM 8 ГБ, SSD 256 ГБ, macOS, цвет серый космос.',
      price: 335500,
      rating: 4.9,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd2/h6e/64091877081118.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m1-8gb-256gb-seryi-100797576/',
      categoryId: 2
    },
    {
      id: 8,
      name: 'Ноутбук ASUS ROG Strix G16 16" 16GB/512GB черный',
      description: '16" IPS, 240 Гц, Intel Core i9-14900HX, RAM 16 ГБ, SSD 512 ГБ, NVIDIA RTX 4070.',
      price: 649990,
      rating: 4.9,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p8d/pbb/42525232.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/asus-rog-strix-g16-16-16-gb-ssd-1024-gb-bez-os-90nr0nj7-m001j0-139735259/?c=750000000',
      categoryId: 2
    },
    {
      id: 9,
      name: 'Ноутбук Lenovo IdeaPad 3 15.6" 8GB/256GB серый',
      description: '15.6" IPS, Intel Core i5-1235U, RAM 8 ГБ, SSD 256 ГБ, Intel UHD Graphics.',
      price: 199990,
      rating: 4.6,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000',
      categoryId: 2
    },
    {
      id: 10,
      name: 'Ноутбук Acer Aspire 5 15.6" 8GB/512GB серебристый',
      description: '15.6" IPS, Intel Core i5-1235U, RAM 8 ГБ, SSD 512 ГБ, NVIDIA GeForce MX550.',
      price: 279990,
      rating: 4.7,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p24/pae/30100209.jpeg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/acer-aspire-3-15-6-8-gb-ssd-256-gb-win-11-pro-a325-45-zn-n01si-03k--136300221/?c=750000000',
      categoryId: 2
    },
    {
      id: 11,
      name: 'Ноутбук HP Victus 16 16.1" 16GB/512GB черный',
      description: '16.1" IPS, 144 Гц, AMD Ryzen 7 7840HS, RAM 16 ГБ, SSD 512 ГБ, NVIDIA RTX 3050.',
      price: 399990,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p2d/p09/59464043.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/hp-victus-15-fb3705ci-15-6-16-gb-m-2-512-gb-bez-os-bd1v3ea-144327452/?c=750000000',
      categoryId: 2
    },
    {
      id: 12,
      name: 'Ноутбук Dell XPS 13 13.4" 16GB/512GB белый',
      description: '13.4" OLED, Intel Core i7-1360P, RAM 16 ГБ, SSD 512 ГБ, Intel Iris Xe.',
      price: 549990,
      rating: 4.9,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p00/p2c/43905749.jpeg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/dell-xps-13-9345-13-4-16-gb-ssd-512-gb-win-11-210-bmtr-140113298/?c=750000000',
      categoryId: 2
    },

    // ========== Наушники (categoryId: 3) ==========
    {
      id: 13,
      name: 'Наушники Apple AirPods Pro (2nd generation) белый',
      description: 'Активное шумоподавление, пространственное аудио, беспроводная зарядка, MagSafe.',
      price: 119950,
      rating: 4.9,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/h5e/64511113199646.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/',
      categoryId: 3
    },
    {
      id: 14,
      name: 'Наушники Sony WH-1000XM5 черный',
      description: 'Полноразмерные, активное шумоподавление, Bluetooth 5.2, 30 часов работы.',
      price: 149990,
      rating: 4.9,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0d/h4e/65099689000990.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000',
      categoryId: 3
    },
    {
      id: 15,
      name: 'Наушники Samsung Galaxy Buds2 Pro черный',
      description: 'Внутриканальные, активное шумоподавление, 24 бит Hi-Fi, 360 Audio.',
      price: 69990,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3a/hd9/79723782602782.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/naushniki-xiaomi-redmi-buds-4-lite-chernyi-109723597/?c=750000000',
      categoryId: 3
    },
    {
      id: 16,
      name: 'Наушники JBL Tune 520BT черный',
      description: 'Накладные, Bluetooth 5.3, 57 часов работы, быстрая зарядка, складные.',
      price: 24990,
      rating: 4.6,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3e/h87/80522158211102.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-520bt-chernyi-110103473/?c=750000000',
      categoryId: 3
    },
    {
      id: 17,
      name: 'Наушники Marshall Major IV черный',
      description: 'Накладные, Bluetooth 5.0, 80+ часов работы, беспроводная зарядка.',
      price: 49990,
      rating: 4.7,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/naushniki-marshall-major-iv-chernyi-102138144/?c=750000000',
      categoryId: 3
    },
    {
      id: 18,
      name: 'Наушники HUAWEI FreeBuds Pro 3 белый',
      description: 'Внутриканальные, активное шумоподавление, Dual Driver, Hi-Res Audio.',
      price: 59990,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/haf/h1d/83684356161566.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/naushniki-huawei-freebuds-se-2-belyi-113250696/?c=750000000',
      categoryId: 3
    },

    // ========== Планшеты (categoryId: 4) ==========
    {
      id: 19,
      name: 'Планшет Samsung Galaxy Tab A8 10.5" 64GB серый',
      description: '10.5" TFT, 1920x1200, 64 ГБ, Android 11, аккумулятор 7040 мАч.',
      price: 89990,
      rating: 4.6,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3b/p01/77344134.bin?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-ipad-10-9-64gb-wi-fi-serebristyi-106363141/',
      categoryId: 4
    },
    {
      id: 20,
      name: 'Планшет Apple iPad 10.9" 64GB Wi-Fi серебристый',
      description: '10.9" Liquid Retina, чип A14 Bionic, 64 ГБ, iPadOS, поддержка Apple Pencil.',
      price: 179990,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000',
      categoryId: 4
    },
    {
      id: 21,
      name: 'Планшет Xiaomi Pad 6 11" 8/128GB серый',
      description: '11" IPS, 144 Гц, Snapdragon 870, 8 ГБ RAM, 128 ГБ ROM, четыре динамика.',
      price: 129990,
      rating: 4.7,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pac/p7a/81439516.jpg?format=gallery-large',
      images: [],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-11-djuim-8-gb-256-gb-seryi-140639712/?c=750000000',
      categoryId: 4
    },
    {
      id: 22,
      name: 'Планшет Samsung Galaxy Tab S9 FE 10.9" 6/128GB серый',
      description: '10.9" IPS, 90 Гц, Exynos 1380, 6 ГБ RAM, 128 ГБ ROM, S Pen в комплекте.',
      price: 199990,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzaas-11-djuim-8-gb-128-gb-grafit-112488621/?c=750000000',
      categoryId: 4
    },
    {
      id: 23,
      name: 'Планшет Lenovo Tab M10 Plus 10.6" 4/64GB серый',
      description: '10.6" IPS, 2000x1200, MediaTek Helio G80, 4 ГБ RAM, 64 ГБ ROM.',
      price: 69990,
      rating: 4.5,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h69/h2e/79486075404318.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/lenovo-tab-m10-tb328fu-zaae0001ru-10-1-djuim-4-gb-64-gb-seryi-109621776/?c=750000000',
      categoryId: 4
    },
    {
      id: 24,
      name: 'Планшет HUAWEI MatePad 11.5" 8/256GB серый',
      description: '11.5" IPS, 120 Гц, Snapdragon 7 Gen 1, 8 ГБ RAM, 256 ГБ ROM, HarmonyOS.',
      price: 149990,
      rating: 4.7,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p7f/p08/65766347.png?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/huawei-matepad-11-5-2025-papermatte-11-5-djuim-8-gb-256-gb-fioletovyi-podarok-145939369/?c=750000000',
      categoryId: 4
    }
  ];

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(product => product.categoryId === categoryId);
  }

  getAllProducts(): Product[] {
    return this.products;
  }
}
