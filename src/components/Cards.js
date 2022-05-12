import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these MASTERPIECES!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='https://i.ytimg.com/vi/w3s6BFUrBU8/maxresdefault.jpg'
              text='Blender Mikaela from Dead by Daylight'
              label='Blender'
              path='/sign-up'
            />
            
            <CardItem
              src='https://upload-os-bbs.hoyolab.com/upload/2021/06/24/93716067/867338d398bf2dbddf10dc190e895bd2_3662752285361871324.png'
              text='Hu Tao and Zhongli from Genshin Impact'
              label='Fanart'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
             img src='https://www.culturepartnership.eu/upload/editor/2017/%D1%82%D0%B5%D0%B0%D1%82%D1%80/bf874bc1-bff9-4697-8ffe-c48c873d7982.jpg'
              text='Beautiful Murals'
              label='Mural'
              path='/services'
            />
            <CardItem
              src='https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/2-pembroke-welsh-corgi-lee-ann-shepard.jpg'
              text='Cute Dog'
              label='Animals'
              path='/products'
            />
           <CardItem
              src="https://picsum.photos/id/200/1920/1280"
              text='Fluffy cow'
              label='Photography'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;