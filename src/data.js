
import heroBgImage from "./assets/F1.jpg";
import mvTeeImage from "./assets/Lion_Tee.jpg";
import ferrariTeeImage from "./assets/ferrai.jpg";
import mercJacketImage from "./assets/jacket.jpg";
import mcLarenJacketImage from "./assets/jacket2.webp";
import rbrCapImage from "./assets/cap1.webp";
import lh44CapImage from "./assets/cap2.jpg";
import ferrariBagImage from "./assets/bag1.avif";
import mcLarenLanyardImage from "./assets/tap.avif";
import monacoHoodieImage from "./assets/hood.jpg";
// Using one of your images as a placeholder for the signed frame
import signedFrameImage from "./assets/cap1.webp"; 

export const HERO_IMAGE = heroBgImage;

export const CATEGORIES = ['Tees', 'Jackets', 'Caps', 'Accessories', 'Limited'];

export const PRODUCTS = [
    { id: 't1', name: 'Max Verstappen "Lion" Tee', category: 'Tees', price: 2999, imageUrl: mvTeeImage, description: 'Channel the spirit of a champion with the Max Verstappen "Unleash the Lion" graphic tee.' },
    { id: 't2', name: 'Scuderia Ferrari Team Polo', category: 'Tees', price: 3199, imageUrl: ferrariTeeImage, description: 'The classic red polo for the ultimate Tifosi. Official team and sponsor logos.' },
    { id: 'j1', name: 'Mercedes-AMG Softshell Jacket', category: 'Jackets', price: 8999, imageUrl: mercJacketImage, description: 'Stay warm and stylish with the official team softshell jacket. Water-resistant and breathable.' },
    { id: 'j2', name: 'McLaren Performance Windbreaker', category: 'Jackets', price: 7499, imageUrl: mcLarenJacketImage, description: 'A lightweight, high-performance windbreaker in iconic papaya and black.' },
    { id: 'c1', 'name': 'Red Bull Racing Signed Cap', category: 'Caps', price: 2499, imageUrl: rbrCapImage, description: 'The official 2025 team cap, as worn by the drivers on race weekends.' },
    { id: 'c2', name: 'Lewis Hamilton "44" Flatbrim', category: 'Caps', price: 2799, imageUrl: lh44CapImage, description: 'A stylish flatbrim cap featuring Lewis Hamilton\'s iconic number 44.' },
    { id: 'a1', name: 'Red Bull Racing Backpack', category: 'Accessories', price: 4999, imageUrl: ferrariBagImage, description: 'Carry your gear like the Scuderia. A durable and stylish backpack with multiple compartments.' },
    { id: 'a2', name: 'McLaren Lanyard', category: 'Accessories', price: 999, imageUrl: mcLarenLanyardImage, description: 'Keep your keys and passes secure with this official McLaren team lanyard.' },
    { id: 'l1', name: 'Formula 1 Graphic Hoodie', category: 'Limited', price: 7999, imageUrl: monacoHoodieImage, description: 'Celebrate the pinnacle of motorsport with this exclusive, limited-run hoodie.' },
    { id: 'l2', name: 'Signed Driver Cap (Replica)', category: 'Limited', price: 15999, imageUrl: signedFrameImage, description: 'A collector\'s piece. A replica cap featuring a printed signature.' },
];