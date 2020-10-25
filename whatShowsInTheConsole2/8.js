function playing(game) {
  if (game === 'shooter') {
    return function() {
      console.log('this is a shootergame');
    };
  } else {
    return function() {
      console.log('this is something else');
    };
  }
}
let shooterPlaying = playing('shooter');
shooterPlaying();

