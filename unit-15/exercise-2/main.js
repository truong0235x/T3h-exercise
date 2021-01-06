const pokemons = [
    { id: 1, img: 'pokemon/charmander.png',name: 'Charmander', hp: 39, atk: 52 },
    { id: 2, img: 'pokemon/pikachu.png',name: 'Pikachu', hp: 35, atk: 55 },
    { id: 3, img: 'pokemon/squirtle.png',name: 'Squirtle', hp: 44, atk: 48 },
    { id: 4, img: 'pokemon/bulbasaur.png',name: 'Bulbasaur', hp: 45, atk: 49 },

    { id: 5, img: 'pokemon/mew.png',name: 'Mew', hp: 100, atk: 100 },
    { id: 6, img: 'pokemon/pidgey.png',name: 'Pidgey', hp: 40, atk: 45 },
    { id: 7, img: 'pokemon/abra.png',name: 'Abra', hp: 25, atk: 20 },
    { id: 8, img: 'pokemon/snorlax.png',name: 'Snorlax', hp: 160, atk: 110 },

    { id: 9, img: 'pokemon/caterpie.png',name: 'Caterpie', hp: 45, atk: 30 },
    { id: 10, img: 'pokemon/dratini.png',name: 'Dratini', hp: 41, atk: 64 },
    { id: 11, img: 'pokemon/eevee.png',name: 'Eevee', hp: 55, atk: 55 },
    { id: 12, img: 'pokemon/jigglypuff.png',name: 'Jigglypuff', hp: 115, atk: 45 }
]

function renderPokemon () {
  const wrapper = document.getElementsByClassName('container__wrapper')[0]
  let html = '<p>choose your five</p>'
  pokemons.forEach(item => {
    html += `
      <div class="container__wrapper__pokemon" onclick="showInfor(${item.id}, this)"><img src=${item.img} alt=""></div>
    `
  })
  wrapper.innerHTML += html
}

function showInfor (id, pokemon) {
  const cereal = document.getElementsByClassName('container__information-frame')[0]
  let html = ''
  const divPokemons = document.getElementsByClassName('container__wrapper__pokemon')
  for (let i = 0; i < divPokemons.length; i++) {
    divPokemons[i].style.border = 'unset'
  }
  pokemons.forEach(item => {
    if (item.id === id) {
      pokemon.style.border = '1px solid red'
      html +=`
        <img src="${item.img}" alt="">
          <p class="name-pokemon">${item.name}</p>
          <div class="line">hp
            <span>${item.hp}
              <div class="line__hp">
                <div style="width: calc(${item.hp}px * 2);" class="line__hp-rest"></div>
              </div>
            </span>
          </div>
          <div class="line">atk
            <span>${item.atk}
              <div class="line__hp">
                <div style="width: calc(${item.atk}px * 2);" class="line__hp-rest"></div>
              </div>
            </span>
          </div>
        <button class="add" onclick="addPokemon(${item.id}, this)">ADD</button>
        <p class="notification">You have selected 5 Pokemons</p>
      `
    }
  })
  cereal.innerHTML = html
}

function addPokemon (id, button) {
  const divPokemons = document.getElementsByClassName('container__wrapper__pokemon')

  const framesPokemon = document.getElementsByClassName('frames__pokemon')

  let html = ''
  for (let i = 0; i < framesPokemon.length; i++) {
    if (!framesPokemon[i].innerHTML) {
      divPokemons[id - 1].removeAttribute('onclick')
      button.removeAttribute('onclick')

      divPokemons[id - 1].setAttribute('style', 'opacity: 0.5; cursor: unset;')
      button.setAttribute('style', 'background-color: #ccc; cursor: unset;')

      pokemons.forEach(item => {
        if (item.id === id){
          html = `
            <div class="close" onclick="closePokemon(${item.id}, this)">x</div>
            <img src=${item.img} alt="">
          `
        }
      })
      return framesPokemon[i].innerHTML = html
    } else if (i === framesPokemon.length - 1 && framesPokemon[i].innerHTML) {
      const p = document.getElementsByClassName('notification')[0]
      p.style.display = 'block'
    }
  }
}

function closePokemon (id, div) {
  const framesPokemon = div.parentNode
  framesPokemon.innerHTML = ''

  const divPokemons = document.getElementsByClassName('container__wrapper__pokemon')

  divPokemons[id - 1].setAttribute('onclick',`showInfor(${id}, this)`)
  divPokemons[id - 1].setAttribute('style', 'opacity: 1; cursor: pointer;')

  const p = document.getElementsByClassName('notification')[0]
  p.style.display = 'none'
}

function setNameList (p) {
  p.style.display = 'none'

  const nodeParent = p.parentNode
  const input = nodeParent.querySelector('input')

  input.style.display = 'block'

  input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      p.innerText = input.value

      input.style.display = 'none'

      p.style.display = 'block'
    }
  })
}

renderPokemon()
