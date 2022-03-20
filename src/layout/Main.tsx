import React from 'react';
import underwater from '../Styles/images/underwater.png';
import recovery from '../Styles/images/recovery.png';
import transportation from '../Styles/images/transportation.png';
import throwing from '../Styles/images/throwing.png';

export default function Main() {
  const titles = [
    { id: '1', name: 'underwater', value: '수중작업', png: underwater },
    { id: '2', name: 'recovery', value: '폐기물 인양', png: recovery },
    { id: '3', name: 'transportation', value: '폐기물 운반', png: transportation },
    { id: '4', name: 'throwing', value: '자갈 및 모래 투척', png: throwing }
  ]

  return (
    <main id='main' className='container'>
      <h1 className='title'>조은바다는 수중작업, 인양 및 운반, 투척작업을 하는 전문시공업체 입니다.</h1>
      <section className='flex'>
        {
          titles.map((title) => (
            <div className={`box ${title.id === '1' || title.id === '2' ? 'padding15' : ''} ${title.id === '4' ? '' : 'margin52'}`}>
              <img src={title.png} className={`img-${ title.id }`} alt={title.value} />
              <h2>{title.value}</h2>
            </div>
          ))
        }
      </section>
    </main>
  )
}