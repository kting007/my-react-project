const add_gun='+';
const remove_gun='-';

export function daPao(state= 10,action) {
    switch (action.type) {
        case add_gun:
            return state+1;
        case remove_gun:
            return state-1
        default:
            return 10
    }
}
export function addDaPao(){
    return {type: add_gun}
}
export function removeDaPao() {
    return {type: remove_gun}
}
export function addDaPaoAsync() {
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(addDaPao())
        },3000)
    }
}