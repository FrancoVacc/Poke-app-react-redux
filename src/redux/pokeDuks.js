//* Aquí manejamos los llamados a la API
//* Pide tres cosas

//? Acciones :  lee la API

//? Type: se declaran en mayusculas y especifican que es lo que hace el switch

//? Reducer: toma las respuestas de las acciones

//? Constantes: guarda las respuestas, estos son los estados globales


import axios from "axios"

// const

const dataInicial = {
    count: 0,
    next: null,
    previous: null,
    results: [],
    unPokemon: []

}

//tipe

const GET_POKEMONS_EXITO = "GET_POKEMONS_EXITO"
const NEXT_POKEMONS_EXITO = "NEXT_POKEMONS_EXITO"
const POKEMON_INFO_EXITO = "POKEMON_INFO_EXITO"


//reducer
export default function pokeReducer(state = dataInicial, action) {
    switch (action.type) {
        case GET_POKEMONS_EXITO:
            return { ...state, ...action.payload }
        case NEXT_POKEMONS_EXITO:
            return { ...state, ...action.payload }
        case POKEMON_INFO_EXITO:
            return { ...state, unPokemon: action.payload }
        default:
            return state
    }
}


//Actions - funciones que retornan otra funcion

export const aPokeDetaillAction = (url) => async (dispatch) => {

    if (localStorage.getItem(url)) {
        dispatch({
            type: POKEMON_INFO_EXITO,
            payload: JSON.parse(localStorage.getItem(url))
        })
    }

    try {
        const res = await axios.get(url);
        dispatch({
            type: POKEMON_INFO_EXITO,
            payload: {
                name: res.data.name,
                weight: res.data.weight,
                height: res.data.height,
                sprites: res.data.sprites.front_default,
                types: res.data.types,
            }
        })
        localStorage.setItem(url, JSON.stringify({
            name: res.data.name,
            weight: res.data.weight,
            height: res.data.height,
            sprites: res.data.sprites.front_default,
            types: res.data.types,
        }))
    } catch (error) {
        console.log(error)
    }



}

export const getPokemonsAction = () => async (dispatch) => {

    if (localStorage.getItem("offset=0")) {
        dispatch({
            type: GET_POKEMONS_EXITO,
            payload: JSON.parse(localStorage.getItem("offset=0"))
        })
        return
    }

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`);
        dispatch({
            type: GET_POKEMONS_EXITO,
            payload: res.data
        })
        localStorage.setItem("offset=0", JSON.stringify(res.data))
    } catch (error) {
        console.log(error)
    }

}


export const nextPokemonsAction = () => async (dispatch, getState) => {

    const { next } = getState().pokemones

    if (localStorage.getItem(next)) {
        dispatch({
            type: "NEXT_POKEMONS_EXITO",
            payload: JSON.parse(localStorage.getItem(next))
        })
        return
    }

    try {
        const res = await axios.get(next)
        dispatch({
            type: "NEXT_POKEMONS_EXITO",
            payload: res.data
        })
        localStorage.setItem(next, JSON.stringify(res.data))
    } catch (error) {
        console.log(error)
    }
}
export const previousPokemonsAction = () => async (dispatch, getState) => {

    const { previous } = getState().pokemones

    if (localStorage.getItem(previous)) {
        dispatch({
            type: "NEXT_POKEMONS_EXITO",
            payload: JSON.parse(localStorage.getItem(previous))
        })
        return
    }

    try {
        const res = await axios.get(previous)
        dispatch({
            type: "NEXT_POKEMONS_EXITO",
            payload: res.data
        })
        localStorage.setItem(previous, JSON.stringify(res.data))
    } catch (error) {
        console.log(error)
    }
}