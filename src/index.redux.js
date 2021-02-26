const add_gun='+';
const remove_gun='-';

export function counter(state= 10,action) {
    switch (action.type) {
        case add_gun:
            return state+1;
        case remove_gun:
            return state-1
        default:
            return 10
    }
}
export function addGun(){
    return {type: add_gun}
}
export function removeGun() {
    return {type: remove_gun}
}
