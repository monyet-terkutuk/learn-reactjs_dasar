import React from 'react'

const foods = [
    {
        nama: 'Bakso Kuah',
        harga: 15000
    },
    {
        nama: 'Seblak Ciwidey',
        harga: 5000
    },
    {
        nama: 'Mie Ayam BCH',
        harga: 10000
    },
    {
        nama: 'Bakso Cibaduyut',
        harga: 20000
    },
    {
        nama: 'Martabak Manis',
        harga: 17000
    },
    {
        nama: 'Cilok Asin Pedes',
        harga: 10000
    },
]

// reduce
const total_bayar = foods.reduce((total,food) => {
    return total + food.harga;
},0)

export const Map = () => {
  return (
      <div>
          <h2>Map</h2>
          <ul>
              {foods.map(food => (
                  <li>{food.nama} - { food.harga }</li>
              ))}         
          </ul>

          <h4>Total Harga : { total_bayar }</h4>


          <h2>Harga - 12.000 ke atas</h2>
          <ul>
              {foods.filter((food) => food.harga > 12000).map(food => (
                  <li>{food.nama} - { food.harga }</li>
              )) }
          </ul>

      </div>
  )
}

export default Map