import {useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'

export function useDarkMode(){
    const [value, setValue]= useLocalStorage('key')

    useEffect(function(){
        if(value===true){
            return document.querySelector('body').classList.add(`dark-mode`)
        }else{
            return document.querySelector('body').classList.remove(`dark-mode`)
        }
    }, [setValue])
    
    return [value, setValue]
}