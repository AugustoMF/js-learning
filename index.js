function botao () {

    const name = document.getElementById ('nomeid').value
    const age = document.getElementById('idadeid').value
    const team = document.getElementById('timeid').value

    
    
if (team == 'steelers' && age >= 18) {
    document.write (name, age, 'Here we go, have a beer')
} 

else if (team == 'steelers' && age < 18) {
    document.write (name, ' ', age, ' ', 'Here we go, get a beer for you, do not tell the cops')
}

else if (team != 'steelers' && age >= 18) {
    document.write (name, age, 'have a beer, but fuck you')
}
else if (team != 'steelers' && age < 18) {
    document.write (name, age, 'just fuck you and no beer for you too.')
}

}
