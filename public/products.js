import bape from '../public/img/PngItem_3637665.png'
import deathwish from '../public/img/PngItem_3637674.png'
import splash from '../public/img/PngItem_3637754.png'
import blind from '../public/img/PngItem_5645814.png'
import antiHero from '../public/img/PngItem_6562957.png'

class SkateBoard {
  constructor(name, img) {
    this.name = name
    this.img = img
  }
}

let Bape = new SkateBoard('Bape', bape)
let DeathWish = new SkateBoard('DeathWish', deathwish)
let Splash = new SkateBoard('Splash', splash)
let Blind = new SkateBoard('Blind', blind)
let AntiHero = new SkateBoard('AntiHero', antiHero)
const products = [Bape, DeathWish, Splash, Blind, AntiHero]

export default products
