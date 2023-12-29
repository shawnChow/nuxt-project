<script setup lang="ts">
const route = useRoute()

type Character = {
        character: {
            name: string,
            image: string,
            status: string,
            species: string,
            location: {
                name: string,
            }
        }
        
    }


const query = gql`
    query getCharacter {
      character(id: ${route.params.id}){
        name
        image
        status
        id
        species
        location{
            name
        }
      }
    }
  `
//   const { data, error } = await useAsyncQuery(query)


  const data = {
        'character' : {
            id : 1,
            name : 'name1',
            image : 'img',
            status : 'statu',
            species : 'spe',
            location : {
                name: 'loname'
            }
        }
    }
</script>

<template>
    <div>
        <CharacterCard 
        :id="data.character.id"
        :name="data.character.name"
        :image="data.character.image"
        :status="data.character.status"
        :species="data.character.species"
        :location="data.character.location.name"
        />
    </div>
</template>