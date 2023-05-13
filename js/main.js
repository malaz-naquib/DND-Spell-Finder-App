const all_spell_url = 'https://www.dnd5eapi.co/api/spells' 
fetch(all_spell_url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      data.results.forEach( obj =>{
        const option = document.createElement('option')
        option.value = obj.index
        option.innerText = obj.index
        document.querySelector('.selectspell').appendChild(option) 
      })
    })
    .catch(err => {
        console.log(`error ${err}`)
});

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('.selectspell').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('.spellName').innerText = data.name

        let ul1=document.querySelector('.className')
        ul1.innerHTML = ''

        data.classes.forEach( obj => {
            console.log(`classes: ${obj.name}`)
            const li = document.createElement('li') // Create an li
            li.textContent = obj.name // Add text to li
            ul1.appendChild(li) // Append the li to the ul
        })

        let ul2=document.querySelector('.subClassName')
        ul2.innerHTML = ''
        data.subclasses.forEach( obj => {
            console.log(`subclasses: ${obj.name}`)
            const li = document.createElement('li') // Create an li
            li.textContent = obj.name // Add text to the li
            ul2.appendChild(li) // Append the li to the ul   
        })   
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}