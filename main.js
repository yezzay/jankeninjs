var np = prompt('Number Of Player')

if (np == 1){
  var player = prompt("Pilih : Kertas, Batu, Gunting")
  var computer
  var rand = Math.random();

  if (rand <= 0.233442) {
    computer = 'Kertas'
  }
  else if (rand > 0.233442 && rand <= 0.623712) {
    computer = 'Batu'
  }
  else if (rand>=0.623712) {
    computer = 'Gunting'
  }

  var result = ""
  var br = "\n"
  if (player==computer) hasil = 'DRAW'
  else if (player = 'Kertas') {
    if (computer = 'Batu') hasil = 'PLAYER WIN'
    else if (computer = 'Gunting') hasil = 'COMPUTER WIN'
  }
  else if (player = 'Batu') {
    if (computer = 'Kertas') hasil = 'COMPUTER WIN'
    else if (computer = 'Gunting') hasil = 'PLAYER WIN'
  }
  else if (player = 'Gunting') {
    if (computer = 'Batu') hasil = 'COMPUTER WIN'
    else if (computer = 'Kertas') hasil = 'PLAYER WIN'
  }
  alert('Player : ' + player + br + 'Computer : ' + computer + br + hasil)
}

else if (np == 2) {
  var player1 = prompt("Pilih : Kertas, Batu, Gunting")
  var player2 = prompt("Pilih : Kertas, Batu, Gunting")
  var result = ""
  var br = "\n"
  if (player1==player2) hasil = 'DRAW'
  else if (player1 = 'Kertas') {
    if (player2 = 'Batu') hasil = 'PLAYER 1 WIN'
    else if (player2 = 'Gunting') hasil = 'PLAYER 2 WIN'
  }
  else if (player1 = 'Batu') {
    if (player2 = 'Kertas') hasil = 'PLAYER 2 WIN'
    else if (player2 = 'Gunting') hasil = 'PLAYER 1 WIN'
  }
  else if (player1 = 'Gunting') {
    if (player2 = 'Batu') hasil = 'PLAYER 2 WIN'
    else if (player2 = 'Kertas') hasil = 'PLAYER 1 WIN'
  }
  alert('Player 1 : ' + player1 + br + 'Player 2 : ' + player2 + br + hasil)
}